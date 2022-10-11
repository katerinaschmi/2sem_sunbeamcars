const carname = sessionStorage.getItem("carname")
const pickupdate = sessionStorage.getItem("arrival")
const handindate = sessionStorage.getItem("departure")
const rentaldays = sessionStorage.getItem("days")
const rentalcost = sessionStorage.getItem("price")
const total = sessionStorage.getItem("total")
const accessoriescost = sessionStorage.getItem("accessoriescost")
const accessories = JSON.parse(sessionStorage.getItem("goods"))
const firstname = sessionStorage.getItem("firstname");
const lastname = sessionStorage.getItem("lastname");
const streetname = sessionStorage.getItem("streetname");
const numberfloor = sessionStorage.getItem("numberfloor");
const postalcode = sessionStorage.getItem("postalcode");



let template = `
<div class="info3">
<h2 class="infoheading2">Rental information</h2>
<div class="totalinfo2">
<p>ALL INCLUSIVE:</p>
<p class="total_bold">TOTAL: ${total}</p>
<p>incl. VAT</p>
</div>
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



const output = document.getElementById("output");
output.insertAdjacentHTML("beforeend", template);

let formtemplate = `
<div class="confirmation">
<p class="thxheading">Thanks! We will have the car ready for you!</p><br>
<current-time class="timeanddate"></current-time><br>
<p class="sumuptext">First name:<div class="boldsumup"> ${firstname}</div></p>
<p class="sumuptext">Last name:<div class="boldsumup"> ${lastname}</div></p>
<p class="sumuptext">Address:<div class="boldsumup"> ${streetname} ${numberfloor}</div></p>
<p class="sumuptext">Postal code and city:<div class="boldsumup"> ${postalcode}</div></p>
<button onclick="window.print()" class="printbutton">Print</button>
</div>
`

const formoutput = document.getElementById("formoutput");
formoutput.insertAdjacentHTML("beforeend", formtemplate);