## API Report File for "@microsoft/fast-foundation"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Behavior } from '@microsoft/fast-element';
import { DecoratorAttributeConfiguration } from '@microsoft/fast-element';
import { Direction } from '@microsoft/fast-web-utilities';
import { ElementStyles } from '@microsoft/fast-element';
import { FASTElement } from '@microsoft/fast-element';
import { Orientation } from '@microsoft/fast-web-utilities';
import { PartialFASTElementDefinition } from '@microsoft/fast-element';

// @public (undocumented)
export class Anchor extends FASTElement {
    // (undocumented)
    appearance: AnchorAppearance;
    // (undocumented)
    download: string;
    // (undocumented)
    href: string;
    // (undocumented)
    hreflang: string;
    // (undocumented)
    ping: string;
    // (undocumented)
    referrerpolicy: string;
    // (undocumented)
    rel: string;
    // (undocumented)
    target: "_self" | "_blank" | "_parent" | "_top";
    // (undocumented)
    type: string;
}

// @public (undocumented)
export interface Anchor extends StartEnd {
}

// @public (undocumented)
export type AnchorAppearance = ButtonAppearance | "hypertext";

// @public (undocumented)
export const AnchorTemplate: import("@microsoft/fast-element").ViewTemplate<Anchor, any>;

// @public
export function applyMixins(derivedCtor: any, ...baseCtors: any[]): void;

// @public (undocumented)
export class Badge extends FASTElement {
    // (undocumented)
    circular: boolean;
    // (undocumented)
    color: string;
    // (undocumented)
    fill: string;
}

// @public (undocumented)
export const BadgeTemplate: import("@microsoft/fast-element").ViewTemplate<Badge, any>;

// @public (undocumented)
export class BaseProgress extends FASTElement {
    // (undocumented)
    max: number;
    // (undocumented)
    min: number;
    // (undocumented)
    paused: any;
    // (undocumented)
    value: number;
}

// Warning: (ae-forgotten-export) The symbol "FormAssociated" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export class Button extends FormAssociated<HTMLInputElement> {
    constructor();
    // (undocumented)
    appearance: ButtonAppearance;
    // (undocumented)
    autofocus: boolean;
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    formaction: string;
    // (undocumented)
    formenctype: string;
    // (undocumented)
    formId: string;
    // (undocumented)
    formmethod: string;
    // (undocumented)
    formnovalidate: boolean;
    // (undocumented)
    formtarget: "_self" | "_blank" | "_parent" | "_top";
    // (undocumented)
    name: string;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    type: "submit" | "reset" | "button";
    // (undocumented)
    value: string;
    }

// @public (undocumented)
export interface Button extends StartEnd {
}

// @public (undocumented)
export type ButtonAppearance = "accent" | "lightweight" | "neutral" | "outline" | "stealth";

// @public (undocumented)
export const ButtonTemplate: import("@microsoft/fast-element").ViewTemplate<Button, any>;

// @public (undocumented)
export class Card extends FASTElement {
}

// @public (undocumented)
export const CardTemplate: import("@microsoft/fast-element").ViewTemplate<Card, any>;

// @public (undocumented)
export class Checkbox extends FormAssociated<HTMLInputElement> {
    constructor();
    checked: boolean;
    checkedAttribute: boolean;
    // (undocumented)
    clickHandler: (e: MouseEvent) => void;
    // (undocumented)
    connectedCallback(): void;
    defaultChecked: boolean;
    // (undocumented)
    defaultSlottedNodes: Node[];
    indeterminate: boolean;
    // (undocumented)
    keypressHandler: (e: KeyboardEvent) => void;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    readOnly: boolean;
    value: string;
    }

// @public (undocumented)
export const CheckboxTemplate: import("@microsoft/fast-element").ViewTemplate<Checkbox, any>;

// @public
export function composedParent<T extends HTMLElement>(element: T): HTMLElement | null;

// @public (undocumented)
export type CSSCustomPropertyBehavior = Behavior & CSSCustomPropertyDefinition;

// @public
export function cssCustomPropertyBehaviorFactory(name: string, value: string | ((...arg: any[]) => string), host: (source: typeof FASTElement & HTMLElement) => Partial<CSSCustomPropertyTarget> | null): CSSCustomPropertyBehavior;

// @public (undocumented)
export interface CSSCustomPropertyDefinition {
    name: string;
    value: string | ((...args: any[]) => string);
}

