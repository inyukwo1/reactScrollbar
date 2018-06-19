(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ScrollArea = __webpack_require__(1);
	
	var _ScrollArea2 = _interopRequireDefault(_ScrollArea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ScrollArea2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _lineHeight2 = __webpack_require__(13);
	
	var _lineHeight3 = _interopRequireDefault(_lineHeight2);
	
	var _reactMotion = __webpack_require__(15);
	
	var _utils = __webpack_require__(30);
	
	var _Scrollbar = __webpack_require__(31);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove',
	    keyPress: 'keypress'
	};
	
	var ScrollArea = function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        _classCallCheck(this, ScrollArea);
	
	        var _this = _possibleConstructorReturn(this, (ScrollArea.__proto__ || Object.getPrototypeOf(ScrollArea)).call(this, props));
	
	        _this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0,
	            cursor: "default"
	        };
	
	        _this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        _this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        _this.mousePressing = false;
	        _this.mouseDragging = false;
	
	        _this.bindedHandleWindowResize = _this.handleWindowResize.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight3.default)((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.props.onUpdate) {
	                this.props.onUpdate();
	            }
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                contentClassName = _props.contentClassName,
	                ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd || this.state.eventType === eventTypes.keyPress);
	
	            var scrollbarY = this.canScrollY() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedContentStyle },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            ref: function ref(x) {
	                                return _this2.wrapper = x;
	                            },
	                            className: classes,
	                            style: _extends({}, _this2.props.style, { cursor: _this2.state.cursor }),
	                            onWheel: _this2.handleWheel.bind(_this2)
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            {
	                                ref: function ref(x) {
	                                    return _this2.content = x;
	                                },
	                                style: _extends({}, _this2.props.contentStyle, style),
	                                className: contentClasses,
	                                onMouseDown: _this2.handleMouseDown.bind(_this2),
	                                onMouseMove: _this2.handleMouseMove.bind(_this2),
	                                onMouseUp: _this2.handleMouseUp.bind(_this2),
	                                onMouseLeave: _this2.handleMouseLeave.bind(_this2),
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2),
	                                onKeyDown: _this2.handleKeyDown.bind(_this2),
	                                tabIndex: _this2.props.focusableTabIndex
	                            },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            var screenX = e.screenX,
	                screenY = e.screenY;
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                clientY: screenY,
	                clientX: screenX,
	                timestamp: Date.now()
	            });
	            this.mousePressing = true;
	        }
	    }, {
	        key: 'handleMouseMove',
	        value: function handleMouseMove(e) {
	            if (!this.mousePressing) {
	                return;
	            }
	            if (this.canScroll()) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	            var screenX = e.screenX,
	                screenY = e.screenY;
	
	            var deltaY = this.eventPreviousValues.clientY - screenY;
	            var deltaX = this.eventPreviousValues.clientX - screenX;
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: deltaY,
	                deltaX: deltaX,
	                clientY: screenY,
	                clientX: screenX,
	                timestamp: Date.now()
	            });
	            this.mouseDragging = true;
	            this.setState({ cursor: "-webkit-grabbing" });
	            this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            if (this.mouseDragging == false) {
	                if (this.props.onMouseUp) {
	                    this.props.onMouseUp();
	                }
	                return;
	            }
	            if (this.canScroll()) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	            var _eventPreviousValues = this.eventPreviousValues,
	                deltaX = _eventPreviousValues.deltaX,
	                deltaY = _eventPreviousValues.deltaY,
	                timestamp = _eventPreviousValues.timestamp;
	
	            if (typeof deltaX === 'undefined') deltaX = 0;
	            if (typeof deltaY === 'undefined') deltaY = 0;
	            if (Date.now() - timestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	            this.mousePressing = false;
	            this.mouseDragging = false;
	            this.setState({ cursor: "default" });
	        }
	    }, {
	        key: 'handleMouseLeave',
	        value: function handleMouseLeave(e) {
	            this.mousePressing = false;
	            this.mouseDragging = false;
	            this.setState({ cursor: "default" });
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$ = touches[0],
	                    clientX = _touches$.clientX,
	                    clientY = _touches$.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                if (this.canScroll()) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                }
	                var _touches$2 = touches[0],
	                    clientX = _touches$2.clientX,
	                    clientY = _touches$2.clientY;
	
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues2 = this.eventPreviousValues,
	                deltaX = _eventPreviousValues2.deltaX,
	                deltaY = _eventPreviousValues2.deltaY,
	                timestamp = _eventPreviousValues2.timestamp;
	
	            if (typeof deltaX === 'undefined') deltaX = 0;
	            if (typeof deltaY === 'undefined') deltaY = 0;
	            if (Date.now() - timestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition || this.props.stopScrollPropagation) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	            this.focusContent();
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            // only handle if scroll area is in focus
	            if (e.target.tagName.toLowerCase() !== 'input' && e.target.tagName.toLowerCase() !== 'textarea' && !e.target.isContentEditable) {
	                var deltaY = 0;
	                var deltaX = 0;
	                var _lineHeight = this.lineHeightPx ? this.lineHeightPx : 10;
	
	                switch (e.keyCode) {
	                    case 33:
	                        // page up
	                        deltaY = this.state.containerHeight - _lineHeight;
	                        break;
	                    case 34:
	                        // page down
	                        deltaY = -this.state.containerHeight + _lineHeight;
	                        break;
	                    case 37:
	                        // left
	                        deltaX = _lineHeight;
	                        break;
	                    case 38:
	                        // up
	                        deltaY = _lineHeight;
	                        break;
	                    case 39:
	                        // right
	                        deltaX = -_lineHeight;
	                        break;
	                    case 40:
	                        // down
	                        deltaY = -_lineHeight;
	                        break;
	                }
	
	                // only compose new state if key code matches those above
	                if (deltaY !== 0 || deltaX !== 0) {
	                    var newState = this.composeNewState(deltaX, deltaY);
	
	                    e.preventDefault();
	                    e.stopPropagation();
	
	                    this.setStateFromEvent(newState, eventTypes.keyPress);
	                }
	            }
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            } else {
	                newState.topPosition = 0;
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'canScroll',
	        value: function canScroll() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            return this.canScrollY(state) || this.canScrollX(state);
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'focusContent',
	        value: function focusContent() {
	            if (this.content) {
	                (0, _utils.findDOMNode)(this.content).focus();
	            }
	        }
	    }]);
	
	    return ScrollArea;
	}(_react2.default.Component);
	
	exports.default = ScrollArea;
	
	
	ScrollArea.childContextTypes = {
	    scrollArea: _propTypes2.default.object
	};
	
	ScrollArea.propTypes = {
	    className: _propTypes2.default.string,
	    style: _propTypes2.default.object,
	    speed: _propTypes2.default.number,
	    contentClassName: _propTypes2.default.string,
	    contentStyle: _propTypes2.default.object,
	    vertical: _propTypes2.default.bool,
	    verticalContainerStyle: _propTypes2.default.object,
	    verticalScrollbarStyle: _propTypes2.default.object,
	    horizontal: _propTypes2.default.bool,
	    horizontalContainerStyle: _propTypes2.default.object,
	    horizontalScrollbarStyle: _propTypes2.default.object,
	    onScroll: _propTypes2.default.func,
	    contentWindow: _propTypes2.default.any,
	    ownerDocument: _propTypes2.default.any,
	    smoothScrolling: _propTypes2.default.bool,
	    minScrollSize: _propTypes2.default.number,
	    swapWheelAxes: _propTypes2.default.bool,
	    stopScrollPropagation: _propTypes2.default.bool,
	    focusableTabIndex: _propTypes2.default.number,
	    onUpdate: _propTypes2.default.func,
	    onMouseUp: _propTypes2.default.func
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" ? window : undefined,
	    ownerDocument: (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === "object" ? document : undefined,
	    focusableTabIndex: 1
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(12)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);
	var assign = __webpack_require__(9);
	
	var ReactPropTypesSecret = __webpack_require__(10);
	var checkPropTypes = __webpack_require__(11);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(10);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(10);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(14);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(16);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(24);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(25);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(27);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(28);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(18);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(29);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(17);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(18);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(19);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(20);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(21);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(23);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);
	
	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);
	
	  function Motion(props) {
	    var _this = this;
	
	    _classCallCheck(this, Motion);
	
	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };
	
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	
	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return Motion;
	})(_react2['default'].Component);
	
	exports['default'] = Motion;
	module.exports = exports['default'];
	
	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(22)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(17);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(18);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(19);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(20);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(21);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(23);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);
	
	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function StaggeredMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, StaggeredMotion);
	
	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;
	
	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }
	
	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];
	
	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }
	
	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };
	
	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return StaggeredMotion;
	})(_react2['default'].Component);
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	
	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(17);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(18);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(19);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(26);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(20);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(21);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(23);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);
	
	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);
	
	  function TransitionMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, TransitionMotion);
	
	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];
	
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }
	
	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };
	
	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }
	
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }
	
	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];
	
	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }
	
	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };
	
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	
	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return TransitionMotion;
	})(_react2['default'].Component);
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(28);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var react13 = isReact13(_react2.default);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2.default.findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
	        return x;
	    };
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactMotion = __webpack_require__(15);
	
	var _utils = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScrollBar = function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));
	
	        var newState = _this.calculateState(props);
	        _this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_this);
	        } else {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_this);
	        }
	
	        _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                smoothScrolling = _props.smoothScrolling,
	                isDragging = _props.isDragging,
	                type = _props.type,
	                scrollbarStyle = _props.scrollbarStyle,
	                containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedScrollStyles },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this2.handleScrollBarContainerClick.bind(_this2),
	                            ref: function ref(x) {
	                                return _this2.scrollbarContainer = x;
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: 'scrollbar',
	                            style: _extends({}, scrollbarStyle, style),
	                            onMouseDown: _this2.handleMouseDown.bind(_this2)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$g = this.scrollbarContainer.getBoundingClientRect(),
	                top = _scrollbarContainer$g.top,
	                left = _scrollbarContainer$g.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	
	            this.props.onFocus();
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            if (this.state.isDragging) {
	                e.preventDefault();
	                this.setState({ isDragging: false });
	            }
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	}(_react2.default.Component);
	
	ScrollBar.propTypes = {
	    onMove: _propTypes2.default.func,
	    onPositionChange: _propTypes2.default.func,
	    onFocus: _propTypes2.default.func,
	    realSize: _propTypes2.default.number,
	    containerSize: _propTypes2.default.number,
	    position: _propTypes2.default.number,
	    containerStyle: _propTypes2.default.object,
	    scrollbarStyle: _propTypes2.default.object,
	    type: _propTypes2.default.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _propTypes2.default.any,
	    smoothScrolling: _propTypes2.default.bool,
	    minScrollSize: _propTypes2.default.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	
	exports.default = ScrollBar;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMmIzOTRlMWQ2YzNjZDAyMDg0MiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhvdXRDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Njcm9sbEFyZWEuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xpbmUtaGVpZ2h0L2xpYi9saW5lLWhlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXB1dGVkLXN0eWxlL2Rpc3QvY29tcHV0ZWRTdHlsZS5jb21tb25qcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVhY3QtbW90aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRvWmVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL1N0YWdnZXJlZE1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvVHJhbnNpdGlvbk1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsYmFyLmpzeCJdLCJuYW1lcyI6WyJTY3JvbGxBcmVhIiwiZXZlbnRUeXBlcyIsIndoZWVsIiwiYXBpIiwidG91Y2giLCJ0b3VjaEVuZCIsIm1vdXNlbW92ZSIsImtleVByZXNzIiwicHJvcHMiLCJzdGF0ZSIsInRvcFBvc2l0aW9uIiwibGVmdFBvc2l0aW9uIiwicmVhbEhlaWdodCIsImNvbnRhaW5lckhlaWdodCIsInJlYWxXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiY3Vyc29yIiwic2Nyb2xsQXJlYSIsInJlZnJlc2giLCJzZXRTaXplc1RvU3RhdGUiLCJzY3JvbGxUb3AiLCJzY3JvbGxCb3R0b20iLCJzY3JvbGxZVG8iLCJwb3NpdGlvbiIsInNjcm9sbExlZnQiLCJzY3JvbGxSaWdodCIsInNjcm9sbFhUbyIsImV2bnRzUHJldmlvdXNWYWx1ZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImRlbHRhWCIsImRlbHRhWSIsIm1vdXNlUHJlc3NpbmciLCJtb3VzZURyYWdnaW5nIiwiYmluZGVkSGFuZGxlV2luZG93UmVzaXplIiwiaGFuZGxlV2luZG93UmVzaXplIiwiYmluZCIsImNvbnRlbnRXaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibGluZUhlaWdodFB4IiwiY29udGVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblVwZGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsIm93bmVyRG9jdW1lbnQiLCJ3aXRoTW90aW9uIiwic21vb3RoU2Nyb2xsaW5nIiwiZXZlbnRUeXBlIiwic2Nyb2xsYmFyWSIsImNhblNjcm9sbFkiLCJoYW5kbGVTY3JvbGxiYXJNb3ZlIiwiaGFuZGxlU2Nyb2xsYmFyWVBvc2l0aW9uQ2hhbmdlIiwidmVydGljYWxDb250YWluZXJTdHlsZSIsInZlcnRpY2FsU2Nyb2xsYmFyU3R5bGUiLCJtaW5TY3JvbGxTaXplIiwiZm9jdXNDb250ZW50Iiwic2Nyb2xsYmFyWCIsImNhblNjcm9sbFgiLCJoYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UiLCJob3Jpem9udGFsQ29udGFpbmVyU3R5bGUiLCJob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGUiLCJjbGFzc2VzIiwiY29udGVudENsYXNzZXMiLCJjb250ZW50U3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwic3ByaW5naWZpZWRDb250ZW50U3R5bGUiLCJ4Iiwid3JhcHBlciIsInN0eWxlIiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsImhhbmRsZUtleURvd24iLCJmb2N1c2FibGVUYWJJbmRleCIsIm5ld1N0YXRlIiwib25TY3JvbGwiLCJzZXRTdGF0ZSIsImUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImV2ZW50UHJldmlvdXNWYWx1ZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiY2FuU2Nyb2xsIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRTdGF0ZUZyb21FdmVudCIsImNvbXBvc2VOZXdTdGF0ZSIsIm9uTW91c2VVcCIsInRvdWNoZXMiLCJsZW5ndGgiLCJzd2FwV2hlZWxBeGVzIiwiZGVsdGFNb2RlIiwic3BlZWQiLCJzdG9wU2Nyb2xsUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImxpbmVIZWlnaHQiLCJrZXlDb2RlIiwiY29tcHV0ZVNpemVzIiwiZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZCIsImNvbXB1dGVUb3BQb3NpdGlvbiIsImNvbXB1dGVMZWZ0UG9zaXRpb24iLCJzaXplcyIsIm5ld1RvcFBvc2l0aW9uIiwibm9ybWFsaXplVG9wUG9zaXRpb24iLCJuZXdMZWZ0UG9zaXRpb24iLCJub3JtYWxpemVMZWZ0UG9zaXRpb24iLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInNjcm9sbGFibGVZIiwidmVydGljYWwiLCJzY3JvbGxhYmxlWCIsImhvcml6b250YWwiLCJib3R0b21Qb3NpdGlvbiIsInJpZ2h0UG9zaXRpb24iLCJmb2N1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY2hpbGRDb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImFueSIsImRlZmF1bHRQcm9wcyIsIndpbmRvdyIsInVuZGVmaW5lZCIsImRvY3VtZW50IiwiZmluZERPTU5vZGUiLCJ3YXJuQWJvdXRGdW5jdGlvbkNoaWxkIiwid2FybkFib3V0RWxlbWVudENoaWxkIiwicG9zaXRpdmVPclplcm8iLCJtb2RpZnlPYmpWYWx1ZXMiLCJpc1JlYWN0MTMiLCJyZWFjdDEzIiwiZGlkV2FybkFib3V0Q2hpbGQiLCJjb21wb25lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJvYmoiLCJtb2RpZmllciIsIm1vZGlmaWVkT2JqIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJ2ZXJzaW9uIiwicGFydHMiLCJzcGxpdCIsIm1ham9yIiwicGFyc2VJbnQiLCJtaW5vciIsIlNjcm9sbEJhciIsImNhbGN1bGF0ZVN0YXRlIiwic2Nyb2xsU2l6ZSIsImlzRHJhZ2dpbmciLCJsYXN0Q2xpZW50UG9zaXRpb24iLCJ0eXBlIiwiYmluZGVkSGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VNb3ZlRm9yVmVydGljYWwiLCJoYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsIiwiYmluZGVkSGFuZGxlTW91c2VVcCIsIm5leHRQcm9wcyIsInJlYWxDb250ZW50U2l6ZSIsImNvbnRhaW5lclNpemUiLCJjb250ZW50UG9zaXRpb24iLCJyZWxhdGl2ZVNpemUiLCJmcmFjdGlvbmFsUG9zaXRpb24iLCJjYWxjdWxhdGVGcmFjdGlvbmFsUG9zaXRpb24iLCJyZWFsU2l6ZSIsInByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUiLCJzY3JvbGxQb3NpdGlvbiIsIk1hdGgiLCJyb3VuZCIsInNjcm9sbGJhclN0eWxlIiwiY29udGFpbmVyU3R5bGUiLCJpc1Zvcml6aW9udGFsIiwiaXNWZXJ0aWNhbCIsInNjcm9sbFN0eWxlcyIsImNyZWF0ZVNjcm9sbFN0eWxlcyIsInNwcmluZ2lmaWVkU2Nyb2xsU3R5bGVzIiwic2Nyb2xsYmFyQ2xhc3NlcyIsImhhbmRsZVNjcm9sbEJhckNvbnRhaW5lckNsaWNrIiwic2Nyb2xsYmFyQ29udGFpbmVyIiwibXVsdGlwbGllciIsImNvbXB1dGVNdWx0aXBsaWVyIiwiY2xpZW50UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiY2xpZW50U2Nyb2xsUG9zaXRpb24iLCJvblBvc2l0aW9uQ2hhbmdlIiwib25Nb3ZlIiwib25Gb2N1cyIsImhlaWdodCIsIndpZHRoIiwib25lT2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O21CQUVlQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1DLGFBQWE7QUFDZkMsWUFBTyxPQURRO0FBRWZDLFVBQUssS0FGVTtBQUdmQyxZQUFPLE9BSFE7QUFJZkMsZUFBVSxVQUpLO0FBS2ZDLGdCQUFXLFdBTEk7QUFNZkMsZUFBVTtBQU5LLEVBQW5COztLQVNxQlAsVTs7O0FBQ2pCLHlCQUFZUSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkhBQ1RBLEtBRFM7O0FBRWYsZUFBS0MsS0FBTCxHQUFhO0FBQ1RDLDBCQUFhLENBREo7QUFFVEMsMkJBQWMsQ0FGTDtBQUdUQyx5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LEdBQWlDQSxRQUFqQyxHQUE0Q0QsU0FQckM7QUFRdEI1RCx3QkFBbUI7QUFSRyxFQUExQixDOzs7Ozs7QUNyakJBLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFFBQVE7QUFDckIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDViw4QkFBNkI7QUFDN0IsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCw2QkFBNEI7QUFDNUIsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LFVBRGY7QUFFSHBHLGlDQUFZLEtBQUsxRCxLQUFMLENBQVdjO0FBRnBCLGtCQUFQO0FBSUg7QUFDSjs7OzZDQUVrQjtBQUNmLG9CQUFRLEtBQUtmLEtBQUwsQ0FBV3lLLGFBQVosR0FBNkIsS0FBS3pLLEtBQUwsQ0FBVzhLLFFBQS9DO0FBQ0g7OztzQ0FFVztBQUNULG9CQUFPLEtBQUs5SyxLQUFMLENBQVdrSyxJQUFYLEtBQW9CLFVBQTNCO0FBQ0Y7Ozs7R0E3Sm1CMUMsZ0JBQU1DLFM7O0FBZ0s5Qm9DLFdBQVVoQyxTQUFWLEdBQXNCO0FBQ2xCd0UsYUFBUTFFLG9CQUFVTSxJQURBO0FBRWxCbUUsdUJBQWtCekUsb0JBQVVNLElBRlY7QUFHbEJxRSxjQUFTM0Usb0JBQVVNLElBSEQ7QUFJbEI2QyxlQUFVbkQsb0JBQVVJLE1BSkY7QUFLbEIwQyxvQkFBZTlDLG9CQUFVSSxNQUxQO0FBTWxCaEgsZUFBVTRHLG9CQUFVSSxNQU5GO0FBT2xCcUQscUJBQWdCekQsb0JBQVVDLE1BUFI7QUFRbEJ1RCxxQkFBZ0J4RCxvQkFBVUMsTUFSUjtBQVNsQnNDLFdBQU12QyxvQkFBVThFLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUFoQixDQVRZO0FBVWxCbkssb0JBQWVxRixvQkFBVU8sR0FWUDtBQVdsQjFGLHNCQUFpQm1GLG9CQUFVSyxJQVhUO0FBWWxCaEYsb0JBQWUyRSxvQkFBVUk7QUFaUCxFQUF0Qjs7QUFlQThCLFdBQVUxQixZQUFWLEdBQXlCO0FBQ3JCK0IsV0FBTyxVQURjO0FBRXJCMUgsc0JBQWlCO0FBRkksRUFBekI7O21CQUtlcUgsUyIsImZpbGUiOiJlMmIzOTRlMWQ2YzNjZDAyMDg0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNjcm9sbEFyZWFcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2Nyb2xsQXJlYVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUyYjM5NGUxZDZjM2NkMDIwODQyIiwiaW1wb3J0IFNjcm9sbEFyZWEgZnJvbSAnLi9TY3JvbGxBcmVhLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEFyZWE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1Njcm9sbEFyZWFXaXRob3V0Q3NzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbGluZUhlaWdodCBmcm9tICdsaW5lLWhlaWdodCc7XG5pbXBvcnQgeyBNb3Rpb24sIHNwcmluZyB9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmltcG9ydCB7XG4gIGZpbmRET01Ob2RlLCB3YXJuQWJvdXRGdW5jdGlvbkNoaWxkLCB3YXJuQWJvdXRFbGVtZW50Q2hpbGQsIHBvc2l0aXZlT3JaZXJvLCBtb2RpZnlPYmpWYWx1ZXMsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICcuL1Njcm9sbGJhcic7XG5cbmNvbnN0IGV2ZW50VHlwZXMgPSB7XG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgYXBpOiAnYXBpJyxcbiAgICB0b3VjaDogJ3RvdWNoJyxcbiAgICB0b3VjaEVuZDogJ3RvdWNoRW5kJyxcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGtleVByZXNzOiAna2V5cHJlc3MnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b3BQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IDAsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgICByZWFsV2lkdGg6IDAsXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMCxcbiAgICAgICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbEFyZWEgPSB7XG4gICAgICAgICAgICByZWZyZXNoOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbEJvdHRvbTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsWVRvOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFlUbyhwb3NpdGlvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFJpZ2h0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFhUbzogKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxYVG8ocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZXZudHNQcmV2aW91c1ZhbHVlcyA9IHtcbiAgICAgICAgICAgIGNsaWVudFg6IDAsXG4gICAgICAgICAgICBjbGllbnRZOiAwLFxuICAgICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgICAgZGVsdGFZOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb3VzZVByZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplID0gdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JvbGxBcmVhOiB0aGlzLnNjcm9sbEFyZWFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGluZUhlaWdodFB4ID0gbGluZUhlaWdodChmaW5kRE9NTm9kZSh0aGlzLmNvbnRlbnQpKTtcbiAgICAgICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjbGFzc05hbWUsIGNvbnRlbnRDbGFzc05hbWUsIG93bmVyRG9jdW1lbnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHdpdGhNb3Rpb24gPSB0aGlzLnByb3BzLnNtb290aFNjcm9sbGluZyAmJlxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLndoZWVsIHx8IHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLmFwaSB8fCB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy50b3VjaEVuZCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ldmVudFR5cGUgPT09IGV2ZW50VHlwZXMua2V5UHJlc3MpO1xuXG4gICAgICAgIGxldCBzY3JvbGxiYXJZID0gdGhpcy5jYW5TY3JvbGxZKCkgPyAoXG4gICAgICAgICAgICA8U2Nyb2xsQmFyXG4gICAgICAgICAgICAgICAgb3duZXJEb2N1bWVudD17b3duZXJEb2N1bWVudH1cbiAgICAgICAgICAgICAgICByZWFsU2l6ZT17dGhpcy5zdGF0ZS5yZWFsSGVpZ2h0fVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU9e3RoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt0aGlzLnN0YXRlLnRvcFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJZUG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy52ZXJ0aWNhbENvbnRhaW5lclN0eWxlfVxuICAgICAgICAgICAgICAgIHNjcm9sbGJhclN0eWxlPXt0aGlzLnByb3BzLnZlcnRpY2FsU2Nyb2xsYmFyU3R5bGV9XG4gICAgICAgICAgICAgICAgc21vb3RoU2Nyb2xsaW5nPXt3aXRoTW90aW9ufVxuICAgICAgICAgICAgICAgIG1pblNjcm9sbFNpemU9e3RoaXMucHJvcHMubWluU2Nyb2xsU2l6ZX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZvY3VzQ29udGVudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgbGV0IHNjcm9sbGJhclggPSB0aGlzLmNhblNjcm9sbFgoKSA/IChcbiAgICAgICAgICAgIDxTY3JvbGxCYXJcbiAgICAgICAgICAgICAgICBvd25lckRvY3VtZW50PXtvd25lckRvY3VtZW50fVxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxXaWR0aH1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTaXplPXt0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRofVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyWFBvc2l0aW9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9e3RoaXMucHJvcHMuaG9yaXpvbnRhbENvbnRhaW5lclN0eWxlfVxuICAgICAgICAgICAgICAgIHNjcm9sbGJhclN0eWxlPXt0aGlzLnByb3BzLmhvcml6b250YWxTY3JvbGxiYXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc9e3dpdGhNb3Rpb259XG4gICAgICAgICAgICAgICAgbWluU2Nyb2xsU2l6ZT17dGhpcy5wcm9wcy5taW5TY3JvbGxTaXplfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZm9jdXNDb250ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWxcIi8+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSAnc2Nyb2xsYXJlYSAnICsgKGNsYXNzTmFtZSB8fCAnJyk7XG4gICAgICAgIGxldCBjb250ZW50Q2xhc3NlcyA9ICdzY3JvbGxhcmVhLWNvbnRlbnQgJyArIChjb250ZW50Q2xhc3NOYW1lIHx8ICcnKTtcblxuICAgICAgICBsZXQgY29udGVudFN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAtdGhpcy5zdGF0ZS50b3BQb3NpdGlvbixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC10aGlzLnN0YXRlLmxlZnRQb3NpdGlvblxuICAgICAgICB9O1xuICAgICAgICBsZXQgc3ByaW5naWZpZWRDb250ZW50U3R5bGUgPSB3aXRoTW90aW9uID8gbW9kaWZ5T2JqVmFsdWVzKGNvbnRlbnRTdHlsZSwgeCA9PiBzcHJpbmcoeCkpIDogY29udGVudFN0eWxlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW90aW9uIHN0eWxlPXtzcHJpbmdpZmllZENvbnRlbnRTdHlsZX0+XG4gICAgICAgICAgICAgICAgeyBzdHlsZSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy53cmFwcGVyID0geH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Li4udGhpcy5wcm9wcy5zdHlsZSwgY3Vyc29yOnRoaXMuc3RhdGUuY3Vyc29yfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmNvbnRlbnQgPSB4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMuY29udGVudFN0eWxlLCAuLi5zdHlsZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29udGVudENsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMuZm9jdXNhYmxlVGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2Nyb2xsYmFyWX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJYfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZSwgZXZlbnRUeXBlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICAgICAgbGV0IHtzY3JlZW5YLCBzY3JlZW5ZfSA9IGU7XG4gICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyxcbiAgICAgICAgICAgIGNsaWVudFk6IHNjcmVlblksXG4gICAgICAgICAgICBjbGllbnRYOiBzY3JlZW5YLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW91c2VQcmVzc2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlUHJlc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYW5TY3JvbGwoKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQge3NjcmVlblgsIHNjcmVlbll9ID0gZTtcbiAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRZIC0gc2NyZWVuWTtcbiAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRYIC0gc2NyZWVuWDtcblxuICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICBkZWx0YVksXG4gICAgICAgICAgICBkZWx0YVgsXG4gICAgICAgICAgICBjbGllbnRZOiBzY3JlZW5ZLFxuICAgICAgICAgICAgY2xpZW50WDogc2NyZWVuWCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vdXNlRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJzb3I6XCItd2Via2l0LWdyYWJiaW5nXCJ9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYLCAtZGVsdGFZKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VVcChlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlRHJhZ2dpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHtkZWx0YVgsIGRlbHRhWSwgdGltZXN0YW1wfSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcztcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnKSBkZWx0YVggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIGRlbHRhWSA9PT0gJ3VuZGVmaW5lZCcpIGRlbHRhWSA9IDA7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gdGltZXN0YW1wIDwgMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVggKiAxMCwgLWRlbHRhWSAqIDEwKSwgZXZlbnRUeXBlcy50b3VjaEVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb3VzZVByZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJzb3I6XCJkZWZhdWx0XCJ9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZVByZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJzb3I6XCJkZWZhdWx0XCJ9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IHRvdWNoZXNbMF07XG4gICAgICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBsZXQge3RvdWNoZXN9ID0gZTtcbiAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5TY3JvbGwoKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IHRvdWNoZXNbMF07XG5cbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMuY2xpZW50WSAtIGNsaWVudFk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLmNsaWVudFggLSBjbGllbnRYO1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgICAgIGRlbHRhWSxcbiAgICAgICAgICAgICAgICBkZWx0YVgsXG4gICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYLCAtZGVsdGFZKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgICAgIGxldCB7ZGVsdGFYLCBkZWx0YVksIHRpbWVzdGFtcH0gPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXM7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSAndW5kZWZpbmVkJykgZGVsdGFYID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSBkZWx0YVkgPSAwO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcCA8IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYICogMTAsIC1kZWx0YVkgKiAxMCksIGV2ZW50VHlwZXMudG91Y2hFbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgZGVsdGFZOiAwLFxuICAgICAgICAgICAgZGVsdGFYOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyTW92ZShkZWx0YVksIGRlbHRhWCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyWFBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxiYXJZUG9zaXRpb25DaGFuZ2UocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVdoZWVsKGUpIHtcbiAgICAgICAgbGV0IGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgICBsZXQgZGVsdGFYID0gZS5kZWx0YVg7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3dhcFdoZWVsQXhlcykge1xuICAgICAgICAgICAgW2RlbHRhWSwgZGVsdGFYXSA9IFtkZWx0YVgsIGRlbHRhWV07XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBXaGVlbEV2ZW50LmRlbHRhTW9kZSBjYW4gZGlmZmVyIGJldHdlZW4gYnJvd3NlcnMgYW5kIG11c3QgYmUgbm9ybWFsaXplZFxuICAgICAgICAgKiBlLmRlbHRhTW9kZSA9PT0gMDogVGhlIGRlbHRhIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGluIHBpeGVsc1xuICAgICAgICAgKiBlLmRlbHRhTW9kZSA9PT0gMTogVGhlIGRlbHRhIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGluIGxpbmVzXG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50L2RlbHRhTW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLmxpbmVIZWlnaHRQeDtcbiAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIHRoaXMubGluZUhlaWdodFB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsdGFZID0gZGVsdGFZICogdGhpcy5wcm9wcy5zcGVlZDtcbiAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5wcm9wcy5zcGVlZDtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYLCAtZGVsdGFZKTtcblxuICAgICAgICBpZiAoKG5ld1N0YXRlLnRvcFBvc2l0aW9uICYmIHRoaXMuc3RhdGUudG9wUG9zaXRpb24gIT09IG5ld1N0YXRlLnRvcFBvc2l0aW9uKSB8fFxuICAgICAgICAgICAgKG5ld1N0YXRlLmxlZnRQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9wU2Nyb2xsUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlLCBldmVudFR5cGVzLndoZWVsKTtcbiAgICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICAgICAgLy8gb25seSBoYW5kbGUgaWYgc2Nyb2xsIGFyZWEgaXMgaW4gZm9jdXNcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0JyAmJiBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZXh0YXJlYScgJiYgIWUudGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHRQeCA/IHRoaXMubGluZUhlaWdodFB4IDogMTA7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSB0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodCAtIGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSAtdGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHQgKyBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCA9IC1saW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IC1saW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSBjb21wb3NlIG5ldyBzdGF0ZSBpZiBrZXkgY29kZSBtYXRjaGVzIHRob3NlIGFib3ZlXG4gICAgICAgICAgICBpZiAoZGVsdGFZICE9PSAwIHx8IGRlbHRhWCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKTtcblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlcy5rZXlQcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jb21wdXRlVG9wUG9zaXRpb24oZGVsdGFZLCBuZXdTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U3RhdGUudG9wUG9zaXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24gPSB0aGlzLmNvbXB1dGVMZWZ0UG9zaXRpb24oZGVsdGFYLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgc2l6ZXMpIHtcbiAgICAgICAgbGV0IG5ld1RvcFBvc2l0aW9uID0gdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiAtIGRlbHRhWTtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplVG9wUG9zaXRpb24obmV3VG9wUG9zaXRpb24sIHNpemVzKTtcbiAgICB9XG5cbiAgICBjb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgc2l6ZXMpIHtcbiAgICAgICAgbGV0IG5ld0xlZnRQb3NpdGlvbiA9IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uIC0gZGVsdGFYO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplVG9wUG9zaXRpb24obmV3VG9wUG9zaXRpb24sIHNpemVzKSB7XG4gICAgICAgIGlmIChuZXdUb3BQb3NpdGlvbiA+IHNpemVzLnJlYWxIZWlnaHQgLSBzaXplcy5jb250YWluZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIG5ld1RvcFBvc2l0aW9uID0gc2l6ZXMucmVhbEhlaWdodCAtIHNpemVzLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VG9wUG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICBuZXdUb3BQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RvcFBvc2l0aW9uO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZUxlZnRQb3NpdGlvbihuZXdMZWZ0UG9zaXRpb24sIHNpemVzKSB7XG4gICAgICAgIGlmIChuZXdMZWZ0UG9zaXRpb24gPiBzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gc2l6ZXMucmVhbFdpZHRoIC0gc2l6ZXMuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3TGVmdFBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdMZWZ0UG9zaXRpb247XG4gICAgfVxuXG4gICAgY29tcHV0ZVNpemVzKCkge1xuICAgICAgICBsZXQgcmVhbEhlaWdodCA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgcmVhbFdpZHRoID0gdGhpcy5jb250ZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IHJlYWxIZWlnaHQsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgICAgIHJlYWxXaWR0aDogcmVhbFdpZHRoLFxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U2l6ZXNUb1N0YXRlKCkge1xuICAgICAgICBsZXQgc2l6ZXMgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICBpZiAoc2l6ZXMucmVhbEhlaWdodCAhPT0gdGhpcy5zdGF0ZS5yZWFsSGVpZ2h0IHx8IHNpemVzLnJlYWxXaWR0aCAhPT0gdGhpcy5zdGF0ZS5yZWFsV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKHNpemVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb3AoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKDApO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8oKHRoaXMuc3RhdGUucmVhbEhlaWdodCAtIHRoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxYVG8oMCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKCh0aGlzLnN0YXRlLnJlYWxXaWR0aCAtIHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGgpKTtcbiAgICB9XG5cbiAgICBzY3JvbGxZVG8odG9wUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWSgpKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZVRvcFBvc2l0aW9uKHRvcFBvc2l0aW9uLCB0aGlzLmNvbXB1dGVTaXplcygpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQoe3RvcFBvc2l0aW9uOiBwb3NpdGlvbn0sIGV2ZW50VHlwZXMuYXBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFhUbyhsZWZ0UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWCgpKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZUxlZnRQb3NpdGlvbihsZWZ0UG9zaXRpb24sIHRoaXMuY29tcHV0ZVNpemVzKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh7bGVmdFBvc2l0aW9uOiBwb3NpdGlvbn0sIGV2ZW50VHlwZXMuYXBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNjcm9sbFkoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWSA9IHN0YXRlLnJlYWxIZWlnaHQgPiBzdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIHJldHVybiBzY3JvbGxhYmxlWSAmJiB0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIH1cblxuICAgIGNhblNjcm9sbFgoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWCA9IHN0YXRlLnJlYWxXaWR0aCA+IHN0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIGNhblNjcm9sbChzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuU2Nyb2xsWShzdGF0ZSkgfHwgdGhpcy5jYW5TY3JvbGxYKHN0YXRlKTtcbiAgICB9XG5cbiAgICBnZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKSB7XG4gICAgICAgIGxldCBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhib3R0b21Qb3NpdGlvbikgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJpZ2h0UG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsV2lkdGggLSBuZXdTdGF0ZS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uID49IHJpZ2h0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhyaWdodFBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZm9jdXNDb250ZW50KCkge1xuICAgICAgICBpZih0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGZpbmRET01Ob2RlKHRoaXMuY29udGVudCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU2Nyb2xsQXJlYS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBzY3JvbGxBcmVhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuU2Nyb2xsQXJlYS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGVudFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2ZXJ0aWNhbENvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZlcnRpY2FsU2Nyb2xsYmFyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaG9yaXpvbnRhbENvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhvcml6b250YWxTY3JvbGxiYXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29udGVudFdpbmRvdzogUHJvcFR5cGVzLmFueSxcbiAgICBvd25lckRvY3VtZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIHNtb290aFNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWluU2Nyb2xsU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzd2FwV2hlZWxBeGVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdG9wU2Nyb2xsUHJvcGFnYXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgIGZvY3VzYWJsZVRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlVXA6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5TY3JvbGxBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcGVlZDogMSxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgIHNtb290aFNjcm9sbGluZzogZmFsc2UsXG4gICAgc3dhcFdoZWVsQXhlczogZmFsc2UsXG4gICAgY29udGVudFdpbmRvdzogKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpID8gd2luZG93IDogdW5kZWZpbmVkLFxuICAgIG93bmVyRG9jdW1lbnQ6ICh0eXBlb2YgZG9jdW1lbnQgPT09IFwib2JqZWN0XCIpID8gZG9jdW1lbnQgOiB1bmRlZmluZWQsXG4gICAgZm9jdXNhYmxlVGFiSW5kZXg6IDEsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1Njcm9sbEFyZWEuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL34vZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBMb2FkIGluIGRlcGVuZGVuY2llc1xudmFyIGNvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCdjb21wdXRlZC1zdHlsZScpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgYGxpbmUtaGVpZ2h0YCBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBjYWxjdWxhdGUgbGluZSBoZWlnaHQgb2YuIE11c3QgYmUgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGBsaW5lLWhlaWdodGAgb2YgdGhlIGVsZW1lbnQgaW4gcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGxpbmVIZWlnaHQobm9kZSkge1xuICAvLyBHcmFiIHRoZSBsaW5lLWhlaWdodCB2aWEgc3R5bGVcbiAgdmFyIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKSxcbiAgICAgIGxuSGVpZ2h0ID0gcGFyc2VGbG9hdChsbkhlaWdodFN0ciwgMTApO1xuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGRpZCBub3QgY29udGFpbiBhIHVuaXQgKGkuZS4gaXQgd2FzIG51bWVyaWMpLCBjb252ZXJ0IGl0IHRvIGVtcyAoZS5nLiAnMi4zJyA9PT0gJzIuM2VtJylcbiAgaWYgKGxuSGVpZ2h0U3RyID09PSBsbkhlaWdodCArICcnKSB7XG4gICAgLy8gU2F2ZSB0aGUgb2xkIGxpbmVIZWlnaHQgc3R5bGUgYW5kIHVwZGF0ZSB0aGUgZW0gdW5pdCB0byB0aGUgZWxlbWVudFxuICAgIHZhciBfbG5IZWlnaHRTdHlsZSA9IG5vZGUuc3R5bGUubGluZUhlaWdodDtcbiAgICBub2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBsbkhlaWdodFN0ciArICdlbSc7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVtIGJhc2VkIGhlaWdodFxuICAgIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKTtcbiAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAgIC8vIFJldmVydCB0aGUgbGluZUhlaWdodCBzdHlsZVxuICAgIGlmIChfbG5IZWlnaHRTdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gX2xuSGVpZ2h0U3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHB0YCwgY29udmVydCBpdCB0byBwaXhlbHMgKDRweCBmb3IgM3B0KVxuICAvLyBERVY6IGBlbWAgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBgcHRgIGluIElFNlxuICAvLyBDb252ZXJzaW9uIHJhdGlvIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aFxuICBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZigncHQnKSAhPT0gLTEpIHtcbiAgICBsbkhlaWdodCAqPSA0O1xuICAgIGxuSGVpZ2h0IC89IDM7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignbW0nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgbW1gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMjUuNG1tKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDI1LjQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignY20nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgY21gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMi41NGNtKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDIuNTQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignaW4nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgaW5gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMWluKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3BjJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHBjYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDEycHQgZm9yIDFwYylcbiAgICBsbkhlaWdodCAqPSAxNjtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIG91ciBjb21wdXRhdGlvblxuICBsbkhlaWdodCA9IE1hdGgucm91bmQobG5IZWlnaHQpO1xuXG4gIC8vIElmIHRoZSBsaW5lLWhlaWdodCBpcyBcIm5vcm1hbFwiLCBjYWxjdWxhdGUgYnkgZm9udC1zaXplXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gJ25vcm1hbCcpIHtcbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgbm9kZVxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUsXG4gICAgICAgIF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgX25vZGUuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG5cbiAgICAvLyBTZXQgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgIHZhciBmb250U2l6ZVN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2ZvbnQtc2l6ZScpO1xuICAgIF9ub2RlLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVTdHI7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChfbm9kZSk7XG5cbiAgICAvLyBBc3N1bWUgdGhlIGxpbmUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHRoZSBoZWlnaHRcbiAgICB2YXIgaGVpZ2h0ID0gX25vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxuSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLy8gUmVtb3ZlIG91ciBjaGlsZCBmcm9tIHRoZSBET01cbiAgICBib2R5LnJlbW92ZUNoaWxkKF9ub2RlKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHRcbiAgcmV0dXJuIGxuSGVpZ2h0O1xufVxuXG4vLyBFeHBvcnQgbGluZUhlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBsaW5lSGVpZ2h0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgY29kZSBoYXMgYmVlbiByZWZhY3RvcmVkIGZvciAxNDAgYnl0ZXNcbi8vIFlvdSBjYW4gc2VlIHRoZSBvcmlnaW5hbCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vdHdvbGZzb24vY29tcHV0ZWRTdHlsZS9ibG9iLzA0Y2QxZGEyZTMwZmE0NTg0NGY5NWY1Y2IxYWM4OThlOWI5ZWYwNTAvbGliL2NvbXB1dGVkU3R5bGUuanNcbnZhciBjb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsLCBwcm9wLCBnZXRDb21wdXRlZFN0eWxlKSB7XG4gIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcblxuICAvLyBJbiBvbmUgZmVsbCBzd29vcFxuICByZXR1cm4gKFxuICAgIC8vIElmIHdlIGhhdmUgZ2V0Q29tcHV0ZWRTdHlsZVxuICAgIGdldENvbXB1dGVkU3R5bGUgP1xuICAgICAgLy8gUXVlcnkgaXRcbiAgICAgIC8vIFRPRE86IEZyb20gQ1NTLVF1ZXJ5IG5vdGVzLCB3ZSBtaWdodCBuZWVkIChub2RlLCBudWxsKSBmb3IgRkZcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZWwpIDpcblxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGluIElFIGFuZCB1c2UgY3VycmVudFN0eWxlXG4gICAgICBlbC5jdXJyZW50U3R5bGVcbiAgKVtcbiAgICAvLyBTd2l0Y2ggdG8gY2FtZWxDYXNlIGZvciBDU1NPTVxuICAgIC8vIERFVjogR3JhYmJlZCBmcm9tIGpRdWVyeVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY3NzLmpzI0wxOTEtTDE5NFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY29yZS5qcyNMNTkzLUw1OTdcbiAgICBwcm9wLnJlcGxhY2UoLy0oXFx3KS9naSwgZnVuY3Rpb24gKHdvcmQsIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pXG4gIF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXB1dGVkU3R5bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZShvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9ialsnZGVmYXVsdCddIDogb2JqOyB9XG5cbnZhciBfTW90aW9uID0gcmVxdWlyZSgnLi9Nb3Rpb24nKTtcblxuZXhwb3J0cy5Nb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmUoX01vdGlvbik7XG5cbnZhciBfU3RhZ2dlcmVkTW90aW9uID0gcmVxdWlyZSgnLi9TdGFnZ2VyZWRNb3Rpb24nKTtcblxuZXhwb3J0cy5TdGFnZ2VyZWRNb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmUoX1N0YWdnZXJlZE1vdGlvbik7XG5cbnZhciBfVHJhbnNpdGlvbk1vdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbk1vdGlvbicpO1xuXG5leHBvcnRzLlRyYW5zaXRpb25Nb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmUoX1RyYW5zaXRpb25Nb3Rpb24pO1xuXG52YXIgX3NwcmluZyA9IHJlcXVpcmUoJy4vc3ByaW5nJyk7XG5cbmV4cG9ydHMuc3ByaW5nID0gX2ludGVyb3BSZXF1aXJlKF9zcHJpbmcpO1xuXG52YXIgX3ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxuZXhwb3J0cy5wcmVzZXRzID0gX2ludGVyb3BSZXF1aXJlKF9wcmVzZXRzKTtcblxudmFyIF9zdHJpcFN0eWxlID0gcmVxdWlyZSgnLi9zdHJpcFN0eWxlJyk7XG5cbmV4cG9ydHMuc3RyaXBTdHlsZSA9IF9pbnRlcm9wUmVxdWlyZShfc3RyaXBTdHlsZSk7XG5cbi8vIGRlcHJlY2F0ZWQsIGR1bW15IHdhcm5pbmcgZnVuY3Rpb25cblxudmFyIF9yZW9yZGVyS2V5cyA9IHJlcXVpcmUoJy4vcmVvcmRlcktleXMnKTtcblxuZXhwb3J0cy5yZW9yZGVyS2V5cyA9IF9pbnRlcm9wUmVxdWlyZShfcmVvcmRlcktleXMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbnZhciBNb3Rpb24gPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE1vdGlvbiwgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuICAgIHZhbHVlOiB7XG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIpLFxuICAgICAgc3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdF0pKS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25SZXN0OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbihwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW90aW9uKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdGhpcy53YXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICB0aGlzLnByZXZUaW1lID0gMDtcbiAgICB0aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBudWxsO1xuXG4gICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSA9IGZ1bmN0aW9uIChkZXN0U3R5bGUpIHtcbiAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuICAgICAgdmFyIF9zdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IF9zdGF0ZS5jdXJyZW50U3R5bGU7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0gX3N0YXRlLmN1cnJlbnRWZWxvY2l0eTtcbiAgICAgIHZhciBsYXN0SWRlYWxTdHlsZSA9IF9zdGF0ZS5sYXN0SWRlYWxTdHlsZTtcbiAgICAgIHZhciBsYXN0SWRlYWxWZWxvY2l0eSA9IF9zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0eTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGRlc3RTdHlsZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXN0U3R5bGUsIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZVZhbHVlID0gZGVzdFN0eWxlW2tleV07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50U3R5bGUgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlKTtcbiAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0eSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdHkpO1xuICAgICAgICAgICAgbGFzdElkZWFsU3R5bGUgPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsU3R5bGUpO1xuICAgICAgICAgICAgbGFzdElkZWFsVmVsb2NpdHkgPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgbGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgbGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgY3VycmVudFN0eWxlOiBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eTogY3VycmVudFZlbG9jaXR5LCBsYXN0SWRlYWxTdHlsZTogbGFzdElkZWFsU3R5bGUsIGxhc3RJZGVhbFZlbG9jaXR5OiBsYXN0SWRlYWxWZWxvY2l0eSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgICAgLy8gY2FsbCBjYj8gTm8sIG90aGVyd2lzZSBhY2NpZGVudGFsIHBhcmVudCByZXJlbmRlciBjYXVzZXMgY2IgdHJpZ2dlclxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBfcmFmMlsnZGVmYXVsdCddKGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgICAgICB2YXIgcHJvcHNTdHlsZSA9IF90aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBpZiAoX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10oX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlLCBwcm9wc1N0eWxlLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdHkpKSB7XG4gICAgICAgICAgaWYgKF90aGlzLndhc0FuaW1hdGluZyAmJiBfdGhpcy5wcm9wcy5vblJlc3QpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uUmVzdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMud2FzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy53YXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRpbWVzdGFtcCB8fCBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRUaW1lIC0gX3RoaXMucHJldlRpbWU7XG4gICAgICAgIF90aGlzLnByZXZUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IF90aGlzLmFjY3VtdWxhdGVkVGltZSArIHRpbWVEZWx0YTtcbiAgICAgICAgLy8gbW9yZSB0aGFuIDEwIGZyYW1lcz8gcHJvbGx5IHN3aXRjaGVkIGJyb3dzZXIgdGFiLiBSZXN0YXJ0XG4gICAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPiBtc1BlckZyYW1lICogMTApIHtcbiAgICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA9PT0gMCkge1xuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50RnJhbWVDb21wbGV0aW9uID0gKF90aGlzLmFjY3VtdWxhdGVkVGltZSAtIE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSkgKiBtc1BlckZyYW1lKSAvIG1zUGVyRnJhbWU7XG4gICAgICAgIHZhciBmcmFtZXNUb0NhdGNoVXAgPSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpO1xuXG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzU3R5bGUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wc1N0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHByb3BzU3R5bGVba2V5XTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlW2tleV07XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXR5W2tleV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lc1RvQ2F0Y2hVcDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBfc3RlcHBlciA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBfc3RlcHBlclswXTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF9zdGVwcGVyWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3N0ZXBwZXIyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIHZhciBuZXh0SWRlYWxYID0gX3N0ZXBwZXIyWzBdO1xuICAgICAgICAgICAgdmFyIG5leHRJZGVhbFYgPSBfc3RlcHBlcjJbMV07XG5cbiAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSArIChuZXh0SWRlYWxYIC0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlICsgKG5leHRJZGVhbFYgLSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgLy8gdGhlIGFtb3VudCB3ZSdyZSBsb29wZWQgb3ZlciBhYm92ZVxuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLT0gZnJhbWVzVG9DYXRjaFVwICogbXNQZXJGcmFtZTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlOiBuZXdDdXJyZW50U3R5bGUsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXdDdXJyZW50VmVsb2NpdHksXG4gICAgICAgICAgbGFzdElkZWFsU3R5bGU6IG5ld0xhc3RJZGVhbFN0eWxlLFxuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXR5OiBuZXdMYXN0SWRlYWxWZWxvY2l0eVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIE1vdGlvbi5wcm90b3R5cGUuZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFN0YXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWZhdWx0U3R5bGUgPSBfcHJvcHMuZGVmYXVsdFN0eWxlO1xuICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgIHZhciBjdXJyZW50U3R5bGUgPSBkZWZhdWx0U3R5bGUgfHwgX3N0cmlwU3R5bGUyWydkZWZhdWx0J10oc3R5bGUpO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgY3VycmVudFZlbG9jaXR5OiBjdXJyZW50VmVsb2NpdHksXG4gICAgICBsYXN0SWRlYWxTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdHk6IGN1cnJlbnRWZWxvY2l0eVxuICAgIH07XG4gIH07XG5cbiAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGN1cnJlbnRTdHlsZSdzIHZhbHVlIGlzIHN0YWxlOiBpZiBwcm9wcyBpcyBpbW1lZGlhdGVseVxuICAvLyBjaGFuZ2VkIGZyb20gMCB0byA0MDAgdG8gc3ByaW5nKDApIGFnYWluLCB0aGUgYXN5bmMgY3VycmVudFN0eWxlIGlzIHN0aWxsXG4gIC8vIGF0IDAgKGRpZG4ndCBoYXZlIHRpbWUgdG8gdGljayBhbmQgaW50ZXJwb2xhdGUgZXZlbiBvbmNlKS4gSWYgd2UgbmFpdmVseVxuICAvLyBjb21wYXJlIGN1cnJlbnRTdHlsZSB3aXRoIGRlc3RWYWwgaXQnbGwgYmUgMCA9PT0gMCAobm8gYW5pbWF0aW9uLCBzdG9wKS5cbiAgLy8gSW4gcmVhbGl0eSBjdXJyZW50U3R5bGUgc2hvdWxkIGJlIDQwMFxuXG4gIE1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH07XG5cbiAgTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZSAhPSBudWxsKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlID0gcHJvcHMuc3R5bGU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIE1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCAhPSBudWxsKSB7XG4gICAgICBfcmFmMlsnZGVmYXVsdCddLmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBNb3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBNb3Rpb247XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGUgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuLy8gbm9uLWludGVycG9sYXRpbmcgdmFsdWVzICh0aG9zZSB0aGF0IGFyZSBhIG51bWJlciwgd2l0aG91dCBhIHNwcmluZ1xuLy8gY29uZmlnKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL01vdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbi8vIGN1cnJlbnRseSB1c2VkIHRvIGluaXRpYXRlIHRoZSB2ZWxvY2l0eSBzdHlsZSBvYmplY3QgdG8gMFxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWFwVG9aZXJvO1xuXG5mdW5jdGlvbiBtYXBUb1plcm8ob2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXRba2V5XSA9IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRvWmVyby5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vLyB0dXJuIHt4OiB7dmFsOiAxLCBzdGlmZm5lc3M6IDEsIGRhbXBpbmc6IDJ9LCB5OiAyfSBnZW5lcmF0ZWQgYnlcbi8vIGB7eDogc3ByaW5nKDEsIHtzdGlmZm5lc3M6IDEsIGRhbXBpbmc6IDJ9KSwgeTogMn1gIGludG8ge3g6IDEsIHk6IDJ9XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN0cmlwU3R5bGU7XG5cbmZ1bmN0aW9uIHN0cmlwU3R5bGUoc3R5bGUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdHlsZSwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldFtrZXldID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0cmlwU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyBzdGVwcGVyIGlzIHVzZWQgYSBsb3QuIFNhdmVzIGFsbG9jYXRpb24gdG8gcmV0dXJuIHRoZSBzYW1lIGFycmF5IHdyYXBwZXIuXG4vLyBUaGlzIGlzIGZpbmUgYW5kIGRhbmdlci1mcmVlIGFnYWluc3QgbXV0YXRpb25zIGJlY2F1c2UgdGhlIGNhbGxzaXRlXG4vLyBpbW1lZGlhdGVseSBkZXN0cnVjdHVyZXMgaXQgYW5kIGdldHMgdGhlIG51bWJlcnMgaW5zaWRlIHdpdGhvdXQgcGFzc2luZyB0aGVcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGVwcGVyO1xuXG52YXIgcmV1c2VkVHVwbGUgPSBbMCwgMF07XG5cbmZ1bmN0aW9uIHN0ZXBwZXIoc2Vjb25kUGVyRnJhbWUsIHgsIHYsIGRlc3RYLCBrLCBiLCBwcmVjaXNpb24pIHtcbiAgLy8gU3ByaW5nIHN0aWZmbmVzcywgaW4ga2cgLyBzXjJcblxuICAvLyBmb3IgYW5pbWF0aW9ucywgZGVzdFggaXMgcmVhbGx5IHNwcmluZyBsZW5ndGggKHNwcmluZyBhdCByZXN0KS4gaW5pdGlhbFxuICAvLyBwb3NpdGlvbiBpcyBjb25zaWRlcmVkIGFzIHRoZSBzdHJldGNoZWQvY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBhIHNwcmluZ1xuICB2YXIgRnNwcmluZyA9IC1rICogKHggLSBkZXN0WCk7XG5cbiAgLy8gRGFtcGluZywgaW4ga2cgLyBzXG4gIHZhciBGZGFtcGVyID0gLWIgKiB2O1xuXG4gIC8vIHVzdWFsbHkgd2UgcHV0IG1hc3MgaGVyZSwgYnV0IGZvciBhbmltYXRpb24gcHVycG9zZXMsIHNwZWNpZnlpbmcgbWFzcyBpcyBhXG4gIC8vIGJpdCByZWR1bmRhbnQuIHlvdSBjb3VsZCBzaW1wbHkgYWRqdXN0IGsgYW5kIGIgYWNjb3JkaW5nbHlcbiAgLy8gbGV0IGEgPSAoRnNwcmluZyArIEZkYW1wZXIpIC8gbWFzcztcbiAgdmFyIGEgPSBGc3ByaW5nICsgRmRhbXBlcjtcblxuICB2YXIgbmV3ViA9IHYgKyBhICogc2Vjb25kUGVyRnJhbWU7XG4gIHZhciBuZXdYID0geCArIG5ld1YgKiBzZWNvbmRQZXJGcmFtZTtcblxuICBpZiAoTWF0aC5hYnMobmV3VikgPCBwcmVjaXNpb24gJiYgTWF0aC5hYnMobmV3WCAtIGRlc3RYKSA8IHByZWNpc2lvbikge1xuICAgIHJldXNlZFR1cGxlWzBdID0gZGVzdFg7XG4gICAgcmV1c2VkVHVwbGVbMV0gPSAwO1xuICAgIHJldHVybiByZXVzZWRUdXBsZTtcbiAgfVxuXG4gIHJldXNlZFR1cGxlWzBdID0gbmV3WDtcbiAgcmV1c2VkVHVwbGVbMV0gPSBuZXdWO1xuICByZXR1cm4gcmV1c2VkVHVwbGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyBhcnJheSByZWZlcmVuY2UgYXJvdW5kLlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICBvYmplY3QgPSByb290O1xuICB9XG4gIG9iamVjdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgb2JqZWN0LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyB1c2FnZSBhc3N1bXB0aW9uOiBjdXJyZW50U3R5bGUgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ1dCBpdCBzYXlzXG4vLyBub3RoaW5nIG9mIHdoZXRoZXIgY3VycmVudFN0eWxlIGlzIHN0YWxlIChzZWUgdW5yZWFkUHJvcFN0eWxlKVxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hvdWxkU3RvcEFuaW1hdGlvbjtcblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbihjdXJyZW50U3R5bGUsIHN0eWxlLCBjdXJyZW50VmVsb2NpdHkpIHtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3R5bGUsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVZhbHVlID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICAgIC8vIHN0ZXBwZXIgd2lsbCBoYXZlIGFscmVhZHkgdGFrZW4gY2FyZSBvZiByb3VuZGluZyBwcmVjaXNpb24gZXJyb3JzLCBzb1xuICAgIC8vIHdvbid0IGhhdmUgc3VjaCB0aGluZyBhcyAwLjk5OTkgIT09PSAxXG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldICE9PSBzdHlsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9tYXBUb1plcm8gPSByZXF1aXJlKCcuL21hcFRvWmVybycpO1xuXG52YXIgX21hcFRvWmVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBUb1plcm8pO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgX3N0ZXBwZXIzID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyMyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJmb3JtYW5jZU5vdyk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4vc2hvdWxkU3RvcEFuaW1hdGlvbicpO1xuXG52YXIgX3Nob3VsZFN0b3BBbmltYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hvdWxkU3RvcEFuaW1hdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBtc1BlckZyYW1lID0gMTAwMCAvIDYwO1xuXG5mdW5jdGlvbiBzaG91bGRTdG9wQW5pbWF0aW9uQWxsKGN1cnJlbnRTdHlsZXMsIHN0eWxlcywgY3VycmVudFZlbG9jaXRpZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50U3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzW2ldLCBzdHlsZXNbaV0sIGN1cnJlbnRWZWxvY2l0aWVzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFN0YWdnZXJlZE1vdGlvbiA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3RhZ2dlcmVkTW90aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoU3RhZ2dlcmVkTW90aW9uLCBudWxsLCBbe1xuICAgIGtleTogJ3Byb3BUeXBlcycsXG4gICAgdmFsdWU6IHtcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGEgY29uZmlnIGluIGhlcmVcbiAgICAgIGRlZmF1bHRTdHlsZXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYXJyYXlPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdE9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKSksXG4gICAgICBzdHlsZXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1dKTtcblxuICBmdW5jdGlvbiBTdGFnZ2VyZWRNb3Rpb24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWdnZXJlZE1vdGlvbik7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xuICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIHRoaXMucHJldlRpbWUgPSAwO1xuICAgIHRoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBudWxsO1xuXG4gICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSA9IGZ1bmN0aW9uICh1bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgICB2YXIgX3N0YXRlID0gX3RoaXMuc3RhdGU7XG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IF9zdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gX3N0YXRlLmN1cnJlbnRWZWxvY2l0aWVzO1xuICAgICAgdmFyIGxhc3RJZGVhbFN0eWxlcyA9IF9zdGF0ZS5sYXN0SWRlYWxTdHlsZXM7XG4gICAgICB2YXIgbGFzdElkZWFsVmVsb2NpdGllcyA9IF9zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzO1xuXG4gICAgICB2YXIgc29tZURpcnR5ID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucmVhZFByb3BTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHVucmVhZFByb3BTdHlsZSA9IHVucmVhZFByb3BTdHlsZXNbaV07XG4gICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB1bnJlYWRQcm9wU3R5bGUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1bnJlYWRQcm9wU3R5bGUsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZVZhbHVlID0gdW5yZWFkUHJvcFN0eWxlW2tleV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgIHNvbWVEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzW2ldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRWZWxvY2l0aWVzW2ldKTtcbiAgICAgICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFN0eWxlc1tpXSk7XG4gICAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgY3VycmVudFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldW2tleV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc29tZURpcnR5KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLCBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcywgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllcyB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgICAgLy8gY2FsbCBjYj8gTm8sIG90aGVyd2lzZSBhY2NpZGVudGFsIHBhcmVudCByZXJlbmRlciBjYXVzZXMgY2IgdHJpZ2dlclxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBfcmFmMlsnZGVmYXVsdCddKGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGRlc3RTdHlsZXMgPSBfdGhpcy5wcm9wcy5zdHlsZXMoX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICAgIGlmIChzaG91bGRTdG9wQW5pbWF0aW9uQWxsKF90aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMsIGRlc3RTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzKSkge1xuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aW1lc3RhbXAgfHwgX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50VGltZSAtIF90aGlzLnByZXZUaW1lO1xuICAgICAgICBfdGhpcy5wcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgKyB0aW1lRGVsdGE7XG4gICAgICAgIC8vIG1vcmUgdGhhbiAxMCBmcmFtZXM/IHByb2xseSBzd2l0Y2hlZCBicm93c2VyIHRhYi4gUmVzdGFydFxuICAgICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID4gbXNQZXJGcmFtZSAqIDEwKSB7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPT09IDApIHtcbiAgICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudEZyYW1lQ29tcGxldGlvbiA9IChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpICogbXNQZXJGcmFtZSkgLyBtc1BlckZyYW1lO1xuICAgICAgICB2YXIgZnJhbWVzVG9DYXRjaFVwID0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKTtcblxuICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gW107XG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gW107XG4gICAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gW107XG4gICAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVzdFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBkZXN0U3R5bGUgPSBkZXN0U3R5bGVzW2ldO1xuICAgICAgICAgIHZhciBuZXdDdXJyZW50U3R5bGUgPSB7fTtcbiAgICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG4gICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlID0ge307XG4gICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVzdFN0eWxlKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXN0U3R5bGUsIGtleSkpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdHlsZVZhbHVlID0gZGVzdFN0eWxlW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlc1tpXVtrZXldO1xuICAgICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcmFtZXNUb0NhdGNoVXA7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBfc3RlcHBlciA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF9zdGVwcGVyWzBdO1xuICAgICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfc3RlcHBlclsxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBfc3RlcHBlcjIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICB2YXIgbmV4dElkZWFsWCA9IF9zdGVwcGVyMlswXTtcbiAgICAgICAgICAgICAgdmFyIG5leHRJZGVhbFYgPSBfc3RlcHBlcjJbMV07XG5cbiAgICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlICsgKG5leHRJZGVhbFggLSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSArIChuZXh0SWRlYWxWIC0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IG5ld0N1cnJlbnRTdHlsZTtcbiAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdGllc1tpXSA9IG5ld0N1cnJlbnRWZWxvY2l0eTtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBuZXdMYXN0SWRlYWxTdHlsZTtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gbmV3TGFzdElkZWFsVmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIC8vIHRoZSBhbW91bnQgd2UncmUgbG9vcGVkIG92ZXIgYWJvdmVcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC09IGZyYW1lc1RvQ2F0Y2hVcCAqIG1zUGVyRnJhbWU7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgICAgIGxhc3RJZGVhbFN0eWxlczogbmV3TGFzdElkZWFsU3R5bGVzLFxuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMudW5yZWFkUHJvcFN0eWxlcyA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZSgpO1xuICB9XG5cbiAgU3RhZ2dlcmVkTW90aW9uLnByb3RvdHlwZS5kZWZhdWx0U3RhdGUgPSBmdW5jdGlvbiBkZWZhdWx0U3RhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMuZGVmYXVsdFN0eWxlcztcbiAgICB2YXIgc3R5bGVzID0gX3Byb3BzLnN0eWxlcztcblxuICAgIHZhciBjdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcyB8fCBzdHlsZXMoKS5tYXAoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10pO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBjdXJyZW50VmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXMsXG4gICAgICBsYXN0SWRlYWxTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllc1xuICAgIH07XG4gIH07XG5cbiAgU3RhZ2dlcmVkTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgfTtcblxuICBTdGFnZ2VyZWRNb3Rpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkUHJvcFN0eWxlcyAhPSBudWxsKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBwcm9wcy5zdHlsZXModGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEID09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH1cbiAgfTtcblxuICBTdGFnZ2VyZWRNb3Rpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgIT0gbnVsbCkge1xuICAgICAgX3JhZjJbJ2RlZmF1bHQnXS5jYW5jZWwodGhpcy5hbmltYXRpb25JRCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgU3RhZ2dlcmVkTW90aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFN0YWdnZXJlZE1vdGlvbjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGFnZ2VyZWRNb3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gaXQncyBwb3NzaWJsZSB0aGF0IGN1cnJlbnRTdHlsZSdzIHZhbHVlIGlzIHN0YWxlOiBpZiBwcm9wcyBpcyBpbW1lZGlhdGVseVxuLy8gY2hhbmdlZCBmcm9tIDAgdG8gNDAwIHRvIHNwcmluZygwKSBhZ2FpbiwgdGhlIGFzeW5jIGN1cnJlbnRTdHlsZSBpcyBzdGlsbFxuLy8gYXQgMCAoZGlkbid0IGhhdmUgdGltZSB0byB0aWNrIGFuZCBpbnRlcnBvbGF0ZSBldmVuIG9uY2UpLiBJZiB3ZSBuYWl2ZWx5XG4vLyBjb21wYXJlIGN1cnJlbnRTdHlsZSB3aXRoIGRlc3RWYWwgaXQnbGwgYmUgMCA9PT0gMCAobm8gYW5pbWF0aW9uLCBzdG9wKS5cbi8vIEluIHJlYWxpdHkgY3VycmVudFN0eWxlIHNob3VsZCBiZSA0MDBcblxuLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuLy8gbm9uLWludGVycG9sYXRpbmcgdmFsdWVzICh0aG9zZSB0aGF0IGFyZSBhIG51bWJlciwgd2l0aG91dCBhIHNwcmluZ1xuLy8gY29uZmlnKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL1N0YWdnZXJlZE1vdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9tZXJnZURpZmYgPSByZXF1aXJlKCcuL21lcmdlRGlmZicpO1xuXG52YXIgX21lcmdlRGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZURpZmYpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93Jyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyZm9ybWFuY2VOb3cpO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG52YXIgX3Nob3VsZFN0b3BBbmltYXRpb24gPSByZXF1aXJlKCcuL3Nob3VsZFN0b3BBbmltYXRpb24nKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Nob3VsZFN0b3BBbmltYXRpb24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgbXNQZXJGcmFtZSA9IDEwMDAgLyA2MDtcblxuLy8gdGhlIGNoaWxkcmVuIGZ1bmN0aW9uICYgKHBvdGVudGlhbCkgc3R5bGVzIGZ1bmN0aW9uIGFza3MgYXMgcGFyYW0gYW5cbi8vIEFycmF5PFRyYW5zaXRpb25QbGFpblN0eWxlPiwgd2hlcmUgZWFjaCBUcmFuc2l0aW9uUGxhaW5TdHlsZSBpcyBvZiB0aGUgZm9ybWF0XG4vLyB7a2V5OiBzdHJpbmcsIGRhdGE/OiBhbnksIHN0eWxlOiBQbGFpblN0eWxlfS4gSG93ZXZlciwgdGhlIHdheSB3ZSBrZWVwXG4vLyBpbnRlcm5hbCBzdGF0ZXMgZG9lc24ndCBjb250YWluIHN1Y2ggYSBkYXRhIHN0cnVjdHVyZSAoY2hlY2sgdGhlIHN0YXRlIGFuZFxuLy8gVHJhbnNpdGlvbk1vdGlvblN0YXRlKS4gU28gd2hlbiBjaGlsZHJlbiBmdW5jdGlvbiBhbmQgb3RoZXJzIGFzayBmb3Igc3VjaFxuLy8gZGF0YSB3ZSBuZWVkIHRvIGdlbmVyYXRlIHRoZW0gb24gdGhlIGZseSBieSBjb21iaW5pbmcgbWVyZ2VkUHJvcHNTdHlsZXMgYW5kXG4vLyBjdXJyZW50U3R5bGVzL2xhc3RJZGVhbFN0eWxlc1xuZnVuY3Rpb24gcmVoeWRyYXRlU3R5bGVzKG1lcmdlZFByb3BzU3R5bGVzLCB1bnJlYWRQcm9wU3R5bGVzLCBwbGFpblN0eWxlcykge1xuICAvLyBDb3B5IHRoZSB2YWx1ZSB0byBhIGBjb25zdGAgc28gdGhhdCBGbG93IHVuZGVyc3RhbmRzIHRoYXQgdGhlIGNvbnN0IHdvbid0XG4gIC8vIGNoYW5nZSBhbmQgd2lsbCBiZSBub24tbnVsbGFibGUgaW4gdGhlIGNhbGxiYWNrIGJlbG93LlxuICB2YXIgY1VucmVhZFByb3BTdHlsZXMgPSB1bnJlYWRQcm9wU3R5bGVzO1xuICBpZiAoY1VucmVhZFByb3BTdHlsZXMgPT0gbnVsbCkge1xuICAgIHJldHVybiBtZXJnZWRQcm9wc1N0eWxlcy5tYXAoZnVuY3Rpb24gKG1lcmdlZFByb3BzU3R5bGUsIGkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogbWVyZ2VkUHJvcHNTdHlsZS5rZXksXG4gICAgICAgIGRhdGE6IG1lcmdlZFByb3BzU3R5bGUuZGF0YSxcbiAgICAgICAgc3R5bGU6IHBsYWluU3R5bGVzW2ldXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBtZXJnZWRQcm9wc1N0eWxlcy5tYXAoZnVuY3Rpb24gKG1lcmdlZFByb3BzU3R5bGUsIGkpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNVbnJlYWRQcm9wU3R5bGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoY1VucmVhZFByb3BTdHlsZXNbal0ua2V5ID09PSBtZXJnZWRQcm9wc1N0eWxlLmtleSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleTogY1VucmVhZFByb3BTdHlsZXNbal0ua2V5LFxuICAgICAgICAgIGRhdGE6IGNVbnJlYWRQcm9wU3R5bGVzW2pdLmRhdGEsXG4gICAgICAgICAgc3R5bGU6IHBsYWluU3R5bGVzW2ldXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGtleTogbWVyZ2VkUHJvcHNTdHlsZS5rZXksIGRhdGE6IG1lcmdlZFByb3BzU3R5bGUuZGF0YSwgc3R5bGU6IHBsYWluU3R5bGVzW2ldIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTdG9wQW5pbWF0aW9uQWxsKGN1cnJlbnRTdHlsZXMsIGRlc3RTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzLCBtZXJnZWRQcm9wc1N0eWxlcykge1xuICBpZiAobWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoICE9PSBkZXN0U3R5bGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWVyZ2VkUHJvcHNTdHlsZXNbaV0ua2V5ICE9PSBkZXN0U3R5bGVzW2ldLmtleSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHdlIGhhdmUgdGhlIGludmFyaWFudCB0aGF0IG1lcmdlZFByb3BzU3R5bGVzIGFuZFxuICAvLyBjdXJyZW50U3R5bGVzL2N1cnJlbnRWZWxvY2l0aWVzL2xhc3QqIGFyZSBzeW5jZWQgaW4gdGVybXMgb2YgY2VsbHMsIHNlZVxuICAvLyBtZXJnZUFuZFN5bmMgY29tbWVudCBmb3IgbW9yZSBpbmZvXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIV9zaG91bGRTdG9wQW5pbWF0aW9uMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNbaV0sIGRlc3RTdHlsZXNbaV0uc3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBjb3JlIGtleSBtZXJnaW5nIGxvZ2ljXG5cbi8vIHRoaW5ncyB0byBkbzogc2F5IHByZXZpb3VzbHkgbWVyZ2VkIHN0eWxlIGlzIHthLCBifSwgZGVzdCBzdHlsZSAocHJvcCkgaXMge2IsXG4vLyBjfSwgcHJldmlvdXMgY3VycmVudCAoaW50ZXJwb2xhdGluZykgc3R5bGUgaXMge2EsIGJ9XG4vLyAqKmludmFyaWFudCoqOiBjdXJyZW50W2ldIGNvcnJlc3BvbmRzIHRvIG1lcmdlZFtpXSBpbiB0ZXJtcyBvZiBrZXlcblxuLy8gc3RlcHM6XG4vLyB0dXJuIG1lcmdlZCBzdHlsZSBpbnRvIHthPywgYiwgY31cbi8vICAgIGFkZCBjLCB2YWx1ZSBvZiBjIGlzIGRlc3RTdHlsZXMuY1xuLy8gICAgbWF5YmUgcmVtb3ZlIGEsIGFrYSBjYWxsIHdpbGxMZWF2ZShhKSwgdGhlbiBtZXJnZWQgaXMgZWl0aGVyIHtiLCBjfSBvciB7YSwgYiwgY31cbi8vIHR1cm4gY3VycmVudCAoaW50ZXJwb2xhdGluZykgc3R5bGUgZnJvbSB7YSwgYn0gaW50byB7YT8sIGIsIGN9XG4vLyAgICBtYXliZSByZW1vdmUgYVxuLy8gICAgY2VydGFpbmx5IGFkZCBjLCB2YWx1ZSBvZiBjIGlzIHdpbGxFbnRlcihjKVxuLy8gbG9vcCBvdmVyIG1lcmdlZCBhbmQgY29uc3RydWN0IG5ldyBjdXJyZW50XG4vLyBkZXN0IGRvZXNuJ3QgY2hhbmdlLCB0aGF0J3Mgb3duZXInc1xuZnVuY3Rpb24gbWVyZ2VBbmRTeW5jKHdpbGxFbnRlciwgd2lsbExlYXZlLCBkaWRMZWF2ZSwgb2xkTWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIG9sZEN1cnJlbnRTdHlsZXMsIG9sZEN1cnJlbnRWZWxvY2l0aWVzLCBvbGRMYXN0SWRlYWxTdHlsZXMsIG9sZExhc3RJZGVhbFZlbG9jaXRpZXMpIHtcbiAgdmFyIG5ld01lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlRGlmZjJbJ2RlZmF1bHQnXShvbGRNZXJnZWRQcm9wc1N0eWxlcywgZGVzdFN0eWxlcywgZnVuY3Rpb24gKG9sZEluZGV4LCBvbGRNZXJnZWRQcm9wc1N0eWxlKSB7XG4gICAgdmFyIGxlYXZpbmdTdHlsZSA9IHdpbGxMZWF2ZShvbGRNZXJnZWRQcm9wc1N0eWxlKTtcbiAgICBpZiAobGVhdmluZ1N0eWxlID09IG51bGwpIHtcbiAgICAgIGRpZExlYXZlKHsga2V5OiBvbGRNZXJnZWRQcm9wc1N0eWxlLmtleSwgZGF0YTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5kYXRhIH0pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShvbGRDdXJyZW50U3R5bGVzW29sZEluZGV4XSwgbGVhdmluZ1N0eWxlLCBvbGRDdXJyZW50VmVsb2NpdGllc1tvbGRJbmRleF0pKSB7XG4gICAgICBkaWRMZWF2ZSh7IGtleTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5rZXksIGRhdGE6IG9sZE1lcmdlZFByb3BzU3R5bGUuZGF0YSB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geyBrZXk6IG9sZE1lcmdlZFByb3BzU3R5bGUua2V5LCBkYXRhOiBvbGRNZXJnZWRQcm9wc1N0eWxlLmRhdGEsIHN0eWxlOiBsZWF2aW5nU3R5bGUgfTtcbiAgfSk7XG5cbiAgdmFyIG5ld0N1cnJlbnRTdHlsZXMgPSBbXTtcbiAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gW107XG4gIHZhciBuZXdMYXN0SWRlYWxTdHlsZXMgPSBbXTtcbiAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlQ2VsbCA9IG5ld01lcmdlZFByb3BzU3R5bGVzW2ldO1xuICAgIHZhciBmb3VuZE9sZEluZGV4ID0gbnVsbDtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9sZE1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAob2xkTWVyZ2VkUHJvcHNTdHlsZXNbal0ua2V5ID09PSBuZXdNZXJnZWRQcm9wc1N0eWxlQ2VsbC5rZXkpIHtcbiAgICAgICAgZm91bmRPbGRJbmRleCA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUT0RPOiBrZXkgc2VhcmNoIGNvZGVcbiAgICBpZiAoZm91bmRPbGRJbmRleCA9PSBudWxsKSB7XG4gICAgICB2YXIgcGxhaW5TdHlsZSA9IHdpbGxFbnRlcihuZXdNZXJnZWRQcm9wc1N0eWxlQ2VsbCk7XG4gICAgICBuZXdDdXJyZW50U3R5bGVzW2ldID0gcGxhaW5TdHlsZTtcbiAgICAgIG5ld0xhc3RJZGVhbFN0eWxlc1tpXSA9IHBsYWluU3R5bGU7XG5cbiAgICAgIHZhciB2ZWxvY2l0eSA9IF9tYXBUb1plcm8yWydkZWZhdWx0J10obmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwuc3R5bGUpO1xuICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSB2ZWxvY2l0eTtcbiAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSB2ZWxvY2l0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IG9sZEN1cnJlbnRTdHlsZXNbZm91bmRPbGRJbmRleF07XG4gICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBvbGRMYXN0SWRlYWxTdHlsZXNbZm91bmRPbGRJbmRleF07XG4gICAgICBuZXdDdXJyZW50VmVsb2NpdGllc1tpXSA9IG9sZEN1cnJlbnRWZWxvY2l0aWVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXSA9IG9sZExhc3RJZGVhbFZlbG9jaXRpZXNbZm91bmRPbGRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtuZXdNZXJnZWRQcm9wc1N0eWxlcywgbmV3Q3VycmVudFN0eWxlcywgbmV3Q3VycmVudFZlbG9jaXRpZXMsIG5ld0xhc3RJZGVhbFN0eWxlcywgbmV3TGFzdElkZWFsVmVsb2NpdGllc107XG59XG5cbnZhciBUcmFuc2l0aW9uTW90aW9uID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uTW90aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoVHJhbnNpdGlvbk1vdGlvbiwgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuICAgIHZhbHVlOiB7XG4gICAgICBkZWZhdWx0U3R5bGVzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zaGFwZSh7XG4gICAgICAgIGtleTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZGF0YTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hbnksXG4gICAgICAgIHN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdE9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKS5pc1JlcXVpcmVkXG4gICAgICB9KSksXG4gICAgICBzdHlsZXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYXJyYXlPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnNoYXBlKHtcbiAgICAgICAga2V5OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkYXRhOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFueSxcbiAgICAgICAgc3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdF0pKS5pc1JlcXVpcmVkXG4gICAgICB9KSldKS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgd2lsbEVudGVyOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgICB3aWxsTGVhdmU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcbiAgICAgIGRpZExlYXZlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSwge1xuICAgIGtleTogJ2RlZmF1bHRQcm9wcycsXG4gICAgdmFsdWU6IHtcbiAgICAgIHdpbGxFbnRlcjogZnVuY3Rpb24gd2lsbEVudGVyKHN0eWxlVGhhdEVudGVyZWQpIHtcbiAgICAgICAgcmV0dXJuIF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHN0eWxlVGhhdEVudGVyZWQuc3R5bGUpO1xuICAgICAgfSxcbiAgICAgIC8vIHJlY2FsbDogcmV0dXJuaW5nIG51bGwgbWFrZXMgdGhlIGN1cnJlbnQgdW5tb3VudGluZyBUcmFuc2l0aW9uU3R5bGVcbiAgICAgIC8vIGRpc2FwcGVhciBpbW1lZGlhdGVseVxuICAgICAgd2lsbExlYXZlOiBmdW5jdGlvbiB3aWxsTGVhdmUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIGRpZExlYXZlOiBmdW5jdGlvbiBkaWRMZWF2ZSgpIHt9XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH1dKTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uTW90aW9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uTW90aW9uKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdGhpcy51bm1vdW50aW5nID0gZmFsc2U7XG4gICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgdGhpcy5wcmV2VGltZSA9IDA7XG4gICAgdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlcyA9IG51bGw7XG5cbiAgICB0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlID0gZnVuY3Rpb24gKHVucmVhZFByb3BTdHlsZXMpIHtcbiAgICAgIHZhciBfbWVyZ2VBbmRTeW5jID0gbWVyZ2VBbmRTeW5jKF90aGlzLnByb3BzLndpbGxFbnRlciwgX3RoaXMucHJvcHMud2lsbExlYXZlLCBfdGhpcy5wcm9wcy5kaWRMZWF2ZSwgX3RoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIHVucmVhZFByb3BTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLCBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXMpO1xuXG4gICAgICB2YXIgbWVyZ2VkUHJvcHNTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jWzBdO1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jWzFdO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luY1syXTtcbiAgICAgIHZhciBsYXN0SWRlYWxTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jWzNdO1xuICAgICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jWzRdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucmVhZFByb3BTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHVucmVhZFByb3BTdHlsZSA9IHVucmVhZFByb3BTdHlsZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB1bnJlYWRQcm9wU3R5bGUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1bnJlYWRQcm9wU3R5bGUsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZVZhbHVlID0gdW5yZWFkUHJvcFN0eWxlW2tleV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzW2ldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRWZWxvY2l0aWVzW2ldKTtcbiAgICAgICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFN0eWxlc1tpXSk7XG4gICAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICAgIG1lcmdlZFByb3BzU3R5bGVzW2ldID0ge1xuICAgICAgICAgICAgICAgIGtleTogbWVyZ2VkUHJvcHNTdHlsZXNbaV0ua2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IG1lcmdlZFByb3BzU3R5bGVzW2ldLmRhdGEsXG4gICAgICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBtZXJnZWRQcm9wc1N0eWxlc1tpXS5zdHlsZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXVtrZXldID0gMDtcbiAgICAgICAgICAgIGxhc3RJZGVhbFN0eWxlc1tpXVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgICAgICBtZXJnZWRQcm9wc1N0eWxlc1tpXS5zdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdW5saWtlIHRoZSBvdGhlciAyIGNvbXBvbmVudHMsIHdlIGNhbid0IGRldGVjdCBzdGFsZW5lc3MgYW5kIG9wdGlvbmFsbHlcbiAgICAgIC8vIG9wdCBvdXQgb2Ygc2V0U3RhdGUgaGVyZS4gZWFjaCBzdHlsZSBvYmplY3QncyBkYXRhIG1pZ2h0IGNvbnRhaW4gbmV3XG4gICAgICAvLyBzdHVmZiB3ZSdyZSBub3QvY2Fubm90IGNvbXBhcmVcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgICBtZXJnZWRQcm9wc1N0eWxlczogbWVyZ2VkUHJvcHNTdHlsZXMsXG4gICAgICAgIGxhc3RJZGVhbFN0eWxlczogbGFzdElkZWFsU3R5bGVzLFxuICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzOiBsYXN0SWRlYWxWZWxvY2l0aWVzXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnVubW91bnRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiB3aGVuIGNvbmZpZyBpcyB7YTogMTB9IGFuZCBkZXN0IGlzIHthOiAxMH0gZG8gd2UgcmFmIG9uY2UgYW5kXG4gICAgICAvLyBjYWxsIGNiPyBObywgb3RoZXJ3aXNlIGFjY2lkZW50YWwgcGFyZW50IHJlcmVuZGVyIGNhdXNlcyBjYiB0cmlnZ2VyXG4gICAgICBfdGhpcy5hbmltYXRpb25JRCA9IF9yYWYyWydkZWZhdWx0J10oZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2hlbmdsb3UvcmVhY3QtbW90aW9uL3B1bGwvNDIwXG4gICAgICAgIC8vID4gaWYgZXhlY3V0aW9uIHBhc3NlcyB0aGUgY29uZGl0aW9uYWwgaWYgKHRoaXMudW5tb3VudGluZyksIHRoZW5cbiAgICAgICAgLy8gZXhlY3V0ZXMgYXN5bmMgZGVmYXVsdFJhZiBhbmQgYWZ0ZXIgdGhhdCBjb21wb25lbnQgdW5tb3VudHMgYW5kIGFmdGVyXG4gICAgICAgIC8vIHRoYXQgdGhlIGNhbGxiYWNrIG9mIGRlZmF1bHRSYWYgaXMgY2FsbGVkLCB0aGVuIHNldFN0YXRlIHdpbGwgYmUgY2FsbGVkXG4gICAgICAgIC8vIG9uIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAgIGlmIChfdGhpcy51bm1vdW50aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb3BTdHlsZXMgPSBfdGhpcy5wcm9wcy5zdHlsZXM7XG4gICAgICAgIHZhciBkZXN0U3R5bGVzID0gdHlwZW9mIHByb3BTdHlsZXMgPT09ICdmdW5jdGlvbicgPyBwcm9wU3R5bGVzKHJlaHlkcmF0ZVN0eWxlcyhfdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgX3RoaXMudW5yZWFkUHJvcFN0eWxlcywgX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKSkgOiBwcm9wU3R5bGVzO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gYW5pbWF0ZSBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICAgICAgaWYgKHNob3VsZFN0b3BBbmltYXRpb25BbGwoX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlcywgZGVzdFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMsIF90aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzKSkge1xuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aW1lc3RhbXAgfHwgX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50VGltZSAtIF90aGlzLnByZXZUaW1lO1xuICAgICAgICBfdGhpcy5wcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgKyB0aW1lRGVsdGE7XG4gICAgICAgIC8vIG1vcmUgdGhhbiAxMCBmcmFtZXM/IHByb2xseSBzd2l0Y2hlZCBicm93c2VyIHRhYi4gUmVzdGFydFxuICAgICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID4gbXNQZXJGcmFtZSAqIDEwKSB7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPT09IDApIHtcbiAgICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudEZyYW1lQ29tcGxldGlvbiA9IChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpICogbXNQZXJGcmFtZSkgLyBtc1BlckZyYW1lO1xuICAgICAgICB2YXIgZnJhbWVzVG9DYXRjaFVwID0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKTtcblxuICAgICAgICB2YXIgX21lcmdlQW5kU3luYzIgPSBtZXJnZUFuZFN5bmMoX3RoaXMucHJvcHMud2lsbEVudGVyLCBfdGhpcy5wcm9wcy53aWxsTGVhdmUsIF90aGlzLnByb3BzLmRpZExlYXZlLCBfdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgZGVzdFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcywgX3RoaXMuc3RhdGUubGFzdElkZWFsVmVsb2NpdGllcyk7XG5cbiAgICAgICAgdmFyIG5ld01lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luYzJbMF07XG4gICAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gX21lcmdlQW5kU3luYzJbMV07XG4gICAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMyWzJdO1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luYzJbM107XG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luYzJbNF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlID0gbmV3TWVyZ2VkUHJvcHNTdHlsZXNbaV0uc3R5bGU7XG4gICAgICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IHt9O1xuICAgICAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdHkgPSB7fTtcbiAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGUgPSB7fTtcbiAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHkgPSB7fTtcblxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBuZXdNZXJnZWRQcm9wc1N0eWxlKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdNZXJnZWRQcm9wc1N0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IG5ld01lcmdlZFByb3BzU3R5bGVba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gbmV3TGFzdElkZWFsU3R5bGVzW2ldW2tleV07XG4gICAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXVtrZXldO1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZyYW1lc1RvQ2F0Y2hVcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9zdGVwcGVyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3N0ZXBwZXJbMF07XG4gICAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF9zdGVwcGVyWzFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIF9zdGVwcGVyMiA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgIHZhciBuZXh0SWRlYWxYID0gX3N0ZXBwZXIyWzBdO1xuICAgICAgICAgICAgICB2YXIgbmV4dElkZWFsViA9IF9zdGVwcGVyMlsxXTtcblxuICAgICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgKyAobmV4dElkZWFsWCAtIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlICsgKG5leHRJZGVhbFYgLSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBuZXdMYXN0SWRlYWxTdHlsZTtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gbmV3TGFzdElkZWFsVmVsb2NpdHk7XG4gICAgICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IG5ld0N1cnJlbnRTdHlsZTtcbiAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdGllc1tpXSA9IG5ld0N1cnJlbnRWZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgLy8gdGhlIGFtb3VudCB3ZSdyZSBsb29wZWQgb3ZlciBhYm92ZVxuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLT0gZnJhbWVzVG9DYXRjaFVwICogbXNQZXJGcmFtZTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV3Q3VycmVudFZlbG9jaXRpZXMsXG4gICAgICAgICAgbGFzdElkZWFsU3R5bGVzOiBuZXdMYXN0SWRlYWxTdHlsZXMsXG4gICAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbmV3TGFzdElkZWFsVmVsb2NpdGllcyxcbiAgICAgICAgICBtZXJnZWRQcm9wc1N0eWxlczogbmV3TWVyZ2VkUHJvcHNTdHlsZXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMudW5yZWFkUHJvcFN0eWxlcyA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZSgpO1xuICB9XG5cbiAgVHJhbnNpdGlvbk1vdGlvbi5wcm90b3R5cGUuZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFN0YXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzLmRlZmF1bHRTdHlsZXM7XG4gICAgdmFyIHN0eWxlcyA9IF9wcm9wcy5zdHlsZXM7XG4gICAgdmFyIHdpbGxFbnRlciA9IF9wcm9wcy53aWxsRW50ZXI7XG4gICAgdmFyIHdpbGxMZWF2ZSA9IF9wcm9wcy53aWxsTGVhdmU7XG4gICAgdmFyIGRpZExlYXZlID0gX3Byb3BzLmRpZExlYXZlO1xuXG4gICAgdmFyIGRlc3RTdHlsZXMgPSB0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nID8gc3R5bGVzKGRlZmF1bHRTdHlsZXMpIDogc3R5bGVzO1xuXG4gICAgLy8gdGhpcyBpcyBzcGVjaWFsLiBmb3IgdGhlIGZpcnN0IHRpbWUgYXJvdW5kLCB3ZSBkb24ndCBoYXZlIGEgY29tcGFyaXNvblxuICAgIC8vIGJldHdlZW4gbGFzdCAobm8gbGFzdCkgYW5kIGN1cnJlbnQgbWVyZ2VkIHByb3BzLiB3ZSdsbCBjb21wdXRlIGxhc3Qgc286XG4gICAgLy8gc2F5IGRlZmF1bHQgaXMge2EsIGJ9IGFuZCBzdHlsZXMgKGRlc3Qgc3R5bGUpIGlzIHtiLCBjfSwgd2UnbGxcbiAgICAvLyBmYWJyaWNhdGUgbGFzdCBhcyB7YSwgYn1cbiAgICB2YXIgb2xkTWVyZ2VkUHJvcHNTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGRlZmF1bHRTdHlsZXMgPT0gbnVsbCkge1xuICAgICAgb2xkTWVyZ2VkUHJvcHNTdHlsZXMgPSBkZXN0U3R5bGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRNZXJnZWRQcm9wc1N0eWxlcyA9IGRlZmF1bHRTdHlsZXMubWFwKGZ1bmN0aW9uIChkZWZhdWx0U3R5bGVDZWxsKSB7XG4gICAgICAgIC8vIFRPRE86IGtleSBzZWFyY2ggY29kZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc3RTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGVzdFN0eWxlc1tpXS5rZXkgPT09IGRlZmF1bHRTdHlsZUNlbGwua2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzdFN0eWxlc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTdHlsZUNlbGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIG9sZEN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzID09IG51bGwgPyBkZXN0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHMuc3R5bGUpO1xuICAgIH0pIDogZGVmYXVsdFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzLnN0eWxlKTtcbiAgICB9KTtcbiAgICB2YXIgb2xkQ3VycmVudFZlbG9jaXRpZXMgPSBkZWZhdWx0U3R5bGVzID09IG51bGwgPyBkZXN0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9tYXBUb1plcm8yWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSkgOiBkZWZhdWx0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9tYXBUb1plcm8yWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSk7XG5cbiAgICB2YXIgX21lcmdlQW5kU3luYzMgPSBtZXJnZUFuZFN5bmMoXG4gICAgLy8gQmVjYXVzZSB0aGlzIGlzIGFuIG9sZC1zdHlsZSBjcmVhdGVSZWFjdENsYXNzIGNvbXBvbmVudCwgRmxvdyBkb2Vzbid0XG4gICAgLy8gdW5kZXJzdGFuZCB0aGF0IHRoZSB3aWxsRW50ZXIgYW5kIHdpbGxMZWF2ZSBwcm9wcyBoYXZlIGRlZmF1bHQgdmFsdWVzXG4gICAgLy8gYW5kIHdpbGwgYWx3YXlzIGJlIHByZXNlbnQuXG4gICAgd2lsbEVudGVyLCB3aWxsTGVhdmUsIGRpZExlYXZlLCBvbGRNZXJnZWRQcm9wc1N0eWxlcywgZGVzdFN0eWxlcywgb2xkQ3VycmVudFN0eWxlcywgb2xkQ3VycmVudFZlbG9jaXRpZXMsIG9sZEN1cnJlbnRTdHlsZXMsIC8vIG9sZExhc3RJZGVhbFN0eWxlcyByZWFsbHlcbiAgICBvbGRDdXJyZW50VmVsb2NpdGllcyk7XG5cbiAgICB2YXIgbWVyZ2VkUHJvcHNTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jM1swXTtcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMzWzFdO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMzWzJdO1xuICAgIHZhciBsYXN0SWRlYWxTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jM1szXTtcbiAgICB2YXIgbGFzdElkZWFsVmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMzWzRdO1xuICAgIC8vIG9sZExhc3RJZGVhbFZlbG9jaXRpZXMgcmVhbGx5XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllcyxcbiAgICAgIGxhc3RJZGVhbFN0eWxlczogbGFzdElkZWFsU3R5bGVzLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllcyxcbiAgICAgIG1lcmdlZFByb3BzU3R5bGVzOiBtZXJnZWRQcm9wc1N0eWxlc1xuICAgIH07XG4gIH07XG5cbiAgLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuICAvLyBub24taW50ZXJwb2xhdGluZyB2YWx1ZXMgKHRob3NlIHRoYXQgYXJlIGEgbnVtYmVyLCB3aXRob3V0IGEgc3ByaW5nXG4gIC8vIGNvbmZpZylcblxuICBUcmFuc2l0aW9uTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZXMpIHtcbiAgICAgIC8vIHByZXZpb3VzIHByb3BzIGhhdmVuJ3QgaGFkIHRoZSBjaGFuY2UgdG8gYmUgc2V0IHlldDsgc2V0IHRoZW0gaGVyZVxuICAgICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSh0aGlzLnVucmVhZFByb3BTdHlsZXMpO1xuICAgIH1cblxuICAgIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlcyA9IHN0eWxlcyhyZWh5ZHJhdGVTdHlsZXModGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgdGhpcy51bnJlYWRQcm9wU3R5bGVzLCB0aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBzdHlsZXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb25Nb3Rpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm1vdW50aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCAhPSBudWxsKSB7XG4gICAgICBfcmFmMlsnZGVmYXVsdCddLmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uTW90aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGh5ZHJhdGVkU3R5bGVzID0gcmVoeWRyYXRlU3R5bGVzKHRoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIHRoaXMudW5yZWFkUHJvcFN0eWxlcywgdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzKTtcbiAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oaHlkcmF0ZWRTdHlsZXMpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uTW90aW9uO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25Nb3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gbGlzdCBvZiBzdHlsZXMsIGVhY2ggY29udGFpbmluZyBpbnRlcnBvbGF0aW5nIHZhbHVlcy4gUGFydCBvZiB3aGF0J3MgcGFzc2VkXG4vLyB0byBjaGlsZHJlbiBmdW5jdGlvbi4gTm90aWNlIHRoYXQgdGhpcyBpc1xuLy8gQXJyYXk8QWN0dWFsSW50ZXJwb2xhdGluZ1N0eWxlT2JqZWN0Piwgd2l0aG91dCB0aGUgd3JhcHBlciB0aGF0IGlzIHtrZXk6IC4uLixcbi8vIGRhdGE6IC4uLiBzdHlsZTogQWN0dWFsSW50ZXJwb2xhdGluZ1N0eWxlT2JqZWN0fS4gT25seSBtZXJnZWRQcm9wc1N0eWxlc1xuLy8gY29udGFpbnMgdGhlIGtleSAmIGRhdGEgaW5mbyAoc28gdGhhdCB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgc291cmNlIG9mIHRydXRoXG4vLyBmb3IgdGhlc2UsIGFuZCB0byBzYXZlIHNwYWNlKS4gQ2hlY2sgdGhlIGNvbW1lbnQgZm9yIGByZWh5ZHJhdGVTdHlsZXNgIHRvXG4vLyBzZWUgaG93IHdlIHJlZ2VuZXJhdGUgdGhlIGVudGlyZXR5IG9mIHdoYXQncyBwYXNzZWQgdG8gY2hpbGRyZW4gZnVuY3Rpb25cblxuLy8gdGhlIGFycmF5IHRoYXQga2VlcHMgdHJhY2sgb2YgY3VycmVudGx5IHJlbmRlcmVkIHN0dWZmISBJbmNsdWRpbmcgc3R1ZmZcbi8vIHRoYXQgeW91J3ZlIHVubW91bnRlZCBidXQgdGhhdCdzIHN0aWxsIGFuaW1hdGluZy4gVGhpcyBpcyB3aGVyZSBpdCBsaXZlc1xuXG4vLyBpdCdzIHBvc3NpYmxlIHRoYXQgY3VycmVudFN0eWxlJ3MgdmFsdWUgaXMgc3RhbGU6IGlmIHByb3BzIGlzIGltbWVkaWF0ZWx5XG4vLyBjaGFuZ2VkIGZyb20gMCB0byA0MDAgdG8gc3ByaW5nKDApIGFnYWluLCB0aGUgYXN5bmMgY3VycmVudFN0eWxlIGlzIHN0aWxsXG4vLyBhdCAwIChkaWRuJ3QgaGF2ZSB0aW1lIHRvIHRpY2sgYW5kIGludGVycG9sYXRlIGV2ZW4gb25jZSkuIElmIHdlIG5haXZlbHlcbi8vIGNvbXBhcmUgY3VycmVudFN0eWxlIHdpdGggZGVzdFZhbCBpdCdsbCBiZSAwID09PSAwIChubyBhbmltYXRpb24sIHN0b3ApLlxuLy8gSW4gcmVhbGl0eSBjdXJyZW50U3R5bGUgc2hvdWxkIGJlIDQwMFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL1RyYW5zaXRpb25Nb3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyBjb3JlIGtleXMgbWVyZ2luZyBhbGdvcml0aG0uIElmIHByZXZpb3VzIHJlbmRlcidzIGtleXMgYXJlIFthLCBiXSwgYW5kIHRoZVxuLy8gbmV4dCByZW5kZXIncyBbYywgYiwgZF0sIHdoYXQncyB0aGUgZmluYWwgbWVyZ2VkIGtleXMgYW5kIG9yZGVyaW5nP1xuXG4vLyAtIGMgYW5kIGEgbXVzdCBib3RoIGJlIGJlZm9yZSBiXG4vLyAtIGIgYmVmb3JlIGRcbi8vIC0gb3JkZXJpbmcgYmV0d2VlbiBhIGFuZCBjIGFtYmlndW91c1xuXG4vLyB0aGlzIHJlZHVjZXMgdG8gbWVyZ2luZyB0d28gcGFydGlhbGx5IG9yZGVyZWQgbGlzdHMgKGUuZy4gbGlzdHMgd2hlcmUgbm90XG4vLyBldmVyeSBpdGVtIGhhcyBhIGRlZmluaXRlIG9yZGVyaW5nLCBsaWtlIGNvbXBhcmluZyBhIGFuZCBjIGFib3ZlKS4gRm9yIHRoZVxuLy8gYW1iaWd1b3VzIG9yZGVyaW5nIHdlIGRldGVybWluaXN0aWNhbGx5IGNob29zZSB0byBwbGFjZSB0aGUgbmV4dCByZW5kZXInc1xuLy8gaXRlbSBhZnRlciB0aGUgcHJldmlvdXMnOyBzbyBjIGFmdGVyIGFcblxuLy8gdGhpcyBpcyBjYWxsZWQgYSB0b3BvbG9naWNhbCBzb3J0aW5nLiBFeGNlcHQgdGhlIGV4aXN0aW5nIGFsZ29yaXRobXMgZG9uJ3Rcbi8vIHdvcmsgd2VsbCB3aXRoIGpzIGJjIG9mIHRoZSBhbW91bnQgb2YgYWxsb2NhdGlvbiwgYW5kIGlzbid0IG9wdGltaXplZCBmb3Igb3VyXG4vLyBjdXJyZW50IHVzZS1jYXNlIGJjIHRoZSBydW50aW1lIGlzIGxpbmVhciBpbiB0ZXJtcyBvZiBlZGdlcyAoc2VlIHdpa2kgZm9yXG4vLyBtZWFuaW5nKSwgd2hpY2ggaXMgaHVnZSB3aGVuIHR3byBsaXN0cyBoYXZlIG1hbnkgY29tbW9uIGVsZW1lbnRzXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtZXJnZURpZmY7XG5cbmZ1bmN0aW9uIG1lcmdlRGlmZihwcmV2LCBuZXh0LCBvblJlbW92ZSkge1xuICAvLyBib29ra2VlcGluZyBmb3IgZWFzaWVyIGFjY2VzcyBvZiBhIGtleSdzIGluZGV4IGJlbG93LiBUaGlzIGlzIDIgYWxsb2NhdGlvbnMgK1xuICAvLyBwb3RlbnRpYWxseSB0cmlnZ2VyaW5nIGNocm9tZSBoYXNoIG1hcCBtb2RlIGZvciBvYmpzIChzbyBpdCBtaWdodCBiZSBmYXN0ZXJcblxuICB2YXIgcHJldktleUluZGV4ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldi5sZW5ndGg7IGkrKykge1xuICAgIHByZXZLZXlJbmRleFtwcmV2W2ldLmtleV0gPSBpO1xuICB9XG4gIHZhciBuZXh0S2V5SW5kZXggPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbmV4dEtleUluZGV4W25leHRbaV0ua2V5XSA9IGk7XG4gIH1cblxuICAvLyBmaXJzdCwgYW4gb3Zlcmx5IGVsYWJvcmF0ZSB3YXkgb2YgbWVyZ2luZyBwcmV2IGFuZCBuZXh0LCBlbGltaW5hdGluZ1xuICAvLyBkdXBsaWNhdGVzIChpbiB0ZXJtcyBvZiBrZXlzKS4gSWYgdGhlcmUncyBkdXBlLCBrZWVwIHRoZSBpdGVtIGluIG5leHQpLlxuICAvLyBUaGlzIHdheSBvZiB3cml0aW5nIGl0IHNhdmVzIGFsbG9jYXRpb25zXG4gIHZhciByZXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0W2ldID0gbmV4dFtpXTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0S2V5SW5kZXgsIHByZXZbaV0ua2V5KSkge1xuICAgICAgLy8gdGhpcyBpcyBjYWxsZWQgbXkgVE0ncyBgbWVyZ2VBbmRTeW5jYCwgd2hpY2ggY2FsbHMgd2lsbExlYXZlLiBXZSBkb24ndFxuICAgICAgLy8gbWVyZ2UgaW4ga2V5cyB0aGF0IHRoZSB1c2VyIGRlc2lyZXMgdG8ga2lsbFxuICAgICAgdmFyIGZpbGwgPSBvblJlbW92ZShpLCBwcmV2W2ldKTtcbiAgICAgIGlmIChmaWxsICE9IG51bGwpIHtcbiAgICAgICAgcmV0LnB1c2goZmlsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IGFsbCB0aGUgaXRlbXMgYWxsIHByZXNlbnQuIENvcmUgc29ydGluZyBsb2dpYyB0byBoYXZlIHRoZSByaWdodCBvcmRlclxuICByZXR1cm4gcmV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgbmV4dE9yZGVyQSA9IG5leHRLZXlJbmRleFthLmtleV07XG4gICAgdmFyIG5leHRPcmRlckIgPSBuZXh0S2V5SW5kZXhbYi5rZXldO1xuICAgIHZhciBwcmV2T3JkZXJBID0gcHJldktleUluZGV4W2Eua2V5XTtcbiAgICB2YXIgcHJldk9yZGVyQiA9IHByZXZLZXlJbmRleFtiLmtleV07XG5cbiAgICBpZiAobmV4dE9yZGVyQSAhPSBudWxsICYmIG5leHRPcmRlckIgIT0gbnVsbCkge1xuICAgICAgLy8gYm90aCBrZXlzIGluIG5leHRcbiAgICAgIHJldHVybiBuZXh0S2V5SW5kZXhbYS5rZXldIC0gbmV4dEtleUluZGV4W2Iua2V5XTtcbiAgICB9IGVsc2UgaWYgKHByZXZPcmRlckEgIT0gbnVsbCAmJiBwcmV2T3JkZXJCICE9IG51bGwpIHtcbiAgICAgIC8vIGJvdGgga2V5cyBpbiBwcmV2XG4gICAgICByZXR1cm4gcHJldktleUluZGV4W2Eua2V5XSAtIHByZXZLZXlJbmRleFtiLmtleV07XG4gICAgfSBlbHNlIGlmIChuZXh0T3JkZXJBICE9IG51bGwpIHtcbiAgICAgIC8vIGtleSBhIGluIG5leHQsIGtleSBiIGluIHByZXZcblxuICAgICAgLy8gaG93IHRvIGRldGVybWluZSB0aGUgb3JkZXIgYmV0d2VlbiBhIGFuZCBiPyBXZSBmaW5kIGEgXCJwaXZvdFwiICh0ZXJtXG4gICAgICAvLyBhYnVzZSksIGEga2V5IHByZXNlbnQgaW4gYm90aCBwcmV2IGFuZCBuZXh0LCB0aGF0IGlzIHNhbmR3aWNoZWQgYmV0d2VlblxuICAgICAgLy8gYSBhbmQgYi4gSW4gdGhlIGNvbnRleHQgb2Ygb3VyIGFib3ZlIGV4YW1wbGUsIGlmIHdlJ3JlIGNvbXBhcmluZyBhIGFuZFxuICAgICAgLy8gZCwgYidzICh0aGUgb25seSkgcGl2b3RcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGl2b3QgPSBuZXh0W2ldLmtleTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJldktleUluZGV4LCBwaXZvdCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0T3JkZXJBIDwgbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJCID4gcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0T3JkZXJBID4gbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJCIDwgcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBwbHVnZ2FibGUuIGRlZmF1bHQgdG86IG5leHQgYmlnZ2VyIHRoYW4gcHJldlxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8vIHByZXZPcmRlckEsIG5leHRPcmRlckJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXZvdCA9IG5leHRbaV0ua2V5O1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJldktleUluZGV4LCBwaXZvdCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobmV4dE9yZGVyQiA8IG5leHRLZXlJbmRleFtwaXZvdF0gJiYgcHJldk9yZGVyQSA+IHByZXZLZXlJbmRleFtwaXZvdF0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKG5leHRPcmRlckIgPiBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIHByZXZPcmRlckEgPCBwcmV2S2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcGx1Z2dhYmxlLiBkZWZhdWx0IHRvOiBuZXh0IGJpZ2dlciB0aGFuIHByZXZcbiAgICByZXR1cm4gLTE7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIHRvIGxvb3AgdGhyb3VnaCBhbmQgZmluZCBhIGtleSdzIGluZGV4IGVhY2ggdGltZSksIGJ1dCBJIG5vIGxvbmdlciBjYXJlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNwcmluZztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMpO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IF9leHRlbmRzKHt9LCBfcHJlc2V0czJbJ2RlZmF1bHQnXS5ub1dvYmJsZSwge1xuICBwcmVjaXNpb246IDAuMDFcbn0pO1xuXG5mdW5jdGlvbiBzcHJpbmcodmFsLCBjb25maWcpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0Q29uZmlnLCBjb25maWcsIHsgdmFsOiB2YWwgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3NwcmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgbm9Xb2JibGU6IHsgc3RpZmZuZXNzOiAxNzAsIGRhbXBpbmc6IDI2IH0sIC8vIHRoZSBkZWZhdWx0LCBpZiBub3RoaW5nIHByb3ZpZGVkXG4gIGdlbnRsZTogeyBzdGlmZm5lc3M6IDEyMCwgZGFtcGluZzogMTQgfSxcbiAgd29iYmx5OiB7IHN0aWZmbmVzczogMTgwLCBkYW1waW5nOiAxMiB9LFxuICBzdGlmZjogeyBzdGlmZm5lc3M6IDIxMCwgZGFtcGluZzogMjAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVvcmRlcktleXM7XG5cbnZhciBoYXNXYXJuZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gcmVvcmRlcktleXMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICghaGFzV2FybmVkKSB7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignYHJlb3JkZXJLZXlzYCBoYXMgYmVlbiByZW1vdmVkLCBzaW5jZSBpdCBpcyBubyBsb25nZXIgbmVlZGVkIGZvciBUcmFuc2l0aW9uTW90aW9uXFwncyBuZXcgc3R5bGVzIGFycmF5IEFQSS4nKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHJlYWN0MTMgPSBpc1JlYWN0MTMoUmVhY3QpO1xudmFyIGRpZFdhcm5BYm91dENoaWxkID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRE9NTm9kZShjb21wb25lbnQpe1xuICAgIGlmKCFyZWFjdDEzKXtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybkFib3V0RnVuY3Rpb25DaGlsZCgpIHtcbiAgICBpZiAoZGlkV2FybkFib3V0Q2hpbGQgfHwgcmVhY3QxMykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpZFdhcm5BYm91dENoaWxkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmVycm9yKCdXaXRoIFJlYWN0IDAuMTQgYW5kIGxhdGVyIHZlcnNpb25zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgdG8gd3JhcCA8U2Nyb2xsQXJlYT4gY2hpbGQgaW50byBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuQWJvdXRFbGVtZW50Q2hpbGQoKSB7XG4gICAgaWYgKGRpZFdhcm5BYm91dENoaWxkIHx8ICFyZWFjdDEzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpZFdhcm5BYm91dENoaWxkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmVycm9yKCAnV2l0aCBSZWFjdCAwLjEzLCB5b3UgbmVlZCB0byB3cmFwIDxTY3JvbGxBcmVhPiBjaGlsZCBpbnRvIGEgZnVuY3Rpb24uJyApO1xuICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGl2ZU9yWmVybyhudW1iZXIpe1xuICAgIHJldHVybiBudW1iZXIgPCAwID8gMCA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeU9ialZhbHVlcyAob2JqLCBtb2RpZmllciA9IHggPT4geCl7XG4gICAgbGV0IG1vZGlmaWVkT2JqID0ge307XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKXtcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIG1vZGlmaWVkT2JqW2tleV0gPSBtb2RpZmllcihvYmpba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBtb2RpZmllZE9iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhY3QxMyhSZWFjdCkge1xuICAgIGNvbnN0IHsgdmVyc2lvbiB9ID0gUmVhY3Q7XG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb24uc3BsaXQoJy4nKTtcbiAgICBjb25zdCBtYWpvciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gICAgY29uc3QgbWlub3IgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuXG4gICAgcmV0dXJuIG1ham9yID09PSAwICYmIG1pbm9yID09PSAxMztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuaW1wb3J0IHsgbW9kaWZ5T2JqVmFsdWVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlU3RhdGUocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ld1N0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2Nyb2xsU2l6ZTogbmV3U3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdENsaWVudFBvc2l0aW9uOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYocHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlRm9yVmVydGljYWwuYmluZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmNhbGN1bGF0ZVN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHJlYWxDb250ZW50U2l6ZSwgY29udGFpbmVyU2l6ZSwgY29udGVudFBvc2l0aW9uKXtcbiAgICAgICAgbGV0IHJlbGF0aXZlU2l6ZSA9IHJlYWxDb250ZW50U2l6ZSAtIGNvbnRhaW5lclNpemU7XG5cbiAgICAgICAgcmV0dXJuIDEgLSAoKHJlbGF0aXZlU2l6ZSAtIGNvbnRlbnRQb3NpdGlvbikgLyByZWxhdGl2ZVNpemUpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN0YXRlKHByb3BzKXtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHByb3BzLnJlYWxTaXplLCBwcm9wcy5jb250YWluZXJTaXplLCBwcm9wcy5wb3NpdGlvbik7XG4gICAgICAgIGxldCBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplID0gcHJvcHMuY29udGFpbmVyU2l6ZSAqIHByb3BzLmNvbnRhaW5lclNpemUgLyBwcm9wcy5yZWFsU2l6ZTtcbiAgICAgICAgbGV0IHNjcm9sbFNpemUgPSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIDwgcHJvcHMubWluU2Nyb2xsU2l6ZSA/IHByb3BzLm1pblNjcm9sbFNpemUgOiBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplO1xuXG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IChwcm9wcy5jb250YWluZXJTaXplIC0gc2Nyb2xsU2l6ZSkgKiBmcmFjdGlvbmFsUG9zaXRpb247XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JvbGxTaXplOiBzY3JvbGxTaXplLFxuICAgICAgICAgICAgcG9zaXRpb246IE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7c21vb3RoU2Nyb2xsaW5nLCBpc0RyYWdnaW5nLCB0eXBlLCBzY3JvbGxiYXJTdHlsZSwgY29udGFpbmVyU3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGlzVm9yaXppb250YWwgPSB0eXBlID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGxldCBpc1ZlcnRpY2FsID0gdHlwZSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgbGV0IHNjcm9sbFN0eWxlcyA9IHRoaXMuY3JlYXRlU2Nyb2xsU3R5bGVzKCk7XG4gICAgICAgIGxldCBzcHJpbmdpZmllZFNjcm9sbFN0eWxlcyA9IHNtb290aFNjcm9sbGluZyA/IG1vZGlmeU9ialZhbHVlcyhzY3JvbGxTdHlsZXMsIHggPT4gc3ByaW5nKHgpKSA6IHNjcm9sbFN0eWxlcztcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyQ2xhc3NlcyA9IGBzY3JvbGxiYXItY29udGFpbmVyICR7aXNEcmFnZ2luZyA/ICdhY3RpdmUnIDogJyd9ICR7aXNWb3JpemlvbnRhbCA/ICdob3Jpem9udGFsJyA6ICcnfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17c3ByaW5naWZpZWRTY3JvbGxTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3JvbGxiYXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlU2Nyb2xsQmFyQ29udGFpbmVyQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHggPT4gdGhpcy5zY3JvbGxiYXJDb250YWluZXIgPSB4IH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbGJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uc2Nyb2xsYmFyU3R5bGUsIC4uLnN0eWxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG4gICAgICAgIGxldCBjbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZIDogZS5jbGllbnRYO1xuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY2xpZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2xpZW50UG9zaXRpb24gLSBjbGllbnRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgbGV0IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPSB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgKiB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgLyB0aGlzLnByb3BzLnJlYWxTaXplO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogY2xpZW50UG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25Qb3NpdGlvbkNoYW5nZSgocG9zaXRpb24gLSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIC8gMikgLyBtdWx0aXBsaWVyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsKGUpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzRHJhZ2dpbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRYIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoMCwgZGVsdGFYIC8gbXVsdGlwbGllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbChlKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0RyYWdnaW5nKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSB0aGlzLnN0YXRlLmxhc3RDbGllbnRQb3NpdGlvbiAtIGUuY2xpZW50WTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0Q2xpZW50UG9zaXRpb246IGUuY2xpZW50WSB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKGRlbHRhWSAvIG11bHRpcGxpZXIsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCBsYXN0Q2xpZW50UG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IGUuY2xpZW50WTogZS5jbGllbnRYO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiB0cnVlLCBsYXN0Q2xpZW50UG9zaXRpb246IGxhc3RDbGllbnRQb3NpdGlvbiB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVVwKGUpe1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVNjcm9sbFN0eWxlcygpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUucG9zaXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLnNjcm9sbFNpemUsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5wb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVNdWx0aXBsaWVyKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5jb250YWluZXJTaXplKSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgfVxuXG4gICAgaXNWZXJ0aWNhbCgpe1xuICAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCc7XG4gICAgfVxufVxuXG5TY3JvbGxCYXIucHJvcFR5cGVzID0ge1xuICAgIG9uTW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Qb3NpdGlvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVhbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGFpbmVyU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250YWluZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzY3JvbGxiYXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG93bmVyRG9jdW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW5TY3JvbGxTaXplOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5TY3JvbGxCYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGUgOiAndmVydGljYWwnLFxuICAgIHNtb290aFNjcm9sbGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2Nyb2xsYmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=