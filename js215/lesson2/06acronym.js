function acronym(string) {
  let output = string.replace(/-/g, ' ')
                     .split(' ')
                     .map(word => word[0].toUpperCase())
                     .join('');
  console.log(output);
  return output;
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"