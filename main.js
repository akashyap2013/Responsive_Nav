const toggleCollapse = document.querySelector('.toggle-icons span');
const nav = document.querySelector('.nav');

toggleCollapse.onclick = (e) => {
    // nav.classList.add('collapse');
    nav.classList.toggle("collapse");
    e.target.classList.toggle("toggle-click");
}