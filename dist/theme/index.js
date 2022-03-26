"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var ButtonStyles_1 = __importDefault(require("./components/ButtonStyles"));
var theme = (0, react_1.extendTheme)({
    components: {
        Button: ButtonStyles_1.default,
    },
    colors: {
        brand: {
            primary: "#6AB528",
            secondary: "#3F5D25",
        },
        font: {
            primary: "#464646",
            secondary: "#818181",
        },
        button: {
            primary: "#2488C6",
            primaryHover: "#1D7AB4",
            secondary: "#F0F8F0",
            secondaryHover: "#DFEFF8",
            tertiaryHover: "#CBF0BD",
        },
    },
    fonts: {
        primaryFont: "Poppins",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    sizes: {
        container: {
            xs: "3rem",
            sm: "10rem",
            md: "20rem",
            lg: "28rem",
            full: "100%",
        },
    },
});
exports.default = theme;
