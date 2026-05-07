(function () {
    // inject spinner styles once
    var style = document.createElement('style');
    style.textContent = `
        nav ul li a {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
        }
        .nav-spinner {
            display: none;
            width: 13px; height: 13px;
            border: 2px solid rgba(255,255,255,0.35);
            border-top-color: #fff;
            border-radius: 50%;
            animation: navSpin 0.6s linear infinite;
            flex-shrink: 0;
            vertical-align: middle;
        }
        @keyframes navSpin { to { transform: rotate(360deg); } }
        nav ul li a.navigating {
            opacity: 0.75;
            pointer-events: none;
        }
        nav ul li a.navigating .nav-spinner {
            display: inline-block;
        }
    `;
    document.head.appendChild(style);

    // add spinner span to every nav link
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        var spinner = document.createElement('span');
        spinner.className = 'nav-spinner';
        link.prepend(spinner);

        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (!href || href === '#') return;

            e.preventDefault();

            // logout handling
            if (this.id === 'logoutLink') {
                localStorage.removeItem('user');
            }

            this.classList.add('navigating');
            var dest = href;
            setTimeout(function () {
                window.location.href = dest;
            }, 600);
        });
    });
})();
