console.log('auto tab forwarding');

document.addEventListener('DOMContentLoaded', () => {
  let dl = document.querySelector('form dl');
  dl.addEventListener('keydown', e => {
    const AllowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'End', 'Home', 'Tab',
    ];
    if (String(e.code).includes('Key')) e.preventDefault();
    if (!AllowedKeys.includes(String(e.code)) && !String(e.code).includes('Digit')) e.preventDefault();
  });

  let inputs = document.querySelectorAll('form dl input[name="cc"]');
  inputs.forEach((input, idx) => {
    input.addEventListener('keyup', e => {
      if ([0, 1, 2].includes(idx)) {
        if (e.code.includes('Digit') && e.target.value.length === 4) {
          inputs[idx + 1].focus();
        }
      }
      if ([1, 2, 3].includes(idx)) {
        if (e.code.includes('Backspace') && e.target.value.length === 0) {
          inputs[idx - 1].focus();
        }
      }
    });
  });
});