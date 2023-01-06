"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./styles/modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Modal = _ref => {
  let {
    messageModal,
    functionButton,
    messageBouton,
    image,
    ContentModalStyle,
    buttonStyle,
    ContainerModalStyle,
    ImageModalStyle
  } = _ref;
  const [showModal, setShowModal] = (0, _react.useState)(true);
  const handleClose = () => {
    setShowModal(false);
  };
  return showModal && /*#__PURE__*/_react.default.createElement("div", {
    className: "container-modal",
    style: ContainerModalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "background-modal"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: ContentModalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-cross-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-cross",
    onClick: handleClose
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "message-modal-button"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "image-modal",
    src: image,
    alt: "icone validation",
    style: ImageModalStyle
  })), /*#__PURE__*/_react.default.createElement("h1", {
    className: "message-modal"
  }, messageModal), /*#__PURE__*/_react.default.createElement("button", {
    className: "button-modal",
    onClick: functionButton,
    style: buttonStyle
  }, messageBouton))));
};
var _default = Modal;
exports.default = _default;