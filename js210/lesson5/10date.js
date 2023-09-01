// Question 1
let today = new Date();
console.log(today.toString());


// Question 2
console.log(`Todays day is ${today.getDay()}`);


// Question 3
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Todays day is ${daysOfWeek[today.getDay()]}`);


// Question 4
console.log(`Todays day is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}th`);


// Question 5
function dateSuffix(num) {
  let suffix = 'th';
  if (num % 10 === 1 && num !== 11) suffix = 'st';
  else if (num % 10 === 2 && num !== 12) suffix = 'nd';
  else if (num % 10 === 3 && num !== 13) suffix = 'rd';
  return suffix;
}

let day = today.getDate();
console.log(`Todays day is ${daysOfWeek[today.getDay()]}, the ${day}${dateSuffix(day)}`);


// Question 6
let mon = today.getMonth();
console.log(`Todays day is ${daysOfWeek[today.getDay()]}, ${mon} the ${day}${dateSuffix(day)}`);


// Question 7
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log(`Todays day is ${daysOfWeek[today.getDay()]}, ${months[mon]} the ${day}${dateSuffix(day)}`);


// Question 8
function formattedMonth() {
  return months[mon];
}

function formattedDay() {
  return `${day}${dateSuffix(day)}`;
}

function formattedDate() {
  return `${daysOfWeek[today.getDay()]}, ${formattedMonth()} ${formattedDay()}`;
}

console.log(formattedDate());


// Question 9
console.log(today.getFullYear());
console.log(today.getYear());


// Question 10
console.log(today.getTime());


// Question 11
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.toString());


// Question 12
let nextWeek = new Date(today.getTime());  // this will create a different date object (i.e., not equal)
// let nextWeek = today;   // this will reference the same date object (i.e., equal)
console.log('nextWeek ', nextWeek);
console.log('today ', today);
console.log(nextWeek === today);


// Question 13
console.log(nextWeek.toDateString() === today.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());


// Question 14
function formatTime(dateObj) {
  let h = dateObj.getHours();
  let m = dateObj.getMinutes();
  let hStr = h >= 10 ? String(h) : 0 + String(h);
  let mStr = m >= 10 ? String(m) : 0 + String(m);
  return `${hStr}:${mStr}`;
}

console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
