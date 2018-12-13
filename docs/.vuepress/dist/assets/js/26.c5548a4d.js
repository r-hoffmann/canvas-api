(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(t,e,o){"use strict";o.r(e);var s=o(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"introduction-to-source-coding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-source-coding","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction to Source Coding")]),o("p",[t._v("Suppose we sample \\(x\\) from a distribution \\(P_X\\) with image \\(\\cal X\\). In the context of data compression, \\(P_X\\) is typically called a "),o("span",{staticStyle:{color:"#bc0031"}},[o("strong",[t._v("source")])]),t._v(" that emits value \\(x \\in {\\cal X}\\) with probability \\(P_X(x)\\). We want to compress (or encode) symbols \\(x\\) sampled from \\(P_X\\) in such a way that we can later decompress (or decode) it reliably, without losing any information about the value \\(x\\).")]),o("p",[o("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/129715/preview?verifier=oacJHSMbAY2BpvcbgidZwaQ37fOsBidaNAuXnDf6",alt:"Encoding and decoding of a source",width:"521",height:"76","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/129715","data-api-returntype":"File"}})]),o("p",[t._v("A counting argument shows that it is possible to encode the elements of \\({\\cal X}\\) by bit strings of length \\(n\\), where \\(n=\\lceil \\log (|{\\cal X}|) \\rceil \\): we simply list all elements of \\({\\cal X}\\), and use the (binary) index of \\(x\\) in the list as its encoding. Thus, to store or to transmit an element \\(x\\in {\\cal X}\\), \\(n\\) bits of information always suffice. However, if not all \\(x \\in \\cal X\\) are equally likely according to \\(P_X\\), one should be able to exploit this to achieve codes with shorter "),o("i",[t._v("average")]),t._v(" length. The idea is to use encodings of varying lengths, assigning shorter codewords to the elements in \\({\\cal X}\\) that have higher probabilities, and vice versa.")]),o("div",{staticStyle:{width:"100%",float:"left","text-align":"center"}},[o("iframe",{attrs:{src:"https://www.youtube.com/embed/musBo7Kafic",width:"640",height:"360",allowfullscreen:"allowfullscreen"}}),o("p",{staticStyle:{"text-align":"center"}},[o("span",{staticStyle:{color:"#999999"}},[t._v("Video by Khan Academy is licensed under "),o("a",{staticStyle:{color:"#999999"},attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/3.0/us/"}},[t._v("CC BY-NC-SA 3.0 US.")])])])]),o("p",[t._v("In the video, Alice and Bob communicate by encoding their messages (dice rolls) from \\(\\mathcal{X} = \\{2,3,...,12\\}\\) into a unitary alphabet \\(\\{1\\}\\), where each 1 stands for a pluck of the wire. For example, the roll 8 is encoded as "),o("span",[t._v("111")]),t._v(", or three plucks.")]),o("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[o("h4",[t._v("Exercise")]),o("p",[t._v("At the end of the video, Bob gets a better idea. He notices that they can pluck the wire in two different ways that are easy to distinguish: long or short. Can you design a code using this binary alphabet of plucks? How long are your codewords on average?")]),o("p",[o("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group_1","aria-label":"Toggler","aria-expanded":"false"}},[o("span",{staticClass:"Button"},[t._v("Show solution")])])]),o("div",{attrs:{id:"group_1"}},[o("div",{staticClass:"content-box"},[o("div",{staticClass:"grid-row middle-xs"},[o("div",{staticClass:"col-xs-12 col-md-6"},[o("div",{staticClass:"styleguide-section__grid-demo-element"},[t._v("The code on the right is an example of a code that Alice and Bob may use: 0 stands for a short pluck, 1 stands for a long one. Each die roll has a different codeword, and short codewords are assigned to the most likely outcomes. The expected codeword length is \\[ \\frac{1}{36} \\cdot 3 + \\frac{2}{36} \\cdot 3 + \\frac{3}{36} \\cdot 2 + ... + \\frac{1}{36} \\cdot 3 = \\frac{35}{18} \\approx 1.944. \\] So on average, Alice and Bob expect to pluck the wire a little less than two times per die roll they want to communicate. However, if they want to communicate a list of die roll outcomes, they run into a problem: if Alice receives 011, how can she tell whether Bob sent the list [7,4], or [5,6], or even [2]?")])]),o("div",{staticClass:"col-xs-12 col-md-6"},[o("div",{staticClass:"styleguide-section__grid-demo-element"},[o("table",{staticClass:"ic-Table"},[o("thead",[o("tr",[o("th",[t._v("Die roll")]),o("th",[t._v("Codeword")])])]),o("tbody",[o("tr",[o("td",[t._v("2")]),o("td",[t._v("011")])]),o("tr",[o("td",[t._v("3")]),o("td",[t._v("001")])]),o("tr",[o("td",[t._v("4")]),o("td",[t._v("11")])]),o("tr",[o("td",[t._v("5")]),o("td",[t._v("01")])]),o("tr",[o("td",[t._v("6")]),o("td",[t._v("1")])]),o("tr",[o("td",[t._v("7")]),o("td",[t._v("0")])]),o("tr",[o("td",[t._v("8")]),o("td",[t._v("00")])]),o("tr",[o("td",[t._v("9")]),o("td",[t._v("10")])]),o("tr",[o("td",[t._v("10")]),o("td",[t._v("000")])]),o("tr",[o("td",[t._v("11")]),o("td",[t._v("010")])]),o("tr",[o("td",[t._v("12")]),o("td",[t._v("100")])])])])])])])]),o("div",{staticClass:"content-box"},[o("div",{staticClass:"grid-row middle-xs"},[o("div",{staticClass:"col-xs-12 col-md-6"},[o("div",{staticClass:"styleguide-section__grid-demo-element"},[t._v("This problem is resolved in the code on the right: confusions do not arise even when variable-length lists of messages are sent. The average codeword length is longer, however: roughly 3.306 plucks on average. In this module, you will encounter several algorithms for constructing such codes yourself for any given probability distribution.")])]),o("div",{staticClass:"col-xs-12 col-md-6"},[o("div",{staticClass:"styleguide-section__grid-demo-element"},[o("table",{staticClass:"ic-Table"},[o("thead",[o("tr",[o("th",[t._v("Die roll")]),o("th",[t._v("Codeword")])])]),o("tbody",[o("tr",[o("td",[t._v("2")]),o("td",[t._v("11110")])]),o("tr",[o("td",[t._v("3")]),o("td",[t._v("0010")])]),o("tr",[o("td",[t._v("4")]),o("td",[t._v("0011")])]),o("tr",[o("td",[t._v("5")]),o("td",[t._v("100")])]),o("tr",[o("td",[t._v("6")]),o("td",[t._v("000")])]),o("tr",[o("td",[t._v("7")]),o("td",[t._v("010")])]),o("tr",[o("td",[t._v("8")]),o("td",[t._v("011")])]),o("tr",[o("td",[t._v("9")]),o("td",[t._v("101")])]),o("tr",[o("td",[t._v("10")]),o("td",[t._v("110")])]),o("tr",[o("td",[t._v("11")]),o("td",[t._v("1110")])]),o("tr",[o("td",[t._v("12")]),o("td",[t._v("11111")])])])])])])])])])]),o("p",[t._v("The question we will answer in this module is: how short can codes be in general (on average over repeated samples \\(x\\) from \\(P_X\\))? We explore both "),o("span",{staticStyle:{color:"#bc0031"}},[o("strong",[t._v("lossless")])]),t._v(" codes (where we want to recover the original data with certainty) and "),o("span",{staticStyle:{color:"#bc0031"}},[o("strong",[t._v("lossy")])]),t._v(" codes (where with small probability, the data is lost).")]),o("p")])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);