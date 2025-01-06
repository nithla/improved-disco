/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/carousel.js":
/*!************************************!*\
  !*** ./src/javascript/carousel.js ***!
  \************************************/
/***/ (() => {

var slick = document.createElement('script');
slick.setAttribute('src', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
document.head.appendChild(slick);
$('.archive__card-wrapper').slick({
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/archive.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/archive.scss ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
.archive {
  border-left: 0;
  border-right: 0;
  padding: 1.5rem 7.5vw;
  background: rgba(193, 110, 100, 0.35);
}
.archive__card {
  width: 7.5rem;
  height: 15rem;
  margin: 0 1rem;
  border: 0.5rem solid transparent;
  border-image: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8) 30;
  border-width: 3px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.archive__card-wrapper {
  display: flex;
  position: relative;
}
.archive__card img {
  width: 100%;
  height: fit-content;
}
.archive .slick-list {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0%, #000 12.5%, #000 50%, #000 87.5%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12.5%, #000 50%, #000 87.5%, transparent 100%);
}
.archive .slick-track {
  display: flex;
}
.archive .slick-arrow {
  position: relative;
}
.archive .slick-arrow::before {
  position: absolute;
  padding: 0.5rem 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: #000;
  transition: all 0.4s ease-in-out;
  color: #000;
}
.archive .slick-arrow:hover::before {
  background: #000;
  color: #f7a8b2;
}
.archive .prev::before {
  transform: translate(-100%, -50%);
  left: -1rem;
}
.archive .next::before {
  left: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/archive.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;EAC5B,cAAA;EACA,eAAA;EACA,qBAAA;EACA,qCDKY;ACuEhB;AA1EI;EACI,aAAA;EACA,aAAA;EACA,cAAA;EDgKJ,gCAAA;EACA,qJAAA;EC/JI,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;AA6ER;AA3EQ;EACI,aAAA;EACA,kBAAA;AA6EZ;AA1EQ;EACI,WAAA;EACA,mBAAA;AA4EZ;AAxEI;EACI,gBAAA;EACA,sGAAA;EACA,8GAAA;AA0ER;AAvEI;EACI,aAAA;AAyER;AAtEI;EACI,kBAAA;AAwER;AAtEQ;EACI,kBAAA;EACA,uBAAA;EACA,QAAA;EACA,2BAAA;EACA,eAAA;EACA,gBD3CJ;EC4CI,gCAAA;EACA,WD7CJ;ACqHR;AArEQ;EACI,gBDjDJ;ECkDI,cD9CL;ACqHP;AAnEI;EACI,iCAAA;EACA,WAAA;AAqER;AAlEI;EACI,UAAA;AAoER","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                .archive {\r\n    border-left: 0;\r\n    border-right: 0;\r\n    padding: 1.5rem 7.5vw;\r\n    background: $deep-blush-35;\r\n\r\n    &__card {\r\n        width: 7.5rem;\r\n        height: 15rem;\r\n        margin: 0 1rem;\r\n        @include border;\r\n        border-width: 3px;\r\n        overflow: hidden;\r\n        display: flex;\r\n        justify-content: center;\r\n\r\n        &-wrapper {\r\n            display: flex;\r\n            position: relative;\r\n        }\r\n\r\n        img {\r\n            width: 100%;\r\n            height: fit-content;\r\n        }\r\n    }\r\n\r\n    .slick-list {\r\n        overflow: hidden;\r\n        mask-image: linear-gradient(90deg, $trans 0%, $black 12.5%, $black 50%, $black 87.5%, $trans 100%);\r\n        -webkit-mask-image: linear-gradient(90deg, $trans 0%, $black 12.5%, $black 50%, $black 87.5%, $trans 100%);\r\n    }\r\n\r\n    .slick-track {\r\n        display: flex;\r\n    }\r\n\r\n    .slick-arrow {\r\n        position: relative;\r\n\r\n        &::before {\r\n            position: absolute;\r\n            padding: .5rem 0.75rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n            cursor: pointer;\r\n            background: $black;\r\n            transition: all 0.4s ease-in-out;\r\n            color: $black;\r\n        }\r\n\r\n        &:hover::before {\r\n            background: $black;\r\n            color: $pink;\r\n        }\r\n    }\r\n\r\n    .prev::before {\r\n        transform: translate(-100%, -50%);\r\n        left: -1rem;\r\n    }\r\n\r\n    .next::before {\r\n        left: 1rem;\r\n    }\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/blog.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/blog.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/1.jpg */ "./src/assets/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
.blog {
  margin: 0 7.5vw 1.5rem;
  display: flex;
}
@media (max-width: 1200px) {
  .blog {
    flex-direction: column;
  }
}
.blog__card {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  padding: 1.5rem;
  height: auto;
  background-color: #fff;
  text-align: justify;
  flex: 1;
}
@media (max-width: 768px) {
  .blog__card:not(:first-child) {
    display: none;
  }
}
.blog__card-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: unset;
  flex-basis: 85%;
  gap: 1.5rem;
}
@media (max-width: 1200px) {
  .blog__card-wrapper {
    padding: 1.5rem;
    background: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);
  }
}
.blog__card__content {
  margin-bottom: 1.5rem;
  font-weight: 400;
}
.blog__card__title {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
.blog__card__title a:hover, .blog__card__cta:hover {
  color: rgb(193, 110, 100);
  transition: 0.3s;
}
.blog__navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 15%;
  padding: 1.5rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  text-align: center;
}
.blog__navigation__content {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  margin-top: 2rem;
  color: white;
  text-shadow: black 0px 0px 4px;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/blog.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;EAC5B,sBAAA;EACA,aAAA;AA4EJ;ADVQ;ECpEwB;IAKxB,sBAAA;EA6EN;AACF;AA3EI;EDsKA,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;ECxKI,eAAA;EACA,YAAA;EACA,sBDVA;ECWA,mBAAA;EACA,OAAA;AAiFR;ADvCQ;ECvCI;IACI,aAAA;EAiFd;AACF;AA9EQ;ED+EJ,aAAA;EACA,8BC/E0B;EDgF1B,kBChFyC;EACjC,eAAA;EACA,WAAA;AAkFZ;ADvCQ;EC9CA;IAMQ,eAAA;IACA,gJDjBF;ECoGZ;AACF;AAhFQ;EACI,qBAAA;EACA,gBAAA;AAkFZ;AA/EQ;EACI,qBAAA;EACA,eAAA;AAiFZ;AA9EQ;EAEI,yBDrCC;ECsCD,gBAAA;AA+EZ;AA3EI;EDyDA,aAAA;EACA,sBAAA;EACA,uBC1DyB;ED2DzB,mBC3DiC;EAC7B,eAAA;EACA,eAAA;EACA,mDDdW;ECeX,kBAAA;AAgFR;AA9EQ;EDqHJ,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;ECvHQ,gBAAA;EACA,YAAA;EACA,8BAAA;AAoFZ","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                .blog {\r\n    margin: 0 7.5vw 1.5rem;\r\n    display: flex;\r\n\r\n    @include media-breakpoint-down ($xl) {\r\n        flex-direction: column;\r\n    }\r\n\r\n    &__card {\r\n        @include default-text;\r\n        padding: 1.5rem;\r\n        height: auto;\r\n        background-color: $white;\r\n        text-align: justify;\r\n        flex: 1;\r\n\r\n        @include media-breakpoint-down ($md) {\r\n            &:not(:first-child) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        &-wrapper {\r\n            @include flex-row(space-between, unset);\r\n            flex-basis: 85%;\r\n            gap: 1.5rem;\r\n\r\n            @include media-breakpoint-down($xl) {\r\n                padding: 1.5rem;\r\n                background: $la-db-bl-le;\r\n            }\r\n        }\r\n\r\n        &__content {\r\n            margin-bottom: 1.5rem;\r\n            font-weight: 400;\r\n        }\r\n\r\n        &__title {\r\n            margin-bottom: 1.5rem;\r\n            font-size: 2rem;\r\n        }\r\n\r\n        &__title a:hover,\r\n        &__cta:hover {\r\n            color: $deep-blush;\r\n            transition: 0.3s;\r\n        }\r\n    }\r\n\r\n    &__navigation {\r\n        @include flex-column(center, center);\r\n        flex-basis: 15%;\r\n        padding: 1.5rem;\r\n        background: $background-image;\r\n        text-align: center;\r\n\r\n        &__content {\r\n            @include default-text;\r\n            margin-top: 2rem;\r\n            color: white;\r\n            text-shadow: black 0px 0px 4px;\r\n        }\r\n    }\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/fonts.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/fonts.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Italianno&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ballet&family=Herr+Von+Muellerhoff&family=Monsieur+La+Doulaise&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sail&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dynalight&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
/**************************** Serif Fonts *************************************/
/* Cormorant Garamond */
/* Playfair Display */
/* Cinzel Decorative */
/****************************** Cursive Fonts *********************************/
/* Pinyon Script */
/* Italianno */
/* Ballet; Herr Von Mueller; Monsieur La Doulaise */
/* Mrs Saint Delafield */
/* Sail */
/* Dynalight */
/***************************** Sans-serif Fonts ********************************/
/* Poppins */
/* Montserrat */
/* Oswald */
/* Raleway */
/* Manrope */
/* Spartan */`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/fonts.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC7JJ;;ADgKA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACtJJ;ADuEI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACvER;AD0EI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;AClIrD;AD6EI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC9HrD;ADgFI;EACI,yBA5IK;AC8Db;ADgFQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC/EZ;ADkFQ;EACI,8BAAA;AChFZ;ADmFQ;EACI,8BAAA;ACjFZ;ADNQ;EAmHR;IAUQ,YAAA;ECnHN;AACF;;ADsHA,yEAAA;AC7MgC,+EAAA;AAChC,uBAAA;AAGA,qBAAA;AAGA,sBAAA;AAGA,+EAAA;AACA,kBAAA;AAGA,cAAA;AAGA,mDAAA;AAGA,wBAAA;AAGA,SAAA;AAGA,cAAA;AAGA,gFAAA;AACA,YAAA;AAGA,eAAA;AAGA,WAAA;AAGA,YAAA;AAGA,YAAA;AAGA,YAAA","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                /**************************** Serif Fonts *************************************/\r\n/* Cormorant Garamond */\r\n@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');\r\n\r\n/* Playfair Display */\r\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n/* Cinzel Decorative */\r\n@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');\r\n\r\n/****************************** Cursive Fonts *********************************/\r\n/* Pinyon Script */\r\n@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');\r\n\r\n/* Italianno */\r\n@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');\r\n\r\n/* Ballet; Herr Von Mueller; Monsieur La Doulaise */\r\n@import url('https://fonts.googleapis.com/css2?family=Ballet&family=Herr+Von+Muellerhoff&family=Monsieur+La+Doulaise&display=swap');\r\n\r\n/* Mrs Saint Delafield */\r\n@import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');\r\n\r\n/* Sail */\r\n@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');\r\n\r\n/* Dynalight */\r\n@import url('https://fonts.googleapis.com/css2?family=Dynalight&display=swap');\r\n\r\n/***************************** Sans-serif Fonts ********************************/\r\n/* Poppins */\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n/* Montserrat */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n/* Oswald */\r\n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');\r\n\r\n/* Raleway */\r\n@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n/* Manrope */\r\n@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');\r\n\r\n/* Spartan */\r\n@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/footer.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/footer.scss ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/3.jpg */ "./src/assets/3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/1.jpg */ "./src/assets/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
.footer {
  padding: 1.5rem 7.5vw;
}
.footer__social-links {
  padding: 0.5rem 0;
  background: rgba(193, 110, 100, 0.35);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.footer__social-links img {
  width: 2rem;
  height: auto;
}
@media (max-width: 768px) {
  .footer__social-links img {
    width: 2rem;
  }
}
.footer__contact {
  display: flex;
}
.footer__contact__picture {
  flex-basis: 60%;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
}
@media (max-width: 768px) {
  .footer__contact__picture {
    display: none;
  }
}
.footer__contact__input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  color: white;
  text-shadow: black 0px 0px 4px;
  flex-basis: 40%;
  gap: 1rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  padding: 1.5rem;
}
@media (max-width: 768px) {
  .footer__contact__input-wrapper {
    flex-basis: 100%;
  }
}
.footer__contact__input__name, .footer__contact__input__query {
  width: 100%;
}
.footer__contact__input__name input, .footer__contact__input__query textarea {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  border: none;
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
}
.footer__contact__input__name input:focus, .footer__contact__input__name input:hover, .footer__contact__input__query textarea:focus, .footer__contact__input__query textarea:hover {
  outline: rgb(193, 110, 100) solid 2px;
}
.footer__contact__input__query textarea {
  height: 5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC3MA;EACI,qBAAA;AA0EJ;AAxEI;EACI,iBAAA;EACA,qCDEQ;ECDR,aAAA;EACA,uBAAA;EACA,WAAA;AA0ER;AAxEQ;EACI,WAAA;EACA,YAAA;AA0EZ;ADhCQ;EC5CA;IAKQ,WAAA;EA2Ed;AACF;AAvEI;EACI,aAAA;AAyER;AAvEQ;EACI,eAAA;EACA,mDAAA;EACA,sBAAA;EACA,2BAAA;AAyEZ;AD9CQ;EC/BA;IAOQ,aAAA;EA0Ed;AACF;AAtEY;EDsER,aAAA;EACA,sBAAA;EACA,uBCvEiC;EDwEjC,mBCxEyC;EDwIzC,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EC1IY,YAAA;EACA,8BAAA;EACA,eAAA;EACA,SAAA;EACA,mDDJG;ECKH,eAAA;AA+EhB;ADpEQ;ECnBI;IAWQ,gBAAA;EAgFlB;AACF;AA7EY;EAEI,WAAA;AA8EhB;AA3EY;EDqHR,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;ECtHY,YAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAgFhB;AA9EgB;EAEI,qCAAA;AA+EpB;AA3EY;EACI,YAAA;AA6EhB","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                \r\n\r\n.footer {\r\n    padding: 1.5rem 7.5vw;\r\n\r\n    &__social-links {\r\n        padding: 0.5rem 0;\r\n        background: $deep-blush-35;\r\n        display: flex;\r\n        justify-content: center;\r\n        gap: 1.5rem;\r\n\r\n        img {\r\n            width: 2rem;\r\n            height: auto;\r\n\r\n            @include media-breakpoint-down($md) {\r\n                width: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__contact {\r\n        display: flex;\r\n    \r\n        &__picture {\r\n            flex-basis: 60%;\r\n            background: url('../assets/3.jpg');\r\n            background-size: cover;\r\n            background-position: center;\r\n    \r\n            @include media-breakpoint-down ($md) {\r\n                display: none;\r\n            }\r\n        }\r\n    \r\n        &__input {\r\n            &-wrapper {\r\n                @include flex-column(center, center);\r\n                @include default-text;\r\n                color: white;\r\n                text-shadow: black 0px 0px 4px;\r\n                flex-basis: 40%;\r\n                gap: 1rem;\r\n                background: $background-image;\r\n                padding: 1.5rem;\r\n    \r\n                @include media-breakpoint-down ($md) {\r\n                    flex-basis: 100%;\r\n                }\r\n            }\r\n            \r\n            &__name,\r\n            &__query {\r\n                width: 100%;\r\n            }\r\n    \r\n            &__name input,\r\n            &__query textarea {\r\n                @include default-text;\r\n                border: none;\r\n                display: block;\r\n                width: 100%;\r\n                height: 2rem;\r\n                padding: 0.5rem;\r\n    \r\n                &:focus,\r\n                &:hover {\r\n                    outline: $deep-blush solid 2px;\r\n                }\r\n            }\r\n    \r\n            &__query textarea {\r\n                height: 5rem;\r\n            }\r\n        }\r\n    }\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/header.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/header.scss ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/1.jpg */ "./src/assets/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 7.5vw;
  min-height: 4rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) rgba(0, 0, 51, 0.5);
  background-size: cover;
  background-blend-mode: multiply;
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  text-align: center;
}
@media (max-width: 768px) {
  .header {
    background: none;
    position: relative;
  }
}
.header__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 576px) {
  .header__logo {
    width: 100%;
  }
}
.header__logo-text {
  cursor: pointer;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 1rem 1rem 1.5rem;
  font-family: "Cormorant Garamond", Times, serif;
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 0.5rem;
  word-spacing: -5px;
  transition: all 0.3s ease-in-out;
  color: #fff;
  width: 5.5rem;
}
@media (max-width: 576px) {
  .header__logo-text {
    margin: 1rem 0 0.5rem;
    width: 4rem;
    padding: 0;
  }
}
.header__logo-text:hover {
  box-shadow: #fff 0 6px 0 -5px;
}
.header__logo-caret {
  height: 1rem;
  width: 1rem;
  transform: rotate(90deg);
  display: flex;
}
@media (min-width: 576px) {
  .header__logo-caret {
    display: none;
  }
}
.header__logo-caret p {
  transform: rotate(-90deg);
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  font-size: 0.3rem;
  color: white;
  padding: 0.15rem;
}
.header__logo-caret::before, .header__logo-caret::after {
  border-right: 2px solid white;
  content: "";
  display: block;
  height: 8px;
  margin-top: -6px;
  position: absolute;
  transform: rotate(135deg);
  right: 50%;
  top: 50%;
  width: 0;
}
.header__logo-caret::after {
  margin-top: -1px;
  transform: rotate(45deg);
}
.header__navigation {
  width: fit-content;
}
@media (max-width: 576px) {
  .header__navigation {
    width: 100%;
  }
}
.header__navigation-links {
  display: flex;
  column-gap: 2rem;
  cursor: default;
}
@media (max-width: 576px) {
  .header__navigation-links {
    flex-direction: column;
    row-gap: 2rem;
    margin: 1rem 0;
    background: rgba(193, 110, 100, 0.35);
    padding: 1rem;
  }
}
.header__navigation-links li {
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
}
.header__navigation-links li:hover {
  color: #f7a8b2;
}
@media (max-width: 576px) {
  .header__navigation-links li {
    font-size: 0.75rem;
    text-transform: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/header.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;EAC5B,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uEAAA;EACA,sBAAA;EACA,+BAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAAA;EACA,gBAAA;EACA,MAAA;EACA,UAAA;EACA,kBAAA;AA4EJ;ADpCQ;ECxDwB;IAmBxB,gBAAA;IACA,kBAAA;EA6EN;AACF;AA3EI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AA6ER;ADrDQ;EC3BJ;IAMQ,WAAA;EA8EV;AACF;AA5EQ;EACI,eAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;EACA,+CDjBA;ECkBA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gCAAA;EACA,WDzCJ;EC0CI,aAAA;AA8EZ;ADxEQ;EClBA;IAeQ,qBAAA;IACA,WAAA;IACA,UAAA;EA+Ed;AACF;AA7EY;EACI,6BAAA;AA+EhB;AA3EQ;EACI,YAAA;EACA,WAAA;EACA,wBAAA;EACA,aAAA;AA6EZ;AD9DQ;ECnBA;IAOQ,aAAA;EA8Ed;AACF;AA5EY;EACI,yBAAA;ED0GZ,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EC5GY,iBAAA;EACA,YAAA;EACA,gBAAA;AAkFhB;AA/EY;EAEI,6BAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,UAAA;EACA,QAAA;EACA,QAAA;AAgFhB;AA7EY;EACI,gBAAA;EACA,wBAAA;AA+EhB;AA1EI;EACI,kBAAA;AA4ER;AD3HQ;EC8CJ;IAIQ,WAAA;EA6EV;AACF;AA3EQ;EACI,aAAA;EAEA,gBAAA;EACA,eAAA;AA4EZ;ADrIQ;ECqDA;IAOQ,sBAAA;IACA,aAAA;IACA,cAAA;IACA,qCDxGA;ICyGA,aAAA;EA6Ed;AACF;AA3EY;EACI,qBAAA;EACA,eAAA;EACA,gCAAA;EACA,oDDlGN;ECmGM,iBAAA;AA6EhB;AA3EgB;EACI,cDtHb;ACmMP;ADxJQ;ECmEI;IAYQ,kBAAA;IACA,oBAAA;EA6ElB;AACF","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                .header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 1rem 7.5vw;\r\n    min-height: 4rem;\r\n    background: $background-image $dark-blue-50;\r\n    background-size: cover;\r\n    background-blend-mode: multiply;\r\n    box-sizing: border-box;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 2;\r\n    text-align: center;\r\n\r\n    @include media-breakpoint-down($md) {\r\n        background: none;\r\n        position: relative;\r\n    }\r\n\r\n    &__logo {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n\r\n        @include media-breakpoint-down($sm) {\r\n            width: 100%;\r\n        }\r\n\r\n        &-text {\r\n            cursor: pointer;\r\n            display: inline-block;\r\n            padding: 0.25rem 0.75rem;\r\n            margin: 1rem 1rem 1.5rem;\r\n            font-family: $Cormorant;\r\n            font-size: 1.5rem;\r\n            font-weight: 100;\r\n            letter-spacing: 0.5rem;\r\n            word-spacing: -5px;\r\n            transition: all 0.3s ease-in-out;\r\n            color: $white;\r\n            width: 5.5rem;\r\n\r\n            @include media-breakpoint-down($sm) {\r\n                margin: 1rem 0 0.5rem;\r\n                width: 4rem;\r\n                padding: 0;\r\n            }\r\n\r\n            &:hover {\r\n                box-shadow: $white 0 6px 0 -5px;\r\n            }\r\n        }\r\n\r\n        &-caret {\r\n            height: 1rem;\r\n            width: 1rem;\r\n            transform: rotate(90deg);\r\n            display: flex;\r\n\r\n            @include media-breakpoint-up($sm) {\r\n                display: none;\r\n            }\r\n\r\n            p {\r\n                transform: rotate(-90deg);\r\n                @include default-text;\r\n                font-size: 0.3rem;\r\n                color: white;\r\n                padding: 0.15rem;\r\n            }\r\n\r\n            &::before,\r\n            &::after {\r\n                border-right: 2px solid white;\r\n                content: '';\r\n                display: block;\r\n                height: 8px;\r\n                margin-top: -6px;\r\n                position: absolute;\r\n                transform: rotate(135deg);\r\n                right: 50%;\r\n                top: 50%;\r\n                width: 0;\r\n            }\r\n\r\n            &::after {\r\n                margin-top: -1px;\r\n                transform: rotate(45deg);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__navigation {\r\n        width: fit-content;\r\n\r\n        @include media-breakpoint-down($sm) {\r\n            width: 100%;\r\n        }\r\n\r\n        &-links {\r\n            display: flex;\r\n            // display: none;\r\n            column-gap: 2rem;\r\n            cursor: default;\r\n\r\n            @include media-breakpoint-down($sm) {\r\n                flex-direction: column;\r\n                row-gap: 2rem;\r\n                margin: 1rem 0;\r\n                background: $deep-blush-35;\r\n                padding: 1rem;\r\n            }\r\n\r\n            li {\r\n                display: inline-block;\r\n                cursor: pointer;\r\n                transition: all 0.3s ease-in-out;\r\n                font-family: $Spartan;\r\n                font-size: 0.5rem;\r\n\r\n                &:hover {\r\n                    color: $pink;\r\n                }\r\n\r\n                @include media-breakpoint-down($sm) {\r\n                    font-size: 0.75rem;\r\n                    text-transform: none;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/home.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/home.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
.home {
  border: 0.5rem solid transparent;
  border-image: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8) 30;
  width: calc(100% - 15vw);
  margin: 0 auto 1.5rem;
  background: #556880;
  display: flex;
}
.home__bio {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  color: white;
  font-weight: 300;
}
.home__bio-text {
  padding: 1.5rem;
}
.home__bio-picture {
  float: right;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 12rem) 0 0);
}
.home__bio-picture img {
  margin-top: 0.5rem;
  width: 10rem;
  height: auto;
  position: relative;
  bottom: -8px;
  right: -10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/home.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;EDyK5B,gCAAA;EACA,qJAAA;ECxKA,wBAAA;EACA,qBAAA;EACA,mBDEG;ECDH,aAAA;AA6EJ;AA3EI;EDuKA,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;ECzKI,YAAA;EACA,gBAAA;AAiFR;AA/EQ;EACI,eAAA;AAiFZ;AA9EQ;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EACA,4CAAA;AAgFZ;AA9EY;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;AAgFhB","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                .home {\r\n    @include border;\r\n    width: calc(100% - 15vw);\r\n    margin: 0 auto 1.5rem;\r\n    background: $blue;\r\n    display: flex;\r\n\r\n    &__bio {\r\n        @include default-text;\r\n        color: white;\r\n        font-weight: 300;\r\n\r\n        &-text {\r\n            padding: 1.5rem;\r\n        }\r\n\r\n        &-picture {\r\n            float: right;\r\n            height: 100%;\r\n            display: flex;\r\n            align-items: flex-end;\r\n            shape-outside: inset(calc(100% - 12rem) 0 0);\r\n\r\n            img {\r\n                margin-top: 0.5rem;\r\n                width: 10rem;\r\n                height: auto;\r\n                position: relative;\r\n                bottom: -8px;\r\n                right: -10px;\r\n            }\r\n        }\r\n    }\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/1.jpg */ "./src/assets/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
* {
  box-sizing: border-box;
}

body {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) rgba(0, 0, 51, 0.5);
  background-size: cover;
  background-blend-mode: multiply;
  color: white;
  background-attachment: fixed;
}

.main {
  min-height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;EAC5B,sBAAA;AA4EJ;;AAzEA;EACI,uEAAA;EACA,sBAAA;EACA,+BAAA;EACA,YAAA;EACA,4BAAA;AA4EJ;;AAzEA;EACI,iBAAA;AA4EJ","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                * {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: $background-image  $dark-blue-50;\r\n    background-size: cover;\r\n    background-blend-mode: multiply;\r\n    color: white;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.main {\r\n    min-height: 100vh;\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/reset.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/reset.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/reset.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AC5KJ;;AD+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;ACrKJ;ADsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;ACtFR;ADyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;ACjJrD;AD4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AC7IrD;AD+FI;EACI,yBA5IK;AC+Cb;AD+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AC9FZ;ADiGQ;EACI,8BAAA;AC/FZ;ADkGQ;EACI,8BAAA;AChGZ;ADSQ;EAmHR;IAUQ,YAAA;EClIN;AACF;;ADqIA,yEAAA;AC7MgC;;;;;;;;;;;;;EAa/B,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AA4ED;;AA1EA,gDAAA;AACA;;EAEC,cAAA;AA6ED;;AA3EA;EACC,cAAA;AA8ED;;AA5EA;EACC,gBAAA;AA+ED;;AA7EA;EACC,YAAA;AAgFD;;AA9EA;;EAEC,WAAA;EACA,aAAA;AAiFD;;AA/EA;EACC,yBAAA;EACA,iBAAA;AAkFD","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/","\n                                @import \"variables.scss\";\n                                html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\n                              "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/variables.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/variables.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------- Theme Colours ---------------------------*/
/* Colours */
/* Gradient */
/*-------------------------- Theme Colours End -------------------------*/
/*-------------------------------- Fonts -------------------------------*/
/*  Serif Font */
/*  Sans-Serif Font */
/*------------------------------ Fonts End -----------------------------*/
/*----------------------------- Breakpoints ----------------------------*/
/*--------------------------- Breakpoints End --------------------------*/
/*------------------------------- Images -------------------------------*/
/*----------------------------- Images End -----------------------------*/
/*------------------------------- Mixins -------------------------------*/
/*----------------------------- Mixins End -----------------------------*/
/*------------------------------- Common -------------------------------*/
a {
  color: #000;
  text-decoration: none;
}

button {
  font-family: "Spartan", Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  transition: color 0.3s 0.1s;
  position: relative;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}
button::before, button::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
button::before {
  border-bottom-width: 2px;
  border-left-width: 2px;
}
button::after {
  border-top-width: 2px;
  border-right-width: 2px;
}
button:hover {
  color: rgb(193, 110, 100);
}
button:hover::before, button:hover::after {
  border-color: rgb(193, 110, 100);
  transition: border-color 0s, width 0.3s, height 0.3s;
  width: 100%;
  height: 100%;
}
button:hover::before {
  transition-delay: 0s, 0s, 0.3s;
}
button:hover::after {
  transition-delay: 0s, 0.3s, 0s;
}
@media (min-width: 576px) {
  button {
    width: 10rem;
  }
}

/*---------------------------- Common Ends -----------------------------*/`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA,wEAAA;AAEA,YAAA;AAWA,aAAA;AAGA,yEAAA;AAGA,yEAAA;AAEA,gBAAA;AAGA,qBAAA;AAGA,yEAAA;AAGA,yEAAA;AAOA,yEAAA;AAGA,yEAAA;AAKA,yEAAA;AAGA,yEAAA;AAuIA,yEAAA;AAGA,yEAAA;AAEA;EACI,WAxLI;EAyLJ,qBAAA;AA5KJ;;AA+KA;EAjBI,oDAvJM;EAwJN,kBAAA;EACA,oBAAA;EACA,WA9KI;EA+KJ,gBAAA;EAhEA,gCAAA;EACA,WAhHI;EAiHJ,2BAAA;EACA,kBAAA;EA6EA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;AArKJ;AAsFI;EAEI,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,SAAA;EACA,QAAA;AAtFR;AAyFI;EAGI,wBAyD6C;EAxD7C,sBAwD6C;AAjJrD;AA4FI;EAGI,qBAkD6C;EAjD7C,uBAiD6C;AA7IrD;AA+FI;EACI,yBA5IK;AA+Cb;AA+FQ;EAEI,gCAhJC;EAiJD,oDAAA;EACA,WAAA;EACA,YAAA;AA9FZ;AAiGQ;EACI,8BAAA;AA/FZ;AAkGQ;EACI,8BAAA;AAhGZ;AASQ;EAmHR;IAUQ,YAAA;EAlIN;AACF;;AAqIA,yEAAA","sourcesContent":["/*--------------------------- Theme Colours ---------------------------*/\r\n\r\n/* Colours */\r\n$trans: transparent;\r\n$white: #fff;\r\n$black: #000;\r\n$dark-blue: #000033;\r\n$dark-blue-50: rgba(0, 0, 51, 0.50);\r\n$blue: #556880;\r\n$pink: #f7a8b2;\r\n$deep-blush: rgb(193, 110, 100);\r\n$deep-blush-35: rgba(193, 110, 100, 0.35);\r\n\r\n/* Gradient */\r\n$la-db-bl-le: linear-gradient(to left, #957dad, #a478a4, #b17399, #bb6f8a, #c06d7a, #c7747c, #cd7c7f, #d38382, #df9398, #eaa5ae, #f4b6c4, #fec8d8);\r\n\r\n/*-------------------------- Theme Colours End -------------------------*/\r\n\r\n\r\n/*-------------------------------- Fonts -------------------------------*/\r\n\r\n/*  Serif Font */\r\n$Cormorant: 'Cormorant Garamond', Times, serif;\r\n\r\n/*  Sans-Serif Font */\r\n$Spartan: 'Spartan', Arial, Helvetica, sans-serif;\r\n\r\n/*------------------------------ Fonts End -----------------------------*/\r\n\r\n\r\n/*----------------------------- Breakpoints ----------------------------*/\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n/*--------------------------- Breakpoints End --------------------------*/\r\n\r\n\r\n/*------------------------------- Images -------------------------------*/\r\n\r\n$background-image: url('../assets/1.jpg');\r\n$background-image-crop: url('../assets/1-crop.jpg');\r\n\r\n/*----------------------------- Images End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Mixins -------------------------------*/\r\n\r\n@mixin media-breakpoint-down($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (max-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (max-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (max-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (max-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin media-breakpoint-up($breakpoint) {\r\n    @if $breakpoint==$sm {\r\n        @media (min-width: $sm) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$md {\r\n        @media (min-width: $md) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $breakpoint==$lg {\r\n        @media (min-width: $lg) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else {\r\n        @media (min-width: $xl) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin flex-row ($justify-content, $align-items) {\r\n    display: flex;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin flex-column($justify-content, $align-items) {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: $justify-content;\r\n    align-items: $align-items;\r\n}\r\n\r\n@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.3s) {\r\n    box-shadow: inset 0 0 0 $width $color;\r\n    color: $color;\r\n    transition: color $duration calc($duration/3);\r\n    position: relative;\r\n\r\n    &::before,\r\n    &::after {\r\n        border: 0 solid transparent;\r\n        box-sizing: border-box;\r\n        content: '';\r\n        pointer-events: none;\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n\r\n        #{$vertical}: 0;\r\n        #{$horizontal}: 0;\r\n    }\r\n\r\n    &::before {\r\n        $h-side: if($horizontal=='left', 'right', 'left');\r\n\r\n        border-#{$vertical}-width: $width;\r\n        border-#{$h-side}-width: $width;\r\n    }\r\n\r\n    &::after {\r\n        $v-side: if($vertical=='top', 'bottom', 'top');\r\n\r\n        border-#{$v-side}-width: $width;\r\n        border-#{$horizontal}-width: $width;\r\n    }\r\n\r\n    &:hover {\r\n        color: $hover;\r\n\r\n        &::before,\r\n        &::after {\r\n            border-color: $hover;\r\n            transition: border-color 0s, width $duration, height $duration;\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        &::before {\r\n            transition-delay: 0s, 0s, $duration;\r\n        }\r\n\r\n        &::after {\r\n            transition-delay: 0s, $duration, 0s;\r\n        }\r\n    }\r\n}\r\n\r\n@mixin border {\r\n    border: 0.5rem solid transparent;\r\n    border-image: $la-db-bl-le 30;\r\n}\r\n\r\n@mixin default-text {\r\n    font-family: $Spartan;\r\n    font-size: 0.75rem;\r\n    line-height: 1.25rem;\r\n    color: $black;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------------- Mixins End -----------------------------*/\r\n\r\n\r\n/*------------------------------- Common -------------------------------*/\r\n\r\na {\r\n    color: $black;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    @include default-text;\r\n    @include btn-border-drawing($black, $deep-blush, 2px, bottom, right);\r\n    border: none;\r\n    padding: 1rem;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n\r\n    @include media-breakpoint-up($sm) {\r\n        width: 10rem;\r\n    }\r\n}\r\n\r\n/*---------------------------- Common Ends -----------------------------*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/archive.scss":
/*!*********************************!*\
  !*** ./src/styles/archive.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_archive_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./archive.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/archive.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_archive_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_archive_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_archive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_archive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blog.scss":
/*!******************************!*\
  !*** ./src/styles/blog.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_blog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./blog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/blog.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_blog_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_blog_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_blog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_blog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/fonts.scss":
/*!*******************************!*\
  !*** ./src/styles/fonts.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_fonts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./fonts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/fonts.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_fonts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.scss":
/*!******************************!*\
  !*** ./src/styles/home.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_variables_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./variables.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/variables.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/1-crop.jpg":
/*!*******************************!*\
  !*** ./src/assets/1-crop.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1-crop.jpg";

/***/ }),

/***/ "./src/assets/1.jpg":
/*!**************************!*\
  !*** ./src/assets/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1.jpg";

/***/ }),

/***/ "./src/assets/2.jpg":
/*!**************************!*\
  !*** ./src/assets/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2.jpg";

/***/ }),

/***/ "./src/assets/3.jpg":
/*!**************************!*\
  !*** ./src/assets/3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3.jpg";

/***/ }),

