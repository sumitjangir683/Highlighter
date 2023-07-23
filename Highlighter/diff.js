function min(a, b, c) {
    return Math.min(a, Math.min(b, c));
}

function calculateDifference(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Initialize the base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill the matrix using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    // The final result is in dp[m][n]
    return dp[m][n];
}
function getDifferentWords(text1, text2) {
    const words1 = text1.trim().split(/\s+/); // Split text1 into words
    const words2 = text2.trim().split(/\s+/); // Split text2 into words

    const differentWords = [];

    for (const word of words2) {
        if (!words1.includes(word)) {
            differentWords.push(word);
        }
    }

    return differentWords;
}
function highlightDifferences() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    const difference = calculateDifference(text1, text2);
    const differentWords = getDifferentWords(text1, text2);

    // Create a copy of text2 with the different words highlighted
    const highlightedText2 = text2.replace(new RegExp(`\\b(${differentWords.join('|')})\\b`, 'gi'), '<span class="highlight">$1</span>');

    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
        <p>The difference between the two texts is: ${difference}</p>
        <p>Text 2 with different words highlighted:</p>
        <div class="output-text">${highlightedText2}</div>
    `;
}
// function highlightDifferences() {
//     const text1 = document.getElementById('text1').value;
//     const text2 = document.getElementById('text2').value;

//     const difference1 = calculateDifference(text2, text1); // Calculate difference for text1
//     const differentWords1 = getDifferentWords(text2, text1); // Note the order of text2 and text1

//     const difference2 = calculateDifference(text1, text2); // Calculate difference for text2
//     const differentWords2 = getDifferentWords(text1, text2); // Note the order of text1 and text2

//     // Create a copy of text1 with the different words highlighted
 
   
       
    

//     // Create a copy of text2 with the different words highlighted
//      const highlightedText2 = text2.replace(new RegExp(`\\b(${differentWords2})\\b`, 'gi'), '<span class="highlight">$1</span>');
    

//     const outputElement = document.getElementById('output');
   
//     outputElement.innerHTML = `
//             <p>The difference between the two texts is: ${difference2}</p>
//             <p>Text 2 with different words highlighted:</p>
//             <div class="output-text">${highlightedText2}</div>
//         `;
// }
// function highlightDifferences() {
//     const text1 = document.getElementById('text1').value;
//     const text2 = document.getElementById('text2').value;

//     const difference1 = calculateDifference(text2, text1); // Calculate difference for text1
//     const differentWords1 = getDifferentWords(text2, text1); // Note the order of text2 and text1

//     const difference2 = calculateDifference(text1, text2); // Calculate difference for text2
//     const differentWords2 = getDifferentWords(text1, text2); // Note the order of text1 and text2

//     // Create a copy of text1 with the different words highlighted
//     let highlightedText1 = text1;
//     for (const word of differentWords1) {
//         highlightedText1 = highlightedText1.replace(new RegExp(`\\b(${differentWords1})\\b`, 'gi'), '<span class="highlight">$1</span>');
//     }

//     // Create a copy of text2 with the different words highlighted
//     let highlightedText2 = text2;
//     for (const word of differentWords2) {
//         highlightedText2 = highlightedText2.replace(new RegExp(`\\b(${differentWords2})\\b`, 'gi'), '<span class="highlight">$1</span>');
//     }

//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = `
//         <p>The difference between the two texts is:</p>
//         <ul>
//             <li>Text 1: ${difference1}</li>
//             <li>Text 2: ${difference2}</li>
//         </ul>
//         <p>Text 1 with different words highlighted:</p>
//         <div class="output-text">${highlightedText1}</div>
//         <p>Text 2 with different words highlighted:</p>
//         <div class="output-text">${highlightedText2}</div>
//     `;
// }
