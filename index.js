const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("mouseover", () => {
        removeFocus();
        item.classList.add("select");
    })

removeFocus = () => {
    items.forEach(item => {
        item.classList.remove("select");
    })
}
})