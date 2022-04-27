"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@fontsource/assistant");
require("@fontsource/poppins");
var react_1 = require("@chakra-ui/react");
var ButtonStyles_1 = __importDefault(require("./components/ButtonStyles"));
var ContainerStyles_1 = __importDefault(require("./components/ContainerStyles"));
var TextStyles_1 = __importDefault(require("./components/TextStyles"));
var InputStyles_1 = __importDefault(require("./components/InputStyles"));
var SelectStyles_1 = __importDefault(require("./components/SelectStyles"));
var theme = (0, react_1.extendTheme)({
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'container.primary',
                fontFamily: 'primary',
                margin: 0,
                padding: 0,
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
        Select: SelectStyles_1.default,
    },
    colors: {
        brand: {
            primary: '#6AB528',
            secondary: '#2C8412',
        },
        avatar: {
            primary: '#60347C',
        },
        font: {
            primary: '#464646',
            secondary: '#818181',
            link: '#2488C6',
            linkHover: '#1D7AB4',
        },
        container: {
            primary: '#DCE8EC',
            secondary: '#F0F8F0',
            tertiary: '#F4F7F8',
            neutralBlue: '#E9EDEF',
            neutral: '#ADB6BA',
            warning: '#F8AD20'
        },
        button: {
            "primary-300": '#409FD8',
            primary: '#2488C6',
            primaryHover: '#1D7AB4',
            secondary: '#F0F8F0',
            secondaryHover: '#DFEFF8',
            tertiaryHover: '#CAE1EF',
            icon: '#BCD1D8',
            menuIcon: '#464646',
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
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
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
    space: {
        base: '0.8125rem',
        container: {
            sm: '1rem',
            md: '2rem',
            lg: '3rem',
            xl: '4rem',
        },
        input: {
            sm: '0.8rem',
        },
        grid: {
            sm: '0.6rem',
        },
    },
    sizes: {
        button: {
            max: 'max-content',
            min: 'min-content',
            xxs: '2.5rem',
            xs: '3.4rem',
            sm: '10rem',
            md: '20rem',
            lg: '28rem',
            full: '100%',
        },
        container: {
            xxs: '6rem',
            xs: '10rem',
            sm: '20rem',
            md: '30rem',
            lg: '35rem',
            xl: '50rem',
            full: '100%',
            footer: '32rem',
        },
        image: {
            logo: '2rem',
        },
        input: {
            sm: '2.25rem',
            md: '3rem',
            lg: '4rem',
            xl: '5rem',
            wXs: '10rem',
            wSm: '16rem',
            wMd: '22rem',
        },
    },
});
exports.default = theme;
