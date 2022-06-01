"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_login_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/js/config.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      usuario: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errorNombre: 'display: none;',
      errorEmail: 'display: none;',
      errorEmailMessage: 'Este campo no debe quedar vacío.',
      errorPass1: 'display: none;',
      errorPass1Message: 'Este campo no debe quedar vacío.',
      errorPass2: 'display: none;',
      errorPass2Message: 'Este campo no debe quedar vacío.',
      btnCargando: 'display: none;',
      btnRegistrar: ''
    };
  },
  methods: {
    // LISTA DE FUNCIONES
    validarFormRegistro: function validarFormRegistro() {
      var validacionContador = 0; // VALIDACION CAMPO NOMBRE =============================

      if (this.usuario.name) {
        this.errorNombre = 'display: none;';
        validacionContador++;
      } else {
        this.errorNombre = '';
      } // VALIDACION CAMPO EMAIL =============================


      if (this.usuario.email) {
        if (/^(([^<>()[ \]\.,;:\s@\"]+(\.[^<>()[ \]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[ \]\.,;:\s@\"]+\.)+[^<>()[ \]\.,;:\s@\"]{2,})$/.test(this.usuario.email)) {
          this.errorEmail = 'display: none;';
          validacionContador++;
        } else {
          this.errorEmailMessage = 'Email inválido.';
          this.errorEmail = '';
        }
      } else {
        this.errorEmailMessage = 'Este campo no debe quedar vacío.';
        this.errorEmail = '';
      } // VALIDACION CAMPO CONTRASEÑA =============================


      if (this.usuario.password) {
        if (this.usuario.password.length > 7) {
          this.errorPass1 = 'display: none;';
          validacionContador++;
        } else {
          this.errorPass1Message = 'Contraseña inválida, La contraseña debe tener al menos 8 caracteres.';
          this.errorPass1 = '';
        }
      } else {
        this.errorPass1Message = 'Este campo no debe quedar vacío.';
        this.errorPass1 = '';
      } // VALIDACION CAMPO CONFIRM CONTRASEÑA =============================


      if (this.usuario.password_confirmation) {
        if (this.usuario.password_confirmation == this.usuario.password) {
          this.errorPass2 = 'display: none;';
          validacionContador++;
        } else {
          this.errorPass2Message = 'Confirmación inválida, La contraseña no es igual.';
          this.errorPass2 = '';
        }
      } else {
        this.errorPass2Message = 'Este campo no debe quedar vacío.';
        this.errorPass2 = '';
      }

      validacionContador === 4 ? this.registrarUsuario() : '';
    },
    registrarUsuario: function registrarUsuario() {
      var _this = this;

      this.btnCargando = '';
      this.btnRegistrar = 'display: none';
      var parametros = {
        name: this.usuario.name,
        email: this.usuario.email,
        password: this.usuario.password,
        password_confirmation: this.usuario.password_confirmation
      }; // ENVIAR SOLICITUD A LA API

      axios__WEBPACK_IMPORTED_MODULE_0___default().post(_config__WEBPACK_IMPORTED_MODULE_1__.url_api + '/api/register', parametros).then(function (response) {
        // console.log(response['data']['data']['api_token']);
        // console.log(response['status']);
        if (response['status'] == '201') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro completado correctamente.',
            showConfirmButton: false,
            timer: 1500
          });

          _this.$router.push("/intranet/comment?".concat(response['data']['data']['api_token']));
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: response['response']['data']['message'],
            showConfirmButton: false,
            timer: 1500
          });
        }

        _this.btnCargando = 'display: none;';
        _this.btnRegistrar = '';
      })["catch"](function (error) {
        console.dir(error);
        _this.btnCargando = 'display: none;';
        _this.btnRegistrar = '';
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: error['response']['data']['message'],
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=template&id=a361add8":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=template&id=a361add8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid",
  style: {
    "background-color": "#333333",
    "color": "#efeeef",
    "min-height": "900px"
  }
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-sm"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-compass textNaranja"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" emprenD")], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-sm\"></div><div class=\"col-sm\"><h3>Registrar Nuevo Usuario</h3><hr style=\"color:#fe6261;border-width:3px;\" class=\"border-3 opacity-75\"></div><div class=\"col-sm\"></div></div>", 1);

var _hoisted_8 = {
  "class": "row"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "col-sm"
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-sm"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  style: {
    "float": "right"
  }
}, "Nombre: ", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col-sm"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  style: {
    "float": "right"
  }
}, "Email:", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "row"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "col-sm"
};
var _hoisted_21 = {
  "class": "row"
};
var _hoisted_22 = {
  "class": "col-sm"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  style: {
    "float": "right"
  }
}, "Contraseña:", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "col-sm"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  style: {
    "float": "right"
  }
}, "Confirmar Contraseña:", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "row"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "col-sm"
};
var _hoisted_31 = {
  "class": "row"
};
var _hoisted_32 = {
  "class": "col-sm"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ya tienes cuenta? ");

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Iniciar Sesión");

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Registrar ");

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-plus"
}, null, -1
/* HOISTED */
);

var _hoisted_37 = [_hoisted_35, _hoisted_36];

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btnRojoDerecha",
  disabled: ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cargando... ")], -1
/* HOISTED */
);

var _hoisted_39 = [_hoisted_38];

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_center = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("center");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SECCION - LOGOTIPO"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_center, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/intranet",
        style: {
          "color": "white",
          "text-decoration": "none"
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SECCION - TITULO "), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SECCION - FORMULARIO REGISTRAR NUEVO USUARIO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.usuario.name = $event;
    }),
    maxlength: "255"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.usuario.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "inputError",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.errorNombre)
  }, "Este campo no debe quedar vacío", 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.usuario.email = $event;
    }),
    maxlength: "255"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.usuario.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "inputError",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.errorEmail)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errorEmailMessage), 5
  /* TEXT, STYLE */
  )])])]), _hoisted_16]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.usuario.password = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.usuario.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "inputError",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.errorPass1)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errorPass1Message), 5
  /* TEXT, STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.usuario.password_confirmation = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.usuario.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "inputError",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.errorPass2)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errorPass2Message), 5
  /* TEXT, STYLE */
  )])])]), _hoisted_26]), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SECCION BOTONES - INICIAR SESION O REGISTRAR "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/intranet"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.btnRegistrar)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btnRojoDerecha",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.validarFormRegistro();
    })
  }, _hoisted_37)], 4
  /* STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-sm",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.btnCargando)
  }, _hoisted_39, 4
  /* STYLE */
  )])]), _hoisted_40])]);
}

/***/ }),

/***/ "./resources/js/config.js":
/*!********************************!*\
  !*** ./resources/js/config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "url_api": () => (/* binding */ url_api)
/* harmony export */ });
var url_api = 'http://localhost:8000';

/***/ }),

/***/ "./resources/js/components/login/register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/login/register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_a361add8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=a361add8 */ "./resources/js/components/login/register.vue?vue&type=template&id=a361add8");
/* harmony import */ var _register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js */ "./resources/js/components/login/register.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_neuboxAppChallenge2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_neuboxAppChallenge2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_register_vue_vue_type_template_id_a361add8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/login/register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/login/register.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/login/register.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/login/register.vue?vue&type=template&id=a361add8":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/login/register.vue?vue&type=template&id=a361add8 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_template_id_a361add8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_register_vue_vue_type_template_id_a361add8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./register.vue?vue&type=template&id=a361add8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/login/register.vue?vue&type=template&id=a361add8");


/***/ })

}]);