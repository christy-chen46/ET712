
const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white"];
let currentColor = "";

const colorBox = document.getElementById("colorBox");
const nextBtn = document.getElementById("colorBtn");
const checkBtn = document.getElementById("checkColor");
const input = document.getElementById("colorInput");
const result = document.getElementById("colorResult");

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function setNewColor() {
    currentColor = getRandomColor();
    colorBox.style.backgroundColor = currentColor;
    result.textContent = "";
    input.value = "";
}

nextBtn.onclick = setNewColor;

checkBtn.onclick = function () {
    const userAnswer = input.value.toLowerCase().trim();

    if (userAnswer === currentColor) {
        result.textContent = "Correct! 🎉";
    } else {
        result.textContent = "Try again!";
    }
};

// Start with a color on page load
setNewColor();

let appleCount = 0;

const appleContainer = document.getElementById("appleContainer");
const newApplesBtn = document.getElementById("newApples");
const appleInput = document.getElementById("appleInput");
const checkApplesBtn = document.getElementById("checkApples");
const appleResult = document.getElementById("appleResult");

function generateApples() {
    appleContainer.innerHTML = "";
    appleCount = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < appleCount; i++) {
        appleContainer.innerHTML += "🍎 ";
    }

    appleInput.value = "";
    appleResult.textContent = "";
}

newApplesBtn.onclick = generateApples;

checkApplesBtn.onclick = function () {
    if (parseInt(appleInput.value) === appleCount) {
        appleResult.textContent = "Correct! 🎉";
    } else {
        appleResult.textContent = "Try again!";
    }
};

generateApples();

const shapes = [
    { symbol: "◯", name: "circle" },
    { symbol: "⬛", name: "square" },
    { symbol: "🔺", name: "triangle" },
    { symbol: "⭐", name: "star" },
    { symbol: "❤️", name: "heart" },
    { symbol: "🔷", name: "diamond" },
    { symbol: "⬜", name: "rectangle" },
    { symbol: "⬣", name: "hexagon" },
    { symbol: "🌙", name: "moon" },
    { symbol: "🔻", name: "triangle" }
];

let currentShape = "";

const shapeContainer = document.getElementById("shapeContainer");
const newShapeBtn = document.getElementById("newShape");
const shapeInput = document.getElementById("shapeInput");
const checkShapeBtn = document.getElementById("checkShape");
const shapeResult = document.getElementById("shapeResult");

function generateShape() {
    const random = shapes[Math.floor(Math.random() * shapes.length)];
    currentShape = random.name;
    shapeContainer.textContent = random.symbol;

    shapeInput.value = "";
    shapeResult.textContent = "";
}

newShapeBtn.onclick = generateShape;

checkShapeBtn.onclick = function () {
    if (shapeInput.value.toLowerCase().trim() === currentShape) {
        shapeResult.textContent = "Correct! 🎉";
    } else {
        shapeResult.textContent = "Try again!";
    }
};

generateShape();

const animals = [
    { emoji: "🐶", name: "dog" },
    { emoji: "🐱", name: "cat" },
    { emoji: "🐸", name: "frog" },
    { emoji: "🐵", name: "monkey" },
    { emoji: "🦁", name: "lion" },
    { emoji: "🐯", name: "tiger" },
    { emoji: "🐰", name: "rabbit" },
    { emoji: "🐻", name: "bear" },
    { emoji: "🐼", name: "panda" },
    { emoji: "🐷", name: "pig" }
];

let currentAnimal = "";

const animalContainer = document.getElementById("animalContainer");
const newAnimalBtn = document.getElementById("newAnimal");
const animalInput = document.getElementById("animalInput");
const checkAnimalBtn = document.getElementById("checkAnimal");
const animalResult = document.getElementById("animalResult");

function generateAnimal() {
    const random = animals[Math.floor(Math.random() * animals.length)];
    currentAnimal = random.name;
    animalContainer.textContent = random.emoji;

    animalInput.value = "";
    animalResult.textContent = "";
}

newAnimalBtn.onclick = generateAnimal;

checkAnimalBtn.onclick = function () {
    if (animalInput.value.toLowerCase().trim() === currentAnimal) {
        animalResult.textContent = "Correct! 🎉";
    } else {
        animalResult.textContent = "Try again!";
    }
};

generateAnimal();
