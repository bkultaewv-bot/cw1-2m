const container = document.getElementById("container");
const button = document.getElementById("btn");

const getData = () => {
    fetch("https://catfact.ninja/fact", {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            container.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            container.textContent = "Ошибка загрузки данных.";
            console.log(error);
        });
};


getData();


button.addEventListener("click", getData);