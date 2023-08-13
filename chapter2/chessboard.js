let size = 10;
for (let i = 0; i < size; i++) {
  let line = (i % 2 ? '#' : ' ');
  for (let j = 0; j < size - 1; j++) {
    if (i % 2) {
      line = line + (j % 2 ? '#' : ' ');
    } else {
      line = line + (j % 2 ? ' ' : '#');
    }
  }
  console.log(line)
}