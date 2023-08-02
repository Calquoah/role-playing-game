// function getDiceRollArray(diceCount) {  
//     return new Array(diceCount).fill(0).map(function(){
//     return Math.floor(Math.random() * 6) + 1
//     });   
// }



// /* We want a "named" export because
// we will be exporting multiple pieces
// of code from this utils file */










// /* Challenge: Dice Placeholders */










// /*
// CHALLENGE:
// 1. Create a new function called getDicePlaceholderHtml.
// 2. Make getDicePlaceholderHtml return a new array of diceCount 
// length.
// 3. Each element of the array should include this
// line of HTML: `<div class="placeholder-dice"></div>`
// 4. Remember to deal with the commas!
// 5. Think: Where should this function live??
// *hint.md for help!!*
// */





// /* My Solution */

// // function getDicePlaceholderHtml(diceCount) {
// //     return new Array(diceCount).fill(0).map(function(){
// //         return `<div class="placeholder-dice"></div>` 
// //     }).join('')
// // }




// /* Tom's Solution */



// function getDicePlaceholderHtml(diceCount){
//     return new Array(diceCount).fill(0).map(function(){
//         return `<div class="placeholder-dice"></div>`
//     }).join('')
// }


// export {getDiceRollArray, getDicePlaceholderHtml}













/* Mini Challenge: Move the getPercentage const */


const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth



function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(() => 
        Math.floor(Math.random() * 6) + 1
    )   
}



function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(() => 
        `<div class="placeholder-dice"></div>`
    ).join('')
}


export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}