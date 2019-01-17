import { focus, focusVisiblePollyfillSelector, focusVisibleSelector } from "./focus";
import { CSSRules } from "@microsoft/fast-jss-manager";
import { DesignSystem } from "../design-system";

/**
 * Mock and allow control of focus-visible return value
 */
let canUseFocusVisible: boolean = false;
jest.mock("@microsoft/fast-web-utilities", () => {
    return {
        canUseFocusVisible: (): boolean => canUseFocusVisible,
    };
});

const styles: CSSRules<DesignSystem> = {
    color: "red",
};

describe("focus", (): void => {
    beforeEach((): void => {
        canUseFocusVisible = false;
    });
    test("should return an arguments are null or undefined", (): void => {
        expect(focus(undefined, undefined)).toEqual({});
        expect(focus(null, null)).toEqual({});
    });
    test("should return a selector that hides default focus outlines", (): void => {
        expect(focus(styles)["&:focus"]).not.toBeUndefined();
        expect(focus("", styles)["&:focus"]).not.toBeUndefined();
    });
    test("should implement :focus-visible if it is supported by the expierence", (): void => {
        canUseFocusVisible = true;
        expect(focus(styles)[focusVisibleSelector()]).toEqual(styles);
        expect(focus(styles)[focusVisiblePollyfillSelector()]).toBeUndefined();
    });
    test("should implement focus-visible polyfill selector if focus-visible is not supported by the browser", (): void => {
        expect(focus(styles)[focusVisibleSelector()]).toBeUndefined();
        expect(focus(styles)[focusVisiblePollyfillSelector()]).toEqual(styles);
    });
    test("should allow selector agumentation", (): void => {
        canUseFocusVisible = true;
        expect(
            focus(" .some-child", styles)[focusVisibleSelector(" .some-child")]
        ).toEqual(styles);

        canUseFocusVisible = false;
        expect(
            focus(" .some-child", styles)[focusVisiblePollyfillSelector(" .some-child")]
        ).toEqual(styles);
    });
});
