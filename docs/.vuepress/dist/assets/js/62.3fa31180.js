(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{70:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"error-detection-correction-and-the-hamming-bound"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-detection-correction-and-the-hamming-bound","aria-hidden":"true"}},[e._v("#")]),e._v(" Error Detection/Correction and the Hamming Bound")]),n("p",[e._v("In general, a code with minimal distance \\(d\\) can "),n("em",[n("strong",[e._v("detect")])]),e._v(" up to \\(d-1\\) bit flip errors: in \\(d-1\\) bit flip 'steps', those bit flips can never result in another valid codeword. The code can accurately "),n("strong",[n("em",[e._v("correct")])]),e._v(" up to \\(\\frac{d-1}{2}\\) bit flip errors. Look at the diagram below to understand why: if two codewords \\(c_1\\) and \\(c_2\\) are guaranteed to be at least \\(d\\) bit flips apart, then the set of strings that result from \\(\\frac{d-1}{2}\\) bit flips on \\(c_1\\) (the orange circle on the left) never overlaps with the set of strings that result from \\(\\frac{d-1}{2}\\) bit flips on \\(c_2\\) (the orange circle on the right).")]),n("p",[n("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/247009/preview?verifier=jcuwCEA36Lg3o9hyQGJS1pgQQL6C08K3PvDsV9NL",alt:"The effect of the distance d on the error correction and detection capabilities of a code",width:"437",height:"317","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/247009","data-api-returntype":"File"}})]),n("p",[e._v("Because every codeword is guaranteed to have this neighborhood around it that it does not share with any other codeword, we can upper bound the total number of codewords in terms of the distance.")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#bc0031"}},[n("strong",[e._v("Proposition: Hamming bound")])]),e._v("\nIf \\(C\\) is a "),n("i",[e._v("binary")]),e._v(" code of block length \\(n\\) and minimum distance 3, then \\(|C| \\leq \\frac{2^n}{n+1}\\).\n"),n("p",[n("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group1","aria-label":"Toggler","aria-expanded":"false"}},[n("span",{staticClass:"Button"},[e._v("Proof")])])]),n("div",{attrs:{id:"group1"}},[n("div",{staticClass:"content-box"},[e._v("For each \\(c \\in C\\), define the neighborhood of \\(c\\) to be \\(N(c) := \\{y \\in \\{0,1\\}^n \\mid d(x,y) \\leq 1\\}\\). Every such neighborhood contains exactly \\(n+1\\) elements. Since \\(d = 3\\), \\(N(c) \\cap N(c') = \\emptyset\\) whenever \\(c \\neq c'\\). Hence, \\begin{align} 2^n \\geq |\\bigcup_{c \\in C} N(c)| = \\sum_{c \\in C} |N(c)| = |C| \\cdot (n+1), \\end{align} and the result follows.")])])]),n("p",[e._v("The \\([7,4]\\) Hamming code is optimal in the sense that it achieves this Hamming bound: it is a code with block length 7 and minimal distance 3, so an upper bound to the codebook size is \\(\\frac{2^7}{7+1} = 2^4\\). The Hamming code achieves exactly this codebook size.")])])}],!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);