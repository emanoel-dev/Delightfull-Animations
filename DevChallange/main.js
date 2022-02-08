function btnOpen() {
    if (document.getElementById('toogle').click) {
    const menu = document.getElementById('menu')
    const nav = document.getElementById('nav')
    menu.classList.toggle('menuBgOpen')
    nav.classList.toggle('menuOpen')

} else {
    void();
}
};

