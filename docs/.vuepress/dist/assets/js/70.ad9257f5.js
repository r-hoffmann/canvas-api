(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{60:function(e,t,n){"use strict";n.r(t);var i=n(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"definition-discrete-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#definition-discrete-channel","aria-hidden":"true"}},[e._v("#")]),e._v(" Definition: Discrete Channel")]),n("p",[e._v("We now make the notion of 'channel' more precise.")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#bc0031"}},[n("strong",[e._v("Definition: Discrete channel")])]),e._v("\nA (discrete) channel is a tuple \\((\\mathcal{X}, P_{Y|X}, \\mathcal{Y})\\) such that \\(\\mathcal{X}\\) and \\(\\mathcal{Y}\\) are finite sets, and for any \\( x \\in \\mathcal{X}\\), the function \\(P_{Y|X=x} : \\mathcal{Y} \\to [0,1]\\) is a probability distribution. \\(\\mathcal{X}\\) represents the set of possible inputs, \\(\\mathcal{Y}\\) the set of possible outputs, and \\(P_{Y|X}(y|x)\\) is the probability of receiving output \\(y\\) given input \\(x\\).")]),n("p",[e._v("Given a channel \\((\\mathcal{X}, P_{Y|X}, \\mathcal{Y})\\), fixing a distribution \\(P_X\\) for the set \\(\\mathcal{X}\\), immediately determines a joint distribution \\(P_{XY}\\)  and therefore also a distribution \\( P_Y \\) for \\(\\mathcal{Y}\\) by marginalization.")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#2d3b45"}},[n("strong",[e._v("Example: Binary symmetric channel (BSC)")])]),e._v("\nDefine the binary symmetric channel with parameter \\(f \\in [0,1/2]\\) by \\(\\mathcal{X} = \\mathcal{Y} = \\{0,1\\}\\) and \\begin{align*} P_{Y|X}(0|0) &= P_{Y|X}(1|1) = 1-f,\\\\ P_{Y|X}(0|1) &= P_{Y|X}(1|0) = f.\\\\ \\end{align*} With probability \\(f\\), the input is flipped, and with probability \\(1-f\\), it remains unaffected. This channel can be represented visually as:\n"),n("p",[n("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/218094/preview?verifier=bp9MpNtJeW5AmySp9fkPX0b1BvQoB2leepkjQXMG",alt:"BSC-1.svg",width:"506",height:"140","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/218094","data-api-returntype":"File"}})])]),n("p",[e._v("We are interested in "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[e._v("memoryless")])]),e._v(" channels where the probability distribution of the output depends only on the current input. If the channel is used repeatedly, the channel distribution does not change depending on previous inputs and outputs. If we use a discrete memoryless channel \\(n\\) times, this can be regarded as the channel \\((\\mathcal{X}^n, P_{Y^n|X^n}, \\mathcal{Y}^n)\\) where \\begin{align} P_{Y^n|X^n}(\\vec{y}|\\vec{x}) = \\prod_{i=1}^n P_{Y|X}(y_i|x_i) \\, , \\end{align}")])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);