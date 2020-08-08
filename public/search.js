// const searchInput = document.getElementById("searchInput");
// let blogResult = document.getElementById("blogResult");
// const form = document.getElementById("form");

// let value;
// const fetchRequest = (async () => {
//   let response = await fetch("/all-blogs");
//   let data = await response.json();
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (searchInput.value === "") {
//       blogResult.innerHTML = "";
//       document.querySelector(".error").classList.remove("error-view");
//     } else {
//       document.querySelector(".error").classList.add("error-view");
//       value = searchInput.value.toLowerCase();
//       const searchData = data.filter(
//         (data) =>
//           data.title.toLowerCase().indexOf(value) !== -1 ||
//           data.body.toLowerCase().indexOf(value) !== -1
//       );
//       showBlogResult(searchData);
//     }
//   });
// })();

// const showBlogResult = (result) => {
//   blogResult.innerHTML = "";

//   if (result.length) {
//     blogResult.innerHTML += `<small>${result.length} ${
//       result.length > 1 ? `posts were` : `post was`
//     } found</small>`;
//     result.map((blog) => {
//       blogResult.innerHTML += `<div>
//       <h1><a href=${`/blog-details/${blog.title.replace(" ", "-")}`}>${
//         blog.title
//       }</a></h1>
//       <small>${new Date(blog.createdAt).toDateString()}</small>
//       <p class="truncate">${blog.body}</p>
//      </div>`;
//     });
//   } else {
//     blogResult.innerHTML += "<h3>No Blogs available</h3>";
//   }
// };

const searchInput=document.getElementById("searchInput");let blogResult=document.getElementById("blogResult");const form=document.getElementById("form");let value;const fetchRequest=(async()=>{let e=await fetch("/all-blogs"),t=await e.json();form.addEventListener("submit",e=>{if(e.preventDefault(),""===searchInput.value)blogResult.innerHTML="",document.querySelector(".error").classList.remove("error-view");else{document.querySelector(".error").classList.add("error-view"),value=searchInput.value.toLowerCase();const e=t.filter(e=>-1!==e.title.toLowerCase().indexOf(value)||-1!==e.body.toLowerCase().indexOf(value));showBlogResult(e)}})})(),showBlogResult=e=>{blogResult.innerHTML="",e.length?(blogResult.innerHTML+=`<small>${e.length} ${e.length>1?"posts were":"post was"} found</small>`,e.map(e=>{blogResult.innerHTML+=`<div>\n      <h1><a href=${`/blog-details/${e.title.replace(/\s/g , "-")}`}>${e.title}</a></h1>\n      <small>${new Date(e.createdAt).toDateString()}</small>\n      <p class="truncate">${e.body}</p>\n     </div>`})):blogResult.innerHTML+="<h3>No Blogs available</h3>"};
