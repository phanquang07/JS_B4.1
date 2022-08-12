/**
 * Bài 1: Xuất 3 số theo thứ tự tăng dần
 * 
 * Khối 1: Đầu vào
 * Khai báo biến: 
 * soNguyen1, soNguyen2, soNguyen3, 
 * var arrThuTu = soNguyen1 => soNguyen2 => soNguyen3
 * 
 * Khối 2: Xử lý
 * Nếu giá trị của cả 3 số đều là number
 *    Nếu soNguyen1 <= soNguyen3 <= soNguyen2
 *    arrThuTu = soNguyen1 => soNguyen3 => soNguyen2
 *    Nếu soNguyen2 <= soNguyen1 && soNguyen1 <= soNguyen3
 *    arrThuTu = soNguyen2 => soNguyen1 => soNguyen3
 *    Nếu soNguyen2 <= soNguyen3 && soNguyen3 <= soNguyen1
 *    arrThuTu = soNguyen2 => soNguyen3 => soNguyen1
 *    Nếu soNguyen3 <= soNguyen1 <= soNguyen2
 *    arrThuTu = soNguyen3 => soNguyen1 => soNguyen2
 *    Nếu soNguyen3 <= soNguyen2 <= soNguyen1
 *    arrThuTu = soNguyen3 => soNguyen2 => soNguyen1
 *    Nếu soNguyen1 <= soNguyen2 <= soNguyen3
 *    arrThuTu = soNguyen1 => soNguyen2 => soNguyen3
 * Ngược lại => Mời nhập lại
 * Khối 3: Đầu ra
 * in ra arrThuTu
 */


function sortNum() {
  var soNguyen1 = Number(document.getElementById('inputNum1').value)
  var soNguyen2 = Number(document.getElementById('inputNum2').value)
  var soNguyen3 = Number(document.getElementById('inputNum3').value)

  var arrThuTu = [soNguyen1, soNguyen2, soNguyen3]

  // Cách 1: dùng if-else
  // if (Number.isNaN(soNguyen1) === false && Number.isNaN(soNguyen2) === false && Number.isNaN(soNguyen3) === false) {
  //   if (soNguyen1 <= soNguyen2 && soNguyen2 <= soNguyen3) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen1 + ' ' + soNguyen2 + ' ' + soNguyen3
  //   } else if (soNguyen1 <= soNguyen3 && soNguyen3 <= soNguyen2) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen1 + ' ' + soNguyen3 + ' ' + soNguyen2
  //   } else if (soNguyen2 <= soNguyen1 && soNguyen1 <= soNguyen3) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen2 + ' ' + soNguyen1 + ' ' + soNguyen3
  //   } else if (soNguyen2 <= soNguyen3 && soNguyen3 <= soNguyen1) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen2 + ' ' + soNguyen3 + ' ' + soNguyen1
  //   } else if (soNguyen3 <= soNguyen1 && soNguyen1 <= soNguyen2) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen3 + ' ' + soNguyen1 + ' ' + soNguyen2
  //   } else if (soNguyen3 <= soNguyen2 && soNguyen2 <= soNguyen1) {
  //     arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + soNguyen3 + ' ' + soNguyen2 + ' ' + soNguyen1
  //   }
  // } else {
  //   alert('Moi nhap lai')
  // }

  // Cách 2: dùng hàm sort
  if (Number.isNaN(soNguyen1) === false && Number.isNaN(soNguyen2) === false && Number.isNaN(soNguyen3) === false) {
    arrThuTu.sort((a, b) => a - b)
    arrThuTu = document.getElementById('sortNum').innerHTML = 'Thứ tự: ' + arrThuTu
  } else {
    alert('Mời nhập lại')
  }
}

document.getElementById('btn-sort').onclick = sortNum

