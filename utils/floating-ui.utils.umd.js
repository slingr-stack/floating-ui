"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FloatingUIUtils = {}));
})(void 0, function (exports) {
  'use strict';

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */
  var sides = ['top', 'right', 'bottom', 'left'];
  var alignments = ['start', 'end'];
  var placements = /*#__PURE__*/sides.reduce(function (acc, side) {
    return acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]);
  }, []);
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = function createCoords(v) {
    return {
      x: v,
      y: v
    };
  };
  var oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  var oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    var alignment = getAlignment(placement);
    var alignmentAxis = getAlignmentAxis(placement);
    var length = getAxisLength(alignmentAxis);
    var mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, function (alignment) {
      return oppositeAlignmentMap[alignment];
    });
  }
  function getSideList(side, isStart, rtl) {
    var lr = ['left', 'right'];
    var rl = ['right', 'left'];
    var tb = ['top', 'bottom'];
    var bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    var alignment = getAlignment(placement);
    var list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(function (side) {
        return side + "-" + alignment;
      });
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (side) {
      return oppositeSideMap[side];
    });
  }
  function expandPaddingObject(padding) {
    return _objectSpread({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, padding);
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return _objectSpread(_objectSpread({}, rect), {}, {
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  exports.alignments = alignments;
  exports.clamp = clamp;
  exports.createCoords = createCoords;
  exports.evaluate = evaluate;
  exports.expandPaddingObject = expandPaddingObject;
  exports.floor = floor;
  exports.getAlignment = getAlignment;
  exports.getAlignmentAxis = getAlignmentAxis;
  exports.getAlignmentSides = getAlignmentSides;
  exports.getAxisLength = getAxisLength;
  exports.getExpandedPlacements = getExpandedPlacements;
  exports.getOppositeAlignmentPlacement = getOppositeAlignmentPlacement;
  exports.getOppositeAxis = getOppositeAxis;
  exports.getOppositeAxisPlacements = getOppositeAxisPlacements;
  exports.getOppositePlacement = getOppositePlacement;
  exports.getPaddingObject = getPaddingObject;
  exports.getSide = getSide;
  exports.getSideAxis = getSideAxis;
  exports.max = max;
  exports.min = min;
  exports.placements = placements;
  exports.rectToClientRect = rectToClientRect;
  exports.round = round;
  exports.sides = sides;
});