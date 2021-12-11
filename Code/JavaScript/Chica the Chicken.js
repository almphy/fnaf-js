//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Chica    ------------------------------------------------------------
//----------------------------------------------------   The      ------------------------------------------------------------
//----------------------------------------------------   Chicken  ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -
let cc_aggression = 0;
let cc_anger = 0;
let cc_please = 0;
let cc_total = 0;
let cc_random = 0;
let cc_time = 1;
let cc_half = 1;

let cc_move_min = Math.ceil(10000);
let cc_move_max = Math.floor(40000);

let cc_camera_min = Math.ceil(1);
let cc_camera_max = Math.floor(6);

let pots_min = Math.ceil(1);
let pots_max = Math.floor(5);

let cc_cam_1A = true;
let cc_cam_1B = false;
let cc_cam_4A = false;
let cc_cam_4B = false;
let cc_cam_6 = false;
let cc_cam_7 = false;
let chica_door = false;
let chica_door_checker = false;

//- audio -
cc_kitchen01 = new Audio("../Audio/pots01.wav");
cc_kitchen01.loop = true;

cc_kitchen02 = new Audio("../Audio/pots02.wav");
cc_kitchen02.loop = true;

cc_kitchen03 = new Audio("../Audio/pots03.wav");
cc_kitchen03.loop = true;

cc_kitchen04 = new Audio("../Audio/pots04.wav");
cc_kitchen04.loop = true;

cc_stinger = new Audio("../Audio/windowscare.wav");