// @public (undocumented)
export interface CSSCustomPropertyTarget {
    // (undocumented)
    disconnectedCSSCustomPropertyRegistry: CSSCustomPropertyDefinition[] | void;
    // (undocumented)
    registerCSSCustomProperty(behavior: CSSCustomPropertyDefinition): void;
    // (undocumented)
    unregisterCSSCustomProperty(behavior: CSSCustomPropertyDefinition): void;
}

// @public (undocumented)
export type CSSDisplayPropertyValue = "block" | "contents" | "flex" | "grid" | "inherit" | "initial" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "none" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group";

// @public (undocumented)
export interface DecoratorDesignSystemPropertyConfiguration extends Omit<DecoratorAttributeConfiguration, "attribute"> {
    // (undocumented)
    attribute?: string | false;
    // (undocumented)
    cssCustomProperty?: string | false;
    // (undocumented)
    default: any;
}

// @public (undocumented)
export interface DesignSystemConsumer {
    // (undocumented)
    provider: DesignSystemProvider | null;
}

// @public
export const designSystemConsumerBehavior: Behavior;

// @public
export function designSystemProperty<T extends DesignSystemProvider>(config: DecoratorDesignSystemPropertyConfiguration): (source: T, property: string) => void;

// @public (undocumented)
export class DesignSystemProvider extends FASTElement implements CSSCustomPropertyTarget, DesignSystemConsumer {
    constructor();
    // (undocumented)
    connectedCallback(): void;
    designSystem: {};
    designSystemProperties: {
        [propertyName: string]: Required<Pick<DecoratorDesignSystemPropertyConfiguration, "cssCustomProperty" | "default">>;
    };
    disconnectedCSSCustomPropertyRegistry: CSSCustomPropertyDefinition[];
    evaluate(definition: CSSCustomPropertyDefinition): string;
    static findProvider(el: HTMLElement & Partial<DesignSystemConsumer>): DesignSystemProvider | null;
    static isDesignSystemProvider(el: HTMLElement | DesignSystemProvider): el is DesignSystemProvider;
    readonly isDesignSystemProvider = true;
    // (undocumented)
    provider: DesignSystemProvider | null;
    registerCSSCustomProperty(behavior: CSSCustomPropertyDefinition): void;
    static registerTagName(tagName: string): void;
    static get tagNames(): string[];
    unregisterCSSCustomProperty(behavior: CSSCustomPropertyDefinition): void;
    useDefaults: boolean;
    }

// @public
export function designSystemProvider(nameOrDef: string | PartialFASTElementDefinition): <T extends typeof DesignSystemProvider>(providerCtor: T) => void;

// @public (undocumented)
export const DesignSystemProviderTemplate: import("@microsoft/fast-element").ViewTemplate<DesignSystemProvider, any>;

// @public (undocumented)
export class Dialog extends FASTElement {
    // (undocumented)
    ariaDescribedby: string;
    // (undocumented)
    ariaLabel: string;
    // (undocumented)
    ariaLabelledby: string;
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    dialog: HTMLDivElement;
    // (undocumented)
    disconnectedCallback(): void;
    // (undocumented)
    dismiss(): void;
    // (undocumented)
    hidden: boolean;
    // (undocumented)
    modal: boolean;
    // (undocumented)
    trapFocus: boolean;
    }

// @public (undocumented)
export const DialogTemplate: import("@microsoft/fast-element").ViewTemplate<Dialog, any>;

// @public (undocumented)
export const disabledCursor = "not-allowed";

// @public
export function display(displayValue: CSSDisplayPropertyValue): string;

// @public (undocumented)
export class Divider extends FASTElement {
    // (undocumented)
    role: DividerRole;
}

// @public (undocumented)
export enum DividerRole {
    // (undocumented)
    presentation = "presentation",
    // (undocumented)
    separator = "separator"
}

// @public (undocumented)
export const DividerTemplate: import("@microsoft/fast-element").ViewTemplate<Divider, any>;

// @public (undocumented)
export const endTemplate: import("@microsoft/fast-element").ViewTemplate<StartEnd, any>;

// @public (undocumented)
export class Flipper extends FASTElement {
    // (undocumented)
    direction: FlipperDirection;
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    hiddenFromAT: boolean;
}

// @public (undocumented)
export enum FlipperDirection {
    // (undocumented)
    next = "next",
    // (undocumented)
    previous = "previous"
}

