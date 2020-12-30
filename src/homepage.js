const homepage = (function(){

    function initialize() {
        const content = document.getElementById('content');

        const logowrapper = document.createElement('div');
        logowrapper.classList.add('logowrapper');
        
        const logo = document.createElement('img');
        logo.setAttribute('src', "../img/jollibeelogo.png");
        logo.classList.add('logo');

        const tabs = document.createElement('div');
        tabs.setAttribute('id', 'tabs');

        const btnHome = document.createElement('button');
        btnHome.setAttribute('id', 'btnHome');
        btnHome.classList.add('buttons');
        btnHome.textContent = 'Home';
        const btnMenu = document.createElement('button');
        btnMenu.setAttribute('id', 'btnMenu');
        btnMenu.classList.add('buttons');
        btnMenu.textContent = 'Menu';
        const btnContacts = document.createElement('button');
        btnContacts.setAttribute('id', 'btnContacts');
        btnContacts.classList.add('buttons');
        btnContacts.textContent = 'Contact';

        content.append(logowrapper);
        content.append(tabs);
        logowrapper.append(logo);
        tabs.append(btnHome);
        tabs.append(btnMenu);
        tabs.append(btnContacts);
    }

    function display() {
       
        const tabcontents = document.createElement('div');
        tabcontents.setAttribute('id', 'tabcontents');

        const headline = document.createElement('h1');
        headline.textContent = 'Bida ang Saya!';
        headline.classList.add('headline');

        const food = document.createElement('img');
        food.setAttribute('src', '../img/jollibeefood.jpg');
        food.classList.add('food');

        const about = document.createElement('div');
        about.classList.add('about');

        const aboutp = document.createElement('p');
        aboutp.textContent = 'Jollibee is a Filipino multinational chain of fast food restaurants owned by ' + 
        'Jollibee Foods Corporation. As of April 2018, JFC had a total of about 1,200 Jollibee outlets worldwide ' + 
        'with presence in Southeast Asia, the Middle East, East Asia, North America, and Europe.';

        document.getElementById('content').append(tabcontents);
        tabcontents.append(headline);
        tabcontents.append(food);
        tabcontents.append(about);
        about.append(aboutp);
        
    }

    return {
        initialize,
        display,
    }

})();


export {
    homepage,
}