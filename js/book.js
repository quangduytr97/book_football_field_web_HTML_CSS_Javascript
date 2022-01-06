function kiemtra() {
    var dem = 0; //tao bien dem so loi
    //ten
    var ten = document.getElementById("ten").value.length;
    if (ten == 0) {
        document.getElementById("tbten").innerHTML = "Hãy điền tên của bạn.";
        dem++;
    } else if (ten > 50) {
        document.getElementById("tbten").innerHTML = "Tên không dài quá 50 kí tự.";
        dem++;
    } else {
        document.getElementById("tbten").innerHTML = "";
    }
    //sdt
    var sdt = document.getElementById("sdt").value.length;
    if (sdt == 0) {
        document.getElementById("tbsdt").innerHTML = "Hãy điền số điện thoại của bạn.";
        dem++;
    } else if (sdt > 50) {
        document.getElementById("tbsdt").innerHTML = "Số điện thoại không dài quá 50 kí tự.";
        dem++;
    } else {
        document.getElementById("tbsdt").innerHTML = "";
    }
    //khung gio
    var khunggio = document.getElementById("khunggio").value;
    if (khunggio == "macdinh") {
        document.getElementById("tbkhunggio").innerHTML = "Hãy chọn khung giờ muốn đặt sân.";
        dem++;
    } else {
        document.getElementById("tbkhunggio").innerHTML = "";
    }
    //so gio
    var sogio = document.getElementById("sogio").value;
    if (sogio.length == 0) {
        document.getElementById("tbsogio").innerHTML = "Hãy nhập số giờ muốn đặt sân.";
        dem++;
    } else if (isNaN(parseFloat(sogio)) || parseFloat(sogio) <= 0) {
        document.getElementById("tbsogio").innerHTML = "Chỉ được phép nhập số dương.";
        dem++;
    } else {
        document.getElementById("tbsogio").innerHTML = "";
    }
    //so nguoi
    var songuoi = document.getElementById("songuoi").value;
    if (songuoi.length == 0) {
        document.getElementById("tbsonguoi").innerHTML = "Hãy chọn số người chơi.";
        dem++;
    } else if (Number.isInteger(parseFloat(songuoi)) == false || parseFloat(songuoi) <= 0) {
        document.getElementById("tbsonguoi").innerHTML = "Hãy chọn số người chơi.";
        dem++;
    } else {
        document.getElementById("tbsonguoi").innerHTML = "";
    }
    //so doi
    var sodoi = document.getElementById("sodoi").value;
    if (sodoi.length == 0) {
        document.getElementById("tbsodoi").innerHTML = "Hãy nhập số đội chơi.";
        dem++;
    } else if (Number.isInteger(parseFloat(sodoi)) == false || parseFloat(sodoi) <= 0) {
        document.getElementById("tbsodoi").innerHTML = "Chỉ được phép nhập số nguyên dương.";
        dem++;
    } else {
        document.getElementById("tbsodoi").innerHTML = "";
    }
    return dem;
}

function tinhtien() {
    var n = kiemtra();
    //tinh tien
    if (n == 0) {
        //doi kieu so
        var khunggio = parseFloat(document.getElementById("khunggio").value);
        var sogio = parseFloat(document.getElementById("sogio").value);
        var sodoi = parseFloat(document.getElementById("sodoi").value);
        var tongtien = khunggio * sogio;
        if (document.getElementById("dichvu2").checked) {
            var tiendongphuc = parseFloat(document.getElementById("dichvu2").value);
            tongtien = tongtien + sodoi * tiendongphuc;
        }
        if (document.getElementById("dichvu3").checked) {
            var tientrongtai = parseFloat(document.getElementById("dichvu3").value);
            tongtien = tongtien + sogio * tientrongtai;
        }
        document.getElementById("tbsotien").innerHTML = dinhdangtien(tongtien) + " VNĐ";
        document.getElementById("tbsotien").style.color = "black";
    } else {
        document.getElementById("tbsotien").innerHTML = "Hãy lựa chọn thông tin đặt sân";
        document.getElementById("tbsotien").style.color = "red";
    }
}

function nopmau() {
    var n = kiemtra();
    if (n == 0) {
        window.alert("Bạn đã đặt sân thành công");
    } else {
        return false;
    }
}
// them dau phay ngan cach
function dinhdangtien(tien) {
    return tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //toString() ép chuỗi
    //replace() thay thế trong chuỗi
    /*Tìm khoảng trống trong chuỗi theo sau bởi (?=) một chuỗi A gồm ít nhất 1 bộ 3 chữ số ((\d{3})+) 
    (chuỗi A có thể gồm 3, 6, 9 chữ số) và sau A không có một chữ số nào khác. Khoảng trống này không phải 
    là khoảng trống khi bắt đầu chuỗi (\B). Sau khi tìm được thì thay khoảng trống đó bằng dấu "," */
}