const carname = sessionStorage.getItem("carname")
const pickupdate = sessionStorage.getItem("arrival")
const handindate = sessionStorage.getItem("departure")
const rentaldays = sessionStorage.getItem("days")
const rentalcost = sessionStorage.getItem("price")
const total = sessionStorage.getItem("total")
const accessoriescost = sessionStorage.getItem("accessoriescost")
const accessories = JSON.parse(sessionStorage.getItem("goods"))



let template = `
<div class="info2">
<h2 class="infoheading2">Rental information</h2>
<div class="totalinfo2">
<p>ALL INCLUSIVE:</p>
<p class="total_bold">TOTAL: ${total}</p>
<p>incl. VAT</p>
</div>
<br>
<p class="carnameinfo">${carname}</p>
<p class="infoparagraph">Pick-up date: ${pickupdate}</p>
<p class="infoparagraph">Return date: ${handindate}</p>
<p class="infoparagraph">Rental days: ${rentaldays}</p>
<p class="rentalcostinfo">Total car rental cost: ${rentalcost} kr.</p> 
<p class="infoparagraph">incl. VAT</p><br>
<p class="rentalcostinfo">Accessories:</p>
<ul>

`
for (let item of accessories) {
    item = item.substring(0, item.indexOf(`(`));
    template += `<li>${item}</li>`
}

template += `</ul>
<p class="infoparagraph">Accessories total: ${accessoriescost}</p>
<p class="infoparagraph">incl. VAT</p>
</div>`

fetch("https://dawa.aws.dk/postnumre")
.then(function(data) {
    return data.json()
})
.then(function (post) {
    //status, address
    const datalist = document.getElementById('codelist')
    const listofcities = post;

    for (city of listofcities) {
        datalist.insertAdjacentHTML("beforeend", `<option>${city.nr} ${city.navn}</option>`)
    }
})

const form = document.getElementById("form3");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const streetname = document.getElementById("streetname").value;
    const numberfloor = document.getElementById("numberfloor").value;
    const postalcode = document.getElementById("postalcode").value;
    const over18 = document.getElementById("over18").value;
    
    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("lastname", lastname);
    sessionStorage.setItem("streetname", streetname);
    sessionStorage.setItem("numberfloor", numberfloor);
    sessionStorage.setItem("postalcode", postalcode);
    sessionStorage.setItem("over18", over18);
    
    document.location.href = "receipt.html";
})



const output = document.getElementById("output");
output.insertAdjacentHTML("beforeend", template);