const memeContainer = document.querySelector(".memes");
const allMemes = document.querySelector(".all_memes");
const parentingMemes = document.querySelector(".parenting_memes");
const programmingMemes = document.querySelector(".programming_memes");
const personalMemes = document.querySelector(".personal_memes");




const url = "https://ellesdevdesigns.com/wp-json/wc/store/products/";

async function fetchMemes() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

fetchMemes();

async function fetchAllMemes() {
    try {
        const response = await fetch(url + "?per_page=100");
        const results = await response.json();

        console.log("num results: " + results.length);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();
        
    }
    catch (error) {
        console.log(error);
    }
}

allMemes.addEventListener("click", fetchAllMemes);
const memeIcons = document.querySelectorAll(".meme_icon");
let isClicked = new Array(memeIcons.length).fill(false); 

function currentCategory() {
    let memeIcons = document.querySelectorAll(".meme_icon");
    for (let i = 0; i < memeIcons.length; i++) {
        let memeIcon = memeIcons[i];
        memeIcon.addEventListener("click", function() {
            isClicked.fill(false);
            isClicked[i] = true;   
            for (let j = 0; j < memeIcons.length; j++){
                if (isClicked[j]) {
                    memeIcons[j].style = "box-shadow: 0 4px 8px 0 var(--lightpurple), 0 6px 6px 0 var(--lightpurple);";
                }
                else{
                    memeIcons[j].style = "";
                }
            }
            
        });
    }
        
}
currentCategory();


// allMemes.innerHTML = `<img src="images/tv-404_square.jpg" class="meme_icon meme_current_category">
//                       <a class="meme_category_title">all</a>`

async function fetchParentingMemes() {
    
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=20");
        const results = await response.json();
        
        console.log(results);
        memeContainer.innerHTML = "";
        
        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`    
        }
        
     
        addModal();
   
    }
    catch (error) {
        console.log(error);
    }
}

function addModal(){
    let images = document.querySelectorAll(".meme");
    for (let i=0; i < images.length; i++){
        console.log(images[i]);
        let image = images[i];
        let modal = document.querySelector(`.modal`);
        console.log(modal);
        let modalImg = document.querySelector(`.modal_img`);
        console.log(modalImg);
        image.addEventListener("click", function() {
            console.log("hei fra " + i);
            modal.style.display = "block";
           modalImg.src = this.src;
        });
        modal.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
}

parentingMemes.addEventListener("click", fetchParentingMemes);

async function fetchProgrammingMemes() {
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=21");
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`

        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

programmingMemes.addEventListener("click", fetchProgrammingMemes);

async function fetchPersonalMemes() {
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=22");
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

personalMemes.addEventListener("click", fetchPersonalMemes);

// need solving:
// 1. modal image memes + detailpage
// 2. latest/related posts on detailspage
// 3. repitition of functions memepage
// 4. add indicator for active meme category
// 5. json "response all" only show 30 of 34 -
// 6. clickable scrollbar latest/related posts
// 7. randomize memes on index/memespage -keep show latest

// meme tags
// parenting = 20
// programming = 21
// personal = 22


// const modal = document.querySelector(".modal");
// const img = document.querySelector(".meme");
// const modalImg = document.querySelector(".modal_img");

// function openModal() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// img.addEventListener("click", openModal);

// let modal = document.querySelector(".modal");
// let img = document.querySelector(".meme");
// let modalImg = document.querySelector(".modal_img");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// modal.onclick = function() {
//     modal.style.display = "none";
// }

// modal image
// let modal = document.querySelector(".modal");
// let img = document.querySelector(".meme");
// let modalImg = document.querySelector(".modal_img");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// modal.onclick = function() {
//     modal.style.display = "none";
// }




// function openModal() {
//     document.getElementById("modal").style.display = "block";
//   }
  
// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// function openModal() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// img.addEventListener("click", openModal);

// function closeModal() {
//     modal.style.display = "none";
// }

// modal.addEventListener("click", closeModal);