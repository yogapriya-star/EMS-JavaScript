//close search functionality
var inputClose = document.getElementById("input-close");

async function searchPosts() {
    const searchInput = document.getElementById('searchInput').value;
    if(searchInput){
        inputClose.style.display = "block";
    }else {
        inputClose.style.display = "none";
    }
    const searchResultsDiv = document.getElementById('searchResults');

    // Clear previous search results
    searchResultsDiv.innerHTML = '';

    try {
        // Fetch posts from the JSONPlaceholder API
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchInput}`);
        const data = await response.json();

        // Display search results
        if (data.length > 0) {
            data.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `<h3  style="font-size: 25px; font-weight: bold;">${post.title}</h3><p  style="font-size: 20px;">${post.body}</p>`;
                searchResultsDiv.appendChild(postDiv);
            });
        } else {
            searchResultsDiv.innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed
    },
})
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        updateInnerHTML(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function updateInnerHTML(data) {
    var container=document.querySelector(".products")
    data.forEach((product)=>{
        var createItem = document.createElement("div")
        createItem.classList.add("product")
        createItem.innerHTML=` 
        <h1 style="font-size: 25px; font-weight: bold;">${product.title}</h1>
        <p style="font-size: 20px;">${product.body}</p>
        `
        container.append(createItem)
    })
}


//To clear the search input field
inputClose.addEventListener("click", function (){
    inputClose.style.display = "none";
    searchInput.value = '';
    var clearProductContainer = document.getElementById("searchResults");
    clearProductContainer.innerHTML = '<div></div>';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add other headers as needed
        },
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            updateInnerHTML(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})