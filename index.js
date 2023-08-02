/*
Challenge #1: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/


// const heroDiv = document.getElementById('hero')

// heroDiv.innerHTML = 
// `
//    <div class="character-card">
//          <h4 class="name"> Wizard </h4>
//          <img class="avatar" src="img/wizard.png"/>
//          <p class="health">health: <b> 60 </b></p>
//          <div class="dice-container"><div class="dice"> 6 </div></div>
//    </div>  
// `

/* But you can write all of that code on one line,
like this: */

// document.getElementById('hero').innerHTML = `
//    <div class="character-card">
//          <h4 class="name"> Wizard </h4>
//          <img class="avatar" src="img/wizard.png"/>
//          <p class="health">health: <b> 60 </b></p>
//          <div class="dice-container">
//             <div class="dice"> 6 </div>
//          </div>
//    </div>  
// `

// document.getElementById('monster').innerHTML = `
//    <div class="character-card">
//       <h4 class="name"> Orc </h4>
//       <img class="avatar" src="img/orc.png"/>
//       <p class="health">health: <b> 10 </b></p>
//       <div class="dice-container">
//          <div class="dice"> 4 </div>
//       </div>
//    </div>
// `




/* Writing Cleaner Code */


// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceRoll: 6
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceRoll: 4
// }






// /* Challenge 3: The renderCharacter function */


// function renderCharacter(data) {
// /*
// Challenge:
//     1. Make renderCharacter render out the character 
//        from the object it is passed.
// */

//  document.getElementById(data.elementId).innerHTML = `
//    <div class="character-card">
//       <h4 class="name"> ${data.name} </h4>
//       <img class="avatar" src="${data.avatar}"/>
//       <p class="health">health: <b> ${data.health} </b></p>
//       <div class="dice-container">
//          <div class="dice"> ${data.diceRoll} </div>
//       </div>
//    </div> 
// `
// }

// renderCharacter(hero)
// renderCharacter(monster)









/* Challenge 4: Destructuring the Object */








// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "images/wizard.png",
//    health: 60,
//    diceRoll: 3,
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "images/orc.png",
//    health: 10,
//    diceRoll: 4,
// }

// // CHALLENGE
// // 1. Deconstruct the data object 
// // 2. Update the template string as necessary


// function renderCharacter(data) {
//    const {elementId, name, avatar, health, diceRoll} = data
//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">
//                <div class="dice"> ${diceRoll} </div>
//            </div>
//        </div>`
// }

// renderCharacter(hero)
// renderCharacter(monster)











/* Challenge 5: Render out multiple dice */










// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceRoll: 3,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceRoll: 4,
//    diceCount: 1
// }

// function renderCharacter(data) {
//    const {elementId, name, avatar, health, diceRoll, diceCount } = data;
   

// /*
// CHALLENGE
// 1. declare a let called diceHtml and initialize it with an empty 
// string. 
// 2. Use a for loop to update diceHtml so that it contains the 
// HTML for our dice. The number of dice needed is specificed in 
// the diceCount property of the objects.
// 3. Each dice should have the following HTML: <div class="dice">6</div>
// 4. For now, each dice will display 6
// 5. Swap out the diceRoll variable for diceHtml in the template
// */


// let diceHtml = ''

// for (let i = 0; i < diceCount; i++) {
//    diceHtml += `<div class="dice">6</div>`;
// }
   
//    document.getElementById(elementId).innerHTML = 
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">
//                ${diceHtml}
//            </div>
//        </div>`   
// }

// renderCharacter(hero);
// renderCharacter(monster);










/* Challenge 6: Update the for loop */








// const hero = {
//    elementId: "hero", 
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceRoll: [3, 1, 4],
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceRoll: [2],
//    diceCount: 1
// }

// function renderCharacter(data) {
//    const {elementId, name, avatar, health, diceRoll, diceCount } = data;
//    let diceHtml = '';

// // CHALLENGE
// // Update this for loop so it uses a value from the 
// // new diceRoll array to render out the dice so the 
// // wizard's dice have values of 3, 1 and 4, and the
// // orc's single dice has a value of 2.

    
// for (let i = 0; i < diceCount; i++) {
//    diceHtml += `<div class="dice">${diceRoll[i]}</div>`
// }
   
//    document.getElementById(elementId).innerHTML = 
//    `<div class="character-card">
//        <h4 class="name"> ${name} </h4>
//        <img class="avatar" src="${avatar}" />
//        <div class="health">health: <b>${health}</b></div>
//        <div class="dice-container">
//            ${diceHtml}
//        </div>
//    </div>`; 
// }

