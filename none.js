const text = document.querySelector(".player");
const price = document.querySelector(".price");
const ovr = document.querySelector(".ovr");
const img = document.querySelector(".player-img");

const ronaldo = document.querySelector(".ronaldo");
const messi = document.querySelector(".messi");
const neymar = document.querySelector(".neymar");
const bruyne = document.querySelector(".bruyne");
const haaland = document.querySelector(".haaland");
const lewy = document.querySelector(".lewandowski");
const benzema = document.querySelector(".benzema");
const kane = document.querySelector(".kane");
const salah = document.querySelector(".salah");
const dijk = document.querySelector(".dijk");
const none = document.querySelector(".none");

const stat1 = document.querySelector(".stat-1");
const stat2 = document.querySelector(".stat-2");
const stat3 = document.querySelector(".stat-3");
const stat4 = document.querySelector(".stat-4");
const stat5 = document.querySelector(".stat-5");
const stat6 = document.querySelector(".stat-6");
const stat7 = document.querySelector(".stat-6");
const stat8 = document.querySelector(".stat-6");

neymar.addEventListener("click", function () {
  text.textContent = "Neymar";
  price.textContent = "Price : 2.030.000.000 $";
  ovr.textContent = "119 LW";
  stat1.textContent = "PAC 152";
  stat2.textContent = "SHO 150";
  stat3.textContent = "PAS 142";
  stat4.textContent = "AGI 158";
  stat5.textContent = "DEF 66";
  stat6.textContent = "PHY 100";
  img.src = "6.png";
});

messi.addEventListener("click", function () {
  text.textContent = "Messi";
  price.textContent = "Price : 2.245.900.000 $";
  ovr.textContent = "94 RW";
  stat1.textContent = "PAC 83";
  stat2.textContent = "SHO 89";
  stat3.textContent = "PAS 91";
  stat4.textContent = "AGI 95";
  stat5.textContent = "DEF 59";
  stat6.textContent = "PHY 75";
  img.src = "5.png";
});

ronaldo.addEventListener("click", function () {
  text.textContent = "Ronaldo";
  price.textContent = "Price : 2.250.000.000 $";
  ovr.textContent = "93 ST";
  stat1.textContent = "PAC 134";
  stat2.textContent = "SHO 156";
  stat3.textContent = "PAS 122";
  stat4.textContent = "AGI 140";
  stat5.textContent = "DEF 73";
  stat6.textContent = "PHY 130";
  img.src = "7.png";
});

bruyne.addEventListener("click", function () {
  text.textContent = "De Bruyne";
  price.textContent = "Price : 1.240.600.000 $";
  ovr.textContent = "115 CM";
  stat1.textContent = "PAC 121";
  stat2.textContent = "SHO 136";
  stat3.textContent = "PAS 155";
  stat4.textContent = "AGI 138";
  stat5.textContent = "DEF 105";
  stat6.textContent = "PHY 118";
  img.src = "2.png";
});

lewy.addEventListener("click", function () {
  text.textContent = "Lewandowski";
  price.textContent = "Price : 989.000.000 $";
  ovr.textContent = "115 ST";
  stat1.textContent = "PAC 124";
  stat2.textContent = "SHO 151";
  stat3.textContent = "PAS 117";
  stat4.textContent = "AGI 136";
  stat5.textContent = "DEF 78";
  stat6.textContent = "PHY 132";
  img.src = "4.png";
});

benzema.addEventListener("click", function () {
  text.textContent = "Benzema";
  price.textContent = "Price : 2.130.000.000 $";
  ovr.textContent = "93 ST";
  stat1.textContent = "PAC 79";
  stat2.textContent = "SHO 89";
  stat3.textContent = "PAS 84";
  stat4.textContent = "AGI 86";
  stat5.textContent = "DEF40";
  stat6.textContent = "PHY 77";
  img.src = "1.png";
});

kane.addEventListener("click", function () {
  text.textContent = "Kane";
  price.textContent = "Price : 2.140.000.000 $";
  ovr.textContent = "120 ST";
  stat1.textContent = "PAC 123";
  stat2.textContent = "SHO 158";
  stat3.textContent = "PAS 129";
  stat4.textContent = "AGI 138";
  stat5.textContent = "DEF 87";
  stat6.textContent = "PHY 135";
  img.src = "3.png";
});

salah.addEventListener("click", function () {
  text.textContent = "Salah";
  price.textContent = "Price : 558.000.000 $";
  ovr.textContent = "114 RW";
  stat1.textContent = "PAC 146";
  stat2.textContent = "SHO 148";
  stat3.textContent = "PAS 134";
  stat4.textContent = "AGI 149";
  stat5.textContent = "DEF 70";
  stat6.textContent = "PHY 106";
  img.src = "8.png";
});

dijk.addEventListener("click", function () {
  text.textContent = "Van Dijk";
  price.textContent = "Price : 2.013.000.000 $";
  ovr.textContent = "92 CB";
  stat1.textContent = "PAC 77";
  stat2.textContent = "SHO 59";
  stat3.textContent = "PAS 72";
  stat4.textContent = "AGI 180";
  stat5.textContent = "DEF 93";
  stat6.textContent = "PHY 90";
  img.src = "9.png";
});

none.addEventListener("click", function () {
  text.textContent = "";
  price.textContent = "";
  ovr.textContent = "";
  stat1.textContent = "";
  stat2.textContent = "";
  stat3.textContent = "";
  stat4.textContent = "";
  stat5.textContent = "";
  stat6.textContent = "";
  img.src = "";
});

function init() {
  const ul = document.getElementById("shuffle-list");
  const items = Array.from(ul.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  items.forEach((item) => {
    ul.appendChild(item);
  });
}

init();

function mix() {
    init();
}