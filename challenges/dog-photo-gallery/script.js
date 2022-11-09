// ~~~~~~~~~~~~~~~~ Create the elements~~~~~~~~~~~~~
const main = document.getElementById("main");

const createBtn = document.createElement("button");
const clearBtn = document.createElement("button");
const image = document.createElement("img");
const ul = document.createElement("ul");
const li = document.createElement("li");

// ~~~~~~~~~~~~~~~~ Add the elements to the DOM ~~~~~~~~~~~~~

main.appendChild(image);
main.appendChild(ul);
ul.appendChild(li);
li.appendChild(image);
main.appendChild(createBtn);
main.appendChild(clearBtn);

// ~~~~~~~~~~~~~~~~~ Add the attributes to the elements~~~~~~~~~~

image.setAttribute("id", "img");
ul.setAttribute("id", "ul");

//  ~~~~~~~~~~~~~~~~~~ Add texts to the buttons ~~~~~~~~~~~~~~~~

createBtn.innerText = "Generate Image";
clearBtn.textContent = "Clear Image";

// ~~~~~~~~~~~~~~~~~~~~ Add event listeners to creat img ~~~~~~~~~~~~~~~~

createBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => image.setAttribute("src", data.message));
});

// function creatImage( ) {

// }

// ~~~~~~~~~~~~~~~~~~~~ Add event listeners to clear img ~~~~~~~~~~~~~~~~
clearBtn.addEventListener("click", () => {
  image.setAttribute("src", "");
});
