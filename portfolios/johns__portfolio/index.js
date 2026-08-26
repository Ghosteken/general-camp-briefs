const sidebar = document.querySelector('.sidebar');
const burger = document.getElementById('burger');
const sidebarClose = document.getElementById('sidebarClose');

function openBar(){
   if(sidebar.classList.contains('open')){
    sidebar.classList.remove('open');
   }
   else {
    sidebar.classList.add('open');
   }
}

burger.addEventListener('click', openBar);

sidebarClose.addEventListener('click', function(event){
    event.preventDefault();
    openBar();
});

// Carousel: scroll the project cards one card at a time
const track = document.querySelector('.project_container');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

function scrollByOneCard(direction){
    const card = track.querySelector('.project_cards');
    const cardWidth = card.offsetWidth + 32; // card width + the 2rem gap
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

prevBtn.addEventListener('click', function(){
    scrollByOneCard(-1);
});

nextBtn.addEventListener('click', function(){
    scrollByOneCard(1);
});