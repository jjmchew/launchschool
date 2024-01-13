# Exercise 1 : Exploring the Booking App

1. How many staff are there?
- There are 5 staff (determined through /api/staff_members)

2. How many students are there?
- There are 5 students (determined through /api/students)

3. How many schedules exist?
- There are 9 schedules (determined through /api/schedules)

4. How many schedules have bookings?
- There are 3 schedules with bookings (counted manually by looking for non-null student_email)
- Can be determined through /api/schedules



5. Do all staff have schedules?
- There is no route that will provide this information

6. Did all students book a schedule?
- There is no route that will provide this information
(can be determined by counting how many unique students have schedules from /api/schedules)


## JavaScript code to complete actual API queries
- cut and paste into snippets to execute

### Using Promises
```javascript
function makeRequest(endpoint) {
  return new Promise(res => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/' + endpoint);
    request.responseType = 'json';
    
    request.addEventListener('load', () => {
      res(request.response);
    });

    request.send();
  });
}

makeRequest('staff_members').then(res => console.log(res));
makeRequest('students').then(res => console.log(res));
makeRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));
```

### Using async/await
```javascript
async function fetchRequest(endpoint) {
  const response = await fetch('/api/' + endpoint);
  const data = await response.json();
  return data;
}

fetchRequest('staff_members').then(res => console.log(res));
fetchRequest('students').then(res => console.log(res));
fetchRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));
```

# Exercises 2 - 7
- solutions will be in 01booking/public/javascripts
- the JS files needed to be accessible from the API since they were being included / run through localhoset:3000/exercises.html

