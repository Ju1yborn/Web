let data = [{

    "id": 1,

    "model": "7",

    "price": 1000,

    "power": 5,

    "description": "Кайф",

    "brandName": "Жига"

}, {

    "id": 2,

    "model": "m7",

    "price": 2250000,

    "power": 2000,

    "description": "Снята с продажи в феврале",

    "brandName": "БЕХА"

}]

for (let key in data) {
        let row = document.createElement('tr')
        row.innerHTML = `<td class="login">${data[key].id}</td>
                      <td class="login">${data[key].model}</td>
                      <td class="login">${data[key].price}</td>
                      <td class="login">${data[key].power}</td>
                      <td class="login">${data[key].description}</td>
                      <td class="login">${data[key].brandName}</td>
                     `
        document.querySelector('.car').appendChild(row)
    }