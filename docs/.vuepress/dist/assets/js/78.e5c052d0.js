(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{52:function(t,e,a){"use strict";a.r(e);var n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"shannon-capacity-of-a-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shannon-capacity-of-a-graph","aria-hidden":"true"}},[t._v("#")]),t._v(" Shannon Capacity of a Graph")]),a("p",[t._v("In the previous section it became apparent that for some channels, two or more channel uses can provide a better rate than a single use of those channels. The maximum rate that can be achieved in this way is captured by the notion of Shannon capacity of the confusability graph of the channel.")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("Definition: Shannon capacity of a graph")])]),t._v("\nThe Shannon capacity of a graph is \\[c(G) := \\sup_{n \\in \\mathbb{N}} \\frac{\\log \\alpha(G^{\\boxtimes n})}{n}.\\]")]),a("p",[t._v("The Shannon capacity represents the "),a("em",[t._v("maximum number of bits per channel")]),a("em",[t._v("use")]),t._v(" that can be perfectly communicated over a channel with confusability graph \\(G\\). Note that our definition in terms of message bits differs from the definition more commonly used in the literature (and on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Shannon_capacity_of_a_graph"}},[t._v("wikipedia")]),t._v(") about zero-error communication where the capacity is defined without the log as \\( \\sup_{n \\in \\mathbb{N}}  \\sqrt[n]{\\alpha(G^{\\boxtimes n}) } \\), thus measuring the maximum number of actual messages (and not bits) per channel use that can be perfectly communicated.")]),a("p",[t._v("Intuitively, allowing more channel uses can only increase the rate. This is reflected by the fact that we can replace the supremum with a limit, as captured by the following lemma.")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("Proposition")])]),t._v("\n\\[ c(G) = \\lim_{n \\to \\infty} \\frac{\\log \\alpha(G^{\\boxtimes n})}{n}. \\]\n"),a("p",[a("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group9","aria-label":"Toggler","aria-expanded":"false"}},[a("span",{staticClass:"Button"},[t._v("Proof")])])]),a("div",{attrs:{id:"group9"}},[a("div",{staticClass:"content-box"},[t._v("First, note that \\(\\alpha(G^{\\boxtimes (k+\\ell)}) \\geq \\alpha(G^{\\boxtimes k})\\alpha(G^{\\boxtimes \\ell})\\) (you showed this inequality in the previous quiz). It then follows that \\[ \\log \\alpha(G^{\\boxtimes(k+\\ell)}) \\geq \\log \\alpha(G^{\\boxtimes k}) + \\log \\alpha(G^{\\boxtimes \\ell}), \\] and so the sequence \\((\\log \\alpha(G^{\\boxtimes n}))_{n \\in \\mathbb{N}}\\) is superadditive. Then by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Superadditivity"}},[t._v("Fekete's lemma")]),t._v(", \\[ \\lim_{n \\to \\infty} \\frac{\\log \\alpha(G^{\\boxtimes n})}{n} \\] exists and is equal to the supremum.")])])]),a("p",[t._v("The exact computational complexity of \\(c(G)\\) is unknown. It is not even known to be a decidable problem. We have seen that \\(c(C_5)\\) is at least \\(\\frac{\\log 5}{2}\\), a fact that has been known since Shannon showed it in 1956, but how can we decide whether the capacity is actually bigger than that number? This question remained open until Lovasz "),a("a",{attrs:{href:"http://web.cs.elte.hu/~lovasz/scans/theta.pdf"}},[t._v("showed")]),t._v(" in "),a("a",{attrs:{href:"https://doi.org/10.1109/TIT.1979.1055985"}},[t._v("1979")]),t._v(" that the Shannon capacity of \\( C_5\\) is exactly \\(c(C_5) = \\frac{\\log 5}{2}\\). For the relatively small circle of size 7, \\(C_7\\), the exact Shannon capacity remains unknown. From the fact that \\(c(C_5) = \\frac{\\log 5}{2}\\), we know that the 5-letter noisy typewriter does not benefit from more than two channel uses. In fact, all graphs for which the Shannon capacity is known attain that capacity with one, two or an infinite number of channel uses. It is not known if there is a deeper reason for this observed pattern.")]),a("p",[t._v("It is quite remarkable that in this rather simple and natural problem of zero-error channel coding, we quickly reach the limit of our understanding of the underlying combinatorial problems.")]),a("p")])}],!1,null,null,null);i.options.__file="README.md";e.default=i.exports}}]);