/*
- add an `eventType` eventListener to `parentElement`
  - call `callback` with that eventListener
- clicking on a `selector` within `parentElement` should call `callback`
*/
console.log('delegate');

// #region Version 1 - didn't really work
// function delegateEvent(parentElement, selector, eventType, callback) {
//   if (!parentElement) return undefined;

//   let isSelectorMatch = (target) => {
//     let selected = parentElement.querySelector(selector);

//     let firstSelector = selector.trim();
//     if (firstSelector.match(/\s+/)) {
//       firstSelector = firstSelector.split(' ')[0];
//     }
//     firstSelector = document.querySelector(firstSelector);
//     console.log(target.tagName, selected.tagName, target.parentNode, firstSelector);
//     return target.tagName === selected.tagName.toUpperCase() &&
//            target.parentNode === firstSelector;
//   };

//   parentElement.addEventListener(eventType, e => {
//     if (isSelectorMatch(e.target)) callback(e);
//   });

//   return true;
// }
// #endregion

// #region Version 2 (after looking at user solutions)
// function delegateEvent(parentElement, selector, eventType, callback) {
//   if (!parentElement) return undefined;

//   let isDelegatable = target => {
//     let selected = parentElement.querySelectorAll(selector);
//     for (let i = 0; i < selected.length; i += 1) {
//       if (selected[i] === target) return true;
//     }
//     return false;
//   };

//   parentElement.addEventListener(eventType, e => {
//     if (isDelegatable(e.target)) callback(e);
//   })
//   return true;
// }
// #endregion

// #region LS Solution
function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      const validTargets = Array.prototype.slice.call(parentElement.querySelectorAll(selector));
      if (validTargets.includes(event.target)) {
        callback(event);
      }
    });
  }
}

/*
If there isn't a valid parentElement, then the function returns undefined
Otherwise, calling `addEventListener` always returns `true` (!undefined)
*/

// #endregion

// ============  provided test scenarios ============

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

// #region Scenario 1
// console.log(delegateEvent(element1, 'p', 'click', callback));
// returns undefined;  no event listeners added
// #endregion

// #region Scenario 2
// console.log(delegateEvent(element2, 'p', 'click', callback));
// returns true
// click eventListener added to `element2`
// clicking anywhere on the page does not trigger `callback`
// #endregion

// #region Scenario 3
// console.log(delegateEvent(element2, 'h1', 'click', callback));
// returns true
// click eventListener added to `element2`
// clicking anywhere on the page does not trigger `callback`
// #endregion

// #region Scenario 4
// console.log(delegateEvent(element3, 'h1', 'click', callback));
// returns true
// click eventListener added to `element3` (main)
// click `h1` to trigger `callback` and display alert `Target: H1, current target: MAIN`
// click anywhere else does not trigger `callback`
// #endregion

// #region Scenario 5
console.log(delegateEvent(element3, 'aside p', 'click', callback));
// returns true
// adds click eventListener to `element3` (main)
// click `p` element descendant of `aside` inside `main` to display alert:
//    Target P, Current Target: MAIN
// click anywhere else does not trigger `callback`
// #endregion

// #region Scenario 6
// console.log(delegateEvent(element2, 'p', 'click', callback));
// returns true
// adds click event to `element2` (main h1)
// click anywhere > no callback
// ===== THEN run (paste into browser):
// const newP = document.createElement('P');
// const newContent = document.createTextNode('New Paragraph');
// newP.appendChild(newContent);

// element2.appendChild(newP);
// ======
// click `p` with "New Paragraph" should trigger "Target P, Current Target: H1"
// click anywhere else > no callback
// #endregion