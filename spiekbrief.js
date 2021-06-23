function calculateAge(birthYear) {
  return 2021 - birthYear;
}

// //

let birthYear = prompt('What year were you born?');
let age = calculateAge(birthYear);
let naam = prompt('What is your name?');
let berichtje = naam + ' is een bonki en ' + age + ' jaar oud';

if (age > 17) {
  berichtje += ' en heel cool.';
}
seks = alert(berichtje);
