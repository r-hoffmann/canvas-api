(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"introduction-zero-error-channel-coding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-zero-error-channel-coding","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction: Zero-Error Channel Coding")]),n("p",[e._v("We consider the problem of using a noisy channel to transmit a message perfectly, i.e., with maximal probability of error equal to zero. For some channels, for example the non-trivial binary symmetric channel with \\(f \\not\\in \\{0,1\\}\\), it is not possible to send multiple different messages over the channel in this way. For other channels, an interesting question is: how many messages (or how much information) can be sent over this channel in an error-free way?")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#2d3b45"}},[n("strong",[e._v("Example")])]),e._v("\nConsider the following channel:\n"),n("p",[n("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/329556/preview?verifier=pnJGksY1cd9XK6OJXCyflRA94mXUqejMlG7N4Rld",alt:"A channel with two inputs and three outputs",width:"108",height:"102","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/329556","data-api-returntype":"File"}})]),e._v("\nWe can send two messages, \\(m_1\\) and \\(m_2\\), over the channel by defining \\(\\mathtt{enc}(m_1) = a\\) and \\(\\mathtt{enc}(m_2) = b\\). The decoding is defined as \\(\\mathtt{dec}(1) = m_1\\), and \\(\\mathtt{dec}(2) = \\mathtt{dec}(3) = m_2\\).")]),n("div",{staticClass:"content-box pad-box-mini border border-trbl border-round"},[n("h4",{staticStyle:{color:"#2d3b45"},attrs:{id:"noisy"}},[n("strong",[e._v("Example: Noisy typewriter")])]),e._v("\nThe noisy typewriter channel sends the letters a through e, but with some nonzero probability, it sends the adjacent letter instead. It is defined as follows:\n"),n("p",[n("img",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://canvas.uva.nl/courses/2205/files/329557/preview?verifier=83Uy1bWyGDxlxBEsIi2th3qScfowUEbu7STtFyIv",alt:"The noisy typewriter",width:"147",height:"121","data-api-endpoint":"https://canvas.uva.nl/api/v1/courses/2205/files/329557","data-api-returntype":"File"}})]),e._v("\nHow many messages can you send error-free over this channel?\n"),n("p",[n("span",{staticClass:"element_toggler",attrs:{role:"button","aria-controls":"group2","aria-label":"Toggler","aria-expanded":"false"}},[n("span",{staticClass:"Button"},[e._v("Show solution")])])]),n("div",{attrs:{id:"group2"}},[n("div",{staticClass:"content-box"},[n("p",[e._v("There is a way to send two messages \\(m_1\\) and \\(m_2\\) error-free over this channel by defining \\(\\mathtt{enc}(m_1) = a\\) and \\(\\mathtt{enc}(m_2) = c\\). The decoding function is defined as \\(\\mathtt{dec}(a) = \\mathtt{dec}(b) = m_1\\), and \\(\\mathtt{dec}(c) = \\mathtt{dec}(d) = m_2\\) (note that the definition of \\(\\mathtt{dec}(e)\\) is irrelevant, as this output symbol will never be observed).")]),n("p",[e._v("Is there a way to encode three different messages in an error-free way? Upon inspection, we see that any encoding function \\(\\mathtt{enc}(\\cdot)\\) on three messages will map at least two messages to channel inputs that are "),n("span",{staticStyle:{color:"#bc0031"}},[n("strong",[e._v("confusable")])]),e._v(" (i.e., are possibly mapped to the same channel output).")])])])]),n("p",[e._v("In general, it is not easy to tell directly from the channel how many messages can be perfectly transmitted. We will invoke some graph theory to help us with the analysis.")])])}],!1,null,null,null);s.options.__file="README.md";t.default=s.exports}}]);