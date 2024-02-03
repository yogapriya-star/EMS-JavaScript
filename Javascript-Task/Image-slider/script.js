const slider = document.getElementById('slider');
let currentIndex = 0;

const apiUrl = "https://fakestoreapi.com/products";

// Callback Hell
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const slides = data.slice(0, 15).map((item, index) => createSlide(item, index));
        slider.innerHTML = slides.join("");
        showSlide(currentIndex);
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}

fetchData();

function createSlide(item, index) {
    const visibilityClass = index >= 3 ? 'hidden' : '';
    return `
        <div class="slide ${visibilityClass}">
            <img src="${item.image}" alt="${item.title}" class="slide-image">
            <div class="slide-content">
                <h2>${item.title}</h2>
                <p>Price: $ ${item.price}</p>
            </div>
        </div>
    `;
}

function showSlide(index) {
    const slideWidth = document.querySelector(".slide").offsetWidth;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide() {
    if (currentIndex < slider.childElementCount - 3) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}