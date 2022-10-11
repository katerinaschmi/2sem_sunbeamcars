const url = window.location.search
const urldata = new URLSearchParams(url)
const carname = urldata.get("carname")
const pickupdate = urldata.get("arrival")
const handindate = urldata.get("departure")
const rentaldays = urldata.get("days")
const rentalcost = parseFloat(urldata.get("price"))


const template = `
<div class="info">
<h2 class="infoheading">Well chosen!</h2>
<p class="carnameinfo">${carname}</p>
<p class="infoparagraph">Pick-up date: ${pickupdate}</p>
<p class="infoparagraph">Return date: ${handindate}</p>
<p class="infoparagraph">Rental days: ${rentaldays}</p>
<p class="rentalcostinfo">Rental cost: ${rentalcost} kr.</p> 
<p class="infoparagraph">incl. VAT</p>
</div>
`
let total = rentalcost; // Global variable, total starts at zero
        showTotal(); // Calls function showTotal to show current total

        // Event handler - check if checkbox is selected or not and 
        // adjust the total value accordingly
        function calculateTotal(checkbox, itemprice) {
            if (checkbox.checked === true) { // If the checkbox is seleted then ...
                total = Math.abs(total + parseFloat(itemprice));
            } else { // if it is not selected then ...
                total = Math.abs(total - parseFloat(itemprice));
            }
            showTotal();
        }

        // Shows total value on screen
        function showTotal() {
            const output = document.getElementById("totaloutput");
            output.innerText = `TOTAL: ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`;
        }

        const form = document.getElementById("form2");
        form.reset(); // Resets form every time page loads
        
        const checkboxes = document.getElementsByClassName("thebox"); //Build an object list with checkboxes
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let shoppinglist = []; // Define shopping list
            for (const checkbox of checkboxes) {
                if (checkbox.checked === true) { // If the item is selected ...
                    shoppinglist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); // add it to the shopping list.
                }
            }

            // Stores information in sessionstorage
            sessionStorage.setItem("goods", JSON.stringify(shoppinglist));
            sessionStorage.setItem("carname", carname);
            sessionStorage.setItem("arrival", pickupdate);
            sessionStorage.setItem("departure", handindate);
            sessionStorage.setItem("days", rentaldays);
            sessionStorage.setItem("price", rentalcost);
            sessionStorage.setItem("accessoriescost", total-rentalcost);
            sessionStorage.setItem("total", total.toLocaleString("da-DK", {style: "currency",currency: "DKK"}));

            location.href="customer.html"; // Redirect user to customer.html
        })



const output = document.getElementById("output");
output.insertAdjacentHTML("beforeend", template);