// DOM Selection
const selectEl = document.querySelector("select");
const carouselContainerEl = document.querySelector(".carousel-inner");

const BASE_URL = "https://dog.ceo/api/";

// === MARK: Fetch
// Gets the list of dog breeds from api
async function getDogsList() {
  try {
    const response = await fetch(`${BASE_URL}breeds/list/all`);
    const data = await response.json();
    return Object.keys(data.message);
  } catch (err) {
    console.log(err);
  }
}

// Gets list of 10 images on breed
async function getDogImages(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/images`);
    const data = await res.json();
    return data.message.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
}

// === MARK: Render
async function renderOptions() {
  const breedList = await getDogsList();

  for (breed of breedList) {
    // ek option element create karo
    const option = document.createElement("option");
    // option ke andar breed ka naam likho
    option.textContent = breed;
    // select ke andar render karao
    selectEl.appendChild(option);
  }
}

renderOptions();

function renderCarousel() {}
