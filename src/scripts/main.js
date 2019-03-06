const container = document.querySelector(".wishList");
const favItem = document.querySelector("#favItem");
const theStore = document.querySelector("#theStore");

document.querySelector("#saveItem").addEventListener("click", (event)=> {
    container.innerHTML += `I can buy ${favItem.value} at ${theStore.value}`
})

