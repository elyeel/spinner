// // process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// unfortunately, we jump ahead accidentally by doing the refactor ahead of original spinner
let word = "|/-\|/-\||/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\       ";
let time = 1000;
for (const char of word) {
  setTimeout(() => {
    process.stdout.write("\r");
    process.stdout.write(char);
  }, time);
  time += 250;
};
