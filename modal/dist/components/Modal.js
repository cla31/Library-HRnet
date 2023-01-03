"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles/modal.css");
const Modal = _ref => {
  let {
    message,
    closeModal
  } = _ref;
  const render = () => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100px',
        height: '100px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
      style: {
        fill: '#495811'
      }
    })));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-modal-button"
  }, render(), /*#__PURE__*/React.createElement("h1", {
    className: "message-modal"
  }, message), /*#__PURE__*/React.createElement("button", {
    className: "button-modal",
    onClick: closeModal
  }, "Close")));
};
var _default = Modal;
exports.default = _default;