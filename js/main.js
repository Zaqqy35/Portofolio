
// ACHIEVEMENT TABS
const achievementTabs = document.querySelectorAll(".achievement-tab");
const achievementContents = document.querySelectorAll(".achievement-content");

achievementTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetId = tab.dataset.tab;

        // Update active tab
        achievementTabs.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Show selected content
        achievementContents.forEach((content) => {
            content.hidden = content.id !== targetId;
            content.classList.toggle("active", content.id === targetId);
        });
    });
});
// CERTIFICATE MODAL
const certificateButtons = document.querySelectorAll(".certificate-button");
const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const closeCertificate = document.getElementById("closeCertificate");

certificateButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const imagePath = button.dataset.certificate;

        certificateImage.src = imagePath;
        certificateModal.classList.add("show");
    });
});

// Close button
closeCertificate.addEventListener("click", () => {
    certificateModal.classList.remove("show");
    certificateImage.src = "";
});

// Close when clicking outside the image
certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
        certificateModal.classList.remove("show");
        certificateImage.src = "";
    }
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        certificateModal.classList.remove("show");
        certificateImage.src = "";
    }
});