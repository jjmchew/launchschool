console.log('tracker');

let tracker = (function makeTracker() {
  let trackerEvents = [];
  let trackerElements = [];

  let add = event => {
    console.log('add');
    if (!trackerEvents.includes(event)) {
      trackerEvents.push(event);
      trackerElements.push(event.target);
    }
  };

  let list = () => {
    console.log('list');
    return trackerEvents.slice();
  };

  let elements = () => {
    console.log('elements');
    return trackerElements.slice();
  }

  let clear = () => {
    console.log('clear');
    trackerEvents = [];
    trackerElements = [];
    return 0;
  }

  return {
    add(event) { add(event); },
    list() { return list(); },
    elements() { return elements(); },
    clear() { return clear() },
  }
})();

function track(callback) {
  return function(event){
    tracker.add(event);
    callback(event) 
  };
}

// #region Provided test code

// CLICK in THIS ORDER:
// div#blue,  div#red,  div#orange,  div#green

// use these listeners:
const divRed = document.querySelector('#red');
const divBlue = document.querySelector('#blue');
const divOrange = document.querySelector('#orange');
const divGreen = document.querySelector('#green');

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));



console.log(tracker.list().length);
// 4
console.log(tracker.elements());
// [div#blue, div#red, div#orange, div#green]
console.log(tracker.elements()[0] === document.querySelector('#blue'));
// true
console.log(tracker.elements()[3] === document.querySelector('#green'));
// true
console.log(tracker.list()[0]);
// click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
// The event listed in `tracker` can differ by browser (Chrome - PointerEvent, Firefox - click)
console.log(tracker.clear());
// 0
console.log(tracker.list());
// []
console.log(tracker.list()[0] = 'abc');
console.log(tracker.list().length);
// 0

// #endregion
