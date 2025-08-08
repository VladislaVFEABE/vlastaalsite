document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-fabrics');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const fabricList = button.nextElementSibling;
      fabricList.classList.toggle('hidden');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fabricImages = document.querySelectorAll(".fabric-list img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.querySelector(".modal-close");

  fabricImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
