const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');


// onclick event on toggle Collapse span tag
toggleCollapse.onclick = (e) => {
    nav.classList.toggle("collapse");
    e.target.classList.toggle("toggle-click");
}