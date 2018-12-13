(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{66:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"the-7-4-hamming-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-7-4-hamming-code","aria-hidden":"true"}},[t._v("#")]),t._v(" The [7,4] Hamming Code")]),a("p",[t._v("A more sophisticated error-correcting code is the "),a("span",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("\\([7,4]\\) Hamming code")])]),t._v(". It is a \\((2^4,7)\\) code, meaning that it encodes a 4-bit message (there are \\(2^4\\) such messages) into 7 bits. The encoding function is defined as \\[ \\mathtt{enc}(m_1m_2m_3m_4) = m_1m_2m_3m_4t_5t_6t_7, \\] where the "),a("span",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("parity bits")])]),t._v(" \\begin{align*} t_5 &= m_1 \\oplus m_2 \\oplus m_3,\\\\ t_6 &= m_2 \\oplus m_3 \\oplus m_4,\\\\ t_7 &= m_1 \\oplus m_3 \\oplus m_4 \\end{align*} are appended at the right. Note that the choice of these parity bits differs throughout the literature. Decoding is done by making sure that all parity bits check out, and if not, making the smallest possible number of bit flips such that they do. It is important to note that the parity bits themselves may have been flipped during the transmission through the channel. A visual way to perform this parity check is by using the following diagram:")]),a("p",[a("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/218357/preview?verifier=AUsUca6sIpRBhLxAXCuLRKLWK3OTECcfIvSSCC18",alt:"Decoding Scheme for the Hamming Code",width:"267",height:"267","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/218357","data-api-returntype":"File"}})]),a("p",[t._v("For all of the three circles, the parity bit should equal the parity of the three message bits in that circle. Equivalently, the parity of all bits in a circle should be even.")]),a("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[a("h4",{staticStyle:{color:"#2d3b45"}},[a("strong",[t._v("Example")])]),t._v("\nDecode the string 1010100.\n"),a("p",[a("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group1","aria-label":"Toggler","aria-expanded":"false"}},[a("span",{staticClass:"Button"},[t._v("Show solution")])])]),a("div",{attrs:{id:"group1"}},[a("div",{staticClass:"content-box"},[t._v("First, we fill in the bits into the diagram:\n"),a("p",[a("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/218358/preview?verifier=SLtBLtmvpOjyWa7ue1f939S3obA5XWYyXp0kn5Bg",alt:"Hamming Code Example Pt 1",width:"226",height:"225","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/218358","data-api-returntype":"File"}})]),t._v("\nWe see that in two of the circles, the parity bit is incorrect. This is called the "),a("span",{staticStyle:{color:"#bc0031"}},[a("strong",[t._v("error syndrome")])]),t._v(" (you will learn a more formal definition of the error syndrome "),a("a",{attrs:{title:"Generalization: Linear Codes",href:"https://canvas.uva.nl/courses/2205/pages/generalization-linear-codes","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/pages/generalization-linear-codes","data-api-returntype":"Page"}},[t._v("soon")]),t._v("). By flipping only the bit \\(m_2\\) (which is in the intersection of the top two circles, but not the bottom one), we can fix all the parity bits:\n"),a("p",[a("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/218359/preview?verifier=YXuaoY9Ky99RwuCVwy3L81farWJoGSRdy5AGXLjo",alt:"Hamming Code Example, Pt 2",width:"225",height:"225","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/218359","data-api-returntype":"File"}})]),t._v("\nHence, \\(\\mathtt{dec}(1010100) = 1110\\).")])])]),a("p",[t._v("The \\([7,4]\\) Hamming code can correctly decode if the codeword is corrupted in (at most) one place.")])])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);