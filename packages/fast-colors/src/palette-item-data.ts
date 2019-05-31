import { contrastRatio, lchToRGB, rgbToLCH } from "./color-converters";
import { ColorLCH } from "./color-lch";
import { matchLightnessIndex } from "./color-palette";
import { ColorRGBA64 } from "./color-rgba-64";

export class PaletteItemData {
    public static lightContrastColor: ColorRGBA64 = new ColorRGBA64(1, 1, 1, 1);
    public static darkContrastColor: ColorRGBA64 = new ColorRGBA64(0, 0, 0, 1);

    public color: ColorRGBA64;
    public index: number;
    public referencePalette: ColorRGBA64[];

    public constructor(
        color: ColorRGBA64,
        index: number,
        referencePalette: ColorRGBA64[]
    ) {
        this.color = color;
        this.index = index;
        this.referencePalette = referencePalette;
    }

    public get contrastColor(): ColorRGBA64 {
        const contrastLight: number = contrastRatio(
            PaletteItemData.lightContrastColor,
            this.color
        );
        const contrastDark: number = contrastRatio(
            PaletteItemData.darkContrastColor,
            this.color
        );
        if (contrastLight >= contrastDark) {
            return PaletteItemData.lightContrastColor;
        } else {
            return PaletteItemData.darkContrastColor;
        }
    }

    public get desaturated(): ColorRGBA64 {
        const lch: ColorLCH = rgbToLCH(this.color);
        return lchToRGB(new ColorLCH(lch.l, 0, lch.h));
    }

    public get desaturatedContrastColor(): ColorRGBA64 {
        const contrastLight: number = contrastRatio(
            PaletteItemData.lightContrastColor,
            this.desaturated
        );
        const contrastDark: number = contrastRatio(
            PaletteItemData.darkContrastColor,
            this.desaturated
        );
        if (contrastLight >= contrastDark) {
            return PaletteItemData.lightContrastColor;
        } else {
            return PaletteItemData.darkContrastColor;
        }
    }

    public get referenceIndex(): number {
        return matchLightnessIndex(this.desaturated, this.referencePalette);
    }

    public get referenceColor(): ColorRGBA64 {
        return this.referencePalette[this.referenceIndex];
    }

    public get referenceContrastColor(): ColorRGBA64 {
        const contrastLight: number = contrastRatio(
            PaletteItemData.lightContrastColor,
            this.referenceColor
        );
        const contrastDark: number = contrastRatio(
            PaletteItemData.darkContrastColor,
            this.referenceColor
        );
        if (contrastLight >= contrastDark) {
            return PaletteItemData.lightContrastColor;
        } else {
            return PaletteItemData.darkContrastColor;
        }
    }

    public updateColor = (color: ColorRGBA64): void => {
        this.color = color;
    };

    public updateIndex = (index: number): void => {
        this.index = index;
    };

    /*updateReferencePalette = (referencePalette: ColorRGBA64[]): void => {
        this.referencePalette = referencePalette;
    };*/
}
