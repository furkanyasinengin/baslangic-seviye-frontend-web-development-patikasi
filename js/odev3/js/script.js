const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const filterList = ["All", "Korea", "Japan", "China"];

const menuItem = (item) => {
  let menuContain = `
  <div class="row">
    <div class="col-4 d-flex justify-content-center">
      <img
        class="photo"
        src="${item.img}"
        alt=""
      />
    </div>
    <div class="col-8">
      <div class="row menu-items">
        <div
          class="col-6 d-flex justify-content-start menu-title"
        >
          <h4>${item.title}</h4>
        </div>
        <div
          class="col-6 d-flex justify-content-end menu-title"
        >
          <h4>${item.price}</h4>
        </div>
        <!-- <hr /> -->
        <p class="menu-info">
          ${item.desc}
        </p>
      </div>
    </div>
  </div>
  `;

  let menuItemDOM = document.createElement("div");
  menuItemDOM.classList.add("col-6", "mb-3");
  menuItemDOM.innerHTML = menuContain;
  return menuItemDOM;
};
//buttonlar?? olu??turmak i??in fonksiyon
function buttons(filterElement) {
  let buttonDivDOM = document.querySelector(".btn-container");
  let buttonDOM = document.createElement("button");
  buttonDOM.classList.add("btn-item");
  buttonDOM.addEventListener("click", buttonClick);
  buttonDOM.innerHTML = filterElement;
  buttonDivDOM.append(buttonDOM);
}
//butonlar?? olu??turmak i??in buton dizisindekileri elemanlar??n map i??lemi
filterList.map((item) => {
  buttons(item);
});

//sayfa y??klendi??inde ve butonlara bas??ld??????nda ??al????an fonksiyon
function showMenu(filter) {
  let menuItemsDivDOM = document.querySelector(".section-center");
  menuItemsDivDOM.replaceChildren(); //div i??indeki elemanlar?? buttonlara bas??ld??k??a alta alta eklenmesin diye siler

  menu.map((item) => {
    if (filter == "All" || item.category == filter) {
      menuItemsDivDOM.append(menuItem(item));
    }
  });
}

//buttonlara bas??ld??????nda menu elemanalar??n??n ekrana gelmesini sa??layan fonksiyonu ??a????r??r
function buttonClick() {
  showMenu(this.innerHTML);
}

//sayfa y??klendi??inde t??m elemanlar??n ekrana gelmesi i??in ??al??????r
showMenu("All");
