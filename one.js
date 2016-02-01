asd = 5;

function a(cb) {
  cb()
}

a(function() {
  asd = 3;

  console.log(1, asd);
});

console.log(2, asd);