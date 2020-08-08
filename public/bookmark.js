// const bookmarkButton = document.getElementById("bookmark");
// const bookmarkIcon = document.querySelector(".bookmark");

// const title = bookmark.previousElementSibling.textContent.replace(" ", "-");
// const date = bookmark.parentElement.nextElementSibling.textContent;
// const body =
//   bookmark.parentElement.nextElementSibling.nextElementSibling.textContent;

// let article = {
//   title,
//   date,
//   body,
// };
// let savedArticles =
//   localStorage.getItem("saved-articles") === null
//     ? []
//     : JSON.parse(localStorage.getItem("saved-articles"));

// const iconCheck = (() => {
//   let seen = savedArticles.find(
//     (each) => article.title.toLowerCase() === each.title.toLowerCase()
//   );
//   if (seen) {
//     bookmarkIcon.style.fill = "black";
//   } else {
//     bookmarkIcon.style.fill = "none";
//   }
// })();
// bookmarkButton.addEventListener("click", () => {
//   const seen = savedArticles.find(
//     (each) => article.title.toLowerCase() === each.title.toLowerCase()
//   );
//   if (seen) {
//     savedArticles = savedArticles.filter(
//       (each) => each.title.toLowerCase() !== seen.title.toLowerCase()
//     );
//     localStorage.setItem("saved-articles", JSON.stringify(savedArticles));
//     bookmarkIcon.style.fill = "none";
//   } else {
//     savedArticles = [...savedArticles, article];
//     localStorage.setItem("saved-articles", JSON.stringify(savedArticles));
//     bookmarkIcon.style.fill = "black";
//   }
// });

const bookmarkButton=document.getElementById("bookmark"),bookmarkIcon=document.querySelector(".bookmark"),title=bookmark.previousElementSibling.textContent,date=bookmark.parentElement.nextElementSibling.textContent,body=bookmark.parentElement.nextElementSibling.nextElementSibling.textContent;let article={title:title,date:date,body:body},savedArticles=null===localStorage.getItem("saved-articles")?[]:JSON.parse(localStorage.getItem("saved-articles"));const iconCheck=(()=>{let e=savedArticles.find(e=>article.title.toLowerCase()===e.title.toLowerCase());bookmarkIcon.style.fill=e?"black":"none"})();bookmarkButton.addEventListener("click",()=>{const e=savedArticles.find(e=>article.title.toLowerCase()===e.title.toLowerCase());e?(savedArticles=savedArticles.filter(t=>t.title.toLowerCase()!==e.title.toLowerCase()),localStorage.setItem("saved-articles",JSON.stringify(savedArticles)),bookmarkIcon.style.fill="none"):(savedArticles=[...savedArticles,article],localStorage.setItem("saved-articles",JSON.stringify(savedArticles)),bookmarkIcon.style.fill="black")});