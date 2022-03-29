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
                boxShadow: string;
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
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default Button;
