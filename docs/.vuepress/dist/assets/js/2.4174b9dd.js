(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{69:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"expectation-and-variance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expectation-and-variance","aria-hidden":"true"}},[t._v("#")]),t._v(" Expectation and Variance")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("Definition: Expectation")])]),t._v("\nThe expectation of a "),a("i",[t._v("real")]),t._v(" random variable \\(X\\) is defined as \\[ \\mathbb{E}[X] := \\sum_{x \\in \\mathcal{X}} P_X(x) \\cdot x. \\]")]),a("p",[t._v("Note that if \\(X\\) is not real, then we can still consider the expectation of some function \\(f : \\mathcal{X} \\to \\mathbb{R}\\), where \\[ \\mathbb{E}[f(X)] = \\sum_{x \\in \\mathcal{X}} P_X(x) \\cdot f(X). \\]")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("Definition: Variance")])]),t._v("\nThe variance of a "),a("i",[t._v("real")]),t._v(" random variable \\(X\\) is defined as \\[ \\text{Var}[X] := \\mathbb{E}[(X - \\mathbb{E}[X])^2]. \\]")]),a("p",[t._v("The variation is a measure for the deviation of the mean. Hoeffding's inequality (here stated for binary random variables) states that for a list of i.i.d. random variables, the average of the random variables is close to the expectation, except with very small probability. We state it here without proof.")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("Theorem: Hoeffding's inequality")])]),t._v("\nLet \\(X_1, \\ldots, X_n\\) be independent and identically distributed binary random variables with \\(P_{X_i}(0) = 1 - \\mu\\) and \\(P_{X_i}(1) = \\mu\\), and thus \\(\\mathbb{E}[X_i] = \\mu\\). Then, for any \\(\\delta > 0\\) \\[ P\\left[\\sum_i X_i > (\\mu + \\delta) \\cdot n\\right] \\leq \\exp(-2\\delta^2n). \\]\n")])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);