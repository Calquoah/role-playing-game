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













// import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'
// /*
// Challenge
// 1. In the getDiceHtml method, map over currentDiceScore 
// to return this string of html template for each element:
// <div class="dice">${num}</div>`. Save this new array
// to diceArray.
// 2. Modify the attack() function in index.js to get our 
// app working again.
// */
// function Character(data) {
//     Object.assign(this, data)
    
//     this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
//     this.getDiceHtml = function() {
//         this.currentDiceScore = getDiceRollArray(this.diceCount)
//         this.diceArray = this.currentDiceScore.map(function(num){
//             return `<div class="dice">${num}</div>`
//         }).join('')
//     } 
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;      
        
//            return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }  
// }

// export default Character













/* Challenge: Inflicting Damage */












// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// /*CHALLENGE
// 1. Ceate a new method inside Character called "takeDamage".
// 2. For now, have the method log out the name of the damaged character
// and phrase "is damaged".
// 3. In index.js, find the attack() function and call takeDamage
// for each character inside that function. 
// */

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map(function(num){
//             return `<div class="dice">${num}</div>`
//             }).join("")
//     }

//     /* Solution */

//     this.takeDamage = function(attackScoreArray) {
//         console.log(`${this.name}: ${attackScoreArray}`)
//     }
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character















/* Challenge: Using the .reduce() */












// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'


// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map(function(num){
//             return `<div class="dice">${num}</div>`
//             }).join("")
//     }
    
//     this.takeDamage = function(attackScoreArray){
// /*
// CHALLENGE
// 1. In the takeDamage method, use what you have just learned
// to reduce attackScoreArray to a single number.
// 2. Store that number in a const called totalAttackScore
// 3. Decrement the health score by totalAttackScore
// */
//     const totalAttackScore = attackScoreArray.reduce(function(total, num) {
//         return total + num
//     })
//     this.health -= totalAttackScore // Here, I'm decrementing the health score
//     }
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character
















/* Challenge: Stop the Characters' Health from Dropping Below Zero */














// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map(function(num){
//             return `<div class="dice">${num}</div>`
//             }).join("")
//     }

// /*
// CHALLENGE
// 1. Add code to takeDamage so that when he character reaches 
// zero heath, they stay at zero health and don't drop below 
// zero.
// ** hint.md for help!!**
// */
    
//     this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce(function(total, num) {return total + num})
//         this.health -= totalAttackScore
        
//         if (this.health <= 0) {
//             this.health = 0
//         }
//     }
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character

















/* Challenge: Is the Character Dead? */













// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map(function(num){
//             return `<div class="dice">${num}</div>`
//             }).join("")
//     }
    
// /*
// CHALLENGE
// 1. Add a line of code inside the body of the if statement
// in the takeDamage method which will give the character a 
// new boolean "dead" when health reaches zero. It can be initialised with "true".
// 2. For now, log out that boolean when the character's 
// health reaches zero.
// */
    
//     this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce(function(total, num) {
//             return total + num
//             })
//         this.health -= totalAttackScore
//         if (this.health <= 0){
//             this.dead = true 
//             this.health = 0
//         } 
//         console.log(this.dead)
//     }
 
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character


















/* Challenge: Using Arrow Functions */















// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// function Character(data) {
//     Object.assign(this, data)

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
// /*
// CHALLENGE
// 1. In the getDiceHtml method, there is an anonymous function 
// being used as an inline callback function. Replace it with an 
// arrow function.
// 2. Do the same for the anonymous function in the takeDamage 
// method.
// 3. Try to end up with the least amount of code possible!
// */

//     /* My Solution */

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map(num => 
//             `<div class="dice">${num}</div>`).join("")
//     }

//     /* Tom's Solution */

//     /*   this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map((num)=> 
//             `<div class="dice">${num}</div>`).join("")
//     } */


//     /* My Solution */
    
//     this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
//         this.health -= totalAttackScore
//         if (this.health <= 0){
//             this.dead = true  
//             this.health = 0
//         } 
//     }


//     /* Tom's Solution */


//     /*   this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
//         this.health -= totalAttackScore
//         if (this.health <= 0){
//             this.dead = true  
//             this.health = 0
//         } 
//     } */


    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character

















/* Challenge: Arrow Function: Calculate Percentage of Health Remaining */

















// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// /*Challenge
// 1. Create a property called maxHealth INSIDE Character that 
// stores the maximum health a character can have.
// 2. Create an arrow function called getPercentage OUTSIDE 
// Character which takes two parameters, remainingHealth and 
// maximumHealth. getPercentage should return the % of 
// maximumHealth that is remaining.
// 3. To test, call getPercentage from within the takeDamage method
// and log out the result. 
// **hint.md for help!!**
// */

// const getPercentage = (remainingHealth, maximumHealth) => 
//     (100 * remainingHealth) / maximumHealth


// function Character(data) {
//     Object.assign(this, data)
//     this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
//     this.maxHealth = this.health

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map((num) =>
//             `<div class="dice">${num}</div>`).join("")
//     }
    
//     this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
//         this.health -= totalAttackScore
//         if (this.health <= 0){
//             this.dead = true  
//             this.health = 0
//         }
    
//     console.log(getPercentage(this.health, this.maxHealth))
    
//     }

//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;

//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character


















/* Challenge: Displaying the Health Bar */

















// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// const getPercentage = (remainingHealth, maximumHealth) => 
//     (100 * remainingHealth) / maximumHealth
// /*   
// CHALLENGE
// 1. Set up a new method called getHealthBarHtml
// 2. Create a const called "percent" and set it equals to the 
// returned value from our getPercentage function (think what 
// arguments you want to pass in).
// 3. For now, just log out the value of the new const "percent". 
// 4. Down in the getCharacterHtml method, set up a const
// called healthBar and set it equal to the returned value
// of the getHealthBarHtml method.
// */

// function Character(data) {
//     Object.assign(this, data)
//     this.maxHealth = this.health

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         this.diceArray = this.currentDiceScore.map((num) =>
//             `<div class="dice">${num}</div>`).join("")
//     }
    
//     this.takeDamage = function(attackScoreArray){  
//         const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
//         this.health -= totalAttackScore
//         if (this.health <= 0){
//             this.dead = true  
//             this.health = 0
//         } 
//     }

//     this.getHealthBarHtml = function () {
//         const percent = getPercentage(this.health, this.maxHealth)
//         console.log(percent)
//     }
    
//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;
//         const healthBar = this.getHealthBarHtml()
//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character



















/* Challenge: Displaying the Health Bar Part II */
















// import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

// const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

// function Character(data) {
//     Object.assign(this, data)
//     this.maxHealth = this.health

//     this.diceArray = getDicePlaceholderHtml(this.diceCount)

//     this.getDiceHtml = function () {
//         this.currentDiceScore = getDiceRollArray(this.diceCount)
//         this.diceArray = this.currentDiceScore.map((num) =>
//             `<div class="dice">${num}</div>`).join("")
//     }

//     this.takeDamage = function (attackScoreArray) {
//         const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
//         this.health -= totalAttackScore
//         if (this.health <= 0) {
//             this.dead = true
//             this.health = 0
//         }
//     }

// /*
// CHALLENGE
// 1. Instead of just logging the percent, getHealthBarHtml 
// needs to return this string of html:
// `<div class="health-bar-outer">
//     <div class="health-bar-inner *YOUR CODE HERE* " 
//         style="width: *YOUR CODE HERE* %;">
//     </div>
// </div>`
// 2. You need to make some changes to that string of HTML.
// 2a. If the amount of health left is 25% or lower, add the class 
// "danger" to the div with the class "health-bar-inner".
// 2b. The width of that div should be the % health remaining. 
// 3. Be sure to add the healthBar variable to the string of HTML
// rendered by getCharacterHtml.
// **hint.md for help!!**       
// */

//     this.getHealthBarHtml = function () {
//         const percent = getPercentage(this.health, this.maxHealth)
//         return `
//             <div class="health-bar-outer">
//                 <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
//                     style="width: ${percent}%">
//                 </div>
//             </div>`
//     }

//     // / endMessage = wizard.health === 0 && orc.health === 0 ?
//     //     "No victors - all creatures are dead" :
//     //     wizard.health > 0 ? "The Wizard Wins" :
//     //         "The Orc is Victorious"
    

//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this
//         const healthBar = this.getHealthBarHtml()
//         return `
//             <div class="character-card">
//                 <h4 class="name"> ${name} </h4>
//                 <img class="avatar" src="${avatar}" />
//                 <div class="health">health: <b> ${health} </b></div>
//                 ${healthBar}
//                 <div class="dice-container">
//                     ${this.diceArray}
//                 </div>
//             </div>`
//     }
// }

// export default Character

















/* Mini Challenge: Move the getPercentage const */















import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'

/*
Challenge
1. Move getPerecentage out of the Character file.
*/

// const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }


    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
        </div>`
    }
    

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character