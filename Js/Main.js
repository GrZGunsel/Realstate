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

function slider1(id) {
  let image = document.getElementById(id).src;
  document.getElementById("demo").src = image;
}
const filter = () => {
  const filterbtn = document.querySelector(".filterbutton");
  console.log(filterbtn);
  const Filter = document.querySelector(".advanceFilter");
  console.log(Filter);
  const removeclass = document.querySelector(".fas fa-filter");
  console.log(removeclass);
  filterbtn.addEventListener("click", () => {
    Filter.classList.add("filter-active");
  });
  removeclass.addEventListener("click", () => {
    Filter.classList.remove("nav-active");
  });
};
filter();
