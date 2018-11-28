<p>It turns out to be impossible to design an encryption scheme that provides both perfect security and short keys. So even though the one-time pad may seem inefficient, its key length is optimal for a perfectly secure scheme.</p>
<div class="content-box pad-box-mini border border-trbl border-round">
<h4 style="color: #bc0031;"><strong>Theorem (Shannon, 1949)</strong></h4>
For any perfectly secure encryption scheme, it holds that \(H(K) \geq H(M)\).
<p><span class="element_toggler" role="button" aria-controls="group1" aria-label="Toggler" aria-expanded="false"><span class="Button">Show proof</span></span></p>
<div id="group1" style="display: none;">
<div class="content-box">Again, we turn to entropy diagrams. Write \(a = I(M;C|K) \geq 0\). using the fact that \(I(M;K) = 0\) (setup assumption) and \(I(M;C) = 0\) (security), we can fill in the entropy diagram as follows:
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://canvas.uva.nl/courses/2205/files/212322/preview?verifier=8dU7itTQ1UfFbmEjRefSRRAPUvXf0dsgS0LRQ0P3" alt="Entropy diagram for minimum key length" width="240" height="300" data-api-endpoint="https://canvas.uva.nl/api/v1/courses/2205/files/212322" data-api-returntype="File"></p>
Note that \(I(K;C|M) \geq a\) follows from the fact that \(I(C;K) \geq 0\) and \(R(C;K;M) = -a\). From the diagram, we observe that \(H(M) = a\), and that \(H(K) \geq a\). Hence, \(H(K) \geq H(M)\).</div>
</div>
</div>