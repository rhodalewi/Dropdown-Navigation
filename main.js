
const features = document.querySelector('.features');
const featuresDropdown = document.querySelector('.features-dropdown');
const pointer = document.querySelector('.arrow');
const company = document.getElementById('company');
const companyDropdown = document.querySelector('.company-dropdown');
const companyPointer = document.querySelector('.company-arrow');
const menuIcon = document.querySelector('.menuIcon');
const closeMenu = document.querySelector('.closeMenu');
const mobileSideBar = document.querySelector('.right-header');
const toggleMenu = document.querySelector('.toggleMenu');
const body = document.querySelector('.body');


// SHOW AND HIDE DROPDOWN
features.addEventListener('click', (e) => {
    e.preventDefault();

    if (featuresDropdown.style.display === 'flex') {
        featuresDropdown.style.display = 'none';
        pointer.classList.remove('arrowUp');
    } else {
        featuresDropdown.style.display = 'flex';
        pointer.classList.add('arrowUp');
    }
});

company.addEventListener('click', (e) => {
    e.preventDefault();

    if (companyDropdown.style.display === 'flex') {
        companyDropdown.style.display = 'none';
        companyPointer.classList.remove('arrowUp');
    } else {
        companyDropdown.style.display = 'flex';
        companyPointer.classList.add('arrowUp');
    }
});


//OPEN AND CLOSE THE MENU BAR
toggleMenu.addEventListener('click', () => {

    if (menuIcon.style.display === 'block') {
        menuIcon.style.display = 'none';
        closeMenu.style.display = 'block';
        mobileSideBar.classList.add('show')
        closeMenu.classList.add('change');
        body.style.display = 'block';

    } else {
        menuIcon.style.display = 'block';
        closeMenu.style.display = 'none';
        mobileSideBar.classList.remove('show');
        closeMenu.classList.remove('change');
        body.style.display = 'none';
    }
})