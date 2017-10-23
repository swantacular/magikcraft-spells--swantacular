const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getitem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}