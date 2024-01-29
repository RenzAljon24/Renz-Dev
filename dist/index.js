function show() {
    const menu = document.getElementById('menu');
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    menu.classList.toggle('-hidden');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
   
}
function tgdark() {
    const sun1 = document.getElementById('sunl');
    const moon1 = document.getElementById('moonl');
    const sunl = document.getElementById('sunL');
    const moonl = document.getElementById('moonL');

    document.documentElement.classList.toggle('dark');
    sun1.classList.toggle('hidden');
    moon1.classList.toggle('hidden');
    sunl.classList.toggle('hidden');
    moonl.classList.toggle('hidden');
}
window.scrollTo({
    behavior:"smooth",
});
const hyper = document.getElementById('hyper');

hyper.classList.add('scroll-smooth');