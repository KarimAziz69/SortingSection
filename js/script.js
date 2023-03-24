const allBtn = document.querySelector('.allBtn');
const appBtn = document.querySelector('.appBtn');
const cardBtn = document.querySelector('.cardBtn');
const webBtn = document.querySelector('.webBtn');

const allSection = document.querySelector('.all');
const appSection = document.querySelector('.app');
const cardSection = document.querySelector('.card01');
const webSection = document.querySelector('.web');

allBtn.addEventListener('click', ()=>{
    allBtn.classList.replace('btn-outline-danger','btn-danger')
    appBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')
    webBtn.classList.replace('btn-danger', 'btn-outline-danger')


    appSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    webSection.classList.add('d-none');
    
    allSection.classList.remove('d-none');
    allSection.classList.add('d-grid');
})

appBtn.addEventListener('click', ()=>{
    appBtn.classList.replace('btn-outline-danger','btn-danger')
    allBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')
    webBtn.classList.replace('btn-danger', 'btn-outline-danger')


    allSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    webSection.classList.add('d-none');
    
    appSection.classList.remove('d-none');
    appSection.classList.add('d-grid');
})


cardBtn.addEventListener('click', ()=>{
    cardBtn.classList.replace('btn-outline-danger','btn-danger')
    allBtn.classList.replace('btn-danger', 'btn-outline-danger')
    appBtn.classList.replace('btn-danger', 'btn-outline-danger')
    webBtn.classList.replace('btn-danger', 'btn-outline-danger')


    allSection.classList.add('d-none');
    appSection.classList.add('d-none');
    webSection.classList.add('d-none');
    
    cardSection.classList.remove('d-none');
    cardSection.classList.add('d-grid');
})


webBtn.addEventListener('click', ()=>{
    webBtn.classList.replace('btn-outline-danger','btn-danger')
    allBtn.classList.replace('btn-danger', 'btn-outline-danger')
    appBtn.classList.replace('btn-danger', 'btn-outline-danger')
    cardBtn.classList.replace('btn-danger', 'btn-outline-danger')

    appSection.classList.add('d-none');
    cardSection.classList.add('d-none');
    allSection.classList.add('d-none');
    
    webSection.classList.remove('d-none');
    webSection.classList.add('d-grid');
})
