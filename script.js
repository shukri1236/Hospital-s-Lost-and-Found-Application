const accessKey = "LraoWLdcBzxM7d6OAdw9YwN701bjAOACjOnfMG63ZaE";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12;`

    const response = await fetch(url);

    const data = await response.json();
    

    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;


    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const individualItem = document.createElement("div");

        const retriveButton = document.createElement("button");
        retriveButton.classList.add("retrieve-button");
        retriveButton.innerHTML = "Retrieve Item";

        retriveButton.addEventListener('click', ()=>{
            alert("Request has been sent to the administration")
        })

        individualItem.appendChild(image);
        individualItem.appendChild(retriveButton);
        searchResult.appendChild(individualItem);
    });
// after fetching the data show more button appears
    showMoreBtn.style.display ="block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})


// OPEN MENU IN SMALL SCREENS
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

const sideMenu = document.getElementById("sideMenu");

menuIcon.onclick = function(){
    sideMenu.style.right = "0";   
}

closeIcon.onclick = function(){
    sideMenu.style.right = "-200px";   
}
