(() => {
  // src/document/elements.ts
  var searchInput = document.getElementById("search");
  var listContainer = document.getElementById("list");
  var buttonPeoples = document.getElementById("btn-peoples");
  var buttonFilms = document.getElementById("btn-films");
  var buttonStarships = document.getElementById("btn-starships");
  var buttonVehicles = document.getElementById("btn-vehicles");
  var buttonSpecies = document.getElementById("btn-species");
  var buttonPlanets = document.getElementById("btn-planets");
  var elements = {
    searchInput,
    listContainer,
    buttonPeoples,
    buttonFilms,
    buttonStarships,
    buttonVehicles,
    buttonSpecies,
    buttonPlanets
  };
  var elements_default = elements;

  // src/api/values.ts
  var getFromAPI = async (path2) => {
    const data = await fetch(path2);
    const result = await data.json();
    return result;
  };
  var values = {
    peoples: getFromAPI("/peoples"),
    films: getFromAPI("/films"),
    starships: getFromAPI("/starships"),
    vehicles: getFromAPI("/vehicles"),
    species: getFromAPI("/species"),
    planets: getFromAPI("/planets")
  };
  var values_default = values;

  // src/api/keys.ts
  var getKeys = async (method) => {
    const limitIndex = () => {
      if (method === "peoples")
        return 8;
      else if (method === "films")
        return 5;
      else if (method === "starships")
        return 13;
      else if (method === "vehicles")
        return 11;
      else if (method === "species")
        return 10;
      else
        return 9;
    };
    const [response] = await values_default[method];
    const result = await Object.keys(response);
    const keys2 = result.splice(0, limitIndex());
    return keys2;
  };
  var keys = {
    peoples: getKeys("peoples"),
    films: getKeys("films"),
    starships: getKeys("starships"),
    vehicles: getKeys("vehicles"),
    species: getKeys("species"),
    planets: getKeys("planets")
  };
  var keys_default = keys;

  // src/document/table/columns.ts
  var getColumns = async (info) => {
    const data = await keys_default[info];
    const columns = data.map((_, i) => `<th>${data[i]}</th>`);
    const stringColumns = columns + "";
    const htmlColumns = `<tr>${stringColumns.replace(/[,]/g, "")}</tr>`;
    return htmlColumns;
  };
  var columns_default = getColumns;

  // src/document/table/rows.ts
  var getRows = async (info) => {
    const data = await values_default[info];
    const rows = data.map((_, i) => {
      if (info === "peoples") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].height}</td>
            <td>${data[i].mass}</td>
            <td>${data[i].hair_color}</td>
            <td>${data[i].skin_color}</td>
            <td>${data[i].eye_color}</td>
            <td>${data[i].birth_year}</td>
            <td>${data[i].gender}</td>
          </tr>
        `;
        }
      } else if (info === "films") {
        if (data[i].title) {
          return `
          <tr>
            <td>${data[i].title}</td>
            <td>${data[i].episode_id}</td>
            <td>${data[i].opening_crawl}</td>
            <td>${data[i].director}</td>
            <td>${data[i].producer}</td>
          </tr>
        `;
        }
      } else if (info === "starships") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].hyperdrive_rating}</td>
            <td>${data[i].MGLT}</td>
            <td>${data[i].starship_class}</td>
          </tr> 
        `;
        }
      } else if (info === "vehicles") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].vehicle_class}</td>
          </tr> 
        `;
        }
      } else if (info === "species") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].classification}</td>
            <td>${data[i].designation}</td>
            <td>${data[i].average_height}</td>
            <td>${data[i].skin_colors}</td>
            <td>${data[i].hair_colors}</td>
            <td>${data[i].eye_colors}</td>
            <td>${data[i].average_lifespan}</td>
            <td>${data[i].homeworld}</td>
            <td>${data[i].language}</td>
          </tr> 
        `;
        }
      } else if (info === "planets") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].rotation_period}</td>
            <td>${data[i].orbital_period}</td>
            <td>${data[i].diameter}</td>
            <td>${data[i].climate}</td>
            <td>${data[i].gravity}</td>
            <td>${data[i].terrain}</td>
            <td>${data[i].surface_water}</td>
            <td>${data[i].population}</td>
          </tr> 
        `;
        }
      }
    });
    const stringRows = rows + "";
    const htmlRows = stringRows.replace(/[,]/g, "");
    return htmlRows;
  };
  var rows_default = getRows;

  // src/document/insertDataIntoTheTable.ts
  var insertDataIntoTheTable = async (path2) => {
    elements_default.listContainer.innerHTML = `
    <table>
      ${await columns_default(path2)}
      ${await rows_default(path2)}
    </table>
  `;
  };
  var insertDataIntoTheTable_default = insertDataIntoTheTable;

  // src/api/search.ts
  var search = async (path2, search2) => {
    let currentPath = path2;
    if (path2 === "people") {
      currentPath = "peoples";
    }
    const response = await fetch("search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        path: path2,
        searchText: search2
      })
    });
    const data = response.json();
    return data;
  };
  var search_default = search;

  // src/document/table/searchRows.ts
  var searchRows = async (path2, searchText) => {
    const data = await search_default(path2, searchText);
    const rows = data.map((_, i) => {
      if (path2 === "people") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].height}</td>
            <td>${data[i].mass}</td>
            <td>${data[i].hair_color}</td>
            <td>${data[i].skin_color}</td>
            <td>${data[i].eye_color}</td>
            <td>${data[i].birth_year}</td>
            <td>${data[i].gender}</td>
          </tr>
        `;
        }
      } else if (path2 === "films") {
        if (data[i].title) {
          return `
          <tr>
            <td>${data[i].title}</td>
            <td>${data[i].episode_id}</td>
            <td>${data[i].opening_crawl}</td>
            <td>${data[i].director}</td>
            <td>${data[i].producer}</td>
          </tr>
        `;
        }
      } else if (path2 === "starships") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].hyperdrive_rating}</td>
            <td>${data[i].MGLT}</td>
            <td>${data[i].starship_class}</td>
          </tr> 
        `;
        }
      } else if (path2 === "vehicles") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].vehicle_class}</td>
          </tr> 
        `;
        }
      } else if (path2 === "species") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].classification}</td>
            <td>${data[i].designation}</td>
            <td>${data[i].average_height}</td>
            <td>${data[i].skin_colors}</td>
            <td>${data[i].hair_colors}</td>
            <td>${data[i].eye_colors}</td>
            <td>${data[i].average_lifespan}</td>
            <td>${data[i].homeworld}</td>
            <td>${data[i].language}</td>
          </tr> 
        `;
        }
      } else if (path2 === "planets") {
        if (data[i].name) {
          return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].rotation_period}</td>
            <td>${data[i].orbital_period}</td>
            <td>${data[i].diameter}</td>
            <td>${data[i].climate}</td>
            <td>${data[i].gravity}</td>
            <td>${data[i].terrain}</td>
            <td>${data[i].surface_water}</td>
            <td>${data[i].population}</td>
          </tr> 
        `;
        }
      }
    });
    const stringRows = rows + "";
    const htmlRows = stringRows.replace(/[,]/g, "");
    if (path2 === "people") {
      path2 = "peoples";
    }
    elements_default.listContainer.innerHTML = `
    <table>
      ${await columns_default(path2)}
      ${htmlRows}
    </table>
  `;
  };
  var searchRows_default = searchRows;

  // src/document/events.ts
  var path = "people";
  var events = () => {
    elements_default.searchInput.oninput = function() {
      const value = this.value;
      if (value) {
        searchRows_default(path, value);
      } else {
        if (path === "people") {
          insertDataIntoTheTable_default("peoples");
          return;
        }
        insertDataIntoTheTable_default(path);
      }
    };
    elements_default.buttonPeoples.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("peoples");
      path = "people";
    });
    elements_default.buttonFilms.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("films");
      path = "films";
    });
    elements_default.buttonStarships.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("starships");
      path = "starships";
    });
    elements_default.buttonVehicles.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("vehicles");
      path = "vehicles";
    });
    elements_default.buttonSpecies.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("species");
      path = "species";
    });
    elements_default.buttonPlanets.addEventListener("click", () => {
      elements_default.searchInput.value = "";
      insertDataIntoTheTable_default("planets");
      path = "planets";
    });
  };
  var events_default = events;

  // src/index.ts
  (function init() {
    insertDataIntoTheTable_default("peoples");
    events_default();
  })();
})();