// renderCharacter(hero);
// renderCharacter(monster);










/* Challenge 7:  Swap out the for loop method for the .map() */









// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceRoll: [3, 1, 4],
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceRoll: [6],
//    diceCount: 1
// }

// /*
// CHALLENGE
// 1. Instead of the for loop, map over the diceRoll array
// and save the new array to diceHTML.
// 2. Remember to deal with the commas between dice.
// 3. What keyword should be used to declare diceHTML? 
// */

// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceRoll, diceCount } = data;
   
   
//    const diceHtml = diceRoll.map(function(number){
//       return `<div class="dice">${number}</div>`
//    }).join('');
   


//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">
//                ${diceHtml}
//            </div>
//        </div>`
// }

// renderCharacter(hero);
// renderCharacter(monster);














/* Challenge: Generating Random Value for Dice */










/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
** check out hint.md for extra help! **
*/

// function getDiceRollArray(diceCount) {
//    // Setting up the array that it's going to return
//    const newDiceRolls = [] // initialize it to an empty array
   
//    for (let i = 0; i < diceCount; i++) {
//       newDiceRolls.push(Math.floor( Math.random() * 6) + 1)
//    }
//    return newDiceRolls
// }

// // Call function with a diceCount of 3
// // like this: 

// getDiceRollArray(3)
   
// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceRoll: [3, 1, 4], 
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceRoll: [6],
//    diceCount: 1
// }

// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceRoll, diceCount } = data;

//    const diceHtml = diceRoll.map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')

//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">
//                ${diceHtml}
//            </div>
//        </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);















/* Challenge: Render Dice with Random Numbers */













// function getDiceRollArray(diceCount) {
//    let newDiceRolls = [];
//    for (let i = 0; i < diceCount; i++) {
//        newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
//    }
//    return newDiceRolls;
// }

// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount). map(function(number){
//       return `<div class="dice">${number}</div>`
//    }).join('')
// }

// /*
// Challenge 
// 1. Create a function called getDiceHtml. 
// 2. getDiceHtml should map over the array of dice rolls 
//   returned from getDiceRollArray to generate the html 
//   we need to render our dice with random values. This is 
//   the HTML: `<div class="dice">DICE VALUE HERE</div>`
// 3. Think about the parameters and arguments!
// 4. Down in renderCharacter(), set diceHtml equals to our 
//   new getDiceHtml function. Remember to give it the argument
//   it needs. 
// 5. Delete any code we no longer need.
// **hint.md for help**
// */


// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceCount } = data;
//    const diceHtml = getDiceHtml(diceCount)

//    document.getElementById(elementId).innerHTML =
//    `<div class="character-card">
//        <h4 class="name"> ${name} </h4>
//        <img class="avatar" src="${avatar}" />
//        <div class="health">health: <b> ${health} </b></div>
//        <div class="dice-container">    
//            ${diceHtml}
//        </div>
//    </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);












/* Challenge: Use the Array Constructor */













// function getDiceRollArray(diceCount) {
// /* Challenge: 
// 1. Instead of the for loop, use an Array constructor to 
//   create a new array which is diceCount length.
// 2. Fill the new array with zeros as its initial state.
// 3. Map over the new array directly (no need to declare a 
//   new variable) and return a random number from 1-6 in 
//   each element.
// 4. Delete all unnecessary code.
// */   

// /* My Solution */

// // const newDiceRolls = new Array(6).fill('0').map(function(number){
// //    return newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
// //       return `<div class="dice">${number}</div>`
// // })
// // return newDiceRolls


//    /* Tom's Solution */

//    return new Array(diceCount).fill(0).map(function(){
//       return Math.floor(Math.random() * 6) + 1
//    })
// }

// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount).map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')
// }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceCount } = data;
//    const diceHtml = getDiceHtml(diceCount)

//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">    
//                ${diceHtml}
//            </div>
//        </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);













/* Challenge: Use a Constructor Function */











// function getDiceRollArray(diceCount) { 
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount).map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')
// }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "images/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "images/orc.png",
//    health: 10,
//    diceCount: 1
// }
// /*
// Challenge 
// 1. Create a new constructor function called Character which
//   takes our data as a paramenter.
// 2. Set up "this" for each of the 5 properties in our objects
//   (eg: this.health = data.health).
// */

