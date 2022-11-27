const listDOM = document.querySelector("#list");
const inputTaskDOM = document.querySelector("#task");

function newElement() {
  const liDOM = document.createElement("li");
  if (inputTaskDOM.value || inputTaskDOM.value.trim() === "") {
    liDOM.innerHTML = inputTaskDOM.value;
    console.log(liDOM.innerHTML);

    listDOM.append(liDOM);
  }
}
