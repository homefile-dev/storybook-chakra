declare const Button: {
    baseStyle: {
        fontFamily: string;
        fontSize: string;
        h: string;
        fontWeight: string;
        borderRadius: string;
        boxShadow: string;
        transition: string;
        _hover: {
            borderRadius: string;
            fontWeight: string;
            boxShadow: string;
        };
        _disabled: {
            filter: string;
            pointerEvents: string;
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
            color: string;
            backgroundColor: string;
            _hover: {
                backgroundColor: string;
            };
        };
        secondary: {
            backgroundColor: string;
            border: string;
            borderColor: string;
            color: string;
            _hover: {
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
