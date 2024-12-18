if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then((registration) => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
    });
}

function loadRecipe(title, category, ingredients, instructions) {
    const recipeDisplay = document.getElementById('recipe-display');
    recipeDisplay.innerHTML = `
        <h2>${title}</h2>
        <h3>${category}</h3>
        <h4>Ingredienti:</h4>
        <p>${ingredients}</p>
        <h4>Istruzioni:</h4>
        <p>${instructions}</p>
    `;
}
