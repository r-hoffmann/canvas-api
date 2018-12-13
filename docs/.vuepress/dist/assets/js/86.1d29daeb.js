(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"source-channel-separation-theorem-converse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-channel-separation-theorem-converse","aria-hidden":"true"}},[e._v("#")]),e._v(" Source-Channel Separation Theorem: Converse")]),a("p",[e._v("Conversely, if a source \\(V\\) has entropy \\(H(V)\\) that exceeds the channel capacity \\(C\\), then it is impossible to transmit the source over the channel with arbitrarily small error.")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[e._v("Theorem: Source-channel separation theorem (converse)")])]),e._v("\nLet \\(V_1, V_2, ..., V_n\\) be i.i.d. random variables (the source) distributed according to some \\(P_V\\). Let \\((\\mathcal{X}, P_{Y|X},\\mathcal{Y})\\) be a discrete memoryless channel with capacity \\(C\\). If \\(H(V) > C\\), then any source-channel code has an error probability that is bounded away from zero.\n"),a("p",[a("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group7","aria-label":"Toggler","aria-expanded":"false"}},[a("span",{staticClass:"Button"},[e._v("Proof")])])]),a("div",{attrs:{id:"group7"}},[a("div",{staticClass:"content-box"},[e._v("Assume the error probability \\(p_e := P[\\hat{V}^n \\neq V^n]\\) "),a("i",[e._v("does")]),e._v(" converge to zero as \\(n\\) goes to infinity. We show that \\(H(V) \\leq C\\), in order to prove the theorem by contraposition. \\begin{align} H(V) &= \\frac{H(V^n)}{n} &\\text{(since the source is i.i.d.)}\\\\ &= \\frac{1}{n} (H(V^n|\\hat{V}^n) + I(V^n;\\hat{V}^n)) &\\text{(by entropy diagrams)}\\\\ &\\leq \\frac{1}{n} (1 + p_e \\log(|\\mathcal{V}|^n) + I(V^n;\\hat{V}^n)) &\\text{(by Fano's inequality)}\\\\ &=\\frac{1}{n} + p_e \\log(|\\mathcal{V}|) + \\frac{1}{n}I(V^n;\\hat{V}^n)\\\\ &\\leq \\frac{1}{n} + p_e \\log(|\\mathcal{V}|) + \\frac{1}{n}I(X^n;Y^n) &\\text{(by the data-processing inequality)}\\\\ &\\leq \\frac{1}{n} + p_e \\log(|\\mathcal{V}|) + C &\\text{(by the lemma on multiple channel uses)}\\\\ &\\to 0 + 0 + C = C, \\end{align} as \\(n\\) goes to infinity.")])])]),a("p",[e._v("We have shown the source-channel separation theorem (the forward direction and its converse) for discrete, memoryless channels, and i.i.d. sources. It also holds for channels with feedback, and any sources that satisfy the asymptotic equipartition property.")])])}],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);