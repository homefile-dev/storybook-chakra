"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = {
    baseStyle: {
        fontFamily: "primaryFont",
        fontSize: "md",
        h: "container.xs",
        fontWeight: "regular",
        borderRadius: "none",
        boxShadow: "0 1.5px 3px 0 rgba(0, 0, 0, 0.16)",
        transition: "all 0.2s ease-in-out",
        _hover: {
            borderRadius: "lg",
            fontWeight: "medium",
            boxShadow: "none",
        },
        _disabled: {
            filter: "grayscale(100%)",
            pointerEvents: "none",
        },
    },
    sizes: {
        small: {
            w: "container.sm",
        },
        medium: {
            w: "container.md",
        },
        large: {
            w: "container.lg",
        },
        full: {
            w: "container.full",
        },
    },
    variants: {
        primary: {
            color: "white",
            backgroundColor: "button.primary",
            _hover: {
                backgroundColor: "button.primaryHover",
            },
        },
        secondary: {
            backgroundColor: "transparent",
            border: "1px",
            borderColor: "button.primary",
            color: "button.primary",
            _hover: {
                backgroundColor: "button.secondaryHover",
            },
        },
    },
    defaultProps: {
        size: "medium",
        variant: "primary",
    },
};
exports.default = Button;
