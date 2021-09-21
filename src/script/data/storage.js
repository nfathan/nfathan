
const CACHE_KEY = "daftarCustomerPia_history";

function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

function putHistory(data) {
    if(checkForStorage()) {
        let historyData = null;
        if(localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);

        // if(historyData.length > 5) {
        //     historyData.pop();
        // }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}
window.putHistory = putHistory;

function showHistory() {
    if(checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return[];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";
    
    for(let history of historyData) {
        let row = document.createElement('tr');
        // row.innerHTML = `<td> ${history.no} </td>`;
        row.innerHTML = `<td> ${history.customer} </td>`;
        row.innerHTML += `<td> ${history.rasa} </td>`;
        row.innerHTML += `<td> ${history.qty} </td>`;
        row.innerHTML += `<td id="tharga"> ${history.tHarga} </td>`;
        row.innerHTML += `<td> ${history.hariTgl} </td>`;
        row.innerHTML += `<td id="pdptnHarian">  </td>`;

        historyList.appendChild(row);
    } 
}
window.renderHistory = renderHistory;
renderHistory();