let chicaMove = () => {
    cc_camera = Math.floor(Math.random() * (bb_camera_max - bb_camera_min)) + bb_camera_min;
    garble_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;

    switch (cc_camera) {
        case (1):
            cc_cam_1A = false;
            cc_cam_1B = true;
            cc_cam_4A = false;
            cc_cam_4B = false;
            cc_cam_6 = false;
            cc_cam_7 = false;

            cc_kitchen01.pause();
            cc_kitchen01.load();
            cc_kitchen02.pause();
            cc_kitchen02.load();
            cc_kitchen03.pause();
            cc_kitchen03.load();
            cc_kitchen04.pause();
            cc_kitchen04.load();

            if (camera) {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
                let static = 100;

                getEle("static").className = "static";

                deep_steps.volume = 1;
                deep_steps.play();

                if (garble_random == 1) {
                    garble01.play();
                }
                else if (garble_random == 2) {
                    garble02.play();
                }
                else if (garble_random == 3) {
                    garble03.play();
                }

                getEle("static").style.opacity = `${static}%`;

                setTimeout(() => {
                    let inter = setInterval(
                        function () {
                            getEle("static").style.opacity = `${static}%`;
                            static--;
                        }, 10);

                    setTimeout(() => {
                        clearInterval(inter);
                    }, 800);
                }, 2000);

            }
            else {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

                deep_steps.volume = .2;
                deep_steps.play();
            }

            break;
        case (2):
            cc_kitchen01.pause();
            cc_kitchen01.load();
            cc_kitchen02.pause();
            cc_kitchen02.load();
            cc_kitchen03.pause();
            cc_kitchen03.load();
            cc_kitchen04.pause();
            cc_kitchen04.load();
            cc_cam_1A = false;
            cc_cam_1B = false;
            cc_cam_4A = true;
            cc_cam_4B = false;
            cc_cam_6 = false;
            cc_cam_7 = false;

            if (camera) {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
                let static = 100;

                getEle("static").className = "static";

                deep_steps.volume = 1;
                deep_steps.play();

                if (garble_random == 1) {
                    garble01.play();
                }
                else if (garble_random == 2) {
                    garble02.play();
                }
                else if (garble_random == 3) {
                    garble03.play();
                }

                getEle("static").style.opacity = `${static}%`;

                setTimeout(() => {
                    let inter = setInterval(
                        function () {
                            getEle("static").style.opacity = `${static}%`;
                            static--;
                        }, 10);

                    setTimeout(() => {
                        clearInterval(inter);
                    }, 800);
                }, 2000);

            }
            else {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

                deep_steps.volume = .2;
                deep_steps.play();
            }
            break;
        case (3):
            cc_kitchen01.pause();
            cc_kitchen01.load();
            cc_kitchen02.pause();
            cc_kitchen02.load();
            cc_kitchen03.pause();
            cc_kitchen03.load();
            cc_kitchen04.pause();
            cc_kitchen04.load();
            cc_cam_1A = false;
            cc_cam_1B = false;
            cc_cam_4A = false;
            cc_cam_4B = true;
            cc_cam_6 = false;
            cc_cam_7 = false;

            if (camera) {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
                let static = 100;

                getEle("static").className = "static";

                deep_steps.volume = 1;
                deep_steps.play();

                if (garble_random == 1) {
                    garble01.play();
                }
                else if (garble_random == 2) {
                    garble02.play();
                }
                else if (garble_random == 3) {
                    garble03.play();
                }

                getEle("static").style.opacity = `${static}%`;

                setTimeout(() => {
                    let inter = setInterval(
                        function () {
                            getEle("static").style.opacity = `${static}%`;
                            static--;
                        }, 10);

                    setTimeout(() => {
                        clearInterval(inter);
                    }, 800);
                }, 2000);

            }
            else {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

                deep_steps.volume = .2;
                deep_steps.play();
            }
            break;
        case (4):
            cc_cam_1A = false;
            cc_cam_1B = false;
            cc_cam_4A = false;
            cc_cam_4B = false;
            cc_cam_6 = true;
            cc_cam_7 = false;

            pots_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;

            if (pots_random == 1)
            {
                cc_kitchen01.play();
            }
            else if (pots_random == 2)
            {
                cc_kitchen02.play();
            }
            else if (pots_random == 3)
            {
                cc_kitchen03.play();
            }
            else if (pots_random == 4)
            {
                cc_kitchen04.play();
            }

            if (camera) {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
                let static = 100;

                getEle("static").className = "static";

                deep_steps.volume = 1;
                deep_steps.play();

                if (garble_random == 1) {
                    garble01.play();
                }
                else if (garble_random == 2) {
                    garble02.play();
                }
                else if (garble_random == 3) {
                    garble03.play();
                }

                getEle("static").style.opacity = `${static}%`;

                setTimeout(() => {
                    let inter = setInterval(
                        function () {
                            getEle("static").style.opacity = `${static}%`;
                            static--;
                        }, 10);

                    setTimeout(() => {
                        clearInterval(inter);
                    }, 800);
                }, 2000);

            }
            else {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

                deep_steps.volume = .2;
                deep_steps.play();
            }
            break;
        case (5):
            cc_kitchen01.pause();
            cc_kitchen01.load();
            cc_kitchen02.pause();
            cc_kitchen02.load();
            cc_kitchen03.pause();
            cc_kitchen03.load();
            cc_kitchen04.pause();
            cc_kitchen04.load();
            cc_cam_1A = false;
            cc_cam_1B = false;
            cc_cam_4A = false;
            cc_cam_4B = false;
            cc_cam_6 = false;
            cc_cam_7 = true;

            if (camera) {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
                let static = 100;

                getEle("static").className = "static";

                deep_steps.volume = 1;
                deep_steps.play();

                if (garble_random == 1) {
                    garble01.play();
                }
                else if (garble_random == 2) {
                    garble02.play();
                }
                else if (garble_random == 3) {
                    garble03.play();
                }

                getEle("static").style.opacity = `${static}%`;

                setTimeout(() => {
                    let inter = setInterval(
                        function () {
                            getEle("static").style.opacity = `${static}%`;
                            static--;
                        }, 10);

                    setTimeout(() => {
                        clearInterval(inter);
                    }, 800);
                }, 2000);

            }
            else {
                getEle("map").src = "../Assets/map.png"
                getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

                deep_steps.volume = .2;
                deep_steps.play();
            }
            break;

    }
}
//- sprawdzanie chodzenia bonniego -
setInterval(() => {
    if (cc_cam_4B == true) {
        if (!chica_door_checker) {
            chica_door = true;
        }
    }
    else {
        chicaMove();
    }
}, Math.floor(Math.random() * (cc_move_max - cc_move_min)) + cc_move_min);

//- wkurw bonniego -
function chicaDoorFunction() {
    deep_steps.volume = 1;
    deep_steps.play();
    chica_door_checker = true;
    min = Math.ceil(10000);
    max = Math.floor(30000);
    cc_random = Math.floor(Math.random() * (max - min)) + min;

    cc_time = cc_random / 100;
    cc_half = cc_time * 50 / 100;

    if (!right_door) {
        if (!right_light) {
            cc_anger += 1;
        }
        else {
            cc_anger += 2;
        }
    }
    else {
        cc_please += 1.25;
    }

    setTimeout(() => {

        if (cc_anger > cc_please) {
            jumpscare.play();
            getEle("jumpscare").className = "jumpscare";
            getEle("jumpscare").src = "../Assets/Bonnie/jumpscare.gif";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
            }, 1500);
            return
        }
        else if (cc_please > cc_anger) {
            chica_door = false;
            cc_anger = 0;
            cc_please = 0;
            cc_time = 1;
            cc_half = 1;
            chicaMove();
            chica_door_checker = false;
            return
        }
    }, cc_random);
}

//- sprawdzanie czy bonnie jest przy drzwiach -
setInterval(() => {
    if (chica_door == true) {
        chicaDoorFunction();
        return
    }
    else {
        return
    }
}, 100);