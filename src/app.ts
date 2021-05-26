const searchEl = document.querySelector(".search")! as HTMLElement;
const serchInputEl = searchEl.querySelector("input")! as HTMLInputElement;

searchEl.addEventListener("click", () => {
  serchInputEl.focus();
});
serchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색");
});
serchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "");
});
