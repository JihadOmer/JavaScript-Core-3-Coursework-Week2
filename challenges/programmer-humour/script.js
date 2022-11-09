const main = document.getElementById("main");
const image = document.createElement("img");
const createBtn = document.createElement("button");


main.appendChild(image);
main.appendChild(createBtn);

createBtn.innerText = "click to lough";

image.setAttribute("id", "img");


createBtn.addEventListener("click", () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
image.setAttribute("src", data.img);
console.log(data);
    });
});
