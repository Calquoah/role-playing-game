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









const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "img/wizard.png",
   health: 60,
   diceRoll: [3, 1, 4],
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "img/orc.png",
   health: 10,
   diceRoll: [6],
   diceCount: 1
}

/*
CHALLENGE
1. Instead of the for loop, map over the diceRoll array
and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 
*/

function renderCharacter(data) {
   const { elementId, name, avatar, health, diceRoll, diceCount } = data;
   
   
   const diceHtml = diceRoll.map(function(number){
      return `<div class="dice">${number}</div>`
   }).join('');
   
   
   // for (let i = 0; i < diceRoll.length; i++) {
   //     diceHtml += `<div class="dice">${diceRoll}</div>`
   // }

   document.getElementById(elementId).innerHTML =
       `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">
               ${diceHtml}
           </div>
       </div>`
}

renderCharacter(hero);
renderCharacter(monster);