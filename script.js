const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

window.addEventListener("scroll", () => {
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  const topScrolled = (window.pageYOffset * 100) / maxHeight === 0;
  const navbar = document.getElementsByTagName("nav")[0];
  if (!topScrolled) {
    navbar.classList.add("nav-box-shadow");
  } else {
    navbar.classList.remove("nav-box-shadow");
  }
});

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// const btnContact = document.getElementsByClassName(".btn-contatct")[0];
// btnContact.addEventListener("click", ()=>{
  
// });