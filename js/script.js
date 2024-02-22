
 document.addEventListener('DOMContentLoaded', function () {
    const seatButtons = document.querySelectorAll('.seatNumber');
    let count = 40;
    let countTwo = 0;
    const selectedSeats = new Set();
    
    seatButtons.forEach(function (seatButton) {
        seatButton.addEventListener('click', function () {
            const seatNumber = this.textContent;
            if (!selectedSeats.has(seatNumber) && selectedSeats.size < 4) {
                selectedSeats.add(seatNumber);
                count = count - 1;
                countTwo = countTwo + 1;
                setInnerText("seat_left", count);
                setInnerText("TotalSeat", countTwo);
                this.style.backgroundColor = '#1DD100';
                this.disabled = true;
            } else if (selectedSeats.size >= 4) {
                alert("You can only select up to 4 seats.");
            } else {
                alert("This seat is already selected!");
            }
        });
    });
});
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}  
