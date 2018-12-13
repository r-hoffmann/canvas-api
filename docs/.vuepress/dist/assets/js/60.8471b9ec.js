(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{75:function(t,a,e){"use strict";e.r(a);var n=e(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"definition-channel-capacity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definition-channel-capacity","aria-hidden":"true"}},[t._v("#")]),t._v(" Definition: Channel Capacity")]),e("p",[t._v("We just discovered that for some noisy channels, zero-error communication is very hard, or even impossible. For example, if Alice and Bob have to communicate over a "),e("a",{attrs:{title:"Definition: Discrete Channel",href:"https://canvas.uva.nl/courses/2205/pages/definition-discrete-channel","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/definition-discrete-channel","data-api-returntype":"Page"}},[t._v("binary symmetric channel (BSC)")]),t._v(" that has non-zero bit-flip probability, they cannot hope to do any zero-error communication, because the Shannon capacity of the BSC's confusability graph is zero.")]),e("p",[t._v("We also saw that error-correcting codes can help deal with such inherently noisy channels. Even though the communication error may not become zero, an error-correcting code can increase the probability of receiving the correct message. It does come at a cost, however, because the codewords are longer than the original messages, and so the amount of information that is transmitted "),e("i",[t._v("per channel use")]),t._v(" does not necessarily increase.")]),e("p",[t._v("In this final part of the module, we explore the limits of how much information can be sent over a channel if a small error is allowed. Central to our study will be the concept of channel capacity. It reflects the maximum amount of information that could "),e("i",[t._v("in principle")]),t._v(" be communicated with a single use of a channel. In the next module, we will see how well that theoretical limit can be approached with actual error-correcting codes.")]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#bc0031"}},[e("strong",[t._v("Definition: Channel capacity")])]),t._v("\nThe channel capacity \\(C\\) of a discrete, memoryless channel \\((\\mathcal{X}, P_{Y|X}, \\mathcal{Y})\\) is given by \\[ C:= \\max_{P_X} I(X;Y). \\]")]),e("p",[t._v("Remember that using a certain input distribution \\(P_X \\) for a channel \\( P_{Y|X} \\) yields a joint input-output distribution \\(P_{XY}\\) which determines the real quantity \\(I(X;Y) \\) we can optimize over. One can "),e("a",{attrs:{title:"The set of joint distributions { P_{XY} } is compact, and the mutual information is a continuous function from that set to the real numbers. It follows from the extreme-value theorem that the maximum is attained. ","data-tooltip":'{"tooltipClass":"popover popover-padded", "position":"right"}'}},[t._v("argue")]),t._v(" that the maximum is attained and therefore the channel capacity is a well-defined quantity.")]),e("p",[t._v("Important: the channel capacity is often called the Shannon capacity (of a channel). You should not confuse it with the "),e("a",{attrs:{title:"Shannon Capacity of a Graph",href:"https://canvas.uva.nl/courses/2205/pages/shannon-capacity-of-a-graph","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/shannon-capacity-of-a-graph","data-api-returntype":"Page"}},[t._v("Shannon Capacity of a Graph")]),t._v(". Generally, the Shannon capacity of a channel is not equal to the Shannon capacity of its confusability graph.")]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#2d3b45"}},[e("strong",[t._v("Example: Capacity of a BSC")])]),t._v("\nWhat is the capacity (in terms of \\(f\\)) of a binary symmetric channel with parameter \\(f \\in [0,1/2]\\)?\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group1a","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[t._v("Show hint")])])]),e("div",{attrs:{id:"group1a"}},[e("div",{staticClass:"content-box"},[t._v("Rewrite \\(I(X;Y)\\) as \\(H(Y) - H(Y|X)\\) and note that you can compute \\(H(Y|X)\\) without fixing \\(P_X\\). Then think about how to maximize \\(H(Y)\\).\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group1b","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[t._v("Show solution")])])]),e("div",{attrs:{id:"group1b"}},[e("div",{staticClass:"content-box"},[t._v("The channel capacity is \\begin{align} \\max_{P_X} I(X;Y) &= \\max_{P_X} \\left( H(Y) - H(Y|X)\\right)\\\\ &= \\max_{P_X} \\left( H(Y) - \\sum_{x \\in \\mathcal{X}} P_X(x) \\cdot H(Y|X=x)\\right) \\\\ &= \\max_{P_X} \\left( H(Y) - \\sum_{x \\in \\mathcal{X}} P_X(X) \\cdot h(f)\\right) \\\\ &= \\max_{P_X} \\left( H(Y) - h(f)\\right) \\\\ &= 1- h(f). \\end{align} The last step follows because \\(H(Y)\\) is maximized if \\(Y\\) is uniform, which is achievable by choosing \\(X\\) to be uniform.")])])])])]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#2d3b45"}},[e("strong",[t._v("Example: Capacity of a BEC")])]),e("p",[t._v("Consider the binary erasure channel (BEC) with \\(\\mathcal{X} = \\{0,1\\}\\) and \\(\\mathcal{Y} = \\{0,1,\\bot\\}\\), where \\(\\bot\\) is the "),e("span",{staticStyle:{color:"#bc0031"}},[e("strong",[t._v("erasure symbol")])]),t._v(", and \\(\\epsilon \\in [0,1]\\) is the "),e("span",{staticStyle:{color:"#bc0031"}},[e("strong",[t._v("erasure probability")])]),t._v(":")]),e("p",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"https://canvas.uva.nl/courses/2205/files/388658/preview?verifier=E9ranqn35eYPibIXdJ5XcEG1CWqNXu5KVumwLJUd",alt:"A binary erasure channel",width:"240",height:"140","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/388658","data-api-returntype":"File"}})]),e("p",[t._v("What is the channel capacity of the BEC, as a function of \\(\\epsilon\\)?")]),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group2a","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[t._v("Show hint")])])]),e("div",{attrs:{id:"group2a"}},[e("div",{staticClass:"content-box"},[t._v("Contrary to the previous example, break \\(I(X;Y)\\) up as \\(H(X) - H(X|Y)\\), using symmetry of the mutual information. Consider the three possible outputs separately: how much uncertainty is left if you receive output 0? What about output 1? And output \\(\\bot\\)?\n"),e("p",[e("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group2b","aria-label":"Toggler","aria-expanded":"false"}},[e("span",{staticClass:"Button"},[t._v("Show solution")])])]),e("div",{attrs:{id:"group2b"}},[e("div",{staticClass:"content-box"},[t._v("Write \\(p\\) for \\(P_X(0)\\). \\begin{align*} \\max_{P_X} I(X;Y) &= \\max_{P_X} \\left( H(X) - H(X|Y)\\right) \\\\ &= \\max_{p} \\left( h(p) - \\sum_{y \\in \\mathcal{Y}} P_Y(y) \\cdot H(X|Y=y)\\right) \\\\ &= \\max_{p} \\left( h(p) - P_Y(\\bot) \\cdot h(p)\\right) \\\\ &= \\max_{p} \\left( h(p) (1-\\epsilon)\\right) \\\\ &= 1 - \\epsilon \\, . \\end{align*} Again, the last step follows because \\(H(X)=h(p)\\) is maximized if \\(X\\) is uniform, hence \\(p=\\frac12\\).")])])])])]),e("p",[t._v("If a channel is memoryless, then using it more than once does not increase the capacity "),e("i",[t._v("per transmission")]),t._v(". Note that this is different from the zero-error setting, where multiple channel uses can in fact increase the efficiency of getting information across! This is formally captured in the following lemma, which we state without proof:")]),e("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[e("h4",{staticStyle:{color:"#bc0031"},attrs:{id:"lemma"}},[e("strong",[t._v("Lemma: Multiple Channel Uses")])]),t._v("\nLet \\(X_1, ..., X_n =: X^n\\) be \\(n\\) random variables. Let \\(Y^n\\) be the result of passing \\(X^n\\) through a discrete memoryless channel of capacity \\(C\\). Then for any joint distribution \\(P_{X^n}\\), \\[ I(X^n,Y^n) \\leq n \\cdot C. \\]")])])}],!1,null,null,null);i.options.__file="README.md";a.default=i.exports}}]);