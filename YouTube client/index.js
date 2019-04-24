const player = document.getElementById("#player");
const APIKEY = "AIzaSyADcQR-taqJA3LHlG0ta4beH0-U5vswwUg";
const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=";
const launchSearchButton = document.getElementById('startSearch');
const firstBlock = document.querySelector("#first")
let testP = document.querySelector("#test")


const dataOutput = (obj) => {
    console.log(obj);
    console.log(obj.items);
}


let searchFieldvalue = "JS";
const newFunc = () => {
    return new Promise(
        (resolve, reject) => {

            console.log(searchFieldvalue);
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchFieldvalue}&key=${APIKEY}`, true);
            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        }
    )
}

launchSearchButton.addEventListener("click", function startSearch() {
    searchFieldvalue = document.getElementById("searchField").value;
    console.log(searchFieldvalue);
    newFunc()
        .then(
            response => dataOutput( JSON.parse(response) ),
            error => console.log(`Rejected: ${error}`),
        )
});
