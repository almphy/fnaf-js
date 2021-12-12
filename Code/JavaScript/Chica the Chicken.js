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

let cc_move_min = Math.ceil(25000);
let cc_move_max = Math.floor(67000);

let cc_camera_min = Math.ceil(1);
let cc_camera_max = Math.floor(6);

let pots_min = Math.ceil(1);
let pots_max = Math.floor(4);

let chica_cams =
[
    ["1A", true],
    ["1B", false],
    ["4A", false],
    ["4B", false],
    ["6", false],
    ["7", false],
];

let kitchen_sounds =
[
    "cc_kitchen01","cc_kitchen02","cc_kitchen03",
    "cc_kitchen04"
];

let chica_door = false;
let chica_door_checker = false;

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
            for (var i = 0; i < 5; i++)
            {
                chica_cams[i][1] = false;

                if (i == 1)
                {
                    chica_cams[i][1] = true;    
                }
            }

            for (var i = 0; i < 3; i++)
            {
                kitchen_sounds[i].pause();
                kitchen_sounds[i].load();
            }

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.load();
                deep_steps.play();
            }
            else {
                deep_steps.volume = .2;
                deep_steps.load();
                deep_steps.play();
            }
            camChange(current_camera[1], current_camera[0]);
            break;
        case (2):
            for (var i = 0; i < 3; i++)
            {
                kitchen_sounds[i].pause();
                kitchen_sounds[i].load();
            }

            for (var i = 0; i < 5; i++)
            {
                chica_cams[i][1] = false;

                if (i == 2)
                {
                    chica_cams[i][1] = true;    
                }
            }

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.load();
                deep_steps.play();
            }
            else {
                deep_steps.volume = .2;
                deep_steps.load();
                deep_steps.play();
            }
            camChange(current_camera[1], current_camera[0]);
            break;
        case (3):
            for (var i = 0; i < 3; i++)
            {
                kitchen_sounds[i].pause();
                kitchen_sounds[i].load();
            }

            for (var i = 0; i < 5; i++)
            {
                chica_cams[i][1] = false;

                if (i == 3)
                {
                    chica_cams[i][1] = true;    
                }
            }

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.load();
                deep_steps.play();
            }
            else {
                deep_steps.volume = .2;
                deep_steps.load();
                deep_steps.play();
            }
            camChange(current_camera[1], current_camera[0]);
            break;
        case (4):
            for (var i = 0; i < 5; i++)
            {
                chica_cams[i][1] = false;

                if (i == 4)
                {
                    chica_cams[i][1] = true;    
                }
            }

            console.log("kuchnia")

            pots_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;

            if (pots_random == 1)
            {
                cc_kitchen01.load();
                cc_kitchen01.play();
            }
            else if (pots_random == 2)
            {
                cc_kitchen02.load();
                cc_kitchen02.play();
            }
            else if (pots_random == 3)
            {
                cc_kitchen03.load();
                cc_kitchen03.play();
            }
            else if (pots_random == 4)
            {
                cc_kitchen04.load();
                cc_kitchen04.play();
            }

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.load();
                deep_steps.play();
            }
            else {
                deep_steps.volume = .2;
                deep_steps.load();
                deep_steps.play();
            }
            camChange(current_camera[1], current_camera[0]);
            break;
        case (5):
            for (var i = 0; i < 3; i++)
            {
                kitchen_sounds[i].pause();
                kitchen_sounds[i].load();
            }

            for (var i = 0; i < 5; i++)
            {
                chica_cams[i][1] = false;

                if (i == 5)
                {
                    chica_cams[i][1] = true;    
                }
            }

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.load();
                deep_steps.play();
            }
            else
            {
                deep_steps.volume = .2;
                deep_steps.load();
                deep_steps.play();
            }
            camChange(current_camera[1], current_camera[0]);
            break;

    }
}
//- sprawdzanie chodzenia bonniego -
setInterval(() => {
    if (chica_cams[3][1] == true) {
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
    cc_deep_steps = new Audio("../Audio/deep_steps.wav");
    cc_deep_steps.volume = 1;
    cc_deep_steps.load();
    cc_deep_steps.play();
    setTimeout(() => {
        cc_deep_steps.pause();   
    }, 1000);
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
            jumpscare.load();
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