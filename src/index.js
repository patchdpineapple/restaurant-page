
import { homepage } from './homepage.js';
import { menu } from './menu.js';
import { contacts } from './contacts.js';


homepage.initialize();

const index = (function () {


    function addevents() {

        document.getElementById('btnHome').addEventListener('click', displayHomePage);
        document.getElementById('btnMenu').addEventListener('click', displayMenuPage);
        document.getElementById('btnContacts').addEventListener('click', displayContactsPage);

    }

    function displayHomePage() {
        document.getElementById('tabcontents').remove();
        document.getElementById('btnHome').classList.add('clicked');
        document.getElementById('btnMenu').classList.remove('clicked');
        document.getElementById('btnContacts').classList.remove('clicked');
        homepage.display();
    }

    function displayMenuPage() {
        document.getElementById('tabcontents').remove();
        document.getElementById('btnHome').classList.remove('clicked');
        document.getElementById('btnMenu').classList.add('clicked');
        document.getElementById('btnContacts').classList.remove('clicked');
        menu.display();
    }

    function displayContactsPage() {
        document.getElementById('tabcontents').remove();
        document.getElementById('btnHome').classList.remove('clicked');
        document.getElementById('btnMenu').classList.remove('clicked');
        document.getElementById('btnContacts').classList.add('clicked');
        contacts.display();
    }

    return {
        addevents,
    }


})();


homepage.display();
index.addevents();
