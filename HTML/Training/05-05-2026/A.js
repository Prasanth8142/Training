function showToast(message, type = "info") {
      const container = document.getElementById("toastContainer");

      const toast = document.createElement("div");
      toast.classList.add("toast", type);

      toast.innerHTML = `
        ${message}
        <span class="close-btn">&times;</span>
      `;

      container.appendChild(toast);

      // Close manually
      toast.querySelector(".close-btn").onclick = () => {
        removeToast(toast);
      };

      // Auto remove
      setTimeout(() => {
        removeToast(toast);
      }, 3000);
    }

    function removeToast(toast) {
      toast.style.animation = "fadeOut 0.5s forwards";
      setTimeout(() => {
        toast.remove();
      }, 500);
    }