// function Character(data) {
//    this.elementId = data.elementId
//    this.name = data.name
//    this.avatar = data.avatar
//    this.health = data.health
//    this.diceCount = data.diceCount;
// }


// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceCount } = data;
//    const diceHtml = getDiceHtml(diceCount)

//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">    
//                ${diceHtml}
//            </div>
//        </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);













/* Challenge: Using a Method with a Constructor Function */











// function getDiceRollArray(diceCount) { 
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount).map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')
// }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// /*
// Challenge
// 1. Create a method called getCharacterHtml that performs the 
//   same tasks as our current renderCharacter function.
// 2. Create two new instances of Character. One for a hero, 
//   called "wizard", and one for a monster, called "orc". 
//   Render both of them on the page.
// 3. Delete both the old renderCharacter function and the two 
//   lines of code at the bottom of the page which invoke that 
//   function.
// */

// function Character(data) {
//    this.elementId = data.elementId;
//    this.name = data.name;
//    this.avatar = data.avatar;
//    this.health = data.health;
//    this.diceCount = data.diceCount;
   
//    this.getCharacterHtml = function() {
//       const { elementId, name, avatar, health, diceCount } = this;
//       const diceHtml = getDiceHtml(diceCount)
   
//       document.getElementById(elementId).innerHTML =
//             `<div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">    
//                   ${diceHtml}
//                </div>
//             </div>`;
//    }
// }

// const wizard = new Character(hero)
// const orc = new Character(monster)

// wizard.getCharacterHtml()
// orc.getCharacterHtml()



// function renderCharacter(data) {
//    const { elementId, name, avatar, health, diceCount } = data;
//    const diceHtml = getDiceHtml(diceCount)

//    document.getElementById(elementId).innerHTML =
//        `<div class="character-card">
//            <h4 class="name"> ${name} </h4>
//            <img class="avatar" src="${avatar}" />
//            <div class="health">health: <b> ${health} </b></div>
//            <div class="dice-container">    
//                ${diceHtml}
//            </div>
//        </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);













/* Challenge: Simplify Constructor Function with Object.assign */













// function getDiceRollArray(diceCount) {  
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount).map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')
// }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// function Character(data) {
// /*CHALLENGE
// -Use what you learned in the previous scrim to
// remove the following 5 lines of code
// */
//    // this.elementId = data.elementId
//    // this.name = data.name
//    // this.avatar = data.avatar
//    // this.health = data.health
//    // this.diceCount = data.diceCount
//    Object.assign(this, data)
//    this.getCharacterHtml = function () {
//        const { elementId, name, avatar, health, diceCount } = this;      
//        let diceHtml = getDiceHtml(diceCount);
       
//        document.getElementById(elementId).innerHTML = `
//            <div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">
//                    ${diceHtml}
//                </div>
//            </div>`;
//    }
   
// }

// const wizard = new Character(hero)
// wizard.getCharacterHtml()

// const orc = new Character(monster)
// orc.getCharacterHtml()












/* Challenge: Simplify the Constructor Function Part II */











// function getDiceRollArray(diceCount) {   
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// // CHALLENGE 
// // 1. Add this function as a method of our character constructor
// // 2. Make a small change to getCharacterHtml to make the app work again

// // function getDiceHtml(diceCount) {
// //    return getDiceRollArray(diceCount).map(function(num){ 
// //        return  `<div class="dice">${num}</div>`
// //    }).join('')
// // }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// function Character(data) {
//    Object.assign(this, data)

//    this.getDiceHtml = function(diceCount) {
//    return getDiceRollArray(diceCount).map(function(num){ 
//        return  `<div class="dice">${num}</div>`
//    }).join('')
//    }

//    this.getCharacterHtml = function () {
//        const { elementId, name, avatar, health, diceCount } = this;      
//        let diceHtml = this.getDiceHtml(diceCount);
       
//        document.getElementById(elementId).innerHTML = `
//            <div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">
//                    ${diceHtml}
//                </div>
//            </div>`;
//    }  
// }

// const wizard = new Character(hero)
// wizard.getCharacterHtml()

// const orc = new Character(monster)
// orc.getCharacterHtml()



















/* Challenge: Refactor the Constructor Function

Instead of setting innherHtml in the constructor function, 
make it so that you just return the Html string 

*/













// function getDiceRollArray(diceCount) {  
//     return new Array(diceCount).fill(0).map(function(){
//     return Math.floor(Math.random() * 6) + 1
//     });   
// }

// const hero = {
//     elementId: "hero",
//     name: "Wizard",
//     avatar: "images/wizard.png",
//     health: 60,
//     diceCount: 3
// }

