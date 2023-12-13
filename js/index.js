// ? CÂU 1

function tinhLuong() {
  let luong1Ngay = 100000;
  let soNgayLam = document.getElementById("ngayLam").value;
  console.log("lương 1 ngày", luong1Ngay);
  console.log("số ngày làm", soNgayLam);

  let tongLuong = luong1Ngay * soNgayLam;
  console.log("tổng lương", tongLuong);

  document.getElementById("ketQua").innerHTML =
    tongLuong.toLocaleString() + " đ";
}

// ? CÂU 2

function tinhTrungBinh() {
  let soThu1 = parseFloat(document.getElementById("soThu1").value);
  let soThu2 = parseFloat(document.getElementById("soThu2").value);
  let soThu3 = parseFloat(document.getElementById("soThu3").value);
  let soThu4 = parseFloat(document.getElementById("soThu4").value);
  let soThu5 = parseFloat(document.getElementById("soThu5").value);

  let tinhTong = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;
  console.log("tổng", tinhTong);
  let trungBinh = tinhTong / 5;
  console.log("trung bình = ", trungBinh);

  document.getElementById("ketQuaTrungBinh").innerHTML =
    trungBinh.toLocaleString();
}

// ? CÂU 3

function doiTien() {
  let nhapTien = document.getElementById("nhapTien").value;
  console.log("tiền nhập : ", nhapTien + " usd ");

  let quyDoi = nhapTien * 23500;
  console.log("tiền đổi : ", quyDoi + " vnđ ");

  document.getElementById("ketQuaDoiTien").innerHTML =
    quyDoi.toLocaleString() + " vnđ";
}

// ? CÂU 4

function tinhCvDt() {
  let nhapChieuDai = parseFloat(document.getElementById("nhapChieuDai").value);
  let nhapChieuRong = parseFloat(
    document.getElementById("nhapChieuRong").value
  );
  console.log("chiều dài : ", nhapChieuDai);
  console.log("chiều rộng : ", nhapChieuRong);

  let chuVi = (nhapChieuDai + nhapChieuRong) * 2;
  let dienTich = nhapChieuDai * nhapChieuRong;
  console.log("chu vi = ", chuVi);
  console.log("diện tích = ", dienTich);

  document.getElementById("ketQuaTinhCvDt").innerHTML =
    "Chu vi = " + chuVi + " <br> Diện tích = " + dienTich;
}

// ? CÂU 5

function tong2So() {
  let nhap2ChuSo = document.getElementById("nhap2ChuSo").value;
  console.log("nhập 2 số : ", nhap2ChuSo);

  let soHangChuc = Math.floor(nhap2ChuSo / 10);
  console.log("số hàng chục : ", soHangChuc);

  let soHangDv = nhap2ChuSo % 10;
  console.log("số hàng đơn vị : ", soHangDv);

  let tongHaiSo = soHangChuc + soHangDv;
  console.log("tổng = ", tongHaiSo);

  document.getElementById("ketQuaTong2So").innerHTML="Tổng 2 Số = " + tongHaiSo;
}