// @public (undocumented)
export const FlipperTemplate: import("@microsoft/fast-element").ViewTemplate<Flipper, any>;

// @public
export const focusVisible: string;

// @public
export const forcedColorsStylesheetBehavior: (sheet: ElementStyles) => Readonly<{
    query: MediaQueryList;
    cache: WeakMap<(new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }, ((this: MediaQueryList) => void)[] | ((this: MediaQueryList) => void)>;
    sheet: ElementStyles;
    constructListener(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }, sheet: ElementStyles): MediaQueryListListener;
    bind(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }): void;
    unbind(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }): void;
}>;

// @public (undocumented)
export const hidden = "\n    :host([hidden]) {\n        display: none;\n    }\n";

// @public
export function isDesignSystemConsumer(element: HTMLElement | DesignSystemConsumer): element is DesignSystemConsumer;

// @public
export function matchMediaStylesheetBehaviorFactory(query: MediaQueryList): (sheet: ElementStyles) => Readonly<{
    query: MediaQueryList;
    cache: WeakMap<(new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }, ((this: MediaQueryList) => void)[] | ((this: MediaQueryList) => void)>;
    sheet: ElementStyles;
    constructListener(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }, sheet: ElementStyles): MediaQueryListListener;
    bind(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }): void;
    unbind(this: MatchMediaStyleSheetBehavior, source: (new () => HTMLElement & FASTElement) & {
        from<TBase extends {
            new (): HTMLElement;
            prototype: HTMLElement;
        }>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
        define<TType extends Function>(Type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition | undefined): TType;
        getDefinition: <T extends Function>(Type: T) => import("@microsoft/fast-element").FASTElementDefinition | undefined;
    }): void;
}>;

// @public (undocumented)
export class Menu extends FASTElement {
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    focus(): void;
    handleFocusOut: (e: FocusEvent) => void;
    // (undocumented)
    handleMenuKeyDown(e: KeyboardEvent): void | boolean;
    // (undocumented)
    items: HTMLSlotElement;
    }

// @public (undocumented)
export class MenuItem extends FASTElement {
    // (undocumented)
    checked: boolean;
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    expanded: boolean;
    // (undocumented)
    handleMenuItemClick: (e: MouseEvent) => void;
    // (undocumented)
    handleMenuItemKeyDown: (e: KeyboardEvent) => boolean;
    // (undocumented)
    role: MenuItemRole;
}

// @public (undocumented)
export interface MenuItem extends StartEnd {
}

// @public (undocumented)
export enum MenuItemRole {
    // (undocumented)
    menuitem = "menuitem",
    // (undocumented)
    menuitemcheckbox = "menuitemcheckbox",
    // (undocumented)
    menuitemradio = "menuitemradio"
}

// @public (undocumented)
export const MenuItemTemplate: import("@microsoft/fast-element").ViewTemplate<MenuItem, any>;

// @public (undocumented)
export const MenuTemplate: import("@microsoft/fast-element").ViewTemplate<Menu, any>;

// @public (undocumented)
export const ProgressRingTemplate: import("@microsoft/fast-element").ViewTemplate<BaseProgress, any>;

// @public (undocumented)
export const ProgressTemplate: import("@microsoft/fast-element").ViewTemplate<BaseProgress, any>;

// @public (undocumented)
export class Radio extends FormAssociated<HTMLInputElement> implements RadioControl {
    constructor();
    checked: boolean;
    checkedAttribute: boolean;
    // (undocumented)
    clickHandler: (e: MouseEvent) => void;
    // (undocumented)
    connectedCallback(): void;
    defaultChecked: boolean;
    // (undocumented)
    defaultSlottedNodes: Node[];
    // (undocumented)
    keypressHandler: (e: KeyboardEvent) => void;
    // (undocumented)
    name: string;
    // (undocumented)
    protected nameChanged(): void;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    readOnly: boolean;
    value: string;
    }

// @public (undocumented)
export interface RadioControl {
    // (undocumented)
    checked: boolean;
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    focus: () => void;
    // (undocumented)
    getAttribute: (name: string) => string | null;
    // (undocumented)
    readOnly: boolean;
    // (undocumented)
    setAttribute: (name: string, value: string) => void;
}

