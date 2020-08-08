// const blogContainer = document.querySelector(".blog-wrapper");

// const savedArticles =
//   localStorage.getItem("saved-articles") === null
//     ? []
//     : JSON.parse(localStorage.getItem("saved-articles"));

// if (savedArticles.length) {
//   blogContainer.innerHTML = "";
//   savedArticles.map((article) => {
//     blogContainer.innerHTML += `
//             <div class="blog">
//             <h1><a href= ${`/blog-details/${article.title.replace(
//               " ",
//               "-"
//             )}`}>${article.title}</a></h1>
//             <small>${article.date}</small>
//             <p class="truncate">${article.body}</p>
//           </div>
//             `;
//   });
// } else {
//   blogContainer.innerHTML += `
//         <h2>No saved articles yet</h2>
//     `;
// }

// console.log(savedArticles);
const blogContainer=document.querySelector(".blog-wrapper"),savedArticles=null===localStorage.getItem("saved-articles")?[]:JSON.parse(localStorage.getItem("saved-articles"));savedArticles.length?(blogContainer.innerHTML="",savedArticles.map(e=>{blogContainer.innerHTML+=`\n            <div class="blog">\n            <h1><a href= ${`/blog-details/${e.title.replace(/\s/g , "-")}`}>${e.title}</a></h1>\n            <small>${e.date}</small>\n            <p class="truncate">${e.body}</p>\n          </div>\n            `})):blogContainer.innerHTML+="\n        <h2>No saved articles yet</h2>\n    ",console.log(savedArticles);