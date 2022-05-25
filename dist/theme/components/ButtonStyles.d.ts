declare const Button: {
    baseStyle: {
        transition: string;
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
        iconOutlined: {
            maxW: string;
            borderRadius: string;
            boxShadow: string;
            backgroundColor: string;
            border: string;
            borderColor: string;
            color: string;
            _active: {
                backgroundColor: string;
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
        menuIconWithShadow: {
            color: string;
            backgroundColor: string;
            border: string;
            borderRadius: string;
            _hover: {
                backgroundColor: string;
                color: string;
                boxShadow: string;
            };
            _focus: {
                backgroundColor: string;
            };
        };
        folder: {
            color: string;
            fontWeight: string;
            backgroundColor: string;
            border: string;
            borderRadius: string;
            _hover: {
                backgroundColor: string;
                color: string;
                boxShadow: string;
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
            fontWeight: string;
            borderRightRadius: string;
            borderLeftRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
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
            };
        };
        rightRounded: {
            fontSize: string;
            textTransform: string;
            h: string;
            pr: string;
            fontWeight: string;
            borderRightRadius: string;
            borderLeftRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
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
            };
        };
        menu: {
            fontSize: string;
            textTransform: string;
            h: string;
            fontWeight: string;
            borderRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
            _disabled: {
                filter: string;
                pointerEvents: string;
            };
            _active: {
                backgroundColor: string;
                borderTopRadius: string;
                fontWeight: string;
                boxShadow: string;
            };
            _hover: {
                boxShadow: string;
            };
        };
        primaryFooter: {
            fontSize: string;
            textTransform: string;
            h: string;
            fontWeight: string;
            borderRadius: string;
            boxShadow: string;
            color: string;
            backgroundColor: string;
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
        secondaryFooter: {
            fontSize: string;
            h: string;
            px: string;
            fontWeight: string;
            borderRadius: string;
            boxShadow: string;
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
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default Button;
