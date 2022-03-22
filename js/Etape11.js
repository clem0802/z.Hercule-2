/**
 * Ceci est un simple commentaire
 * Il utilise les convention de JSDOC https://jsdoc.app/about-getting-started.html
 * C'est pratique pour donner les infos essentielles en gardant un code lisible
 * En plus il est possible de s'en servir pour générer des documentations automatiques
 * 
 * @property {Array} friends - All the friends
 * @property {object} profil  - Profile info
 */

 const app = { 
    profil: { //!Etape 2
      name: 'Hercule',
      inRelationship: true,
      job: 'Demi-dieu',
      age: 35,
      department: 75,
      arm: 60.5,
    },
    
    friends: [ //! Etape3
      'Jupiter',
      'Junon',
      'Alcmène',
      'Déjanire',
    ],
  
    
    // What needs to be done at launch
    init: function() {
      base.fillProfil(app.profil); //! E2
      base.printFriends(app.friends); //! E3
      base.setBestFriend(app.friends[0]); //! E3
      app.createTitle(); //! E4
      app.displayAllWorks(); //! E5
      app.checkAvalaibility(); //! E6
      app.displayNickname(); //! E7
      app.calculTrends(); //! E10
      app.displayActivities(); //! E12
      app.initHandlers(); //! E9
    },
  
    /**
     * Generate a nickname
     * @param {string} firstname - A firstname
     * @param {number|string} suffix - A string or number for the department
     * @returns {string} The nickname
     */
  
   
    // Create an h1 element
    createTitle: function() { //! Etape 4
      const titleElem = document.createElement('h1');
      titleElem.textContent = 'Vous consultez le profil de Hercule';
      titleElem.className = 'banner__title';
      const headerElem = document.getElementById('header-banner');
      headerElem.appendChild(titleElem);
    },
    
    // Show all works one by one
    displayAllWorks: function() { //! Etape 5
      for (let index = 0; index < 12; index++) {
        base.displayWork(index);
      }
    },
  
    // Set the avalailability according to time
    checkAvalaibility: function() { //! Etape 6
      const hour = base.getHour();
      const availabilityElem = document.getElementById('availability');
      if (hour > 20 || hour < 8) {
        availabilityElem.textContent = 'Non disponible';
        availabilityElem.classList.add('off');
      }
      else {
        availabilityElem.textContent = 'Disponible';
      }
    },
  
    // Sets the nickname
    nickname: function(firstname, suffix) { //! Etape 7
      const result = firstname + '-du-' + suffix;
      return result;
    },
  
    displayNickname: function() { //! Etape 7
      const herculeNickname = app.nickname(app.profil.name, app.profil.department);
      const profilNameElem = document.querySelector('#profil-name');
      profilNameElem.textContent = herculeNickname;
    },
    
    //Click handler for the menu toggler
    handleClick: function() { //! Etape 8
      var bannerElem = document.getElementById('header-banner');
      bannerElem.classList.toggle('banner--open');
    },
  
    // Listen events
    initHandlers: function() { //! Etape 9
      const togglerElem = document.getElementById('menu-toggler'); // le button "Menu"
      togglerElem.addEventListener('click', app.handleClick);
      
      const formElem = document.getElementById('contact');
      formElem.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Hercule ne souhaite pas être dérangé');
      });
    },
  
  
    /**
     * Give a percentage 
     * @param {number} value - Relative value
     * @param {number} total - Total value
     * @returns {number} The percentage
     */
  
    percent: function(value, total) { //! Etape 10
      let result = value / total * 100;
      result = Math.round(result);
      return result;
    },
    /**
     * Write percentage on one trend
     * @param {number} total -  Number of votes
     * @param {name} string - key for the character name
     */
    setOneTrend: function(total, name) { //! Etape 10
      const percent = app.percent(base.vote[name], total);
      const popularityElem = document.querySelector(`#trends-${name} .people__popularity`);
      const barElem = document.querySelector(`#trends-${name} .people__bar`);
      popularityElem.textContent = `${percent}%`;
      barElem.style.width = `${percent}%`;
    },
    // Set votes for hercule and cesar
    calculTrends: function() { //! Etape 10
      const voteTotal = base.vote.hercule + base.vote.cesar;
      app.setOneTrend(voteTotal, 'hercule');
      app.setOneTrend(voteTotal, 'cesar');
    },
  
    // Filter and display the activities of Hercule
    displayActivities: function() { //! Etape 12
      const activitiesElem = document.getElementById('activities');
      activitiesElem.classList.remove('hidden');
      const tasksElem = activitiesElem.querySelector('.tasks');
      for (let index = 0; index < base.activities.length; index++) {
        const activity = base.activities[index];
        if (activity.finished && activity.author === 'Hercule') {
          const liElem = document.createElement('li');
          liElem.textContent = activity.title;
          liElem.className = 'tasks__item';
          const spanElem = document.createElement('span');
          spanElem.textContent = 'tâche accomplie';
          spanElem.className = 'tasks__info';
          liElem.appendChild(spanElem);
          tasksElem.appendChild(liElem);
        }
      }
    },
  };
  
  // Launch init when DOM is ready
  document.addEventListener('DOMContentLoaded', app.init);
