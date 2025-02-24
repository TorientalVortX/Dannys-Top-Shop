new Vue({
    el: "#app",
    data: {
        pages: [
            { name: "Home", url: "index.html" },
            { name: "Services", url: "services.html" },
            { name: "About", url: "about.html" },
            { name: "Contact", url: "contact.html" },
            { name: "Gallery", url: "gallery.html" },
        ],
        currentPage: "Home", // Default active page
        isMenuOpen: false, // Track menu state for mobile
    },
    methods: {
        setActivePage(pageName) {
            this.currentPage = pageName;
            this.isMenuOpen = false; // Close menu after clicking a link
            window.location.href = this.pages.find(
                (page) => page.name === pageName,
            ).url;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
        },
    },
    created() {
        // Set active page based on current URL
        const path = window.location.pathname.split("/").pop() || "index.html";
        const activePage = this.pages.find((page) => page.url === path);
        if (activePage) {
            this.currentPage = activePage.name;
        }
    },
});
