# Minimal Distance Between Codewords

<p>The following is a distance measure between two strings (or codewords).</p>
<div class="content-box pad-box-mini border border-trbl border-round">
<h4 style="color: #bc0031;"><strong>Definition: Hamming distance</strong></h4>
The Hamming distance between two \(n\)-bit strings \(x\) and \(y\) is defined as \[ d(x,y) := \sum_{i=1}^n |x_i - y_i|. \] One can equivalently define \(d(x,y) = |x-y|\) where \(|z|\) denotes the <span style="color: #bc0031;"><strong>Hamming weight</strong></span> of a binary string: the number of ones in that string.</div>
<p>The number of bit flips a code can correct depends on the minimal (Hamming) distance between the words in the codebook:</p>
<div class="content-box pad-box-mini border border-trbl border-round">
<h4 style="color: #bc0031;"><strong>Definition: Minimal distance</strong></h4>
Given a code with codebook \(C\), the minimal distance of that code is defined as \[ d_{\min} := \min_{\stackrel{x,y \in C}{x \neq y}} d(x,y). \]</div>
<p>By checking all pairs of codewords of the \([7,4]\) Hamming code, one can verify that its minimal distance is 3 (for this reason, it is often called a \([7,4,3]\) code). Hence, if two bits in a codeword are flipped, it will be closer to some other codeword in terms of number of bit flips. By flipping a single bit, the channel output is (incorrectly) decoded into the message that corresponds to that other codeword.</p>
<p>In general, a code that encodes \(k\) input symbols into \(n\) output symbols (i.e., that is a \((2^k,n)\) code) and has distance \(d\) is often called a <span style="color: #bc0031;"><strong>\([n,k,d]\) code</strong></span>. If the distance is not made specific, it can also be written as an <span style="color: #bc0031;"><strong>\([n,k]\) code</strong></span> (see, for example, the \([7,4]\) Hamming code).</p>