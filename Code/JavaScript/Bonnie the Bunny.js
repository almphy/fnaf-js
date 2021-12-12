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

// zrobiłem to:
var bonnie_cams =
[
    ["1A", true],
    ["1B", false],
    ["2A", false],
    ["2B", false],
    ["3", false],
    ["5", false],
];

let bb_move_min = Math.ceil(18000);
let bb_move_max = Math.floor(60000);

let bb_camera_min = Math.ceil(1);
let bb_camera_max = Math.floor(6);

let bonnie_door = false;
let bonnie_door_checker = false;

//- chodzenie bonniego -
let bonnieMove = () =>
{
    bb_camera = Math.floor(Math.random() * (bb_camera_max - bb_camera_min)) + bb_camera_min;
    garble_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;

    switch (bb_camera)
    {
        case (1):
            for (var i = 0; i < 5; i++)
            {
                bonnie_cams[i][1] = false;

                if (i == 1)
                {
                    bonnie_cams[i][1] = true;    
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
        case (2):
            for (var i = 0; i < 5; i++)
            {
                bonnie_cams[i][1] = false;

                if (i == 2)
                {
                    bonnie_cams[i][1] = true;    
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
            for (var i = 0; i < 5; i++)
            {
                bonnie_cams[i][1] = false;

                if (i == 3)
                {
                    bonnie_cams[i][1] = true;    
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
                bonnie_cams[i][1] = false;

                if (i == 4)
                {
                    bonnie_cams[i][1] = true;    
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
        case (5):
            for (var i = 0; i < 5; i++)
            {
                bonnie_cams[i][1] = false;

                if (i == 5)
                {
                    bonnie_cams[i][1] = true;    
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
    }
};
//- sprawdzanie chodzenia bonniego -
setInterval(() => {
    if (bonnie_cams[3][1] == true)
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
    bb_deep_steps = new Audio("../Audio/deep_steps.wav");
    bb_deep_steps.volume = 1;
    bb_deep_steps.play();
    setTimeout(() => {
        bb_deep_steps.pause();   
    }, 100);
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