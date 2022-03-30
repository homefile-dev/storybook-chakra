"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@fontsource/assistant");
var react_1 = require("@chakra-ui/react");
var ButtonStyles_1 = __importDefault(require("./components/ButtonStyles"));
var ContainerStyles_1 = __importDefault(require("./components/ContainerStyles"));
var TextStyles_1 = __importDefault(require("./components/TextStyles"));
var InputStyles_1 = __importDefault(require("./components/InputStyles"));
var theme = (0, react_1.extendTheme)({
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'container.primary',
                fontFamily: 'primary',
            },
            a: {
                color: 'font.link',
                fontFamily: 'secondary',
                textDecoration: 'none',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
    components: {
        Button: ButtonStyles_1.default,
        Container: ContainerStyles_1.default,
        Text: TextStyles_1.default,
        Input: InputStyles_1.default,
    },
    colors: {
        brand: {
            primary: '#6AB528',
            secondary: '#3F5D25',
        },
        font: {
            primary: '#464646',
            secondary: '#818181',
            link: '#2488C6',
        },
        container: {
            primary: '#DCE8EC',
            secondary: '#F0F8F0',
            tertiary: '#F4F7F8',
        },
        button: {
            primary: '#2488C6',
            primaryHover: '#1D7AB4',
            secondary: '#F0F8F0',
            secondaryHover: '#DFEFF8',
            tertiaryHover: '#CBF0BD',
            icon: '#BCD1D8',
        },
        input: {
            border: '#BCD1D8',
            borderHover: '#3E9FDB',
            borderFocus: '#1D7AB4',
        },
    },
    fonts: {
        primary: 'Poppins',
        secondary: 'Assistant',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    sizes: {
        button: {
            xs: '3.4rem',
            xsHover: '3.6rem',
            sm: '10rem',
            smHover: '10.1rem',
            md: '20rem',
            mdHover: '20.1rem',
            lg: '28rem',
            lgHover: '28.1rem',
            full: '100%',
        },
        container: {
            xxs: '6rem',
            xs: '10rem',
            sm: '20rem',
            md: '30rem',
            lg: '50rem',
            full: '100%',
        },
        image: {
            logo: '2rem',
        },
        input: {
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
            xl: '5rem',
            wMd: '22rem',
        },
    },
});
exports.default = theme;