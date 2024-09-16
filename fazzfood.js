function fazzfood (harga, voucher, jarak, pajak) {
    console.log(`Harga : ${harga}`);
    let potongan = 0
    let ongkir = 5000
    let tax = 0

    if (voucher === "FAZZFOOD50") {
        if (harga < 50000) {
            potongan = 0
        }
        else {
            potongan = harga * 0.5;
            if (potongan > 50000) {
                potongan = 50000
            } 
        }
    } else if (voucher === "DITRAKTIR60") {
        if (harga < 25000) {
            potongan = 0
        }
        else {
            potongan = harga * 0.6;
            if (potongan > 30000) {
                potongan = 30000
            }
        }
    } console.log(`Potongan : ${potongan}`);

    if (jarak > 2) {
        ongkir = 5000 + (jarak - 2) * 3000;
    } console.log(`Biaya antar : ${ongkir}`);
    
    const hargaOrder = harga - potongan
    if (pajak = true) {
        tax = hargaOrder * 0.05;      
    } console.log(`Pajak : ${tax}`);

    const total = hargaOrder + ongkir + tax;
    console.log(`Subtotal : ${total}`);
}

fazzfood(25000,"DITRAKTIR60",5,true)