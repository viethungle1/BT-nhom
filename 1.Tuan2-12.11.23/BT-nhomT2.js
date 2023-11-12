function tongket() {
    // Điểm toán
    let phuttoan = +document.getElementById("1T").value;
    let tiettoan = +document.getElementById("2T").value;
    let giuakytoan = +document.getElementById("3T").value;
    let cuoikytoan = +document.getElementById("4T").value;
    // Điểm văn
    let phutvan = +document.getElementById("1V").value;
    let tietvan = +document.getElementById("2V").value;
    let giuakyvan = +document.getElementById("3V").value;
    let cuoikyvan = +document.getElementById("4V").value;
    // Điểm anh
    let phutanh = +document.getElementById("1A").value;
    let tietanh = +document.getElementById("2A").value;
    let giuakyanh = +document.getElementById("3A").value;
    let cuoikyanh = +document.getElementById("4A").value;
    let DTBT;
    let DTBV;
    let DTBA;
    let DT;
    DTBT = (phuttoan + (tiettoan * 2) + (giuakytoan * 2) + (cuoikytoan * 3)) / 8;
    DTBV = (phutvan + (tietvan * 2) + (giuakyvan * 2) + (cuoikyvan * 3)) / 8;
    DTBA = (phutanh + (tietanh * 2) + (giuakyanh * 2) + (cuoikyanh * 3)) / 8;
    DT=((DTBT+DTBA+DTBV)/3);
    document.getElementById("showdiemT").innerText = DTBT;
    document.getElementById("showdiemV").innerText = DTBV;
    document.getElementById("showdiemA").innerText = DTBA;
    if (DTBT >= 0 && DTBT <= 10 && DTBV >= 0 && DTBV <= 10 && DTBA >= 0 && DTBA <= 10) {
        if (DT>=8 && DTBT >= 8 && DTBV >= 8 && DTBA >= 8) {
            document.getElementById("ketqua").innerText = "Giỏi";
        } else if (DT>=7 && DTBT >= 7 && DTBV >= 7 && DTBA >= 7) {
            document.getElementById("ketqua").innerText = "Khá";
        } else if (DT>=5 && DTBT >= 5 && DTBV >= 5 && DTBA >= 5) {
            document.getElementById("ketqua").innerText = "Trung bình";
        } else {
            document.getElementById("ketqua").innerText = "Yếu"
        }
    }else {
    alert("Bạn nhập sai điểm")
    }
}
