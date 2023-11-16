"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_importMedicine_vue"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      file: null
    };
  },
  methods: {
    teste: function teste(e) {
      var _this = this;
      var file = e.target.files || e.dataTransfer.files;
      if (!file.length) return;
      new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (e) {
          resolve(_this.fileinput = reader.result);
        };
        reader.readAsText(file[0]);
      }).then(function (result) {
        var lines = _this.fileinput.split("\n");
        var header = ["id", "nameMedicine", "category", "price", "inventory", "expiration_date"];
        var output = lines.slice(1).map(function (line) {
          var fields = line.split(",");
          return Object.fromEntries(header.map(function (h, i) {
            return [h, fields[i]];
          }));
        });
        var fileOutput = _this.collect();
        _this.collect(output).filter(function (items) {
          return items.id > 0;
        }).each(function (items) {
          items["id"] = parseInt(items["id"]);
          items["price"] = parseFloat(items["price"]);
          items["inventory"] = parseInt(items["inventory"]);
          fileOutput.push(items);
        });
        console.log(fileOutput);
        _this.$api.post("medicine", JSON.stringify(fileOutput)).then(function (res) {
          console.log(res);
        });
      }, function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_file_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-file-input");
  var _component_v_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_form, {
    "class": "d-flex justify-content-center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_file_input, {
        modelValue: $data.file,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.file = $event;
        }),
        id: "formFile",
        label: "file",
        "class": "input",
        onChange: $options.teste,
        placeholder: "Select your CSV files",
        accept: "text/csv"
      }, null, 8 /* PROPS */, ["modelValue", "onChange"])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/pages/importMedicine.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/importMedicine.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _importMedicine_vue_vue_type_template_id_09ea11b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importMedicine.vue?vue&type=template&id=09ea11b0 */ "./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0");
/* harmony import */ var _importMedicine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importMedicine.vue?vue&type=script&lang=js */ "./resources/js/pages/importMedicine.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_PharmaceuticalController_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_PharmaceuticalController_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_importMedicine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_importMedicine_vue_vue_type_template_id_09ea11b0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/importMedicine.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/importMedicine.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/importMedicine.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_importMedicine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_importMedicine_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./importMedicine.vue?vue&type=script&lang=js */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_importMedicine_vue_vue_type_template_id_09ea11b0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_importMedicine_vue_vue_type_template_id_09ea11b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./importMedicine.vue?vue&type=template&id=09ea11b0 */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/importMedicine.vue?vue&type=template&id=09ea11b0");


/***/ })

}]);