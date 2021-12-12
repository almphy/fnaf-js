//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Freddy   ------------------------------------------------------------
//----------------------------------------------------   Fazbear  ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -
let ff_aggression = 0;
let ff_anger = 0;
let ff_please = 0;

let bruh

let freddy_cams =
[
    ["1A", true],
    ["1B", false],
    ["4A", false],
    ["4B", false],
    ["6", false],
    ["7", false],
];

let freddy_door = false;
let freddy_door_checker = false;

let ff_move_min = Math.ceil(10000);
let ff_move_max = Math.floor(40000);

let ff_laugh_min = Math.ceil(1);
let ff_laugh_max = Math.floor(4);

//- dupa -

setInterval(() => {
    
    if (camera)
    {
        if (cam_6)
        {
            ff_lullaby.volume = 1;
        }
        else
        {
            ff_lullaby.volume = .2; 
        }
    }
    else
    {
        ff_lullaby.volume = .05;
    }

}, 100);

function freddyMove()
{
    garble_random = Math.floor(Math.random() * (sound_max - sound_min)) + sound_min;
    if (freddy_cams[0][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;

            if (i == 1)
            {
                freddy_cams[i][1] = true;    
            }
        }

        ff_lullaby.pause();
        ff_laugh01.play();
        if (camera) {
            ff_run.volume = 1;
            ff_run.play();
        }
        else {
            ff_run.volume = .2;
            ff_run.play();
        }  

        camChange(current_camera[1], current_camera[0]);
    }
    else if (freddy_cams[1][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;

            if (i == 5)
            {
                freddy_cams[i][1] = true;    
            }
        }

        ff_lullaby.pause();
        ff_laugh02.play();
        if (camera) {
            ff_run.volume = 1;
            ff_run.play();
        }
        else {
            ff_run.volume = .2;
            ff_run.play();
        }   
        camChange(current_camera[1], current_camera[0]);
    }
    else if (freddy_cams[5][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;

            if (i == 4)
            {
                freddy_cams[i][1] = true;    
            }
        }

        ff_lullaby.play();
        ff_laugh03.play();
        if (camera) {
            ff_run.volume = 1;
            ff_run.play();
        }
        else {
            ff_run.volume = .2;
            ff_run.play();
        }  
        camChange(current_camera[1], current_camera[0]);
    }
    else if (freddy_cams[4][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;

            if (i == 2)
            {
                freddy_cams[i][1] = true;    
            }
        }

        ff_lullaby.pause();
        ff_laugh01.play();
        if (camera) {
            ff_run.volume = 1;
            ff_run.play();
        }
        else {
            ff_run.volume = .2;
            ff_run.play();
        }  
        camChange(current_camera[1], current_camera[0]);
    }
    else if (freddy_cams[2][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;

            if (i == 3)
            {
                freddy_cams[i][1] = true;    
            }
        }

        ff_lullaby.pause();
        ff_laugh02.play();
        if (camera) {
            ff_run.volume = 1;
            ff_run.play();
        }
        else {
            ff_run.volume = .2;
            ff_run.play();
        }  
        camChange(current_camera[1], current_camera[0]);
    }
    else if (freddy_cams[3][1])
    {
        for (var i = 0; i < 5; i++)
        {
            freddy_cams[i][1] = false;
        }

        camChange(current_camera[1], current_camera[0]);
        bruh = setInterval(() => {
            freddyDoorFunction();
        }, 100);
    }
    else
    {

    }

}

setInterval(() => {
    if (freddy_cams[3][1] == true)
    {
        if (!freddy_door_checker)
        {
            freddy_door = true;
        }
    }
    else
    {
        freddyMove();
    }
},  10000);

setInterval(() => {
    if (freddy_door == true)
    {
        freddyDoorFunction();
        return
    }
    else
    {
        return
    }
}, 100);

//- wkurw freddiego -
function freddyDoorFunction()
{
    freddy_door_checker = true;
    if (!right_door)
    {
        ff_anger += .5;
        console.log(`freddy please: ${ff_anger}`);
    }
    else
    {
        ff_please += .1;
        console.log(`freddy please: ${ff_please}`);
    }

    setTimeout(() => {

        if (ff_anger > ff_please)
        {
            jumpscare.play();
            getEle("jumpscare1").className = "jumpscare";
            getEle("jumpscare1").requestFullscreen();
            //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
            }, 1000);
            return
        }
        else
        {
            return
        }
    }, 10000);
}