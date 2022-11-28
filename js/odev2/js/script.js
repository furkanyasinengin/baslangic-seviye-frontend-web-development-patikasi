const listDOM = document.querySelector("#list");
const inputTaskDOM = document.querySelector("#task");
// varsayılan liste
const defaultlistElements = [
  {
    name: "3 Litre Su İç",
    isChecked: false,
  },
  {
    name: "Ödevleri Yap",
    isChecked: false,
  },
  {
    name: "En Az 3 Saat Kodlama Yap",
    isChecked: false,
  },
  {
    name: "Yemek Yap",
    isChecked: false,
  },
  {
    name: "50 Sayfa Kitap Oku",
    isChecked: false,
  },
];
//localStroge'dan kayıtlı liste kontrolü ve atama işlemi
localStorage.getItem("listElements")
  ? (listElements = JSON.parse(localStorage.getItem("listElements")))
  : (listElements = defaultlistElements);

// liste elemanları için silme butonu
const closeButton = () => {
  let buttonDOM = document.createElement("button");
  let spanDOM = document.createElement("span");

  spanDOM.innerHTML = "&times;";

  buttonDOM.addEventListener("click", closeListElement);
  buttonDOM.type = "button";
  buttonDOM.classList.add("close");
  buttonDOM.append(spanDOM);

  return buttonDOM;
};

// liste elemanlarının liste elemanlarına atanması
listElements.forEach((item) => {
  let liDOM = document.createElement("li");
  liDOM.addEventListener("click", clickListElement);
  liDOM.innerHTML = item.name;

  item.isChecked ? liDOM.classList.add("checked") : {};

  liDOM.append(closeButton());
  listDOM.append(liDOM);
});

//yeni eleman eklenmesi
function newElement() {
  let liDOM = document.createElement("li");
  liDOM.addEventListener("click", clickListElement);
  if (inputTaskDOM.value.trim()) {
    liDOM.innerHTML = inputTaskDOM.value;
    liDOM.append(closeButton());
    listElements.push({ name: inputTaskDOM.value, isChecked: false });
    listDOM.append(liDOM);
    inputTaskDOM.value = "";
    localStorage.setItem("listElements", JSON.stringify(listElements));
    let toastDOM = document.querySelector("#liveToastSuccess");
    toastDOM.classList.add("show");
    toastDOM.classList.remove("hide");
    document
      .querySelector("#liveToastSuccess>div>button")
      .addEventListener("click", closeToastAlert);
  } else {
    let toastDOM = document.querySelector("#liveToastWarning");
    //console.log(document.querySelector("#liveToastWarning>div>button"));
    document
      .querySelector("#liveToastWarning>div>button")
      .addEventListener("click", closeToastAlert);
    toastDOM.classList.add("show");
    toastDOM.classList.remove("hide");
  }
}

// liste elemanlarına tıklandığına liste elemanına class eklenmesi
function clickListElement() {
  try {
    if (this.classList.value) {
      this.classList.remove("checked");

      listElements.find(
        (x) =>
          x.name === this.textContent.substring(0, this.textContent.length - 1)
      ).isChecked = false;
      localStorage.setItem("listElements", JSON.stringify(listElements));
    } else {
      this.classList.add("checked");
      listElements.find(
        (x) =>
          x.name === this.textContent.substring(0, this.textContent.length - 1)
      ).isChecked = true;
      localStorage.setItem("listElements", JSON.stringify(listElements));
    }
  } catch (err) {
    {
    }
  }
}

// yapılan işin listeden kaldırılması
function closeListElement() {
  this.parentElement.remove();

  listElements.splice(
    listElements.indexOf(
      listElements.find(
        (x) =>
          x.name ===
          this.parentElement.textContent.substring(
            0,
            this.parentElement.textContent.length - 1
          )
      )
    ),
    1
  );
  localStorage.setItem("listElements", JSON.stringify(listElements));
}

function closeToastAlert() {
  this.parentElement.parentElement.classList.add("hide");
  this.parentElement.parentElement.classList.remove("show");
}
