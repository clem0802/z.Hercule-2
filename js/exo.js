// ETAPE 1 (for execution)
console.log('test 1...2...1...2');
console.log(1, 2, 1, 2);


// ETAPE 2 (object)(with the method "fillProfil")
let profil = {   
    name: "Hercule",
    job: "Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
};
console.log(profil); 
base.fillProfil(profil);
//base.fillProfil('profil', 'Hercule') => this worked only for half, result shown in yellow color


// ETAPE 3 (array)(with the method "printFriends")
let friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"]; //! don't forget double-quotes for strings !!!!
console.log(friends); 
base.printFriends(friends);
base.setBestFriend(friends[0]); 


// ETAPE 4 (DOM) 
const h1Element = document.createElement('h1'); 
h1Element.classList.add("banner__title"); // (ou bien) h1Element.className = 'banner__title';
h1Element.textContent = "Vous consultez le profil de Hercule";
document.getElementById('header-banner').appendChild(h1Element); 
                 //! document.qqch....(when html is concerned)
                 //! ou bien => document.querySelector('#header-banner').appendChild(h1Element);


// ETAPE 5 (loop = boucle)
for (let i = 0 ; i < 12 ; i++) { 
    base.displayWork(i);
}


// ETAPE 6 (condition = getHour)
// availElement.classList.add('off');
// var let const, we use them to declare variables
//! "const" ne change pas, something constant
// here to store things up in a variable : "heure"
const heure = base.getHour() //! NO SPACE between getHour and () please !!

if (heure < 8 || heure > 20){
    document.getElementById('availability').classList.add('off');
    document.getElementById('availability').textContent='Non disponible';
}
else {
    document.getElementById('availability').textContent='Disponible';
}

// if(hour > 8 && hour < 20) {
//     document.querySelector('#availability').textContent = "Disponible"
// } else {
//     document.querySelector('#availability').textContent = "Non disponible"
//     document.querySelector('#availability').className = "off";
// } //! ici c'est "&&"  faut que toutes les conditions soient true



// ETAPE 7 (function) (with many difficulties.....)
function pseudo (name, department) {
    const profilName = document.getElementById('profil-name');
    profilName.textContent = name + '-du-' + department;
    // document.getElementById('profil-name') => what I've tried
    // return ('name ' + du + ' department'); => what I've tried, in vain   
    //! (ou bien =>  document.querySelector('#profil-name').textContent = `${name}-du-${department}`;
} 
pseudo (profil.name, profil.department);


// ETAPE 8 (eventListener) \o/ \o/ \o/ \o/
document.getElementById('menu-toggler').addEventListener('click', myFunction);
function myFunction() {
document.getElementById('header-banner').classList.toggle('banner--open');
}
// http://www.w3bai.com/fr/jsref/met_element_addeventlistener.html //!(thousands of thanks to this link!!)



// ETAPE 9 (event bis) (barricade the clic function)
document.getElementById('contact').addEventListener('submit', setFormSubmit);
function setFormSubmit(event) {
    event.preventDefault() //! this will prevent the contact form's content from being sent, 
                              //! have to find teachers' corrrections about this topic (Yann or Noé)...
    alert("Hercule ne souhaite pas être dérangé")
}




//!! FROM HERE, bonus // (answers from teacher)
// ETAPE 10 (algo)
function percent(value, total){
    var result = value / total * 100;
    result = Math.round(result);
    return result;
}
var voteTotal = base.vote.hercule + base.vote.cesar;
var herculePercent = percent(base.vote.hercule, voteTotal);
var herculeElem = document.querySelector('#trends-hercule .people__popularity');
var herculeBarElem = document.querySelector('#trends-hercule .people__bar');
herculeElem.textContent = herculePercent + '%';
herculeBarElem.style.width = herculePercent + '%';
var cesarPercent = percent(base.vote.cesar, voteTotal);
var cesarElem = document.querySelector('#trends-cesar .people__popularity');
var cesarBarElem = document.querySelector('#trends-cesar .people__bar');
cesarElem.textContent = cesarPercent + '%';
cesarBarElem.style.width = cesarPercent + '%';

// ETAPE 11 (object avancé) 

// ETAPE 12 (algo, la totale)
var activitiesElem = document.getElementById('activities');
activitiesElem.classList.remove('hidden');
var tasksElem = activitiesElem.querySelector('.tasks');
for (var index = 0; index < base.activities.length; index++) {
  var activity = base.activities[index];
  if (activity.finished && activity.author === 'Hercule') {
    var liElem = document.createElement('li'); //! on a créé un "liElem"
    liElem.textContent = activity.title;
    liElem.className = 'tasks__item';
    var spanElem = document.createElement('span'); //! on a créé un "spanElem"
    spanElem.textContent = 'tâche accomplie';
    spanElem.className = 'tasks__info';
    liElem.appendChild(spanElem);
    tasksElem.appendChild(liElem);
  }
}
