function CreateQR() {
    let inputValue = document.getElementById('input-field');
    var amount = inputValue.value;
    var ref = "MobilePay Voetbalavond";

    if (amount && ref) {
        var chl = "BCD%0A002%0A1%0ASCT%0A%0AOC%20Taborschool%20Maria-Aalter%0ABE75104346164351%0A" + amount + "%0A%0A" + ref + "%0A%0A";    
        var url = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&qzone=2&data=" + chl;
        document.getElementById('qr').src = url;
        inputValue.setAttribute('readonly', true);
        inputValue.style.background = 'darkblue';
        inputValue.style.color = 'white';
        document.getElementById('qr').style.display = 'flex';
        document.getElementById('submit-button').style.display = 'none';
    }
}

function CreatePQR(am) {
    var scr = 'content/pcqr' + am + '.svg';
    document.getElementById('img-pcqr').src = scr;
    document.getElementById('container1').style.display = 'flex';
    document.getElementById('cell-6').style.display = 'none';
    document.getElementById('cell-7').style.display = 'flex';
    let bedrag = "BEDRAG: &#8364; " + am;
    document.getElementById('bedrag').innerHTML = bedrag;
}

document.getElementById('cell-1').addEventListener('click', function() {
    document.getElementById('cell-4').style.background = 'darkblue';
    document.getElementById('table-1').style.display = 'none';
    document.getElementById('table-2').style.display = 'flex';
});

document.getElementById('cell-2').addEventListener('click', function() {
    document.getElementById('cell-5').style.background = 'deeppink';
    document.getElementById('table-1').style.display = 'none';
    document.getElementById('table-3').style.display = 'flex';
});

document.getElementById('input-field').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        CreateQR();      
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    CreateQR();
});

document.getElementById('reset-button').addEventListener('click', function() {
    location.reload();
});

document.getElementById('reset-button1').addEventListener('click', function() {
    location.reload();
});

document.getElementById('reset-button2').addEventListener('click', function() {
    location.reload();
});

const amounts = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
amounts.forEach(amount => {
    document.getElementById('pcq' + amount).addEventListener('click', function() {
        CreatePQR(amount);
    });
});
