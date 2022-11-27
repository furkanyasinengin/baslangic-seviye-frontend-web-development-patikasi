const listDOM = document.querySelector("#list");
const inputTaskDOM = document.querySelector("#task");
const listElements = ["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap"
  , "Yemek Yap", "50 Sayfa Kitap Oku"]
listElements.forEach(item => {
  let liDOM = document.createElement("li");
  liDOM.onclick = clickListElement
  liDOM.innerHTML = item;
  listDOM.append(liDOM);
})

function newElement() {
  let liDOM = document.createElement("li");
  liDOM.onclick = clickListElement
  if (inputTaskDOM.value.trim()) {
    liDOM.innerHTML = inputTaskDOM.value;
    listElements.push(inputTaskDOM.value)
    listDOM.append(liDOM);
  }
}

function clickListElement() {
  console.log(this.classList.value ? this.classList.remove("checked") : this.classList.add("checked"))
}
