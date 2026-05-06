// =======================
// NAVIGATION
// =======================
function showSection(id) {
    document.querySelectorAll("main section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// =======================
// FEEDBACK POPUP (WIN / LOSE)
// =======================
const popup = document.getElementById("feedbackPopup");
const content = document.getElementById("feedbackContent");

function showFeedback(isCorrect) {
    popup.style.display = "block";

    if (isCorrect) {
        content.textContent = "🎉 Great Job!";
        content.className = "win";
    } else {
        content.textContent = "❌ Try Again!";
        content.className = "lose";
    }

    setTimeout(() => {
        popup.style.display = "none";
    }, 1000);
}


// =======================
// COLORS GAME (10 colors)
// =======================
const colors = [
    "red","blue","green","yellow","purple",
    "orange","pink","brown","black","white"
];

let correctColor;

function setColorGame() {
    correctColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("colorDisplay").style.backgroundColor = correctColor;

    let options = [correctColor];

    while (options.length < 4) {
        let rand = colors[Math.floor(Math.random() * colors.length)];
        if (!options.includes(rand)) options.push(rand);
    }

    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("colorChoices");
    container.innerHTML = "";

    options.forEach(color => {
        let btn = document.createElement("button");
        btn.textContent = color;

        // make button visible (FIX for white issue)
        btn.style.backgroundColor = color;

        if (color === "white" || color === "yellow" || color === "pink") {
            btn.style.color = "black";
        } else {
            btn.style.color = "white";
        }

        btn.onclick = () => {
            showFeedback(color === correctColor);

            if (color === correctColor) {
                setTimeout(setColorGame, 1000);
            }
        };

        container.appendChild(btn);
    });
}
setColorGame();


// =======================
// NUMBERS GAME
// =======================
let appleCount;

function generateApples() {
    appleCount = Math.floor(Math.random() * 10) + 1;

    document.getElementById("appleContainer").innerHTML =
        "🍎 ".repeat(appleCount);

    let options = [appleCount];

    while (options.length < 4) {
        let rand = Math.floor(Math.random() * 10) + 1;
        if (!options.includes(rand)) options.push(rand);
    }

    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("numberChoices");
    container.innerHTML = "";

    options.forEach(num => {
        let btn = document.createElement("button");
        btn.textContent = num;

        btn.onclick = () => {
            showFeedback(num === appleCount);

            if (num === appleCount) {
                setTimeout(generateApples, 1000);
            }
        };

        container.appendChild(btn);
    });
}
generateApples();


// =======================
// SHAPES GAME
// =======================
const shapes = [
    { symbol: "◯", name: "circle" },
    { symbol: "⬛", name: "square" },
    { symbol: "🔺", name: "triangle" },
    { symbol: "⭐", name: "star" }
];

let correctShape;

function setShapeGame() {
    let rand = shapes[Math.floor(Math.random() * shapes.length)];
    correctShape = rand.name;

    document.getElementById("shapeDisplay").textContent = rand.symbol;

    let options = [correctShape];

    while (options.length < 4) {
        let r = shapes[Math.floor(Math.random() * shapes.length)].name;
        if (!options.includes(r)) options.push(r);
    }

    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("shapeChoices");
    container.innerHTML = "";

    options.forEach(shape => {
        let btn = document.createElement("button");
        btn.textContent = shape;

        btn.onclick = () => {
            showFeedback(shape === correctShape);

            if (shape === correctShape) {
                setTimeout(setShapeGame, 1000);
            }
        };

        container.appendChild(btn);
    });
}
setShapeGame();


// =======================
// ANIMALS GAME
// =======================
const animals = [
    { emoji: "🐶", name: "dog" },
    { emoji: "🐱", name: "cat" },
    { emoji: "🐸", name: "frog" },
    { emoji: "🦁", name: "lion" }
];

let correctAnimal;

function setAnimalGame() {
    let rand = animals[Math.floor(Math.random() * animals.length)];
    correctAnimal = rand.name;

    document.getElementById("animalDisplay").textContent = rand.emoji;

    let options = [correctAnimal];

    while (options.length < 4) {
        let r = animals[Math.floor(Math.random() * animals.length)].name;
        if (!options.includes(r)) options.push(r);
    }

    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById("animalChoices");
    container.innerHTML = "";

    options.forEach(animal => {
        let btn = document.createElement("button");
        btn.textContent = animal;

        btn.onclick = () => {
            showFeedback(animal === correctAnimal);

            if (animal === correctAnimal) {
                setTimeout(setAnimalGame, 1000);
            }
        };

        container.appendChild(btn);
    });
}
setAnimalGame();


// =======================
// CLOSE POPUP ON CLICK
// =======================
document.getElementById("feedbackPopup").onclick = () => {
    popup.style.display = "none";
};