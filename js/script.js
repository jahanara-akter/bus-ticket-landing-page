const selectingSeatButton = document.getElementsByClassName('seatNumber');
let count = 0;
let leftCount = 40;
for (const SeatButton of selectingSeatButton) {
    SeatButton.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "#1DD100";
        if (count >= 4) {
            alert("You can only select up to four seats.");
            e.target.style.backgroundColor = "#0307121A";
            return;
        }
        count = count + 1;
        leftCount = leftCount - 1;
        const SeatNames = e.target.innerText;
        const SeatAdd = document.getElementById('Seat-add');
        const p = document.createElement('p');
        p.innerText = SeatNames;
        SeatAdd.appendChild(p);

        const className = document.getElementById('class-name');
        const p1 = document.createElement('p');
        p1.innerText = "Economy";
        className.appendChild(p1);

        const seatPrice = document.getElementById('seat-price');
        const p2 = document.createElement('p');
        p2.innerText = "550";
        seatPrice.appendChild(p2);

        let price = 550;

        SetTotal(price);
        SetGrandTotal();
        setinnertext("Zero", count);
        setinnertext("seat_left", leftCount);

    })
}
function setinnertext(id, value) {
    document.getElementById(id).innerText = value;
}
function SetGrandTotal(status) {
    const BDT = getconvertedValue('BDT');
    if (status == undefined) {
        document.getElementById('GrandBDT').innerText = BDT;
    } else {
        const cupon = document.getElementById('cupon').value;
        if (cupon == "NEW15") {
            document.getElementById('form').style.display = 'none';
            const discountedPrice = BDT * 0.15;
            document.getElementById('GrandBDT').innerText = BDT - discountedPrice;
        } else {
            alert('Enter a valid cupon code');
        }
    }

}
function SetTotal(price) {
    const BDT = getconvertedValue('BDT');
    const convertedTotalCost = parseInt(price);
    const sum = BDT + convertedTotalCost;
    document.getElementById('BDT').innerText = sum;
}
function getconvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}