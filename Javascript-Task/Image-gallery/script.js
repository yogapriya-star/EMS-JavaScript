document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#product-container img");
    const modal = document.createElement("div");
    modal.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-full",
        "bg-black",
        "bg-opacity-75",
        "flex",
        "items-center",
        "justify-center",
        "hidden"
    );

    modal.innerHTML = `
         <div class="bg-white p-4 rounded-lg">
            <span class="cursor-pointer font-extrabold text-3xl absolute top-2 right-4" onclick="closeModal()">&times;</span>
            <img id="modal-image" src="" alt="Modal Image" class="max-w-full max-h-full">
        </div>
    `;

    document.body.appendChild(modal);

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            openModal(index);
        });
    });
});

function openModal(index) {
    const modal = document.querySelector(".fixed");
    const modalImage = document.getElementById("modal-image");
    const images = document.querySelectorAll("#product-container img");

    modalImage.src = images[index].src;
    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.querySelector(".fixed");
    modal.classList.add("hidden");
}