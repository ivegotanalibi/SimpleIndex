//  let form = document.querySelector('#form');

let cardHolder = document.querySelector('#card-holder');

let submitBtn = document.querySelector('#submit');

let nameInput = document.querySelector('#name');
let aboutInput = document.querySelector('#about');
let skillsInput = document.querySelector('#skills');
let avatarInput = document.querySelector('#avatar');

// console.log(nameInput.value);

let trainee = [];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    

    const   name = nameInput.value;
   const about = aboutInput.value;
   const skills = skillsInput.value;
    const avatar = avatarInput.value;

    // console.log(avatar);
    let traineeObj = {

        name: name,
        about: about,
        skills: skills,
        avatar:avatar
    }
    // console.log(traineeObj);

    trainee.push(traineeObj);

    createCard(name,about,avatar,skills);

    // reset input
    resetInput();
   

    //  e.preventDefault();

    
})

function createCard(name,about,avatar,skills){


const parentDiv = document.createElement('div');
parentDiv.setAttribute('class','card');

const img = document.createElement('img');
img.setAttribute('src', avatar);
img.setAttribute('alt','Human Image');

const skillsDiv =  document.createElement('div');
skillsDiv.setAttribute('class','skill-set');

 skills = skills.split(",");
for (let i = 0; i < skills.length; i++) {
    const span = document.createElement('span');
    span.textContent = skills[i];
    skillsDiv.append(span);        
}

const h2 = document.createElement('h2');
h2.textContent = name;

const p = document.createElement('p');
p.textContent = about;

const readMoreDiv =  document.createElement('div');
readMoreDiv.setAttribute('class','button-wrapper');

const readMoreBtn =  document.createElement('button');
readMoreBtn.textContent = "read more...";

readMoreBtn.addEventListener('click', (e) => {
    alert(name);
})

readMoreDiv.append(readMoreBtn);

//Combining all together
parentDiv.append(img);
parentDiv.append(skillsDiv);
parentDiv.append(h2);
parentDiv.append(p);
parentDiv.append(readMoreDiv);

cardHolder.appendChild(parentDiv);

 //Assignment
// add read more button
// onclick, alert the the name of bearer
// create a function to reset inputs when user have submitted

}

function resetInput(){
nameInput.value ='';
aboutInput.value ='';
 skillsInput.value='';
 avatarInput.value='';
}

{/* <div class="card">
<img src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Human Image">

<div class="skill-set">
    <span>HTML</span>
    <span>CSS</span>
    <span>Angular</span>
</div>
<h2>Wale Cole</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure libero ullam molestiae quo beatae, impedit in sapiente vitae aut repudiandae. Aliquam quia laborum consequuntur suscipit nobis tempora totam? Libero, distinctio!</p>
<div  class="button-wrapper">
    <button>Read More...</button>
</div>
</div> */}