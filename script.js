const container = document.getElementById("container");
const btn = document.getElementById("btn");

const renderData = (data = {}) => {
    const container = document.getElementById('container');

    container.innerHTML = `
        <h2>Ответ API:</h2>
        <b>${data.fact}</b>
    `;
};

const getData = () => {
    fetch('https://catfact.ninja/fact', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(response => renderData(response))
        .catch(err => console.log(err));
};

getData();


btn.addEventListener("click", getData);