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


const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "img/wizard.png",
   health: 60,
   diceRoll: 6
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "img/orc.png",
   health: 10,
   diceRoll: 4
}


/* Challenge 3: The renderCharacter function */


function renderCharacter(data) {
/*
Challenge:
    1. Make renderCharacter render out the character 
       from the object it is passed.
*/

 document.getElementById(data.elementId).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${data.name} </h4>
      <img class="avatar" src="${data.avatar}"/>
      <p class="health">health: <b> ${data.health} </b></p>
      <div class="dice-container">
         <div class="dice"> ${data.diceRoll} </div>
      </div>
   </div> 
`
}

renderCharacter(hero)
renderCharacter(monster)