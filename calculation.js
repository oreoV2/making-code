var total_cost, concert, ticket_amount, ticket_price;
var database = firebase.database();
var ticketsRef = database.ref('tickets');

function setBooking() {
    ticket_amount = document.getElementById("ticket_qauntity").value;
    var booking_fee = 10;
    if (ticket_amount < 1 || ticket_amount > 8) {
        document.getElementById("5A").innerHTML = "cant have less than 1 or more than 8 tickets*";
    } else {
        document.getElementById("5A"),innerHTML = "";
        concert = document.getElementById("concert_select").value;
        var seat_type = document.getElementsByClassName("seat_type");
        ticket_price = this.dataset.price;
        total_cost = Number(ticket_amount * ticket_price + booking_fee);
        document.getElementById("tickets").innerHTML = ticket_amount;
        document.getElementById("concert").innerHTML = concert;
        document.getElementById("ticket_individual_price").innerHTML = ticket_price;
        document.getElementById("total_cost").innerHTML = total_cost;
    }
}

function validate() {
    var contact = document.getElementsByClassName("contact_info");
    var check = 0;
    for (var i = 0; i < contact.length; i++) {
        var number = contact[i].getAttribute("data-number");
        var output = document.getElementById(number + "A");

        if (contact[i].checkValidity() && ! (contact[i] = " ")) {
            console.log(contact[i].value);
            output.innerHTML = "";
            check++;
            console.log(check);
        } else {
            output.innerHTML = contact[i].getAttribute("data-error");
        }
        if (check == 4) {
            pushData;
        }
    }
}

function pushData() {
    alert("in push data function");
    var data = {
        concert:concert,
        totalCost:total_cost,
        quantitiy:ticket_amount,
        pricePerTicket:ticket_price
    }
    alert("data should now be updated!")
    ticketsRef.push(data);
}
var seat = document.getElementsByClassName("seat_type");
for (var i = 0; i < seat.length; i++) {
    seat[i].addEventListener('click', setBooking);
}