const navslide = () => {
  const button = document.querySelector(".button");
  const nav = document.querySelector(".navlink");
  const background = document.querySelector(".navlinks");
  const removebtn = document.querySelector(".navlinks");

  button.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    background.classList.toggle("bg-active");
  });
  removebtn.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    background.classList.remove("bg-active");
  });
};
navslide();

const filter = () => {
  const filterbtn = document.querySelector(".filterbutton");
  console.log(filterbtn);
  const Filter = document.querySelector(".advanceFilter");
  console.log(Filter);
  filterbtn.addEventListener("click", () => {
    Filter.classList.toggle("filter-active");
  });
};
filter();

function slider1(id) {
  let image = document.getElementById(id).src;
  document.getElementById("demo").src = image;
}