// const monster = {
//     elementId: "monster",
//     name: "Orc",
//     avatar: "images/orc.png",
//     health: 10,
//     diceCount: 1
// }

// function Character(data) {
//     Object.assign(this, data)
    
//      this.getDiceHtml = function(diceCount) {
//         return getDiceRollArray(diceCount).map(function(num){ 
//             return  `<div class="dice">${num}</div>`
//         }).join('')
//     }

//     this.getCharacterHtml = function () {
//         const { elementId, name, avatar, health, diceCount } = this;      
//         let diceHtml = this.getDiceHtml(diceCount);
        
// /*
// CHALLENGE
// - instead of setting the innerHTML from right here in the contructor,
// make it so that we just return that literal string of HTML
// - This will break the app. Don't worry!
// */
//       /* Solution */

// //   document.getElementById(elementId).innerHTML = 
      
//       return `
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

// const wizard = new Character(hero)
// wizard.getCharacterHtml()

// const orc = new Character(monster)
// orc.getCharacterHtml()














/* Challenge: Fix the app so the Wizard and Orc render again */













// function getDiceRollArray(diceCount) {
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// const hero = {
//    elementId: "hero",
//    name: "Wizard",
//    avatar: "img/wizard.png",
//    health: 60,
//    diceCount: 3
// }

// const monster = {
//    elementId: "monster",
//    name: "Orc",
//    avatar: "img/orc.png",
//    health: 10,
//    diceCount: 1
// }

// function Character(data) {
//    Object.assign(this, data)
   
//     this.getDiceHtml = function(diceCount) {
//        return getDiceRollArray(diceCount).map(function(num){ 
//            return  `<div class="dice">${num}</div>`
//        }).join('')
//    }

//    this.getCharacterHtml = function () {
//        const { elementId, name, avatar, health, diceCount } = this;      
//        let diceHtml = this.getDiceHtml(diceCount);
       
//           return `
//            <div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">
//                    ${diceHtml}
//                </div>
//            </div>`;
//    }  
// }

//CHALLENGE

// - Make the wizard and orc render
// - check hint.md if you need a hand 

/* Solution */

// const wizard = new Character(hero)
// // wizard.getCharacterHtml()
// document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()

// // console.log(wizard.getCharacterHtml())

// const orc = new Character(monster)
// // orc.getCharacterHtml()
// document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()



/* MINI CHALLENGE */
// 1 Create one render() function that calls both wizard and orc 
//  so we can control when they render. 
// 2 call the function.

/* Solution */

// const wizard = new Character(hero)
// const orc = new Character(monster)

// function render() {
//    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
//    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
// }

// render()

















/* Challenge: Amalgamate the Objects */













// function getDiceRollArray(diceCount) {  
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }

// /*
// CHALLENGE
// -Create a new const called characterData and set it equals to an 
// object which holds both our hero and monster objects. 

// -Think about how we access the data from our new object
// when we set up new characters down at the very bottom of the app. 
// -See if you can work out what needs to change there to keep the 
// app working.
// */



// /* This object has been pasted into the data.js file */



// // const characterData = {
// //    hero: {
// //       elementId: "hero",
// //       name: "Wizard",
// //       avatar: "img/wizard.png",
// //       health: 60,
// //       diceCount: 3
// //    }, 
// //    monster:  {
// //       elementId: "monster",
// //       name: "Orc",
// //       avatar: "img/orc.png",
// //       health: 10,
// //       diceCount: 1
// //    }
// // }


// function Character(data) {
//    Object.assign(this, data)
   
//     this.getDiceHtml = function(diceCount) {
//        return getDiceRollArray(diceCount).map(function(num){ 
//            return  `<div class="dice">${num}</div>`
//        }).join('')
//    }

//    this.getCharacterHtml = function () {
//        const { elementId, name, avatar, health, diceCount } = this;      
//        let diceHtml = this.getDiceHtml(diceCount);
       
//           return `
//            <div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">
//                    ${diceHtml}
//                </div>
//            </div>`;
//    }  
// }


// function render() {
//    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
//    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
// }

// /*Does something here need to change?*/
// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()

/* Here, the objects of hero and monster
no longer exist, so we need to change
that */














/* Import & Export the Data */











// import characterData from "./data.js";


// function getDiceRollArray(diceCount) {  
//    return new Array(diceCount).fill(0).map(function(){
//    return Math.floor(Math.random() * 6) + 1
//    });   
// }


