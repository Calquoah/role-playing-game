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












import characterData from './data.js'
import Character from './Character.js'


/*CHALLENGE
1. Think what data we need to pass to our new
takeDamage method.
2. Add that data as an argument each time we call
takeDamage below.
3. In the takeDamage method, take in the data as a 
parameter called 'attackScoreArray' and log it out.
**hint.md for help!** 
*/

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore) // Because we need to pass the 
    orc.takeDamage(wizard.currentDiceScore) // score of the damage inflicted on the opponent
    render()
}


function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()