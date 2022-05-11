function pay() {
  // B1 DOM toi gCar
  var gCarRadio = document.getElementById("gCar").checked;
  var gSUVRadio = document.getElementById("gSUV").checked;
  var gBlackRadio = document.getElementById("gBlack").checked;

  var km = +document.getElementById("km").value;
  var time = +document.getElementById("time").value;

  // b2 check radio button check trang thai de sử dụng cong thuc tinh tien
  //     var price = 0;
  //     if (gCarRadio) {
  //       if (km <= 1) {
  //         price += 8000;
  //       } else if (km < 20) {
  //         price = 8000 + (km - 1) * 7500;
  //       } else {
  //         price = 8000 + 18 * 7500 + (km - 19) * 7500;
  //       }
  //       if (time >= 3) {
  //         price = Math.floor(time / 3) * 2000;
  //       }

  //       alert(price);
  //     }
  //     if (gSUVRadio) {
  //       if (km <= 1) {
  //         price += 9000;
  //       } else if (km < 20) {
  //         price = 9000 + (km - 1) * 8500;
  //       } else {
  //         price = 8000 + 18 * 7500 + (km - 19) * 8000;
  //       }
  //       if (time >= 3) {
  //         price = Math.floor(time / 3) * 3000;
  //       }

  //       alert(price);
  //     }

  //     if (gBlackRadio) {
  //       if (km <= 1) {
  //         price += 10000;
  //       } else if (km < 20) {
  //         price = 10000 + (km - 1) * 9500;
  //       } else price = 10000 + 18 * 7500 + (km - 19) * 9000;
  //     }
  //     if (time >= 3) {
  //       price = Math.floor(time / 3) * 3500;
  //     }

  //     alert(price);
  //   }
}

function calPrice(km, price1, price2, price3, time1) {
  var price = 0;
  if ((km = 1)) {
    price += price1;
  } else if (km < 20) {
    price = price1 + (km - 1) * price2;
  } else {
    price = price1 + 18 * price2 + (km - 19) * price3;
  }
  if (time >= 3) {
    price = Math.floor(time1 / 3) * 3000;
  }
}

function getGrabType() {
  var gCarRadio = document.getElementById("gCar").checked;
  var gSUVRadio = document.getElementById("gSUV").checked;
  var gBlackRadio = document.getElementById("gBlack").checked;

  if (gCarRadio) {
    return "gCar";
  }
  if (gSUVRadio) {
    return "gSUV";
  }
  if (gBlackRadio) {
    return "gBlack";
  }
}



