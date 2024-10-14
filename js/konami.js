function konami(callback) {
    let kkeys = [];
    let ikeys = [];
    // up,up,down,down,left,right,left,right,B,A
    const konami = '38,38,40,40,37,39,37,39,66,65';
    const iddqd = 'i,d,d,q,d';
    const hesoyam = 'h,e,s,o,y,a,m'
    return event => {
        kkeys.push(event.keyCode);
        ikeys.push(event.key);
        if (kkeys.toString().indexOf(konami) >= 0) {
            callback(event);
            kkeys = [];
            ikeys = [];
        }
        if (ikeys.toString().indexOf(iddqd) >= 0) {
            callback(event);
            kkeys = [];
            ikeys = [];
        }
        if (ikeys.toString().indexOf(hesoyam) >= 0) {
            callback(event);
            kkeys = [];
            ikeys = [];
        }
    };
}

let color = 1;

window.addEventListener('keydown', konami(event => {
    console.log(event.key)
    if (event.key === "a") {
        if (color) {
            document.querySelector(".stylesheet").setAttribute("href", "style2.css");
            color = 0;
        } else {
            document.querySelector(".stylesheet").setAttribute("href", "style.css");
            color = 1
        }
    }

    if (event.key === "d"){
        window.open("Assets/Sprites/DOOM.jpg")
    }

    if (event.key === "m"){
        window.open("Assets/Sprites/wierd.jpg")
    }
}));