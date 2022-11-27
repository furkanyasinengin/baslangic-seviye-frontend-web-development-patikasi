let testDom = document.querySelector("#test");
testDom.addEventListener("click", testClick);

function testClick() {
  this.style.color = "red";
}
const alertDOM = document.querySelector("#alert");
const alert = (title, message, className = "warning") =>
  `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit", formSubmit);
function formSubmit() {
  event.preventDefault();

  const scoreDom = document.querySelector("#score");
  const userNameDom = document.querySelector("#username");
  if (scoreDom.value && userNameDom.value) {
    addItem(userNameDom.value, scoreDom.value);
    userNameDom.value = "";
    scoreDom.value = "";
  } else {
    alertDOM.innerHTML = alert("Başlık", "Mesaj", "danger");
  }
}

const userListDom = document.querySelector("#userList");
function addItem(userName, score) {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName} 
  <span class="badge bg-primary rounded-pill">${score}</span>
  `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDom.append(liDOM);
}
