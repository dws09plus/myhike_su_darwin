class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            Footer: Darwin Su Set 1B A01075931
            <footer class="py-3 my-4 border-top text-center">
                <p class="mb-0 text-muted">&copy; 2026 BCIT COMP1800</p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
