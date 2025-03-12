document.addEventListener("DOMContentLoaded", () => 
    // 🔹 Smooth Scrolling for Navigation Links
    document.querySelector("nav").addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });

    // 🔹 Floating Button Hover Effect
    const floatingBtn = document.querySelector(".floating-btn");
    if (floatingBtn) {
        floatingBtn.addEventListener("mouseenter", () => {
            floatingBtn.style.transform = "scale(1.1)";
            floatingBtn.style.boxShadow = "0px 4px 15px rgba(255, 153, 0, 0.8)";
        });
        floatingBtn.addEventListener("mouseleave", () => {
            floatingBtn.style.transform = "scale(1)";
            floatingBtn.style.boxShadow = "none";
        });
    }

    // 🔹 Responsive Sliding Menu Section
    document.addEventListener("DOMContentLoaded", () => {
        // 🔹 Responsive Sliding Menu Section
        const menuContainer = document.querySelector(".menu-container");
        const slides = document.querySelectorAll(".menu-item");
        const leftArrow = document.querySelector(".arrow-left");
        const rightArrow = document.querySelector(".arrow-right");
        let menuIndex = 0;
        const totalSlides = slides.length;
    
        function showMenuSlide(index) {
            menuContainer.style.transform = `translateX(${-index * 100}%)`;
            menuContainer.style.transition = "transform 0.5s ease-in-out";
        }
    
        if (rightArrow && leftArrow) {
            rightArrow.addEventListener("click", () => {
                menuIndex = (menuIndex + 1) % totalSlides;
                showMenuSlide(menuIndex);
            });
    
            leftArrow.addEventListener("click", () => {
                menuIndex = (menuIndex - 1 + totalSlides) % totalSlides;
                showMenuSlide(menuIndex);
            });
        }
    
        // Enable touch swipe for mobile devices
        let startX = 0;
        menuContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
    
        menuContainer.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                menuIndex = (menuIndex + 1) % totalSlides;
            } else if (endX - startX > 50) {
                menuIndex = (menuIndex - 1 + totalSlides) % totalSlides;
            }
            showMenuSlide(menuIndex);
        });
    
        // Auto-slide every 3 seconds
        setInterval(() => {
            menuIndex = (menuIndex + 1) % totalSlides;
            showMenuSlide(menuIndex);
        }, 3000);
    
        showMenuSlide(menuIndex);
    });
    
    
    // 🔹 Sliding Product Section (One Item at a Time)
    const productSlides = document.querySelectorAll(".product-card");
    const productLeftArrow = document.querySelector(".product-arrow-left");
    const productRightArrow = document.querySelector(".product-arrow-right");
    let productIndex = 0;

    function showProductSlide(index) {
        productSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
            slide.style.transition = "transform 0.5s ease-in-out";
        });
    }

    if (productRightArrow && productLeftArrow) {
        productRightArrow.addEventListener("click", () => {
            productIndex = (productIndex + 1) % productSlides.length;
            showProductSlide(productIndex);
        });

        productLeftArrow.addEventListener("click", () => {
            productIndex = (productIndex - 1 + productSlides.length) % productSlides.length;
            showProductSlide(productIndex);
        });

        setInterval(() => {
            productIndex = (productIndex + 1) % productSlides.length;
            showProductSlide(productIndex);
        }, 3000);

        showProductSlide(productIndex);
    }

    // 🔹 Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            const phonePattern = /^[0-9]{10}$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let errorMessage = "";

            if (!phonePattern.test(phone)) {
                errorMessage += "❌ Invalid phone number. Please enter a 10-digit number.\n";
            }

            if (!emailPattern.test(email)) {
                errorMessage += "❌ Invalid email address. Please enter a valid email.\n";
            }

            if (errorMessage) {
                alert(errorMessage);
            } else {
                alert("✅ Your details have been submitted successfully!");
                contactForm.reset();
            }
            const orderButton = document.querySelector(".order-btn");
    
    }
});
