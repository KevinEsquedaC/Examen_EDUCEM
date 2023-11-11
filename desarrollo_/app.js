document.addEventListener("DOMContentLoaded", function () {
  fetchSpaceXLaunches();
  fetchSpaceXRockets();
});

function fetchSpaceXLaunches() {
  fetch("https://api.spacexdata.com/v4/launches")
    .then(response => response.json())
    .then(data => displayLaunches(data))
    .catch(error => console.error('Error al recuperar los lanzamientos de SpaceX:', error));
}

function fetchSpaceXRockets() {
  fetch("https://api.spacexdata.com/v4/rockets")
    .then(response => response.json())
    .then(data => displayRockets(data))
    .catch(error => console.error('Error al recuperar los cohetes de SpaceX:', error));
}

function displayRockets(rockets) {
  const rocketsList = document.getElementById("rocketsList");

  const rocketsRow = document.createElement("div");
  rocketsRow.classList.add("row", "justify-content-center");

  rockets.forEach(rocket => {
    const rocketCard = document.createElement("div");
    rocketCard.classList.add("card", "mb-3", "col-sm-5");
    rocketCard.style.margin = "15px";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column", "align-items-center");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("text-center", "mb-3");

    const rocketImage = document.createElement("img");
    rocketImage.classList.add("card-image", "img-fluid");
    rocketImage.src = `${rocket.flickr_images}`;
    rocketImage.style.width = "500px";
    rocketImage.style.height = "400px";
    rocketImage.style.maxWidth = "100%";

    const rocketName = document.createElement("h5");
    rocketName.classList.add("card-title");
    rocketName.innerHTML = `${rocket.name}.<br>ID: ${rocket.id}`;

    const rocketDesc = document.createElement("p");
    rocketDesc.classList.add("card-text");
    rocketDesc.innerHTML = `Fecha primer vuelo: ${rocket.first_flight}.
                              <br>Costo por lanzamiento: $${rocket.cost_per_launch}.
                              <br>Altura: ${rocket.height.meters} m.
                              <br>Diametro: ${rocket.diameter.meters} m.
                              <br>Masa: ${rocket.mass.kg} kg.
                              <br>Descripción del cohete: ${rocket.description}`;

    imageContainer.appendChild(rocketImage);
    cardBody.appendChild(imageContainer);
    cardBody.appendChild(rocketName);
    cardBody.appendChild(rocketDesc);
    rocketCard.appendChild(cardBody);

    rocketsRow.appendChild(rocketCard); 
  });

  rocketsList.appendChild(rocketsRow);
}


function displayLaunches(launches) {
      const launchesList = document.getElementById("launchesList");
      const table = document.createElement("table");
      table.classList.add("table", "table-striped");
      const headerRow = table.createTHead().insertRow(0);
      const headers = ["ID", "Número de vuelo", "Nombre", "Fecha de lanzamiento", "Tiempo transcurrido desde el lanzamiento"];

      headers.forEach(headerText => {
        const header = document.createElement("th");
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
      });

      const tbody = table.createTBody();
      launches.forEach(launch => {
        const row = tbody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const actualDate = new Date();
        const timeSinceFL = actualDate - launch.date_utc;
        console.log(actualDate);
        console.log(launch.date_utc);
        console.log(timeSinceFL);

        cell1.textContent = `${launch.id}`;
        cell2.textContent = `${launch.flight_number}`;
        cell3.textContent = `${launch.name}`;
        cell4.textContent = `${launch.date_utc}`;
        cell5.textContent = `${launch.date_local}`;
      });

      launchesList.appendChild(table);
    }