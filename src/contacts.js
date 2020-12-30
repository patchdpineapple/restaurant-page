const contacts = (function(){

    

    function display() {
       
        const tabcontents = document.createElement('div');
        tabcontents.setAttribute('id', 'tabcontents');

        const contactswrapper = document.createElement('div');
        contactswrapper.setAttribute('id', 'contactswrapper');

        const contact1 = document.createElement('div');
        contact1.textContent = 'Company Information';
        contact1.classList.add('contacts');
        contact1.classList.add('companyname');

        const contact2 = document.createElement('div');
        contact2.textContent = 'Business Address';
        contact2.classList.add('contacts');

        const contact3 = document.createElement('div');
        contact3.textContent = '10/F Jollibee Plaza Building, Emerald Ave., Ortigas Center, Pasig City 1600';
        contact3.classList.add('contacts');

        const contact4 = document.createElement('div');
        contact4.textContent = 'E-mail Address';
        contact4.classList.add('contacts');

        const contact5 = document.createElement('div');
        contact5.textContent = 'president@jollibee.com.ph';
        contact5.classList.add('contacts');

        const contact6 = document.createElement('div');
        contact6.textContent = 'Telephone Number';
        contact6.classList.add('contacts');

        const contact7 = document.createElement('div');
        contact7.textContent = '634-1111';
        contact7.classList.add('contacts');

        const contact8 = document.createElement('div');
        contact8.textContent = 'Fax Number';
        contact8.classList.add('contacts');

        const contact9 = document.createElement('div');
        contact9.textContent = '(+632) 8634-1111';
        contact9.classList.add('contacts');

        const contact10 = document.createElement('div');
        contact10.textContent = 'Website';
        contact10.classList.add('contacts');

        const contact11 = document.createElement('div');
        contact11.textContent = 'http://www.jollibee.com.ph';
        contact11.classList.add('contacts');


        document.getElementById('content').append(tabcontents);
        tabcontents.append(contactswrapper);
        contactswrapper.append(contact1);
        contactswrapper.append(contact2);
        contactswrapper.append(contact3);
        contactswrapper.append(contact4);
        contactswrapper.append(contact5);
        contactswrapper.append(contact6);
        contactswrapper.append(contact7);
        contactswrapper.append(contact8);
        contactswrapper.append(contact9);
        contactswrapper.append(contact10);
        contactswrapper.append(contact11);

    }

    

    return {
        display,
    }

})();


export {
    contacts,
}