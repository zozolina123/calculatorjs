(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(_,e,t){_.exports=t(19)},15:function(_,e,t){},17:function(_,e,t){},19:function(_,e,t){"use strict";t.r(e);var a=t(0),s=t.n(a),l=t(8),r=t.n(l),i=(t(15),t(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),E_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),E_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),E_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),E_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),E_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),Buttons=function(_){function e(){return Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,e),Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(e).apply(this,arguments))}return Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(e,_),Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"border"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"buttons"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"AC",value:"AC",onClick:this.props.handleClear},"AC"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"divide",value:"/",onClick:this.props.handleOperation},"/"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"multiply",value:"*",onClick:this.props.handleOperation},"X"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"seven",value:"7",onClick:this.props.handleNumber},"7"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"eight",value:"8",onClick:this.props.handleNumber},"8"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"nine",value:"9",onClick:this.props.handleNumber},"9"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"minus",value:"-",onClick:this.props.handleOperation},"-"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"four",value:"4",onClick:this.props.handleNumber},"4"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"five",value:"5",onClick:this.props.handleNumber},"5"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"six",value:"6",onClick:this.props.handleNumber},"6"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"plus",value:"+",onClick:this.props.handleOperation},"+"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"one",value:"1",onClick:this.props.handleNumber},"1"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"two",value:"2",onClick:this.props.handleNumber},"2"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"three",value:"3",onClick:this.props.handleNumber},"3"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"equal",value:"=",onClick:this.props.handleEqual},"="),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"zero",value:"0",onClick:this.props.handleNumber},"0"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{id:"decimal",value:".",onClick:this.props.handleDecimal},",")))}}]),e}(react__WEBPACK_IMPORTED_MODULE_6__.Component),Display=function(_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",{id:"display"},_.val)},App=function(_Component2){function App(props){var _this;return Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(App).call(this,props)),_this.handleNumber=function(_){/\/|\*|\+|-/g.exec(_this.state.expression.slice(-1))&&"0"===_.target.value||_this.setState({solved:"",input:_this.state.expression+_.target.value,expression:_this.state.expression+_.target.value})},_this.handleOperation=function(_){/\/|\*|\+|-/g.exec(_this.state.expression.slice(-1))?_this.setState({input:_this.state.expression.slice(0,-1)+_.target.value,expression:_this.state.expression.slice(0,-1)+_.target.value}):""===_this.state.solved?_this.setState({input:_this.state.expression+_.target.value,expression:_this.state.expression+_.target.value}):_this.setState({input:_this.state.solved+_this.state.expression+_.target.value,expression:_this.state.solved+_this.state.expression+_.target.value})},_this.handleEqual=function(){/\/|\*|\+|-/g.exec(_this.state.expression.slice(-1))?_this.setState({expression:_this.state.expression.slice(0,-1)}):_this.setState({input:eval(_this.state.expression),solved:eval(_this.state.expression),expression:""})},_this.handleClear=function(){_this.setState({input:"",operator:"",expression:"",solved:""})},_this.handleDecimal=function(){_this.setState({expression:_this.state.expression+".",input:_this.state.expression+"."})},_this.state={input:"",operator:"",expression:"",solved:""},_this.handleNumber=_this.handleNumber.bind(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_this))),_this.handleOperation=_this.handleOperation.bind(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_this))),_this.handleEqual=_this.handleEqual.bind(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_this))),_this.handleClear=_this.handleClear.bind(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_this))),_this.handleDecimal=_this.handleDecimal.bind(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_this))),_this}return Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_Component2),Object(E_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Display,{val:this.state.input}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Buttons,{handleNumber:this.handleNumber,handleOperation:this.handleOperation,handleEqual:this.handleEqual,handleClear:this.handleClear,handleDecimal:this.handleDecimal}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App}},[[10,2,1]]]);
//# sourceMappingURL=main.250030b5.chunk.js.map