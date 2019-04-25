export function getNotification() {
    if (localStorage["checked"] == "false" || !localStorage["checked"]) {
        setTimeout(() => notification.classList.remove("hide"), 1000);
    }

    
let removeButton = document.querySelector("#remove-button")[0];
let notification = document.querySelector("#notification");
let checkBox = document.querySelector("#disable-checkbox");

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        localStorage.setItem("checked", "true") 
    } else {
        localStorage.removeItem("checked");
    }
    
})

removeButton.addEventListener("click", function() {
    this.parentNode.classList.add("hide");
})
}