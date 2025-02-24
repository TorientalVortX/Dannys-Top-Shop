new Vue({
    el: '#app',
    data: {
        pages: [
            { name: 'Home', url: 'index.html' },
            { name: 'Services', url: 'services.html' },
            { name: 'About', url: 'about.html' },
            { name: 'Contact', url: 'contact.html' },
            { name: 'Gallery', url: 'gallery.html' }
        ],
        currentPage: 'Home', // Default active page
        isMenuOpen: false // Track menu state for mobile
    },
    methods: {
        setActivePage(pageName) {
            this.currentPage = pageName;
            this.isMenuOpen = false; // Close menu after clicking a link
            window.location.href = this.pages.find(page => page.name === pageName).url;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
        },
        handleButtonClick(event) {
            // Add subtle animation for button presses (e.g., scale down slightly)
            const button = event.target;
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100); // Reset after 100ms for a quick, smooth effect
        }
    },
    created() {
        // Set active page based on current URL
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const activePage = this.pages.find(page => page.url === path);
        if (activePage) {
            this.currentPage = activePage.name;
        }
    }
});