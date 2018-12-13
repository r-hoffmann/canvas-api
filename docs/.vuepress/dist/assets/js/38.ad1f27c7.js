(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{122:function(a,t,e){"use strict";e.r(t);var n=e(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"the-chain-rule-for-mutual-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-chain-rule-for-mutual-information","aria-hidden":"true"}},[a._v("#")]),a._v(" The Chain Rule for Mutual Information")]),e("p",[a._v("Similarly to the "),e("a",{attrs:{title:"The Chain Rule",href:"https://canvas.uva.nl/courses/2205/pages/the-chain-rule","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/the-chain-rule","data-api-returntype":"Page"}},[a._v("chain rule for entropy")]),a._v(", we can prove a chain rule for mutual information:")]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#bc0031"}},[e("strong",[a._v("Corollary: Chain rule for mutual information")])]),a._v("\nLet \\(W,X,Y\\) and \\(Z\\) be random variables. Then \\[ I(WX;Y|Z) = I(X;Y|Z)+ I(W;Y|ZX) \\, . \\]\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group2","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[a._v("Proof hint")])])]),e("div",{attrs:{id:"group2"}},[e("div",{staticClass:"content-box"},[a._v("Apply the "),e("a",{attrs:{title:"Conditional Entropy",href:"https://canvas.uva.nl/courses/2205/pages/the-chain-rule#corGeneralizedChainRule","data-api-returntype":"Page","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/the-chain-rule%23corGeneralizedChainRule"}},[a._v("generalized chain rule")]),a._v(".\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group2sub","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[a._v("Show full proof")])])]),e("div",{attrs:{id:"group2sub"}},[e("div",{staticClass:"content-box"},[a._v("\\begin{align} I(WX;Y|Z) &= H(WX|Z) - H(WX|YZ) \\\\ &= (H(X|Z) + H(W | XZ)) - (H(X|YZ) + H(W|XYZ)) \\\\ &= H(X|Z) - H(X|YZ) + H(W|XZ) - H(W|XYZ) \\\\ &= I(X;Y|Z) + I(W;Y|XZ).\\end{align}")])])])])]),e("p",[e("span",{staticStyle:{color:"#ff00ff"}})])])}],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);