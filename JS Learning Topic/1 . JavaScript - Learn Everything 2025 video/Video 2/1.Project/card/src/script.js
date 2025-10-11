const card = [
  {
    title: "Silent Forest",
    description: "Nature whispers peace through calm winds, green leaves, and sunlight dancing on hidden forest paths.",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Ocean Dreams",
    description: "Waves crash softly as the sea sings stories under the endless blue sky of calm serenity.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Golden Sunrise",
    description: "Morning light warms the mountains, spreading hope and color across the quiet face of nature.",
    url: "https://images.unsplash.com/photo-1745750747043-da33e463f361?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Bloom Magic",
    description: "Every flower opens like poetry, blending color and fragrance in perfect natural harmony.",
    url: "https://images.unsplash.com/photo-1744872665943-fd335d371059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
  },

  {
    title: "Wild Harmony",
    description: "In untouched forests, life flows freely, and every sound feels like part of nature’s rhythm.",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Sky Melody",
    description: "Clouds drift through dawn’s colors, singing soft songs of freedom, calm, and quiet wonder.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Green Escape",
    description: "Leaves sway in cool winds, calling your soul to breathe, rest, and rediscover natural peace.",
    url: "https://images.unsplash.com/photo-1759831367318-522e3012e0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Pure Earth",
    description: "Beneath our feet, soil breathes life, nurturing every color, scent, and seed of creation.",
    url: "https://images.unsplash.com/photo-1757642520317-68fca25c0624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Star Silence",
    description: "Under vast skies, stars shimmer gently, whispering dreams of endless beauty and cosmic calm.",
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop&q=60"
  }
];

const div = document.querySelector("#main")
const input = document.querySelector("input")
const errDiv = document.querySelector("#err-div")


input.addEventListener("input", () => {

  const newCard = card.filter(arr => {
    return arr.title.toLowerCase().startsWith(input.value.trim().toLowerCase());
  });
  if (newCard.length === 0) {

    if (errDiv.innerHTML.trim() === "") {
      errFunc();
    }
    div.innerHTML = '';

  } else {
    div.innerHTML = ''
    newCard.forEach(showCard);
    errDiv.innerHTML = " "
  }
  // console.log(newCard.length)


})


card.forEach(showCard);


function showCard(arr) {
  const div2 = document.createElement("div");
  div2.className = "relative h-[20rem] w-[15rem] bg-cover bg-center ')] rounded-lg overflow-hidden";
  div2.style.backgroundImage = `url(${arr.url})`
  // console.log(arr.url)

  const h1 = document.createElement("h1");
  h1.className = "absolute mt-[12rem] w-full  text-white text-2xl font-bold text-center";
  h1.textContent = arr.title;

  const p = document.createElement("p");
  p.className = "absolute mt-[14rem] w-full leading-tight text-white  text-center p-2";
  p.textContent = arr.description;
  // console.log(arr.description)


  div2.append(h1, p);
  main.appendChild(div2);
}

function errFunc() {
  const smsH1 = document.createElement("h1")
  smsH1.className = "text-red-600 font-bold text-4xl bg-amber-500 p-4 rounded-2xl";
  smsH1.textContent = "Card Not Found";

  errDiv.appendChild(smsH1)
}