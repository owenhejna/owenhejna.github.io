document.addEventListener("DOMContentLoaded", () => {
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  const sightingsContainer = document.getElementById("sightings");

  // ---- Sort by date descending ----
  const sightings = Array.from(sightingsContainer.children);
  sightings.sort((a, b) => {
    return new Date(b.dataset.date) - new Date(a.dataset.date);
  });
  sightings.forEach(sighting => sightingsContainer.appendChild(sighting));

  // ---- Set initial view to grid ----
  sightingsContainer.classList.remove("list-view");
  sightingsContainer.classList.add("grid-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");

  // ---- Toggle buttons ----
  gridBtn.addEventListener("click", () => {
    sightingsContainer.classList.add("grid-view");
    sightingsContainer.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    sightingsContainer.classList.add("list-view");
    sightingsContainer.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
});


// Select modal elements
const modal = document.getElementById("sightingModal");
const modalTitle = document.getElementById("modal-title");
const modalScientific = document.getElementById("modal-scientific-name");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Example data for each sighting
const sightingData = {
  "Ferruginous Pygmy Owl": {
    scientific: "Glaucidium brasilianum",
    description: "Found these diurnal cuties while on a morning walk in Tulum, Mexico. Quite the personality on these two!",
    img: "../photos/ferriginouspygmyowl.png"
  },
  "Snowy Owl": {
    scientific: "Bubo scandiacus",
    description: "Caught the famous Montrose snowy owls before work one day! Sorry for the horrendous photo!",
    img: "../photos/snowyowl.png"
  },
  "Greater Roadrunner": {
    scientific: "Geococcyx californianus",
    description: "This guy was running around a canyon in Tuscon, seemingly unbothered by human presence.",
    img: "../photos/roadrunner.png"
  },
  "Moose": {
    scientific: "Alces alces",
    description: "Spotted outside a gas station in Jackson, WY. Holy smokes are they huge...",
    img: "../photos/moose.png"
  },
  "Greater White-fronted Goose": {
    scientific: "Anser albifrons",
    description: "I saw this goose in the parking lot on the way into work at the Lincoln Park Zoo. Didn't have to try too hard for this guy!",
    img: "../photos/greaterwhitefrontedgoose.png"
  },
  "Common Potoo": {
    scientific: "Nyctibius griseus",
    description: "Saw this guy on the side of the road in rural Costa Rica. Hard to not mistake it for just another fence post.",
    img: "../photos/potoo.png"
  },
  "Lesson's Motmot": {
    scientific: "Momotus lessonii",
    description: "Found this magnificent bird in some jungle near where we were staying in Costa Rica. One of my favorite bird sightings of all time.",
    img: "../photos/motmot.png"
  },
    "American Bison": {
    scientific: "Bison bison",
    description: "A massive bull grazing in Yellowstone during a late winter trip. Nothing like seeing these giants where they truly belong.",
    img: "../photos/Bison bison.png"
  },

  "Elk": {
    scientific: "Cervus canadensis",
    description: "A small herd was hanging out near a pull-off in Yellowstone. Super vocal that morning and totally unfazed by visitors.",
    img: "../photos/elk.png"
  },

  "American Bittern": {
    scientific: "Botaurus lentiginosus",
    description: "Finally got eyes on this secretive marsh bird at Montrose Point. It froze perfectly still like it was trying to become a reed.",
    img: "../photos/bittern.png"
  },

  "Egyptian Goose": {
    scientific: "Alopochen aegyptiaca",
    description: "A colorful pair lounging on a canal in Amsterdam. Not native, but surprisingly common—absolute chaos birds.",
    img: "../photos/egyptiangeese.png"
  },

  "Long-eared Owl": {
    scientific: "Asio otus",
    description: "This one was roosting along a quiet trail in Chicago. I nearly walked past it before noticing the tall ear tufts.",
    img: "../photos/longearedowl.png"
  },

  "Pileated Woodpecker": {
    scientific: "Dryocopus pileatus",
    description: "I heard the loud drumming before I saw it. Caught this one working a fallen log in northern Michigan. Jurassic Park energy.",
    img: "../photos/pilleated.png"
  }
};

// Open modal on card click
document.querySelectorAll(".sighting").forEach(card => {
  card.addEventListener("click", () => {
    const speciesName = card.querySelector(".info-text").innerText;
    const data = sightingData[speciesName];

    modalTitle.innerText = speciesName;
    modalScientific.innerHTML = `<em>${data.scientific}</em>`;
    modalImg.src = data.img;
    modalDesc.innerText = data.description;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Zoom image on click
modalImg.addEventListener("click", () => {
  modalImg.classList.toggle("zoomed");
});