// function Character(data) {
//    Object.assign(this, data)
   
//    this.getDiceHtml = function(diceCount) {
//        return getDiceRollArray(diceCount).map(function(num){ 
//            return  `<div class="dice">${num}</div>`
//        }).join('')
//    }

//    this.getCharacterHtml = function () {
//        const { elementId, name, avatar, health, diceCount } = this;      
//        let diceHtml = this.getDiceHtml(diceCount);
       
//           return `
//            <div class="character-card">
//                <h4 class="name"> ${name} </h4>
//                <img class="avatar" src="${avatar}" />
//                <div class="health">health: <b> ${health} </b></div>
//                <div class="dice-container">
//                    ${diceHtml}
//                </div>
//            </div>`;
//    }  
// }

// function render() {
//    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
//    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()














/* Challenge: Export getDiceRollArray() into another file */










// import characterData from '/data.js'
// import {getDiceRollArray} from '/utils.js'

// /*
// Challenge
// 1. Create a file called 'utils.js'.
// 2. Cut and paste the getDiceRollArray() function into it.
// 3. Decide if this should be a default or named export. Think
//    about this!!
// 4. Import back it into index.js
// */

// // function getDiceRollArray(diceCount) {  
// //     return new Array(diceCount).fill(0).map(function(){
// //     return Math.floor(Math.random() * 6) + 1
// //     });   
// // }

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

// function render() {
//     document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
//     document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()















/* More Exporting: Export the Character constructor function */










// import characterData from '/data.js'
// // import { getDiceRollArray } from './utils'; /* Need to change this location to Character.js because we're using it in there */
// import Character from './Character.js';

// /*
// Challenge
// 1. Create a file called 'Character.js'
// 2. Cut and paste the constructor function into it.
// 3. Decide if this should be a default or named export. Think
//    about this!!
// 4. Import it into index.js
// 5. You will hit a problem! Solve the problem!
// */

// // function Character(data) {
// //     Object.assign(this, data)
    
// //     this.getDiceHtml = function(diceCount) {
// //         return getDiceRollArray(diceCount).map(function(num){ 
// //             return  `<div class="dice">${num}</div>`
// //         }).join('')
// //     }

// //     this.getCharacterHtml = function () {
// //         const { elementId, name, avatar, health, diceCount } = this;      
// //         let diceHtml = this.getDiceHtml(diceCount);
        
// //            return `
// //             <div class="character-card">
// //                 <h4 class="name"> ${name} </h4>
// //                 <img class="avatar" src="${avatar}" />
// //                 <div class="health">health: <b> ${health} </b></div>
// //                 <div class="dice-container">
// //                     ${diceHtml}
// //                 </div>
// //             </div>`;
// //     }  
// // }

// function render() {
//     document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
//     document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()


















/* Good Housekeeping */












// import characterData from '/data.js'
// import Character from '/Character.js'

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()


/* We changed these lines of code: 

    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();


*/

















/* Challenge: Wire Up the Attack Button */













// import characterData from './data.js'
// import Character from './Character.js'

// /*
// CHALLENGE:
// 1 Set up a function called attack()
// 2 Wire up the attack button so when pressed, the 
// function logs out 'attack button working!'
// 3 Do this without declaring any new variables
// **hint.md for help!!**
// */


// // An Example

// // modalCloseBtn.addEventListener('click', function(){
// //    modal.style.display = 'none'
// // })

// function attack() {
//    console.log('attack button is working!')
// }

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById('attack-button').addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()











/* Challenge: Launch the First Attack */








// import characterData from './data.js'
// import Character from './Character.js'
// // import { getDiceRollArray } from './utils.js';

// /*
// CHALLENGE
// 1. Make the attack button trigger a dice roll for both
// wizard and orc (which method on the constructor does that??)
// 2. Make sure the new dice score shows in the app
// **hint.md for help!!**
// */

// function attack(){
//     render()
// }

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()












/* Challenge: Fix the Render Dice Problem: Part 2 */










// import characterData from './data.js'
// import Character from './Character.js'

// function attack(){
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     render()
// }

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()













/* Challenge: Inflicting Damage */












// import characterData from './data.js'
// import Character from './Character.js'

// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()

//     /* Solution */

//     wizard.takeDamage()
//     orc.takeDamage()
//     render()
// }


// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()














/* Challenge: Inflicting Damage: Part 2 */













// import characterData from './data.js'
// import Character from './Character.js'


