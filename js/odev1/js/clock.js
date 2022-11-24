const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");
const name = prompt("İsminizi giriniz.");
myName.innerHTML = name ? name : "Kullanıcı";

function showTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  myClock.innerHTML = `${h}:${m}:${s}`;
  setTimeout(showTime, 500);
}
