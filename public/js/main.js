document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    const isMobile = window.innerWidth < 1024;

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector("button");
        const menu = dropdown.querySelector(".dropdown-menu");

        if (!isMobile) {
            // Desktop → hover
            dropdown.addEventListener("mouseenter", () => {
                menu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                menu.classList.remove("show");
            });
        }

        // Mobile → click
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            // Fecha outros
            document.querySelectorAll(".dropdown-menu").forEach(m => {
                if (m !== menu) m.classList.remove("show");
            });

            menu.classList.toggle("show");
        });
    });

    // Click fora
    document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    });
});