const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
/*
The multi-line text includes spaces after the second last line, which is interpreted as an 'unescaped' line break, which results in an error.
Correcting the error, the resulting string includes all of the spaces after the escaped line break and prior to the next line of text (i.e., the indenting to line up subsequent lines of text with the equal sign on the first line).
*/