// @public (undocumented)
export class RadioGroup extends FASTElement {
    constructor();
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    keydownHandler: (e: KeyboardEvent) => void;
    // (undocumented)
    name: string;
    // (undocumented)
    protected nameChanged(): void;
    // (undocumented)
    orientation: Orientation;
    // (undocumented)
    readOnly: boolean;
    // (undocumented)
    slottedRadioButtons: RadioControl[];
    // (undocumented)
    value: string;
}

// @public (undocumented)
export const RadioGroupTemplate: import("@microsoft/fast-element").ViewTemplate<RadioGroup, any>;

// @public (undocumented)
export const RadioTemplate: import("@microsoft/fast-element").ViewTemplate<Radio, any>;

// @public (undocumented)
export class Slider extends FormAssociated<HTMLInputElement> implements SliderConfiguration {
    constructor();
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    decrement: () => void;
    // (undocumented)
    direction: Direction;
    // (undocumented)
    disconnectedCallback(): void;
    // (undocumented)
    increment: () => void;
    // (undocumented)
    isDragging: boolean;
    // (undocumented)
    protected keypressHandler: (e: KeyboardEvent) => void;
    max: number;
    min: number;
    mode: SliderMode;
    orientation: Orientation;
    // (undocumented)
    position: string;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    readOnly: boolean;
    step: number;
    // (undocumented)
    thumb: HTMLDivElement;
    // (undocumented)
    track: HTMLDivElement;
    // (undocumented)
    trackHeight: number;
    // (undocumented)
    trackMinHeight: number;
    // (undocumented)
    trackMinWidth: number;
    // (undocumented)
    trackWidth: number;
    value: string;
    }

// @public (undocumented)
export interface SliderConfiguration {
    // (undocumented)
    direction?: Direction;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    max: number;
    // (undocumented)
    min: number;
    // (undocumented)
    orientation?: Orientation;
}

// @public (undocumented)
export class SliderLabel extends FASTElement {
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    disabled: boolean;
    // (undocumented)
    disconnectedCallback(): void;
    // (undocumented)
    handleChange(source: any, propertyName: string): void;
    // (undocumented)
    hideMark: boolean;
    // (undocumented)
    position: string;
    // (undocumented)
    positionStyle: string;
    // (undocumented)
    root: HTMLDivElement;
    // (undocumented)
    sliderDirection: Direction;
    // (undocumented)
    sliderMaxPosition: number;
    // (undocumented)
    sliderMinPosition: number;
    // (undocumented)
    sliderOrientation: Orientation;
}

// @public (undocumented)
export const SliderLabelTemplate: import("@microsoft/fast-element").ViewTemplate<SliderLabel, any>;

// @public (undocumented)
export enum SliderMode {
    // (undocumented)
    singleValue = "single-value"
}

// @public (undocumented)
export const SliderTemplate: import("@microsoft/fast-element").ViewTemplate<Slider, any>;

// @public (undocumented)
export class StartEnd {
    // (undocumented)
    end: HTMLSlotElement;
    // (undocumented)
    endContainer: HTMLSpanElement;
    // (undocumented)
    handleEndContentChange(): void;
    // (undocumented)
    handleStartContentChange(): void;
    // (undocumented)
    start: HTMLSlotElement;
    // (undocumented)
    startContainer: HTMLSpanElement;
}

// @public (undocumented)
export const startTemplate: import("@microsoft/fast-element").ViewTemplate<StartEnd, any>;

// @public (undocumented)
export class Switch extends FormAssociated<HTMLInputElement> {
    constructor();
    checked: boolean;
    // (undocumented)
    checkedAttribute: boolean;
    // (undocumented)
    clickHandler: (e: MouseEvent) => void;
    // (undocumented)
    connectedCallback(): void;
    defaultChecked: boolean;
    // (undocumented)
    defaultSlottedNodes: Node[];
    // (undocumented)
    keypressHandler: (e: KeyboardEvent) => void;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    readOnly: boolean;
    value: string;
    }

// @public (undocumented)
export const SwitchTemplate: import("@microsoft/fast-element").ViewTemplate<Switch, any>;

// @public (undocumented)
export class Tab extends FASTElement {
}

// @public (undocumented)
export class TabPanel extends FASTElement {
}

// @public (undocumented)
export const TabPanelTemplate: import("@microsoft/fast-element").ViewTemplate<TabPanel, any>;

