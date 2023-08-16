// function countBs(manyBees) {
//   let length = manyBees.length;
//   let Bees = 0;
//   for (i = 0; i < length; i++) {
//     if (manyBees[i] == "B") {
//       Bees++;
//     }
//   }
//   return Bees;
// }

function countChar(manyBees, character) {
  let length = manyBees.length;
  let Bees = 0;
  for (i = 0; i < length; i++) {
    if (manyBees[i] == character) {
      Bees++;
    }
  }
  return Bees;
}

// console.log(countBs("BbuperB"));
console.log(countChar("SuperB", "p"));