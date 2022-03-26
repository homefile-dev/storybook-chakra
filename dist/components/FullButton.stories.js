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
exports.Disabled = exports.Secondary = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FullButton_1 = require("./FullButton");
exports.default = {
    title: 'Buttons/FullButton',
    component: FullButton_1.FullButton,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(FullButton_1.FullButton, __assign({}, args))); };
var labelValue = 'ADD CLIENTS';
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: labelValue,
    variant: 'primary',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: labelValue,
    variant: 'secondary',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    label: 'Add Clients',
    variant: 'primary',
    isDisabled: true,
};
