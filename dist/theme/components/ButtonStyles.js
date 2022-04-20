"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = {
    baseStyle: {
        _focus: {
            boxShadow: 'none',
        },
    },
    sizes: {
        small: {
            w: 'button.sm',
        },
        medium: {
            w: 'button.md',
        },
        large: {
            w: 'button.lg',
        },
        full: {
            w: 'button.full',
        },
        onboarding: {
            w: ['button.full', 'button.md'],
        },
    },
    variants: {
        primary: {
            fontSize: 'md',
            textTransform: 'uppercase',
            h: 'button.xs',
            fontWeight: 'regular',
            borderRadius: 'none',
            boxShadow: 'base',
            color: 'white',
            backgroundColor: 'button.primary',
            transition: 'all 0.2s ease-in-out',
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
            _active: {
                backgroundColor: 'button.primaryHover',
                borderRadius: 'lg',
                fontWeight: 'medium',
                boxShadow: 'none',
            },
            _hover: {
                boxShadow: 'xl',
            },
        },
        secondary: {
            fontSize: 'md',
            textTransform: 'uppercase',
            h: 'button.xs',
            px: '1rem',
            fontWeight: 'regular',
            borderRadius: 'none',
            boxShadow: 'base',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'transparent',
            border: '1px',
            borderColor: 'button.primary',
            color: 'button.primary',
            _active: {
                backgroundColor: 'button.tertiaryHover',
                borderRadius: 'lg',
                fontWeight: 'medium',
                boxShadow: 'none',
            },
            _hover: {
                backgroundColor: 'button.secondaryHover',
                boxShadow: 'lg',
            },
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
        },
        iconOutlined: {
            maxW: '3rem',
            borderRadius: 'sm',
            boxShadow: 'base',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'transparent',
            border: '1px',
            borderColor: 'button.primary',
            color: 'button.primary',
            _active: {
                backgroundColor: 'button.tertiaryHover',
                boxShadow: 'none',
            },
            _hover: {
                backgroundColor: 'button.secondaryHover',
                boxShadow: 'lg',
            },
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
        },
        icon: {
            color: 'button.icon',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            _hover: {
                backgroundColor: 'transparent',
                color: 'button.primary',
            },
            _focus: {
                backgroundColor: 'transparent',
            },
        },
        menuIcon: {
            color: 'button.menuIcon',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            _hover: {
                backgroundColor: 'transparent',
                color: 'button.primary',
            },
            _focus: {
                backgroundColor: 'transparent',
            },
        },
        text: {
            w: 'button.max',
            fontFamily: 'secondary',
            fontSize: 'md',
            letterSpacing: 'wide',
            color: 'font.link',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            _hover: {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: 'font.linkHover',
            },
            _focus: {
                backgroundColor: 'transparent',
            },
        },
        leftRounded: {
            fontSize: 'md',
            textTransform: 'uppercase',
            h: 'button.xxs',
            pl: '2rem',
            fontWeight: 'semibold',
            borderRightRadius: 'none',
            borderLeftRadius: 'full',
            boxShadow: 'base',
            color: 'white',
            backgroundColor: 'brand.primary',
            transition: 'all 0.2s ease-in-out',
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
            _active: {
                backgroundColor: 'brand.secondary',
                boxShadow: 'none',
            },
            _hover: {
                boxShadow: 'xl',
            },
        },
        rightRounded: {
            fontSize: 'md',
            textTransform: 'uppercase',
            h: 'button.xs',
            pr: '3rem',
            fontWeight: 'semibold',
            borderRightRadius: 'full',
            borderLeftRadius: 'none',
            boxShadow: 'base',
            color: 'white',
            backgroundColor: 'button.primary',
            transition: 'all 0.2s ease-in-out',
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
            _active: {
                backgroundColor: 'button.primaryHover',
                boxShadow: 'none',
            },
            _hover: {
                boxShadow: 'xl',
            },
        },
        menu: {
            fontSize: 'md',
            textTransform: 'uppercase',
            h: 'button.xs',
            fontWeight: 'regular',
            borderRadius: 'none',
            boxShadow: 'base',
            color: 'white',
            backgroundColor: 'button.primary',
            transition: 'all 0.2s ease-in-out',
            _disabled: {
                filter: 'grayscale(100%)',
                pointerEvents: 'none',
            },
            _active: {
                backgroundColor: 'button.primaryHover',
                borderTopRadius: 'md',
                fontWeight: 'medium',
                boxShadow: 'none',
            },
            _hover: {
                boxShadow: 'xl',
            },
        },
    },
    defaultProps: {
        size: 'full',
        variant: 'primary',
    },
};
exports.default = Button;
