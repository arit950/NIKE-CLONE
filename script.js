const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 11900,
    desc: "The celebrations just keep coming. Unbox the AF-1 for a fireside feel and a whole lotta style. The joyful take on the hoops icon pairs crisp leather with seasonally perfect prints and colours. And don't worry—even if you've been naughty, you're gonna look nice.",
    colors: [
      {
        code: "black",
        img: "./air.png",
      },
      {
        code: "darkblue",
        img: "./air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Hippie",
    price: 5000,
    desc: "Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission. Created from scraps, or space junk, Space Hippie is the result of sustainable practices meeting radical design.",
    colors: [
      {
        code: "black",
        img: "./hippie2.png",
      },
      {
        code: "gray",
        img: "./hippie.png",
      },
    ],
  },

  {
    id: 3,
    title: "Crater",
    price: 6000,
    desc: "When it fits this good and looks this great, it doesn't need a Swoosh. The coveted hug-your-foot design, plus Air cushioning and a sturdy heel cage, gets updated with a chequerboard upper to match the season. Its Crater Foam midsole adds to the sporty-yet-sophisticated look. Go ahead, give your feet bragging rights.",
    colors: [
      {
        code: "black",
        img: "./crater.png",
      },
      {
        code: "lightgray",
        img: "./crater2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Blazer",
    price: 7500,
    desc: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The Nike Blazer Mid gets you ready for wintertime with a cosy collar that pairs perfectly with your favourite seasonal jumper.",
    colors: [
      {
        code: "green",
        img: "./blazer2.png",
      },
      {
        code: "lightgray",
        img: "./blazer.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air Jordan",
    price: 12000,
    desc: "Tis the season for festive-inspired Js. Rich-grain leather and woven fabrics will elevate any streetwear outfit, while a buttery-soft interior and Air in the heel add soft comforts.",
    colors: [
      {
        code: "lightgray",
        img: "./jordan.png",
      },
      {
        code: "green",
        img: "./jordan2.png",
      },
    ],
  },
];
let chosenProducts = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

//for sliding window
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosenProducts = products[index];

    currentProductTitle.textContent = chosenProducts.title;
    currentProductPrice.textContent = "₹" + chosenProducts.price;
    currentProductImg.src = chosenProducts.colors[0].img;
    currentProductDesc.textContent = chosenProducts.desc;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProducts.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProducts.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  payment.textContent = "Transaction failed GO BACK !";
});
const checked = () => {
  payment.textContent = "Order Successfully Placed 🤑";
};
