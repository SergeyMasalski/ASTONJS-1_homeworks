// First method

function iterator(arr) {
  let i = 0;

  let id = setTimeout(function rec() {
    console.log(i);
    i += 1;
    if (i === arr.length) return clearTimeout(id);
    id = setTimeout(rec, 3000);
  }, 3000);
}

// Second method

// function iterator(arr) {
//   let i = 0;

//   let id = setInterval(function rec() {
//     console.log(i);
//     i += 1;
//     if (i === arr.length) clearInterval(id);
//   }, 3000);
// }
