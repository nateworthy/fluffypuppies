(function () {
    var root = document.getElementById('site-nav');
    if (!root) return;

    function currentPage() {
        var parts = window.location.pathname.split('/').filter(Boolean);
        var last = parts[parts.length - 1] || '';
        if (!last || !/\.html?$/i.test(last)) {
            return 'index.html';
        }
        return last;
    }

    var current = currentPage();
    var items = [
        { href: 'index.html', label: 'Home' },
        { href: 'about.html', label: 'About Maggie' },
        { href: 'book.html', label: 'Book a Sitter' }
    ];

    var nav = document.createElement('nav');
    nav.className = 'top-bar';
    nav.setAttribute('aria-label', 'Main');

    items.forEach(function (item) {
        var active = current === item.href;
        if (active) {
            var span = document.createElement('span');
            span.className = 'current';
            span.textContent = item.label;
            span.setAttribute('aria-current', 'page');
            nav.appendChild(span);
        } else {
            var a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.label;
            nav.appendChild(a);
        }
    });

    root.appendChild(nav);
})();
