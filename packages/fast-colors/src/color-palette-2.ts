import { ColorRGBA64 } from "./color-rgba-64";
import { PaletteItemData } from "./palette-item-data";
import { ColorPalette, matchLightnessIndex } from "./color-palette";
import { ColorLCH } from "./color-lch";
import {
    hslToRGB,
    lchToRGB,
    rgbToHSL,
    rgbToLCH,
    rgbToLuminanceLinear,
} from "./color-converters";
import { ColorScale, ColorScaleStop } from "./color-scale";
import { ColorHSL } from "./color-hsl";
import { blendColor, desaturateViaLuminance } from "./color-blending";
import { ColorInterpolationSpace } from "./color-interpolation";
import { parseColorHexRGB } from "./parse-color";

export interface ColorPalette2Config {
    steps?: number;
    baseColor?: ColorRGBA64;
    darkCutoff?: number;
}

export class ColorPalette2 {
    public static readonly defaultPaletteConfig: ColorPalette2Config = {
        baseColor: new ColorRGBA64(0.5, 0.5, 0.5, 1),
        steps: 55, // 63,
        darkCutoff: 0, // 0.08,
    };

    public referencePalette: ColorRGBA64[] = [];
    public palette: PaletteItemData[] = [];
    private readonly config: ColorPalette2Config;

    constructor(config: ColorPalette2Config) {
        this.config = Object.assign({}, ColorPalette2.defaultPaletteConfig, config);
        this.palette = [];
        this.regenPalettes();
    }

    public updatePaletteGenerationValues(newConfig: ColorPalette2Config): boolean {
        let changed: boolean = false;
        for (const key in newConfig) {
            if (this.config[key]) {
                if (this.config[key].equalValue) {
                    if (!this.config[key].equalValue(newConfig[key])) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                } else {
                    if (newConfig[key] !== this.config[key]) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                }
            }
        }
        if (changed) {
            this.regenPalettes();
        }
        return changed;
    }

    private regenPalettes(): void {
        let s: number = this.config.steps;
        if (isNaN(this.config.steps) || this.config.steps < 3) {
            s = 3;
        }

        const r: ColorPalette = new ColorPalette({
            ...ColorPalette.greyscalePaletteConfig,
            steps: s,
        });
        this.referencePalette = r.palette;

        // const lch: ColorLCH = rgbToLCH(this.config.baseColor);
        // const d: ColorRGBA64 = lchToRGB(new ColorLCH(lch.l, 0, lch.h));
        const baseLum: number = rgbToLuminanceLinear(this.config.baseColor);
        const baseD: ColorRGBA64 = new ColorRGBA64(baseLum, baseLum, baseLum, 1);
        const baseRefIndex: number = matchLightnessIndex(baseD, this.referencePalette);

        const darkLum: number = rgbToLuminanceLinear(
            ColorPalette.greyscalePaletteConfig.baseColor
        );
        const darkD: ColorRGBA64 = new ColorRGBA64(darkLum, darkLum, darkLum, 1);
        const darkRefIndex: number = matchLightnessIndex(darkD, this.referencePalette);
        const darkHSL: ColorHSL = rgbToHSL(this.config.baseColor);
        const darkRefHSL: ColorHSL = ColorHSL.fromObject({
            h: darkHSL.h,
            s: darkHSL.s,
            l: darkLum,
        });
        const darkRefRGB: ColorRGBA64 = hslToRGB(darkRefHSL);

        // const dark2Lum: number = 7;
        // const dark2D: ColorRGBA64 = new ColorRGBA64(dark2Lum, dark2Lum, dark2Lum, 1);
        // const dark2RefIndex: number = matchLightnessIndex(dark2D, this.referencePalette);
        // const darkHSL: ColorHSL = rgbToHSL(this.config.baseColor);
        // const darkRefHSL: ColorHSL = ColorHSL.fromObject({ h: darkHSL.h, s: darkHSL.s, l: darkLum });
        // const darkRefRGB: ColorRGBA64 = hslToRGB(darkRefHSL);

        const fullColorScaleStops: ColorScaleStop[] = new Array(3);
        fullColorScaleStops[0] = {
            position: 0,
            color: new ColorRGBA64(1, 1, 1, 1),
        };
        fullColorScaleStops[1] = {
            position: baseRefIndex / (s - 1),
            color: this.config.baseColor,
        };
        fullColorScaleStops[2] = {
            position: darkRefIndex / (s - 1),
            color: darkRefRGB,
        };
        // fullColorScaleStops[3] = {
        //     position: dark2RefIndex / (s - 1),
        //     color: dark2RefRGB
        // };
        fullColorScaleStops[3] = {
            position: 1,
            color: new ColorRGBA64(0, 0, 0, 1),
        };
        const scale: ColorScale = new ColorScale(fullColorScaleStops);

        /*const lastDarkColorRGB: ColorRGBA64 = scale.getColor((s - 2) / (s - 1));
        const lastDarkColorHSL: ColorHSL = rgbToHSL(lastDarkColorRGB);
        if (lastDarkColorHSL.l < this.config.darkCutoff) {
            let lastSafeColor: ColorRGBA64 = lastDarkColorRGB;
            for (let i: number = s - 1; i >= 0; i--) {
                const testColorRGB: ColorRGBA64 = scale.getColor(i / (s - 1));
                const testColorHSL: ColorHSL = rgbToHSL(testColorRGB);
                if (testColorHSL.l >= this.config.darkCutoff) {
                    lastSafeColor = testColorRGB;
                    break;
                }
            }
        
            const truncatedStops: ColorScaleStop[] = new Array(4);
            truncatedStops[0] = { position: 0, color: new ColorRGBA64(1, 1, 1, 1) };
            truncatedStops[1] = {
                position: refIndex / (s - 1),
                color: this.config.baseColor
            };
            truncatedStops[2] = { position: (s - 2) / (s - 1), color: lastSafeColor };
            truncatedStops[3] = { position: 1, color: new ColorRGBA64(0, 0, 0, 1) };
            scale = new ColorScale(truncatedStops);
        }*/

        // console.log("Palette steps...");
        this.palette = new Array(s);
        for (let i: number = 0; i < s; i++) {
            // const c: ColorRGBA64 = this.referencePalette[i];
            const c: ColorRGBA64 = scale.getColor(
                i / (s - 1),
                ColorInterpolationSpace.RGB
            );
            // const cBlend: ColorRGBA64 = blendColor(c, this.config.baseColor);
            // const cBlend: ColorRGBA64 = desaturateViaLuminance(c);
            const cBlend: ColorRGBA64 = c;
            this.palette[i] = new PaletteItemData(cBlend, i, this.referencePalette);
        }
    }
}
