(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("prop-types");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony export (immutable) */ exports["reduceUI"] = reduceUI;
/* harmony export (immutable) */ exports["mapHyperState"] = mapHyperState;
/* harmony export (immutable) */ exports["decorateHyperLine"] = decorateHyperLine;
/* harmony export (immutable) */ exports["decorateHyper"] = decorateHyper;


alert("ass");
function reduceUI(state, { type, config }) {
  switch (type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      {
        return state.set('hyperline', config.hyperline);
      }
    default:
      break;
  }

  return state;
}

function mapHyperState({ ui: { colors, fontFamily, hyperline } }, map) {
  alert("asdsda");

  // let userPlugins = []
  // if (hyperline !== undefined) {
  //   if (hyperline.plugins !== undefined) {
  //     userPlugins = hyperline.plugins
  //   }
  // }
  //
  // return Object.assign({}, map, {
  //   colors: getColorList(colors),
  //   fontFamily,
  //   userPlugins
  // })
}

function pluginsByName(plugins) {
  alert("asdsda");

  // const dict = {}
  // plugins.forEach((plugin) => {
  //   dict[plugin.displayName()] = plugin
  // })
  //
  // return dict
}

function filterPluginsByConfig(plugins) {
  alert("asdsda");

  //   const config = window.config.getConfig().hyperline
  //   if (!config) return plugins
  //
  //   const userPluginNames = config.plugins
  //   if (!userPluginNames) {
  //     return plugins
  //   }
  //
  //   plugins = pluginsByName(plugins)
  //   const filtered = []
  //
  //   userPluginNames.forEach((name) => {
  //     if (plugins.hasOwnProperty(name)) {
  //       filtered.push(plugins[name])
  //     }
  //   })
  //
  //   return filtered
}

function decorateHyperLine(HyperLine) {
  alert("asdsda");

  // return class extends Component {
  //   static displayName() {
  //     return 'HyperLine'
  //   }
  //
  //   static propTypes() {
  //     return {
  //       plugins: PropTypes.array.isRequired
  //     }
  //   }
  //
  //   static get defaultProps() {
  //     return {
  //       plugins: []
  //     }
  //   }
  //
  //   render() {
  //     const plugins = [...this.props.plugins, ...hyperlinePlugins]
  //
  //     return <HyperLine {...this.props} plugins={filterPluginsByConfig(plugins)} />
  //   }
  // }
}

function decorateHyper(Hyper) {
  alert("asdsda");
  // return class extends Component {
  //   static displayName() {
  //     return 'Hyper'
  //   }
  //
  //   static propTypes() {
  //     return {
  //       colors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  //       fontFamily: PropTypes.string,
  //       customChildren: PropTypes.element.isRequired
  //     }
  //   }
  //
  //   render() {
  //     const customChildren = (
  //       <div>
  //         {this.props.customChildren}
  //         <HyperLine style={{ fontFamily: this.props.fontFamily }} />
  //       </div>
  //     )
  //
  //     return <Hyper {...this.props} customChildren={customChildren} />
  //   }
  // }
}

/***/ }
/******/ ])));