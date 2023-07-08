// import { getDiceRollArray } from './utils.js';

// function Character(data) {
//     Object.assign(this, data)
    
//     this.getDiceHtml = function(diceCount) {
//         return getDiceRollArray(diceCount).map(function(num){ 
//             return  `<div class="dice">${num}</div>`
//         }).join('')
//     }

//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;      
//         let diceHtml = this.getDiceHtml(diceCount);
        
//            return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${diceHtml}
//                 </div>
//             </div>`;
//     }  
// }

// export default Character










/* Challenge: Render Placeholder dice */









// import {getDicePlaceholderHtml, getDiceRollArray} from './utils.js'

// /*
// CHALLENGE
// 1. In the Character constructor, create a new 
// property called "diceArray".
// 2. Set diceArray equal to whatever is returned
// by the getDicePlaceholderHtml function (think 
// what two things you need to do to make this work!!).
// 3. Instead of rendering diceHtml in the getCharacterHtml 
// method, render diceArray.
// 4. Delete any unnecessary code.
// */

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
//     this.getDiceHtml = function(diceCount) {
//         return getDiceRollArray(diceCount).map(function(num){ 
//             return  `<div class="dice">${num}</div>`
//         }).join('')
//     }

//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount, diceArray } = this;      
//         let diceHtml = this.getDiceHtml(diceCount);        
//            return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${diceArray}
//                 </div>
//             </div>`
//     } 
// } 

// export default Character











/* Challenge: Fix the dice render problem: Part 1 */










// import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'
// /*
// Challenge
// 1. Add a new property called currentDiceScore to each character's 
//  data and initialise it to an empty array.
// 2. Rewrite the getDiceHtml method so it updates currentDiceScore 
//  with the values returned by getDiceRollArray.
// */

// // First thing to do for this challenge is to go into data.js
// // and update the character objects with currentDiceScore

// // Then, you want to make some changes to getDiceHtml. That means
// // getting rid of the current code and replacing it...

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
//     this.getDiceHtml = function(diceCount) {
//         this.currentDiceScore = getDiceRollArray(this.diceCount)
        
//         // Old code: 
//         //  return getDiceRollArray(diceCount).map(function(num){ 
//         //     return  `<div class="dice">${num}</div>`
//         //     }).join('')
//     } 
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        
//            return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${diceArray}
//                 </div>
//             </div>`
//     }  
// }

// export default Character















/* Challenge: Fix the dice render problem: Part 2 */













import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'
/*
Challenge
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/
function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    } 
    
    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;      
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }  
}

export default Character