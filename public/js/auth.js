(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/auth"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      auth: {
        login: {
          email: '',
          password: '',
          remember_token: ''
        },
        register: {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          password: '',
          confirm_password: ''
        }
      },
      errors: {
        login: [],
        register: []
      }
    };
  },
  methods: {
    login: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this; //this.$store.commit('SHOW_LOADER', null, {root: true});

                _context.next = 3;
                return axios({
                  url: 'login',
                  method: 'POST',
                  data: self.auth.login
                }).then(function (resp) {
                  if (resp.data.status) {
                    //redirecting back to login then middleware will decide where to redirect
                    window.location = "/login";
                  } else {
                    console.error(resp.data);
                  } // this.$store.commit('HIDE_LOADER', null, {root: true});

                })["catch"](function (err) {
                  self.errors.login = err.response.data.errors; //this.$store.commit('HIDE_LOADER', null, {root: true});
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    register: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this; //this.$store.commit('SHOW_LOADER', null, {root: true});

                _context2.next = 3;
                return axios({
                  url: 'register',
                  method: 'POST',
                  data: self.auth.register
                }).then(function (resp) {
                  console.log(resp);

                  if (resp.data.status) {
                    setTimeout(function () {//window.location = resp.data.url;
                      //commit('HIDE_LOADER', null, {root: true});
                    }, 2000);
                  } else {//this.$store.commit('HIDE_LOADER', null, {root: true});
                  }
                })["catch"](function (err) {
                  console.log(err.response.data.errors); //this.$store.commit('HIDE_LOADER', null, {root: true});

                  self.errors.register = err.response.data.errors;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }(),
    resetErrors: function resetErrors() {
      this.errors.login = [];
      this.errors.register = [];
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    loader: function loader(state) {
      return state.loader;
    }
  })),
  components: {//VueProgrammaticInvisibleGoogleRecaptcha,
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("Forgot Password")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("breadcrumb"),
      _vm._v(" "),
      _c("div", { staticClass: "login-register-area pb-100px" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-7 col-md-12 ml-auto mr-auto" }, [
              _c("div", { staticClass: "login-register-wrapper" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "tab-content" }, [
                  _c(
                    "div",
                    { staticClass: "tab-pane active", attrs: { id: "lg1" } },
                    [
                      _c("div", { staticClass: "login-form-container" }, [
                        _c("div", { staticClass: "login-register-form" }, [
                          _c(
                            "form",
                            { attrs: { action: "#", method: "post" } },
                            [
                              _c("div", { staticClass: "mb-4" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.auth.login.email,
                                      expression: "auth.login.email"
                                    }
                                  ],
                                  staticClass: "mb-2",
                                  attrs: {
                                    type: "text",
                                    name: "user-name",
                                    placeholder: "Email"
                                  },
                                  domProps: { value: _vm.auth.login.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.auth.login,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.login["email"]
                                  ? _c(
                                      "small",
                                      { staticStyle: { color: "#CA0B00" } },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "fa fa-info-circle" },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.errors.login["email"][0]
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-4" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.auth.login.password,
                                      expression: "auth.login.password"
                                    }
                                  ],
                                  staticClass: "mb-2",
                                  attrs: {
                                    type: "password",
                                    name: "user-password",
                                    placeholder: "Password"
                                  },
                                  domProps: { value: _vm.auth.login.password },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.auth.login,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.login["password"]
                                  ? _c(
                                      "small",
                                      { staticStyle: { color: "#CA0B00" } },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "fa fa-info-circle" },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.errors.login[
                                                    "password"
                                                  ][0]
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "button-box" }, [
                                _c("div", { staticClass: "login-toggle-btn" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.auth.login.remember_token,
                                        expression: "auth.login.remember_token"
                                      }
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.auth.login.remember_token
                                      )
                                        ? _vm._i(
                                            _vm.auth.login.remember_token,
                                            null
                                          ) > -1
                                        : _vm.auth.login.remember_token
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.auth.login.remember_token,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.auth.login,
                                                "remember_token",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.auth.login,
                                                "remember_token",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.auth.login,
                                            "remember_token",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "flote-none",
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [_vm._v("Remember me")]
                                  ),
                                  _vm._v(" "),
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Forgot Password?")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    attrs: { type: "submit" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.login($event)
                                      }
                                    }
                                  },
                                  [_c("span", [_vm._v("Login")])]
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "tab-pane", attrs: { id: "lg2" } }, [
                    _c("div", { staticClass: "login-form-container" }, [
                      _c("div", { staticClass: "login-register-form" }, [
                        _c("form", { attrs: { action: "#", method: "post" } }, [
                          _c("div", { staticClass: "mb-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.auth.register.first_name,
                                  expression: "auth.register.first_name"
                                }
                              ],
                              staticClass: "mb-2",
                              attrs: {
                                type: "text",
                                name: "user-fname",
                                placeholder: "First Name"
                              },
                              domProps: { value: _vm.auth.register.first_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.auth.register,
                                    "first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.register["first_name"]
                              ? _c(
                                  "small",
                                  { staticStyle: { color: "#CA0B00" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fa fa-info-circle" },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.errors.register[
                                                "first_name"
                                              ][0]
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.auth.register.last_name,
                                  expression: "auth.register.last_name"
                                }
                              ],
                              staticClass: "mb-2",
                              attrs: {
                                type: "text",
                                name: "user-lname",
                                placeholder: "Last Name"
                              },
                              domProps: { value: _vm.auth.register.last_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.auth.register,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.register["last_name"]
                              ? _c(
                                  "small",
                                  { staticStyle: { color: "#CA0B00" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fa fa-info-circle" },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.errors.register[
                                                "last_name"
                                              ][0]
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.auth.register.email,
                                  expression: "auth.register.email"
                                }
                              ],
                              staticClass: "mb-2",
                              attrs: {
                                type: "email",
                                name: "user-email",
                                placeholder: "Email"
                              },
                              domProps: { value: _vm.auth.register.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.auth.register,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.register["email"]
                              ? _c(
                                  "small",
                                  { staticStyle: { color: "#CA0B00" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fa fa-info-circle" },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.errors.register["email"][0]
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.auth.register.password,
                                  expression: "auth.register.password"
                                }
                              ],
                              staticClass: "mb-2",
                              attrs: {
                                type: "password",
                                name: "password",
                                placeholder: "Password"
                              },
                              domProps: { value: _vm.auth.register.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.auth.register,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.register["password"]
                              ? _c(
                                  "small",
                                  { staticStyle: { color: "#CA0B00" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fa fa-info-circle" },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.errors.register["password"][0]
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.auth.register.confirm_password,
                                  expression: "auth.register.confirm_password"
                                }
                              ],
                              staticClass: "mb-2",
                              attrs: {
                                type: "password",
                                name: "c_password",
                                placeholder: "Confirm Password"
                              },
                              domProps: {
                                value: _vm.auth.register.confirm_password
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.auth.register,
                                    "confirm_password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.register["confirm_password"]
                              ? _c(
                                  "small",
                                  { staticStyle: { color: "#CA0B00" } },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fa fa-info-circle" },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.errors.register[
                                                "confirm_password"
                                              ][0]
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "button-box" }, [
                            _c(
                              "button",
                              {
                                attrs: { type: "submit" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.register($event)
                                  }
                                }
                              },
                              [_c("span", [_vm._v("Register")])]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-register-tab-list nav" }, [
      _c(
        "a",
        {
          staticClass: "active",
          attrs: { "data-toggle": "tab", href: "#lg1" }
        },
        [_c("h4", [_vm._v("login")])]
      ),
      _vm._v(" "),
      _c("a", { attrs: { "data-toggle": "tab", href: "#lg2" } }, [
        _c("h4", [_vm._v("register")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/auth/forgotPassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/auth/forgotPassword.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true& */ "./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true&");
/* harmony import */ var _forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bfe8cac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/forgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/forgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/forgotPassword.vue?vue&type=template&id=4bfe8cac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_4bfe8cac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/auth/login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6aa0b866&scoped=true& */ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6aa0b866",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6aa0b866&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);