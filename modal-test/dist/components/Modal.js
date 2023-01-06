"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
    let {
        message,
        closeModal
    } = _ref;
    const render = () => {
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: {
                width: '100px',
                height: '100px'
            }
        }, /*#__PURE__*/ _react.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
        }, /*#__PURE__*/ _react.default.createElement("path", {
            d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
            style: {
                fill: '#495811'
            }
        })));
    };
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: "modal"
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "message-modal-button"
    }, render(), /*#__PURE__*/ _react.default.createElement("h1", {
        className: "message-modal"
    }, message), /*#__PURE__*/ _react.default.createElement("button", {
        className: "button-modal",
        onClick: closeModal
    }, "Close")));
};
var _default = Modal;
exports.default = _default;