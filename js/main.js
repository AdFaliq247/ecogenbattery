// ====== Pop Up Box Message ======
// Utility function for modal setup
function setupModal(modalId, btnId) {
    const modal = document.getElementById(modalId);
    const btn = document.getElementById(btnId);
    const closeBtn = modal.querySelector(".close");

    // Open modal
    btn.onclick = () => modal.style.display = "block";

    // Close modal when X clicked
    closeBtn.onclick = () => modal.style.display = "none";

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Setup Section 1 modal
setupModal("companyModal", "companyInfoBtn");

// Setup Section 2 modal
setupModal("brandModal", "brandInfoBtn");
