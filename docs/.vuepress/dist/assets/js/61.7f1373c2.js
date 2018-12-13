(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{73:function(t,e,n){"use strict";n.r(e);var o=n(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"definitions-code-rate-and-error-probability"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#definitions-code-rate-and-error-probability","aria-hidden":"true"}},[t._v("#")]),t._v(" Definitions: Code, Rate, and Error Probability")]),n("p",[t._v("In order to get as much information through a channel as possible, we can encode messages before sending them through the channel.")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("Definition: Code")])]),t._v("\nLet \\(M, n \\in \\mathbb{N}\\). An \\((M,n)\\)-code for the channel \\((\\mathcal{X},P_{Y|X},\\mathcal{Y})\\) consists of\n"),n("ul",[n("li",[t._v("An index set \\([M] = \\{1, \\ldots, M\\}\\) representing the set of possible messages.")]),n("li",[t._v("A (possibly probabilistic) encoding function \\(\\mathtt{enc} :[M] \\to \\mathcal{X}^n\\). This encoding function should be injective. \\(n\\) represents the number of channel uses we need to send a single message.")]),n("li",[t._v("A deterministic decoding function \\(\\mathtt{dec} : \\mathcal{Y}^n \\to [M]\\). The set of all codewords, \\(\\{\\mathtt{enc}(1), \\ldots, \\mathtt{enc}(M)\\}\\) is called the "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("codebook")])]),t._v(".")])])]),n("p",[t._v("An alternative notation for codes is "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("\\([n,k]\\) code")])]),t._v(", using box brackets instead of round brackets: such a code encodes a \\(k\\)-bit message into \\(n\\) bits. In the notation of the above definition, an \\([n,k]\\) code would be an \\((2^k,n)\\) code.")]),n("p",[t._v("The number of bits of information that are transmitted per channel use is captured by the following notion:")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("Definition: Rate")])]),t._v("\nThe rate of an \\((M,n)\\)-code is defined as \\[ R := \\frac{\\log M}{n}. \\]")]),n("p",[t._v("Given a code for a specific channel, we can study the probability that an error occurs while transmitting a message.")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("Definition: Probability of error")])]),t._v("\nGiven an \\((M,n)\\) code for a channel \\((\\mathcal{X},P_{Y|X},\\mathcal{Y})\\), the probability of error \\(\\lambda_m\\) is the probability that the decoded output is not equal to the input message \\(m\\). More formally, \\[ \\lambda_m^{(n)} := P[\\mathtt{dec}(Y^n) \\neq m \\mid X^n = \\mathtt{enc}(m)]. \\] Given this quantity, the "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("maximal probability of error")])]),t._v(" is defined as \\[\\lambda^{(n)} := \\max_{m \\in [M]} \\lambda_m^{(n)}.\\] Similarly, the "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[t._v("average probability of error")])]),t._v(" is defined as \\[ p_e^{(n)} := \\frac{1}{M} \\sum_{m=1}^M \\lambda_m^{(n)}. \\]")])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);