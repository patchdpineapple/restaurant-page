const menu = (function() {

    function display() {
        const tabcontents = document.createElement('div');
        tabcontents.setAttribute('id', 'tabcontents');

        const menu = document.createElement('img');
        menu.setAttribute('src', './img/jollibeemenu.jpg');
        menu.classList.add('menu');

        document.getElementById('content').append(tabcontents);
        tabcontents.append(menu);
        
    }

    return {
        display,
    }

})();

export {
    menu,
}