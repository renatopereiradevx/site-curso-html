// Robust JS for animations and smooth scroll
(function () {
    try {
        document.addEventListener('DOMContentLoaded', function () {
            try {
                // reveal elements (safe iteration and error handling)
                var reveals = document.querySelectorAll('.reveal');
                if (reveals && reveals.length) {
                    setTimeout(function () {
                        reveals.forEach(function (el, i) {
                            setTimeout(function () {
                                el.classList.add('show');
                            }, i * 120);
                        });
                    }, 150);
                }

                // Smooth scroll for anchor links
                var anchors = document.querySelectorAll('a[href^="#"]');
                anchors.forEach(function (a) {
                    // read raw href attribute
                    var href = a.getAttribute('href');
                    // ignore empty or plain '#' anchors which are not valid selectors
                    if (!href || href === '#') return;

                    a.addEventListener('click', function (e) {
                        // wrap selector usage in try/catch because some hrefs might not be valid selectors
                        try {
                            var target = document.querySelector(href);
                            if (target) {
                                e.preventDefault();
                                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        } catch (selErr) {
                            // invalid selector (rare) — fail gracefully
                            console.warn('Anchor navigation skipped due to invalid selector:', href, selErr);
                        }
                    });
                });

                // Purchase button stub (replace with real checkout integration)
                var btnPurchase = document.getElementById('btnPurchase');
                if (btnPurchase) {
                    btnPurchase.addEventListener('click', function (e) {
                        e.preventDefault();
                        // In production, replace the alert with an actual redirect to your checkout provider
                        try {
                            alert('Redirecionando para checkout... (substitua este stub pela integração com Hotmart/Monetizze/PagSeguro).');
                        } catch (alertErr) {
                            console.error('Erro ao acionar compra:', alertErr);
                        }
                    });
                }

                // Hero purchase button smooth scroll (safe)
                var btnBuy = document.getElementById('btnBuy');
                if (btnBuy) {
                    btnBuy.addEventListener('click', function (e) {
                        e.preventDefault();
                        var comp = document.getElementById('compra');
                        if (comp) { comp.scrollIntoView({ behavior: 'smooth' }); }
                    });
                }

            } catch (innerErr) {
                console.error('Erro durante inicialização dos handlers da página:', innerErr);
            }
        });
    } catch (err) {
        // Catch any unexpected bootstrap / script loading issues
        console.error('Script initialization failed:', err);
    }
})();