// /*CHALLENGE
// 1. Think what data we need to pass to our new
// takeDamage method.
// 2. Add that data as an argument each time we call
// takeDamage below.
// 3. In the takeDamage method, take in the data as a 
// parameter called 'attackScoreArray' and log it out.
// **hint.md for help!** 
// */

// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore) // Because we need to pass the 
//     orc.takeDamage(wizard.currentDiceScore) // score of the damage inflicted on the opponent
//     render()
// }


// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()



















/* Challenge: Calling endGame() when either character is dead */















// import characterData from './data.js'
// import Character from './Character.js'

// /*
// CHALLENGE
// 1. Inside attack(), check if either character is dead.
// If they are, call a new function called endGame().
// 2. Set up the new function endGame() and have it 
// log out "the game is over".
// */

// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore)
//     orc.takeDamage(wizard.currentDiceScore)
//     render()
   
   
//     /* My Solution */

//    /* if (orc.dead === true) {
//       endGame()
//    } else if (wizard.dead === true) {
//       endGame()
//    } */

   
//    /* Tom's Solution */

   
//    /* if (wizard.dead === true || orc.dead === true) {
//       endGame()
//    } */


//    /* Even better solution */

//    if (wizard.dead || orc.dead) {
//       endGame()
//    }
// }


// function endGame() {
//    console.log("The game is over")
// }


// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()
















/* Challenge: The Ternary Operator */















// import characterData from './data.js'
// import Character from './Character.js'

// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore)
//     orc.takeDamage(wizard.currentDiceScore)
//     render()
//     if(wizard.dead || orc.dead){
//         endGame()
//     }
// }

// /*CHALLENGE
// 1. Inside endGame(), create a const called endMessage. 
// 2. Figure out how to set endMessage to say either "The 
// Wizard Wins", "The Orc is Victorious", or "No victors - 
// all creatures are dead", depending on the health scores 
// of the characters.
// 3. Log out endMessage
// */

// function endGame(){
   
//    /* My Solution */
   
//    /* const endMessage = wizard.dead ? 'The Orc is Victorious' 
//    : orc.dead ? 'The Wizard Wins'
//    : 'No victors - all creatures are dead' */

//    /* Tom's Solution */

//    const endMessage = wizard.health === 0 && orc.health === 0 ? 'No victors - all creatures are dead' 
//    : wizard.health > 0 ? 'The Wizard Wins' 
//    : 'The Orc is Victorious'
    
//    console.log(endMessage)
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()
















/* Challenge: endGame() Part 2 */
















// import characterData from './data.js'
// import Character from './Character.js'


// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore)
//     orc.takeDamage(wizard.currentDiceScore)
//     render()
//     if(wizard.dead || orc.dead){
//         endGame()
//     }
// }

// /*CHALLENGE
// 1. Create a second const in endGame called endEmoji.
// 2. Figure out how to set it to hold the emoji "🔮" if the 
// wizard wins, and "☠️" if the orc wins. If both characters 
// are dead use "☠️".
// 3. Finally, take the html template string below render it 
// to the screen so it replaces everything else when the game 
// is over.
// `<div class="end-game">
//         <h2>Game Over</h2>
//         <h3>${endMessage}/h3>
//         <p class="end-emoji">${endEmoji}</p>
//     </div>` 
// */

// function endGame(){
//    const endMessage = wizard.health === 0 && orc.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//         "The Orc is Victorious"

//    /* My Solution */
   
   
//    /* const endEmoji = wizard.health === 0 && orc.health === 0 ?
//          "☠️" :
//          wizard.health > 0 ? "🔮" :
//          "☠️" */

   
//    /* Tom's Solution */

   
//    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

   
//    /* Now, to render the html string, do this: */

//    document.body.innerHTML = 
//       `<div class="end-game">
//          <h2>Game Over</h2>
//          <h3>${endMessage}</h3>
//          <p class="end-emoji">${endEmoji}</p>
//       </div>`
    
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()






















/* Challenge: Adding More Monsters */

















// import characterData from './data.js'
// import Character from './Character.js'

// let monstersArray = ["orc", "demon", "goblin"];

// /*
// Challenge
// 1. Create a function called getNewMonster.
// 2. Write logic inside the function that takes the first 
// monster from monstersArray and extracts that monster's 
// data from characterData.
// 3. Save that data to a new const called nextMonsterData.
// **hint.md for help!!**
// */


// function getNewMonster() {
//    const nextMonsterData = characterData[monstersArray.shift()]
//    //characterData[orc]
// }


// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore)
//     orc.takeDamage(wizard.currentDiceScore)
//     render()
    
//         if(wizard.dead || orc.dead){
//             endGame()
//         }      
// }

// function endGame() {
//     const endMessage = wizard.health === 0 && orc.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//             "The Orc is Victorious"

//     const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//     document.body.innerHTML = `
//         <div class="end-game">
//             <h2>Game Over</h2> 
//             <h3>${endMessage}</h3>
//             <p class="end-emoji">${endEmoji}</p>
//         </div>
//         `
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()




















/* Challenge: Adding More Monsters Part 2 */


















// import characterData from './data.js'
// import Character from './Character.js'

// /*
// Challenge
// 1. Make it so getNewMonster returns a new instance of Character. Think
// what argument you should be passing. If there are no more monsters in the 
// array, getNewMonster should return an empty object {}.
// 2. Down near the bottom of the file, set a new variable "monster" equal 
// to our new function getNewMonster.
// 3. Delete any code we no longer need.
// - The app will still be broken - don't worry for now!
// **hint.md for help!!**


// Part 1
// - You should use a ternary.
// - Character takes in some data as a parameter. Which variable 
//   gives you access to the current monster's data?
  
// Part 2
// - Think! Is this variable going to be updated or remain constant?


// */

// let monstersArray = ["orc", "demon", "goblin"]

// function getNewMonster() {
//     const nextMonsterData = characterData[monstersArray.shift()]

//    return nextMonsterData ? new Character(nextMonsterData) : {}

//    // What this is asking is, does nextMonsterData have a value. 
//    // Will it return data, if so, return a new instance of Character
//    // with this data passed in as an argument. 
//    // If not,then return an empty object {}
    
// }

// function attack() {
//     wizard.getDiceHtml()
//     orc.getDiceHtml()
//     wizard.takeDamage(orc.currentDiceScore)
//     orc.takeDamage(wizard.currentDiceScore)
//     render()
    
//         if(wizard.dead || orc.dead){
//             endGame()
//         }      
// }

// function endGame() {
//     const endMessage = wizard.health === 0 && orc.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//             "The Orc is Victorious"

//     const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//     document.body.innerHTML = `
//         <div class="end-game">
//             <h2>Game Over</h2> 
//             <h3>${endMessage}</h3>
//             <p class="end-emoji">${endEmoji}</p>
//         </div>
//         `
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = orc.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// // const orc = new Character(characterData.monster) 

// // Deleting this line of code because the orc is now a part of
// // this array and so we don't need it any longer

// let monster = getNewMonster()

// render()

















/* Challenge: Back to one Monster

Get the app working again with just one monster 

*/



















// import characterData from './data.js'
// import Character from './Character.js'

// /*
// Challenge
// 1. See if you can get the app to work with just 
// one monster again.
// **hint.md for help!!**
// */


// let monstersArray = ["orc", "demon", "goblin"]

// function getNewMonster() {
//     const nextMonsterData = characterData[monstersArray.shift()]
//     return nextMonsterData ? new Character(nextMonsterData) : {}
// }

// function attack() {
//     wizard.getDiceHtml()
//     monster.getDiceHtml()
//     wizard.takeDamage(monster.currentDiceScore)
//     monster.takeDamage(wizard.currentDiceScore)
//     render()
    
//         if(wizard.dead || monster.dead){
//             endGame()
//         }      
// }

// function endGame() {
//     const endMessage = wizard.health === 0 && monster.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//             "The Orc is Victorious"

//     const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//     document.body.innerHTML = `
//                 <div class="end-game">
//                     <h2>Game Over</h2> 
//                     <h3>${endMessage}</h3>
//                     <p class="end-emoji">${endEmoji}</p>
//                 </div>
//                 `
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = monster.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// let monster = getNewMonster()
// render()



















/* Challenge: When One Monster Dies, Another Takes Its Place */




















// import characterData from './data.js'
// import Character from './Character.js'

// let monstersArray = ["orc", "demon", "goblin"]

// function getNewMonster() {
//     const nextMonsterData = characterData[monstersArray.shift()]
//     return nextMonsterData ? new Character(nextMonsterData) : {}
// }

// /*
// Challenge
// 1. Change the attack function so that when a monster dies, 
// the next monster replaces it. If there are no more monsters,
// call endGame(). 
// 2. Make sure that endGame() still gets called if the wizard
// is killed.

