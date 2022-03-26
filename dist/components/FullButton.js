"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@chakra-ui/react");
var FullButton = function (_a) {
    var _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, handleClick = _a.handleClick, label = _a.label, size = _a.size, variant = _a.variant;
    return ((0, jsx_runtime_1.jsx)(react_1.Button, __assign({ variant: variant, size: size, onClick: handleClick, isDisabled: isDisabled }, { children: label })));
};
exports.FullButton = FullButton;
