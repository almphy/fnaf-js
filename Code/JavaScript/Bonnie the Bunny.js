//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Bonnie   ------------------------------------------------------------
//----------------------------------------------------   The      ------------------------------------------------------------
//----------------------------------------------------   Bunny    ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -
let bb_aggression = 0;
let bb_anger = 0;
let bb_please = 0;
let bb_total = 0;
let bb_random = 0;
let bb_time = 1;
let bb_half = 1;

let bb_move_min = Math.ceil(10000);
let bb_move_max = Math.floor(40000);

let bb_camera_min = Math.ceil(1);
let bb_camera_max = Math.floor(6);

let bb_cam_1A = true;
let bb_cam_1B = false;
let bb_cam_2A = false;
let bb_cam_2B = false;
let bb_cam_3 = false;
let bb_cam_5 = false;
let bonnie_door = false;
let bonnie_door_checker = false;

//- audio -
bb_guitar = new Audio('../Audio/bonnie_guitar.mp3');
bb_guitar.loop = true;
bb_guitar.volume = .025;

bb_stinger = new Audio("../Audio/windowscare.wav");

//- chodzenie bonniego -
let bonnieMove = () =>
{
    bb_camera = Math.floor(Math.random() * (bb_camera_max - bb_camera_min)) + bb_camera_min;
    garble_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;

    switch (bb_camera)
    {
        case (1):
            bb_cam_1B = true;
            bb_cam_1A = false;
            bb_cam_2A = false;
            bb_cam_2B = false;
            bb_cam_3 = false;
            bb_cam_5 = false;

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
            bb_cam_2A = true;
            bb_cam_1B = false;
            bb_cam_1A = false;
            bb_cam_2B = false;
            bb_cam_3 = false;
            bb_cam_5 = false;

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_2A)
                {
                camChange('2A', 'Left Corridor');
                }
            }
            else {
                if (cam_2A)
                {
                camChange('2A', 'Left Corridor');
                }

                deep_steps.volume = .2;
                deep_steps.play();
            }
            break;
        case (3):
            bb_cam_2B = true;
            bb_cam_1B = false;
            bb_cam_1A = false;
            bb_cam_2A = false;
            bb_cam_3 = false;
            bb_cam_5 = false;

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_2B)
                {
                camChange('2B', 'Left Cubby');
                }
            }
            else {
                if (cam_2B)
                {
                camChange('2B', 'Left Cubby');
                }

                deep_steps.volume = .2;
                deep_steps.play();
            } 
            break;
        case (4):
            bb_cam_3 = true;
            bb_cam_1B = false;
            bb_cam_1A = false;
            bb_cam_2A = false;
            bb_cam_2B = false;
            bb_cam_5 = false;

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_3)
                {
                camChange('3', 'Closet');
                }
            }
            else {
                                
                if (cam_3)
                {
                camChange('3', 'Closet');
                }

                deep_steps.volume = .2;
                deep_steps.play();
            }  
            break;
        case (5):
            bb_cam_5 = true;
            bb_cam_1B = false;
            bb_cam_1A = false;
            bb_cam_2A = false;
            bb_cam_2B = false;
            bb_cam_3 = false;

            if (camera) {
                deep_steps.volume = 1;
                deep_steps.play();
                
                if (cam_5)
                {
                camChange('5', 'Parts and Services');
                }
            }
            else {
                if (cam_5)
                {
                camChange('5', 'Parts and Services');
                }
                
                deep_steps.volume = .2;
                deep_steps.play();
            }  
            break;
    }
};
//- sprawdzanie chodzenia bonniego -
setInterval(() => {
    if (bb_cam_2B == true)
    {
        if (!bonnie_door_checker)
        {
            bonnie_door = true;
        }
    }
    else
    {
        bonnieMove();
    }
},  Math.floor(Math.random() * (bb_move_max - bb_move_min)) + bb_move_min);

//- wkurw bonniego -
function bonnieDoorFunction()
{
            deep_steps.volume = 1;
        deep_steps.play();
    bonnie_door_checker = true;
    min = Math.ceil(10000);
    max = Math.floor(30000);
    bb_random = Math.floor(Math.random() * (max - min)) + min;

    bb_time = bb_random / 100;
    bb_half = bb_time * 50 / 100;

    if (!left_door)
    {
        if (!left_light)
        {
            bb_anger += 2;
        }
        else
        {
            bb_anger += 4;
        }
    }
    else
    {
        bb_please += 1.25;
    }

    setTimeout(() => {

        if (bb_anger > bb_please)
        {
            jumpscare.play();
            getEle("jumpscare3").className = "jumpscare";
            getEle("jumpscare3").requestFullscreen();
            //getEle("jumpscare").src = "../Assets/Bonnie/jumpscare.gif";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
            }, 1000);
            return
        }
        else if (bb_please > bb_anger)
        {
            bonnie_door = false;
            bb_anger = 0;
            bb_please = 0;
            bb_time = 1;
            bb_half = 1;
            bonnieMove();
            bonnie_door_checker = false;
            return
        }
    }, bb_random);
}

//- sprawdzanie czy bonnie jest przy drzwiach -
setInterval(() => {
    if (bonnie_door == true)
    {
        bonnieDoorFunction();
        bb_guitar.play();
        return
    }
    else
    {
        bb_guitar.pause();
        bb_guitar.load();
        return
    }
}, 100);