// Firstly,  check if the wizard is alive. If he is not, call 
// endGame(). If he is, use an "else if" to check if the current 
// monster is still alive.
// If the current monster is dead, you will need to nest an
// if statement and use it to check if there are more monsters
// left in monstersArray (you can tell this from checking its 
// length!)
// If there are more monsters to come, use the function
// getNewMonster() to re-assign a monster to the "monster" variable 
// we created using a "let" down at the bottom of the file.
// If there are no more monsters, call endGame().

// */

// function attack() {
//     wizard.getDiceHtml()
//     monster.getDiceHtml()
//     wizard.takeDamage(monster.currentDiceScore)
//     monster.takeDamage(wizard.currentDiceScore)
//     render()
    
//         /*change the code below this line*/
//       //   if(wizard.dead || monster.dead){
//       //       endGame()
//       //   }    

//       /* Firstly, do this */
//        if(wizard.dead) {
//          endGame()
//        }
//        else if(monster.dead){
//          if(monstersArray.length > 0){
//             monster = getNewMonster()
//             render()
//          }
//          else {
//             endGame()
//          }
//        } 
   
// }

// function endGame() {
//     const endMessage = wizard.health === 0 && monster.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//             "The Orc is Victorious"

//     const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//     document.body.innerHTML = `
//         <div class="end-game">
//             <h2>Game Over</h2> 
//             <h3>${endMessage}</h3>
//             <p class="end-emoji">${endEmoji}</p>
//         </div>
//         `
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = monster.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// let monster = getNewMonster()
// render()
























/* Challenge: Improve the UX with setTimeout */




















// import characterData from './data.js'
// import Character from './Character.js'

// let monstersArray = ["orc", "demon", "goblin"]

// function getNewMonster() {
//     const nextMonsterData = characterData[monstersArray.shift()]
//     return nextMonsterData ? new Character(nextMonsterData) : {}
// }

// /*
// Challenge
// 1. Add a pause of 1 second between a monster dying and
// another monster taking it's place.
// 2. Add a pause of 1.5 seconds between the last monster 
// or the wizard dying, and the endMessage being displayed.
// */


// function attack() {
//     wizard.getDiceHtml()
//     monster.getDiceHtml()
//     wizard.takeDamage(monster.currentDiceScore)
//     monster.takeDamage(wizard.currentDiceScore)
//     render()
    
//     if(wizard.dead){
//         endGame()
//     }
//     else if(monster.dead){
//         if(monstersArray.length > 0){
//             setTimeout(() => {
//                 monster = getNewMonster()
//                 render()
//             }, 1500)
//             // monster = getNewMonster() These two lines go in the setTimeout function
//             // render()
//         }
//         else{
//             endGame()
//         }
//     }
// }

// function endGame() {
//     const endMessage = wizard.health === 0 && monster.health === 0 ?
//         "No victors - all creatures are dead" :
//         wizard.health > 0 ? "The Wizard Wins" :
//             "The Orc is Victorious"

//     const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//     setTimeout(() => {
//         document.body.innerHTML = `
//         <div class="end-game">
//             <h2>Game Over</h2> 
//             <h3>${endMessage}</h3>
//             <p class="end-emoji">${endEmoji}</p>
//         </div>
//         `
//     }, 1500)
//     // document.body.innerHTML = `      This code now goes into the setTimeout function
//     //     <div class="end-game">
//     //         <h2>Game Over</h2> 
//     //         <h3>${endMessage}</h3>
//     //         <p class="end-emoji">${endEmoji}</p>
//     //     </div>
//     //     `
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// function render() {
//     document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
//     document.getElementById('monster').innerHTML = monster.getCharacterHtml()
// }

// const wizard = new Character(characterData.hero)
// let monster = getNewMonster()
// render()






















/* Challenge: Improve the UX - disable the button */




















import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

/*
Challenge
1. Disable the user's ability to attack when a monster dies.
2. Reneable the user's ability to attack when a new monster
loads.
3. When the game is over, disable the user's ability to attack.
**hint.md for help!!**
*/


/* Hint: 

Set up a variable called "isWaiting" and
initialise it to false.

Add an if statement inside the attack function which
wraps all of the existing code in that function.
Set it so that code only runs when isWaiting is false.

Now set isWaiting to true whenever you want to stop 
a user's ability to press attack.

Remember to set isWaiting to false whenever you want
a user to regain the ability to press attack. 

*/

// Can use the ! with isWaiting since
// you only want it to run
// if the boolean is false


function attack() {
    if(!isWaiting) {
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        
        if(wizard.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
        }
    } 
}

function endGame() {
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
            "The monsters are Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()