/**
 * Bài 2: Chào hỏi thành viên gia đình
 * 
 * Khối 1: Đầu vào
 * Khai báo biến: user, loiChao
 * 
 * Khối 2: Xử lý
 * Nếu user === 'B' => 'Xin chào: Bố'
 * Nếu user === 'M' => 'Xin chào: Mẹ'
 * Nếu user === 'A' => 'Xin chào: Anh'
 * Nếu user === 'E' => 'Xin chào: Em'
 * 
 * Khối 3: Đầu ra
 * Đưa ra lời chào theo điều kiện
 */

function sayHi() {
  var user = document.getElementById('user').value
  var loiChao = ''
  if (user === 'B') {
    loiChao = 'Xin chào: Bố'
  } else if (user === 'M') {
    loiChao = 'Xin chào: Mẹ'
  } else if (user === 'A') {
    loiChao = 'Xin chào: Anh'
  } else if (user === 'E') {
    loiChao = 'Xin chào: Em'
  } else {
    alert('Bạn chưa chọn người dùng. Mời bạn nhập lại!')
  }
  document.getElementById('sayHi').innerHTML = loiChao
}

document.getElementById('btn-sayHi').onclick = sayHi


/**
 * Bài 3: In ra số chẵn lẻ
 * Khối 1: Đầu vào
 * Khai báo bien: soNguyen1, soNguyen2, soNguyen3, arrNum,  soChan, soLe
 * Khối 2: xử lý
 * Nếu value của 3 số k phải NaN 
 *    + loop i qua tất cả các số
 *    + nếu arrNum[i] % 2 === 0 => soChan++
 *    + ngược lại => soLe++
 * Ngược lại => mời nhập lại
 * Khối 3: in ra màn hình soChan, soLe
 */

function xemSoChanLe() {
  var soNguyen1 = Number(document.getElementById('inputNum4').value)
  var soNguyen2 = Number(document.getElementById('inputNum5').value)
  var soNguyen3 = Number(document.getElementById('inputNum6').value)

  var arrNum = [soNguyen1, soNguyen2, soNguyen3]
  var soChan = 0
  var soLe = 0

  if (Number.isNaN(soNguyen1) === false && Number.isNaN(soNguyen2) === false && Number.isNaN(soNguyen3) === false) {
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] % 2 === 0) {
        soChan++
      } else {
        soLe++
      }
      console.log(soChan, soLe)
    }
    document.getElementById('sortNum2').innerHTML = 'Số chẵn: ' + soChan + '<br>' + 'Số lẻ: ' + soLe
  } else {
    alert('Mời nhập lại')
  }
}

document.getElementById('btn-sort2').onclick = xemSoChanLe

/**
 * Bài 4: Phân loại hình tam giác
 * Khối 1: Đầu vào
 * Khai báo biến: a, b, c, tamGiac
 * Khối 2: Xử lý
 * nếu a + b > c && a + c > b && b + c > a => là hình tam giác
 *   + nếu a === b || a === c || b === c  => tam giác cân
 *   + nếu a === b && a === c => tamGiac = tam giác đều
 *   + nếu a === Math.sqrt(b*b + c*c) || b === Math.sqrt(a*a + c*c) || c === Math.sqrt(a*a + b*b) => tam giác vuông
 * ngược lại => k fai hình tam giác
 * Khối 3: Đầu ra
 * in ra loại tam  giác 
 */


function phanLoaiTamGiac() {
  var a = Number(document.getElementById('inputNum7').value)
  var b = Number(document.getElementById('inputNum8').value)
  var c = Number(document.getElementById('inputNum9').value)

  var tamGiac = ''
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c) {
      tamGiac = 'Tam giác đều'
    } else if (a === b || a === c || b === c) {
      tamGiac = 'Tam giác cân'
    } else if (a === Math.sqrt(b * b + c * c) || b === Math.sqrt(a * a + c * c) || c === Math.sqrt(a * a + b * b)) {
      tamGiac = 'Tam giác vuông'
    } else {
      tamGiac = 'Tam giác thường'
    }
  } else {
    alert('Không phải hình tam giác, mời nhập lại')
  }
  document.getElementById('classify').innerHTML = tamGiac
}

document.getElementById('btn-classify').onclick = phanLoaiTamGiac
