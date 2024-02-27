const selectingSeatButton = document.getElementsByClassName('seatNumber');
let count = 0;
let leftCount = 40;
for (const SeatButton of selectingSeatButton) {
    SeatButton.addEventListener("click", function (e) {
        count = count + 1;
        leftCount = leftCount - 1;
        setinnertext("Zero", count);
        setinnertext("seat_left", leftCount);
        
    })
}
function setinnertext(id, value) {
    document.getElementById(id).innerText = value;
}





































function getSelectedSeat(id) {
    const leftSeat = document.getElementById(id).innerText;
    const result = parseInt(leftSeat);
    return result;
}
let totalPrice = 0;
const seatNumber = document.getElementsByClassName('seatNumber')
for (const btn of seatNumber) {
    btn.addEventListener('click', function (event) {
        const seat = event.target.parentNode.childNodes[3].innerText;
        const selectedSeat = document.getElementById('selected_seat');
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seat;
        p2.textContent = "Economy";
        p3.textContent = "550";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedSeat.append(div);
    })
}
