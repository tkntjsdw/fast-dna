import React from "react";
import {
    ManagedClasses,
    SelectClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";
import { ListboxItemProps } from "../listbox-item";
import { SelectState } from "./select";
import {
    AxisPositioningMode,
    ViewportPositionerHorizontalPosition,
    ViewportPositionerVerticalPosition,
} from "../viewport-positioner";

export interface SelectManagedClasses extends ManagedClasses<SelectClassNameContract> {}
export interface SelectUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SelectMenuFlyoutConfig {
    /**
     *  Ref to the element the positioner is anchored to
     */
    viewport?: React.RefObject<any>;

    /**
     *  The positioning mode for the horizontal axis, default is uncontrolled
     */
    horizontalPositioningMode?: AxisPositioningMode;

    /**
     *  The default horizontal position, layout favors the widest option if unset
     */
    defaultHorizontalPosition?: ViewportPositionerHorizontalPosition;

    /**
     *  The width at which the positioner switches from the default position to the widest one
     */
    horizontalThreshold?: number;

    /**
     *  When enabled the positioner will not move out of the viewport on the horizontal axis
     */
    horizontalAlwaysInView?: boolean;

    /**
     *  The positioning mode for the vertical axis, default is uncontrolled
     */
    verticalPositioningMode?: AxisPositioningMode;

    /**
     * The default vertical position, layout favors the tallest option if unset
     */
    defaultVerticalPosition?: ViewportPositionerVerticalPosition;

    /**
     *  The height at which the positioner switches from the default position to the tallest one
     */
    verticalThreshold?: number;

    /**
     *  When enabled the positioner will not move out of the viewport on the vertical axis
     */
    verticalAlwaysInView?: boolean;

    /**
     * The disabled state
     */
    disabled?: boolean;

    /**
     * When true the positioner remains fixed relative to it's anchor after the first render
     */
    fixedAfterInitialPlacement?: boolean;
}

export interface SelectHandledProps extends SelectManagedClasses {
    /**
     * Custom function to render the trigger of the control
     * (ie. the ui that typically displays the current value and opens the menu in single select mode)
     */
    trigger?: (props: SelectProps, state: SelectState) => React.ReactNode;

    /**
     * Function which converts and formats the string may be displayed in the ui
     * in the UI
     */
    displayStringFormatter?: (
        selectedOptions: ListboxItemProps[],
        placeholder: string
    ) => string;

    /**
     * Selected option id's (controlled mode)
     */
    selectedItems?: string[] | ListboxItemProps[];

    /**
     * Id's that are initially selected
     */
    defaultSelection?: string[] | ListboxItemProps[];

    /**
     * Specifies that the drop-down list is open
     */
    isMenuOpen?: boolean;

    /**
     * Whether to use viewport aware positioning
     * (ie. can open above the trigger if it needs the room)
     */
    enableViewportPositioning?: boolean;

    /**
     * Specifies that the control is disabled
     */
    disabled?: boolean;

    /**
     * Defines one or more forms the select field belongs to
     */
    form?: string;

    /**
     * Specifies that multiple options can be selected at once
     */
    multiselectable?: boolean;

    /**
     * Defines a name for the drop-down list
     */
    name?: string;

    /**
     * String displayed when there is no selected value
     */
    placeholder?: string;

    /**
     * Specifies that the user is required to select a value before submitting the form
     */
    required?: boolean;

    /**
     * The onValueChange event handler
     */
    onValueChange?: (
        newValue: string | string[],
        selectedItems: ListboxItemProps[],
        displayString: string
    ) => void;

    /**
     * Whether a listitem should automatically get focus when this component is mounted
     * (multi-select only)
     */
    autoFocus?: boolean;

    /**
     * The aria-labelledby attribute to link the select to an existing
     * element that provides it an accessible name
     */
    labelledBy?: string;

    /**
     * The onValueChange event handler
     */
    menuFlyoutConfig?: SelectMenuFlyoutConfig;
}

export type SelectProps = SelectHandledProps & SelectUnhandledProps;
