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

setInterval(() => { 
    
    if (camera)
    {
        if (cam_6)
        {
            cc_kitchen01.volume = 1;
            cc_kitchen02.volume = 1;
            cc_kitchen03.volume = 1;
            cc_kitchen04.volume = 1;
        }
        else
        {
            cc_kitchen01.volume = .2;
            cc_kitchen02.volume = .2;
            cc_kitchen03.volume = .2;
            cc_kitchen04.volume = .2;
        }
    }
    else
    {
        cc_kitchen01.volume = .05;
        cc_kitchen02.volume = .05;
        cc_kitchen03.volume = .0505;
        cc_kitchen04.volume = .05;
    }

}, 100);

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
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_1B)
                {
                camChange('1B', 'Dinning Room');
                }
            }
            else {
                if (cam_1B)
                {
                camChange('1B', 'Dinning Room');
                }
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
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_4A)
                {
                camChange('4A', 'Right Corridor');
                }
            }
            else {
                if (cam_4A)
                {
                camChange('4A', 'Right Corridor');
                }
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
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_4B)
                {
                camChange('4B', 'Right Cubby');
                }
            }
            else {
                if (cam_4B)
                {
                camChange('4B', 'Right Cubby');
                }
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
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_6)
                {
                    camChange('6', 'Kitchen');
                }
            }
            else {
                if (cam_6)
                {
                    camChange('6', 'Kitchen');
                }
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
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_7)
                {
                    camChange('7', 'Restroom');
                }
            }
            else {
                if (cam_7)
                {
                    camChange('7', 'Restroom');
                }
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
            getEle("jumpscare2").className = "jumpscare";
            getEle("jumpscare2").requestFullscreen();
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
            }, 1000);
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