/***/ "./src/assets/4.jpg":
/*!**************************!*\
  !*** ./src/assets/4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4.jpg";

/***/ }),

/***/ "./src/assets/5.png":
/*!**************************!*\
  !*** ./src/assets/5.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5.png";

/***/ }),

/***/ "./src/assets/6.png":
/*!**************************!*\
  !*** ./src/assets/6.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6.png";

/***/ }),

/***/ "./src/assets/instagram.png":
/*!**********************************!*\
  !*** ./src/assets/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "instagram.png";

/***/ }),

/***/ "./src/assets/letterboxd.svg":
/*!***********************************!*\
  !*** ./src/assets/letterboxd.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "letterboxd.svg";

/***/ }),

/***/ "./src/assets/linkedin.png":
/*!*********************************!*\
  !*** ./src/assets/linkedin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "linkedin.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/variables.scss */ "./src/styles/variables.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/fonts.scss */ "./src/styles/fonts.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/styles/footer.scss");
/* harmony import */ var _styles_blog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/blog.scss */ "./src/styles/blog.scss");
/* harmony import */ var _styles_archive_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/archive.scss */ "./src/styles/archive.scss");
/* harmony import */ var _styles_home_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _javascript_carousel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./javascript/carousel.js */ "./src/javascript/carousel.js");
/* harmony import */ var _javascript_carousel_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_javascript_carousel_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_1_crop_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/1-crop.jpg */ "./src/assets/1-crop.jpg");
/* harmony import */ var _assets_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/1.jpg */ "./src/assets/1.jpg");
/* harmony import */ var _assets_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/2.jpg */ "./src/assets/2.jpg");
/* harmony import */ var _assets_3_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/3.jpg */ "./src/assets/3.jpg");
/* harmony import */ var _assets_4_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/4.jpg */ "./src/assets/4.jpg");
/* harmony import */ var _assets_5_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/5.png */ "./src/assets/5.png");
/* harmony import */ var _assets_6_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/6.png */ "./src/assets/6.png");
/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/instagram.png */ "./src/assets/instagram.png");
/* harmony import */ var _assets_letterboxd_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/letterboxd.svg */ "./src/assets/letterboxd.svg");
/* harmony import */ var _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/linkedin.png */ "./src/assets/linkedin.png");




















})();

/******/ })()
;
//# sourceMappingURL=bundlea81f5d3b25bf94e60165.js.map