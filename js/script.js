const selectingSeatButton = document.getElementsByClassName('seatNumber');
let count = 0;
let leftCount = 40;
for (const SeatButton of selectingSeatButton) {
    SeatButton.addEventListener("click", function (e) {
        this.style.backgroundColor = "#1DD100";
        if (count >= 4) {
            alert("You can only select up to four seats.");
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

        SetTotal("BDT", price);
        SetGrandTotal("GrandBDT", price);
        setinnertext("Zero", count);
        setinnertext("seat_left", leftCount);

    })
}
function setinnertext(id, value) {
    document.getElementById(id).innerText = value;
}

function SetTotal(id, value) {
    const BDT = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(BDT);
    const sum = convertedTotalCost + value;
    setinnertext('BDT', sum);
}
function SetGrandTotal(id, value) {
    const GrandBDT = document.getElementById(id).innerText;
    const convertedGrandBDT = parseInt(GrandBDT);
    const sum = convertedGrandBDT + value;
    setinnertext('GrandBDT', sum);
}
// function SetGrandTotal(id, value) {
//     const GrandBDT = document.getElementById(id).innerText;
//     let sum = parseInt(GrandBDT) + value;
//     const coupon = document.getElementById('cupon').value;
//     if (coupon === 'NEW15') {
//         sum = sum - (sum * 20 / 100);
//     }
//     setinnertext('GrandBDT', sum);
// }