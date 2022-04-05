declare const Button: {
    baseStyle: {
        _focus: {
            boxShadow: string;
        };
    };
    sizes: {
        small: {
            w: string;
        };
        medium: {
            w: string;
        };
        large: {
            w: string;
        };
        full: {
            w: string;
        };
        onboarding: {
            w: string[];
        };
    };
    variants: {
        primary: {
            fontSize: string;
            textTransform: string;
            h: string;
            fontWeight: string;
            borderRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
            transition: string;
            _disabled: {
                filter: string;
                pointerEvents: string;
            };
            _active: {
                backgroundColor: string;
                borderRadius: string;
                fontWeight: string;
                boxShadow: string;
            };
            _hover: {
                boxShadow: string;
            };
        };
        secondary: {
            fontSize: string;
            textTransform: string;
            h: string;
            px: string;
            fontWeight: string;
            borderRadius: string;
            boxShadow: string;
            transition: string;
            backgroundColor: string;
            border: string;
            borderColor: string;
            color: string;
            _active: {
                backgroundColor: string;
                borderRadius: string;
                fontWeight: string;
                boxShadow: string;
            };
            _hover: {
                backgroundColor: string;
                boxShadow: string;
            };
            _disabled: {
                filter: string;
                pointerEvents: string;
            };
        };
        icon: {
            color: string;
            backgroundColor: string;
            border: string;
            boxShadow: string;
            _hover: {
                backgroundColor: string;
                color: string;
            };
            _focus: {
                backgroundColor: string;
            };
        };
        menuIcon: {
            color: string;
            backgroundColor: string;
            border: string;
            boxShadow: string;
            _hover: {
                backgroundColor: string;
                color: string;
            };
            _focus: {
                backgroundColor: string;
            };
        };
        text: {
            w: string;
            fontFamily: string;
            fontSize: string;
            letterSpacing: string;
            color: string;
            backgroundColor: string;
            border: string;
            boxShadow: string;
            _hover: {
                backgroundColor: string;
                textDecoration: string;
                color: string;
            };
            _focus: {
                backgroundColor: string;
            };
        };
        leftRounded: {
            fontSize: string;
            textTransform: string;
            h: string;
            maxW: string;
            fontWeight: string;
            borderRightRadius: string;
            borderLeftRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
            transition: string;
            _disabled: {
                filter: string;
                pointerEvents: string;
            };
            _active: {
                backgroundColor: string;
                boxShadow: string;
            };
            _hover: {
                boxShadow: string;
                maxW: string;
                color: string;
            };
        };
        rightRounded: {
            fontSize: string;
            textTransform: string;
            h: string;
            maxW: string;
            fontWeight: string;
            borderRightRadius: string;
            borderLeftRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
            transition: string;
            _disabled: {
                filter: string;
                pointerEvents: string;
            };
            _active: {
                backgroundColor: string;
                boxShadow: string;
            };
            _hover: {
                boxShadow: string;
                maxW: string;
                color: string;
            };
        };
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default Button;
