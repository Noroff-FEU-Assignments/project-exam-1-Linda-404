// fetch memes

async function fetchMemes(memeUrl) {
    try {
        const response = await fetch(memeUrl);
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme" alt="${results[i].images[0].alt}">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
        memeContainer.innerHTML = displayError("An error occured when calling API, please refresh or try again later");
    }
}


















// const postContainer = document.querySelector(".posts_container");
// const viewMoreBtn = document.querySelector(".view_more_posts");

// // fetch posts
// const url = "https://ellesdevdesigns.com/wp-json/wp/v2/posts?_embed";

// async function fetchPosts(postUrl) {

//     try {
//         const response = await fetch(postUrl);
//         const results = await response.json();

//         console.log(results);
//         postContainer.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {

//             postContainer.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
//                                             <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="blog_image">
//                                             <div class="title">
//                                                 <h4 class="card_title">${results[i].title.rendered}</h4>
//                                                 <p class="publish_date">published: ${results[i].date}</p>
//                                             </div>
//                                         </a>`
//         }
//     }
//     catch (error) {
//         console.log(error);
//         postContainer.innerHTML = displayError("An error occured when calling API");
//     }
// }

// fetchPosts(url);

// // fetch all posts
// viewMoreBtn.addEventListener("click", function() {
//     fetchPosts(url + "&per_page=100");
// });

// async function fetchAllPosts() {

//     try {
//         const response = await fetch(url + "&per_page=100");
//         const results = await response.json();

//         console.log(results);
//         postContainer.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {

//             postContainer.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
//                                             <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image">
//                                             <div class="title">
//                                                 <h4 class="card_title">${results[i].title.rendered}</h4>
//                                                 <p class="publish_date">published: ${results[i].date}</p>
//                                             </div>
//                                         </a>`
//         }
//     }
//     catch (error) {
//         console.log(error);
//         postContainer.innerHTML = displayError("An error occured when calling API");
//     }
// }

// viewMoreBtn.addEventListener("click", fetchAllPosts);



//  categories posts
// const parenting = 2;
// const lifestyle = 3;
// const personal = 4;

// fetch posts by category
// const relatedPosts = document.querySelector(".related_posts");

// async function fetchPostByCategory(category) {
//     try {
//         const response = await fetch(url + "&categories=" + category);
//         const results = await response.json();

//         console.log(results);
//         relatedPosts.innerHTML = "";

//         for (let i = 0; i < results.lenght; i++) {

//             relatedPosts.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
//                                             <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image">
//                                             <div class="title">
//                                             <h4 class="card_title">${results[i].title.rendered}</h4>
//                                             <p class="publish_date">published: ${results[i].date}</p>
//                                             </div>
//                                         </a>`
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchPostByCategory(lifestyle);