// @public (undocumented)
export class Tabs extends FASTElement {
    constructor();
    // (undocumented)
    activeid: string;
    // (undocumented)
    activeindicator: boolean;
    // (undocumented)
    activeIndicatorRef: HTMLElement;
    // (undocumented)
    activetab: HTMLElement;
    // (undocumented)
    orientation: TabsOrientation;
    // (undocumented)
    tabpanels: HTMLElement[];
    // (undocumented)
    tabpanelsChanged(): void;
    // (undocumented)
    tabs: HTMLElement[];
    // (undocumented)
    tabsChanged(): void;
    }

// @public (undocumented)
export interface Tabs extends StartEnd {
}

// @public (undocumented)
export enum TabsOrientation {
    // (undocumented)
    horizontal = "horizontal",
    // (undocumented)
    vertical = "vertical"
}

// @public (undocumented)
export const TabsTemplate: import("@microsoft/fast-element").ViewTemplate<Tabs, any>;

// @public (undocumented)
export const TabTemplate: import("@microsoft/fast-element").ViewTemplate<Tab, any>;

// @public (undocumented)
export class TextArea extends FormAssociated<HTMLTextAreaElement> {
    // (undocumented)
    appearance: TextAreaAppearance;
    // (undocumented)
    autofocus: boolean;
    // (undocumented)
    cols: number;
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    defaultSlottedNodes: Node[];
    // (undocumented)
    formId: string;
    // (undocumented)
    handleTextInput: () => void;
    // (undocumented)
    list: string;
    // (undocumented)
    maxlength: number;
    // (undocumented)
    minlength: number;
    // (undocumented)
    name: string;
    // (undocumented)
    placeholder: string;
    // (undocumented)
    protected proxy: HTMLTextAreaElement;
    // (undocumented)
    readOnly: boolean;
    // (undocumented)
    resize: TextAreaResize;
    // (undocumented)
    rows: number;
    // (undocumented)
    spellcheck: boolean;
    // (undocumented)
    textarea: HTMLTextAreaElement;
    // (undocumented)
    valueChanged(): void;
}

// @public (undocumented)
export enum TextAreaAppearance {
    // (undocumented)
    filled = "filled",
    // (undocumented)
    outline = "outline"
}

// @public (undocumented)
export enum TextAreaResize {
    // (undocumented)
    both = "both",
    // (undocumented)
    horizontal = "horizontal",
    // (undocumented)
    none = "none",
    // (undocumented)
    vertical = "vertical"
}

// @public (undocumented)
export const TextAreaTemplate: import("@microsoft/fast-element").ViewTemplate<TextArea, any>;

// @public (undocumented)
export class TextField extends FormAssociated<HTMLInputElement> {
    constructor();
    // (undocumented)
    appearance: TextFieldAppearance;
    // (undocumented)
    autofocus: boolean;
    // (undocumented)
    connectedCallback(): void;
    // (undocumented)
    control: HTMLInputElement;
    // (undocumented)
    defaultSlottedNodes: Node[];
    // (undocumented)
    handleTextInput(): void;
    // (undocumented)
    list: string;
    // (undocumented)
    maxlength: number;
    // (undocumented)
    minlength: number;
    // (undocumented)
    pattern: string;
    // (undocumented)
    placeholder: string;
    // (undocumented)
    protected proxy: HTMLInputElement;
    // (undocumented)
    readOnly: boolean;
    // (undocumented)
    size: number;
    // (undocumented)
    spellcheck: boolean;
    // (undocumented)
    type: TextFieldType;
    }

// @public (undocumented)
export interface TextField extends StartEnd {
}

// @public (undocumented)
export enum TextFieldAppearance {
    // (undocumented)
    filled = "filled",
    // (undocumented)
    outline = "outline"
}

// @public (undocumented)
export const TextFieldTemplate: import("@microsoft/fast-element").ViewTemplate<TextField, any>;

// @public (undocumented)
export enum TextFieldType {
    // (undocumented)
    email = "email",
    // (undocumented)
    password = "password",
    // (undocumented)
    tel = "tel",
    // (undocumented)
    text = "text",
    // (undocumented)
    url = "url"
}


// Warnings were encountered during analysis:
//
// dist/dts/utilities/match-media-stylesheet-behavior.d.ts:65:5 - (ae-forgotten-export) The symbol "MatchMediaStyleSheetBehavior" needs to be exported by the entry point index.d.ts
// dist/dts/utilities/match-media-stylesheet-behavior.d.ts:65:5 - (ae-forgotten-export) The symbol "MediaQueryListListener" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```
