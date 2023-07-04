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













function getDiceRollArray(diceCount) {
/* Challenge: 
1. Instead of the for loop, use an Array constructor to 
  create a new array which is diceCount length.
2. Fill the new array with zeros as its initial state.
3. Map over the new array directly (no need to declare a 
  new variable) and return a random number from 1-6 in 
  each element.
4. Delete all unnecessary code.
*/   

/* My Solution */

// const newDiceRolls = new Array(6).fill('0').map(function(number){
//    return newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
//       return `<div class="dice">${number}</div>`
// })
// return newDiceRolls


   /* Tom's Solution */

   return new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
   })
}

function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map(function(num){ 
       return  `<div class="dice">${num}</div>`
   }).join('')
}

const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "img/wizard.png",
   health: 60,
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "img/orc.png",
   health: 10,
   diceCount: 1
}

function renderCharacter(data) {
   const { elementId, name, avatar, health, diceCount } = data;
   const diceHtml = getDiceHtml(diceCount)

   document.getElementById(elementId).innerHTML =
       `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">    
               ${diceHtml}
           </div>
       </div>`;
}

renderCharacter(hero);
renderCharacter(monster);