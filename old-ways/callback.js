function jundi(namasaya) {
  console.log(`nama saya adalah ${namasaya}`);
  // console.log('harusnya saya terakhir');
}

// console.log(jundi());


function tunggu(waktu, callback) {
  console.log('john mayer duluan');
  setTimeout(() => {
    console.log('saya jalan');
    callback('ryan');
  }, waktu);
  
}

tunggu(0, jundi);
