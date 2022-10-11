let carlist = [];

fetch("https://katerinaschmi.github.io/carlist/data.json")
.then (function (data) {
    return data.json();
})
.then (function (post) {
    carlist = post
})

.catch (function (error) {
    output.innerHTML = "Service in unavailable"
})