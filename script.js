document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mendapatkan nilai dari input
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    // Memastikan kedua input adalah bilangan bulat
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').textContent = 'Masukkan bilangan bulat yang valid!';
        return;
    }

    // Menjumlahkan kedua bilangan
    const result = number1 + number2;

    // Menampilkan hasil
    document.getElementById('result').textContent = result;
});