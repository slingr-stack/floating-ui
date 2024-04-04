"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoPlacement = exports.arrow = void 0;
exports.autoUpdate = autoUpdate;
exports.computePosition = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function get() {
    return _core.detectOverflow;
  }
});
exports.flip = void 0;
Object.defineProperty(exports, "getOverflowAncestors", {
  enumerable: true,
  get: function get() {
    return _dom.getOverflowAncestors;
  }
});
exports.limitShift = exports.inline = exports.hide = void 0;
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function get() {
    return _core.offset;
  }
});
exports.size = exports.shift = exports.platform = void 0;
var _core = require("@floating-ui/core");
var _utils = require("@floating-ui/utils");
var _dom = require("@floating-ui/utils/dom");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function getCssDimensions(element) {
  var css = (0, _dom.getComputedStyle)(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  var width = parseFloat(css.width) || 0;
  var height = parseFloat(css.height) || 0;
  var hasOffset = (0, _dom.isHTMLElement)(element);
  var offsetWidth = hasOffset ? element.offsetWidth : width;
  var offsetHeight = hasOffset ? element.offsetHeight : height;
  var shouldFallback = (0, _utils.round)(width) !== offsetWidth || (0, _utils.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !(0, _dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
  var domElement = unwrapElement(element);
  if (!(0, _dom.isHTMLElement)(domElement)) {
    return (0, _utils.createCoords)(1);
  }
  var rect = domElement.getBoundingClientRect();
  var _getCssDimensions = getCssDimensions(domElement),
    width = _getCssDimensions.width,
    height = _getCssDimensions.height,
    $ = _getCssDimensions.$;
  var x = ($ ? (0, _utils.round)(rect.width) : rect.width) / width;
  var y = ($ ? (0, _utils.round)(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}
var noOffsets = /*#__PURE__*/(0, _utils.createCoords)(0);
function getVisualOffsets(element) {
  var win = (0, _dom.getWindow)(element);
  if (!(0, _dom.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, _dom.getWindow)(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var domElement = unwrapElement(element);
  var scale = (0, _utils.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0, _dom.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  var visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, _utils.createCoords)(0);
  var x = (clientRect.left + visualOffsets.x) / scale.x;
  var y = (clientRect.top + visualOffsets.y) / scale.y;
  var width = clientRect.width / scale.x;
  var height = clientRect.height / scale.y;
  if (domElement) {
    var win = (0, _dom.getWindow)(domElement);
    var offsetWin = offsetParent && (0, _dom.isElement)(offsetParent) ? (0, _dom.getWindow)(offsetParent) : offsetParent;
    var currentWin = win;
    var currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      var iframeScale = getScale(currentIFrame);
      var iframeRect = currentIFrame.getBoundingClientRect();
      var css = (0, _dom.getComputedStyle)(currentIFrame);
      var left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      var top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0, _dom.getWindow)(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return (0, _core.rectToClientRect)({
    width: width,
    height: height,
    x: x,
    y: y
  });
}
var topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(floating) {
  return topLayerSelectors.some(function (selector) {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var elements = _ref.elements,
    rect = _ref.rect,
    offsetParent = _ref.offsetParent,
    strategy = _ref.strategy;
  var isFixed = strategy === 'fixed';
  var documentElement = (0, _dom.getDocumentElement)(offsetParent);
  var topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var scale = (0, _utils.createCoords)(1);
  var offsets = (0, _utils.createCoords)(0);
  var isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) {
      scroll = (0, _dom.getNodeScroll)(offsetParent);
    }
    if ((0, _dom.isHTMLElement)(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect((0, _dom.getDocumentElement)(element)).left + (0, _dom.getNodeScroll)(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  var html = (0, _dom.getDocumentElement)(element);
  var scroll = (0, _dom.getNodeScroll)(element);
  var body = element.ownerDocument.body;
  var width = (0, _utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  var height = (0, _utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;
  if ((0, _dom.getComputedStyle)(body).direction === 'rtl') {
    x += (0, _utils.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getViewportRect(element, strategy) {
  var win = (0, _dom.getWindow)(element);
  var html = (0, _dom.getDocumentElement)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var visualViewportBased = (0, _dom.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  var clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  var scale = (0, _dom.isHTMLElement)(element) ? getScale(element) : (0, _utils.createCoords)(1);
  var width = element.clientWidth * scale.x;
  var height = element.clientHeight * scale.y;
  var x = left * scale.x;
  var y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  var rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect((0, _dom.getDocumentElement)(element));
  } else if ((0, _dom.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    var visualOffsets = getVisualOffsets(element);
    rect = _objectSpread(_objectSpread({}, clippingAncestor), {}, {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return (0, _core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  var parentNode = (0, _dom.getParentNode)(element);
  if (parentNode === stopNode || !(0, _dom.isElement)(parentNode) || (0, _dom.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0, _dom.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  var cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  var result = (0, _dom.getOverflowAncestors)(element, [], false).filter(function (el) {
    return (0, _dom.isElement)(el) && (0, _dom.getNodeName)(el) !== 'body';
  });
  var currentContainingBlockComputedStyle = null;
  var elementIsFixed = (0, _dom.getComputedStyle)(element).position === 'fixed';
  var currentNode = elementIsFixed ? (0, _dom.getParentNode)(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while ((0, _dom.isElement)(currentNode) && !(0, _dom.isLastTraversableNode)(currentNode)) {
    var computedStyle = (0, _dom.getComputedStyle)(currentNode);
    var currentNodeIsContaining = (0, _dom.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    var shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || (0, _dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(function (ancestor) {
        return ancestor !== currentNode;
      });
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0, _dom.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  var element = _ref.element,
    boundary = _ref.boundary,
    rootBoundary = _ref.rootBoundary,
    strategy = _ref.strategy;
  var elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  var clippingAncestors = [].concat(_toConsumableArray(elementClippingAncestors), [rootBoundary]);
  var firstClippingAncestor = clippingAncestors[0];
  var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
    var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0, _utils.max)(rect.top, accRect.top);
    accRect.right = (0, _utils.min)(rect.right, accRect.right);
    accRect.bottom = (0, _utils.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _utils.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  var _getCssDimensions2 = getCssDimensions(element),
    width = _getCssDimensions2.width,
    height = _getCssDimensions2.height;
  return {
    width: width,
    height: height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
  var documentElement = (0, _dom.getDocumentElement)(offsetParent);
  var isFixed = strategy === 'fixed';
  var rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = (0, _utils.createCoords)(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) {
      scroll = (0, _dom.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      var offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  var x = rect.left + scroll.scrollLeft - offsets.x;
  var y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x,
    y: y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!(0, _dom.isHTMLElement)(element) || (0, _dom.getComputedStyle)(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  var window = (0, _dom.getWindow)(element);
  if (!(0, _dom.isHTMLElement)(element) || isTopLayer(element)) {
    return window;
  }
  var offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0, _dom.isTableElement)(offsetParent) && (0, _dom.getComputedStyle)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && ((0, _dom.getNodeName)(offsetParent) === 'html' || (0, _dom.getNodeName)(offsetParent) === 'body' && (0, _dom.getComputedStyle)(offsetParent).position === 'static' && !(0, _dom.isContainingBlock)(offsetParent))) {
    return window;
  }
  return offsetParent || (0, _dom.getContainingBlock)(element) || window;
}
var getElementRects = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var getOffsetParentFn, getDimensionsFn;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getOffsetParentFn = this.getOffsetParent || getOffsetParent;
          getDimensionsFn = this.getDimensions;
          _context.t0 = getRectRelativeToOffsetParent;
          _context.t1 = data.reference;
          _context.next = 6;
          return getOffsetParentFn(data.floating);
        case 6:
          _context.t2 = _context.sent;
          _context.t3 = data.strategy;
          _context.t4 = (0, _context.t0)(_context.t1, _context.t2, _context.t3);
          _context.t5 = _objectSpread;
          _context.t6 = {
            x: 0,
            y: 0
          };
          _context.next = 13;
          return getDimensionsFn(data.floating);
        case 13:
          _context.t7 = _context.sent;
          _context.t8 = (0, _context.t5)(_context.t6, _context.t7);
          return _context.abrupt("return", {
            reference: _context.t4,
            floating: _context.t8
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function getElementRects(_x) {
    return _ref2.apply(this, arguments);
  };
}();
function isRTL(element) {
  return (0, _dom.getComputedStyle)(element).direction === 'rtl';
}
var platform = exports.platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: _dom.getDocumentElement,
  getClippingRect: getClippingRect,
  getOffsetParent: getOffsetParent,
  getElementRects: getElementRects,
  getClientRects: getClientRects,
  getDimensions: getDimensions,
  getScale: getScale,
  isElement: _dom.isElement,
  isRTL: isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  var io = null;
  var timeoutId;
  var root = (0, _dom.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    var _element$getBoundingC = element.getBoundingClientRect(),
      left = _element$getBoundingC.left,
      top = _element$getBoundingC.top,
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    var insetTop = (0, _utils.floor)(top);
    var insetRight = (0, _utils.floor)(root.clientWidth - (left + width));
    var insetBottom = (0, _utils.floor)(root.clientHeight - (top + height));
    var insetLeft = (0, _utils.floor)(left);
    var rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    var options = {
      rootMargin: rootMargin,
      threshold: (0, _utils.max)(0, (0, _utils.min)(1, threshold)) || 1
    };
    var isFirstUpdate = true;
    function handleObserve(entries) {
      var ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(function () {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, _objectSpread(_objectSpread({}, options), {}, {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$ancestorScro = _options.ancestorScroll,
    ancestorScroll = _options$ancestorScro === void 0 ? true : _options$ancestorScro,
    _options$ancestorResi = _options.ancestorResize,
    ancestorResize = _options$ancestorResi === void 0 ? true : _options$ancestorResi,
    _options$elementResiz = _options.elementResize,
    elementResize = _options$elementResiz === void 0 ? typeof ResizeObserver === 'function' : _options$elementResiz,
    _options$layoutShift = _options.layoutShift,
    layoutShift = _options$layoutShift === void 0 ? typeof IntersectionObserver === 'function' : _options$layoutShift,
    _options$animationFra = _options.animationFrame,
    animationFrame = _options$animationFra === void 0 ? false : _options$animationFra;
  var referenceEl = unwrapElement(reference);
  var ancestors = ancestorScroll || ancestorResize ? [].concat(_toConsumableArray(referenceEl ? (0, _dom.getOverflowAncestors)(referenceEl) : []), _toConsumableArray((0, _dom.getOverflowAncestors)(floating))) : [];
  ancestors.forEach(function (ancestor) {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  var cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  var reobserveFrame = -1;
  var resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(function (_ref) {
      var _ref3 = _slicedToArray(_ref, 1),
        firstEntry = _ref3[0];
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(function () {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  var frameId;
  var prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    var nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return function () {
    var _resizeObserver2;
    ancestors.forEach(function (ancestor) {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var autoPlacement = exports.autoPlacement = _core.autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var shift = exports.shift = _core.shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
var flip = exports.flip = _core.flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
var size = exports.size = _core.size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
var hide = exports.hide = _core.hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow = exports.arrow = _core.arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
var inline = exports.inline = _core.inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var limitShift = exports.limitShift = _core.limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
var computePosition = exports.computePosition = function computePosition(reference, floating, options) {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  var cache = new Map();
  var mergedOptions = _objectSpread({
    platform: platform
  }, options);
  var platformWithCache = _objectSpread(_objectSpread({}, mergedOptions.platform), {}, {
    _c: cache
  });
  return (0, _core.computePosition)(reference, floating, _objectSpread(_objectSpread({}, mergedOptions), {}, {
    platform: platformWithCache
  }));
};