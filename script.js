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
const main = document.getElementsByTagName("main")[0];
let clicked = false;
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");

  if (clicked) {
    main.style.paddingTop = "110px";
    main.style.transition = "ease-in-out 0.3s";
    menuIcon.style.transform = "rotate(0deg)";
  } else {
    menuIcon.style.transform = "rotate(90deg)";
    main.style.paddingTop = "230px";
    main.style.transition = "ease-in-out 0.3s";
  }
  clicked = !clicked;
});

// const btnContact = document.getElementsByClassName(".btn-contatct")[0];
// btnContact.addEventListener("click", ()=>{

// });
