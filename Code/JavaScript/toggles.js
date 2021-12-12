//---- Toggles ----

let id_names =
[
    "line","cameras","map","camName","cam1A","cam1B",
    "cam1C","cam2A","cam2B","cam3","cam4A","cam4B","cam5",
    "cam6","cam7","static","music","foxyAnger","musicButton1",
    "musicButton2","musicButton3"
];

let office_id_names =
[
    "officeRight","officeLeft","doorButtonL","lightButtonL",
    "doorButtonR","lightButtonR","doorL","doorR","fan",
];

let id_names_2 =
[
    "tablet","power","usage","heat","hour",
    "night","muteCall"
];

//- kamera -
function cameraToggle()
{

    if (tablet)
    {
        tabletToggle();
    }

    if (!camera)
    {
        getEle("cameraToggle").style.opacity = "100%";
        getEle("cameraToggle").src = "../Assets/button_selected.png";

        let static = 100;
        camera_move.play();

        for (var i = 0; i < 21; i++)
        {
            getEle(id_names[i]).className = id_names[i];
        }

        getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;

        camera_open.play();
        camera = true;
        let inter = setInterval(
            function () 
            {
                getEle("static").style.opacity = `${static}%`;
                static--;
            }, 10);
        
            setTimeout(() => {
                clearInterval(inter);
            }, 800);
    }
    else
    {
        getEle("cameraToggle").style.opacity = "50%";
        getEle("cameraToggle").src = "../Assets/button.png";

        camera_move.pause();
        for (var i = 0; i < 21; i++)
        {
            getEle(id_names[i]).className = "hidden";
        }
        getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;

        camera_close.play();
        camera_open.pause();
        camera_open.load();
        camera = false;
    }
};

//- drzwi -
function doorFunction(side)
{
    door_sound = new Audio("../Audio/door_close.wav");
    error_aud = new Audio("../Audio/error.wav");

    if (side == "Left")
    {
        if (!left_door)
        {
            if (bb_anger >= bb_half)
            {
                error_aud.load();
                error_aud.play();
                left_door = false;
            }
            else
            {
                getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
                power_usage += 1
                left_door = true;
                getEle("doorL").src = "../Assets/left_door_close.gif";
                getEle("doorButtonL").src = "../Assets/left_door/door_on.png";
                getEle("doorL").className = "doorL";
                door_sound.load();
                door_sound.play();
                bb_guitar.volume = 0.005;
                setTimeout(
                function()
                {
                    getEle("doorL").src = "../Assets/left_door/closed.png";
                }, 500);
            }
        }
        else
        {
            if (bb_anger >= bb_half)
            {
                error_aud.load();
                error_aud.play();
                left_door = false;
            }
            else
            {
                getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
                power_usage = power_usage - 1;
                door_sound.load();
                door_sound.play();
                left_door = false;
                bb_guitar.volume = 0.025;
                getEle("doorL").src = "../Assets/left_door_open.gif";
                getEle("doorButtonL").src = "../Assets/left_door/door_off.png";
                setTimeout(
                function()
                {
                    getEle("doorL").src = "";
                    getEle("doorL").className = "hidden";
                }, 500);
            }
        }
    }
    else if (side == "Right")
    {
        if (!right_door)
        {
            if (cc_anger >= cc_half)
            {
                error_aud.load();
                error_aud.play();
                right_door = false;
            }
            else
            {
               getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
               power_usage += 1;
               right_door = true;
               getEle("doorR").src = "../Assets/right_door_close.gif";
               getEle("doorButtonR").src = "../Assets/right_door/door_on.png";
               getEle("doorR").className = "doorR";
               door_sound.load();
               door_sound.play();
               setTimeout(
               function()
               {
                   getEle("doorR").src = "../Assets/right_door/closed.png";
               }, 500);
            }
        }
        else
        {
            if (cc_anger >= cc_half)
            {
                error_aud.load();
                error_aud.play();
                right_door = false;
            }
            else
            {
                getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
                power_usage = power_usage - 1;
                door_sound.load();
                door_sound.play();
                right_door = false;
                getEle("doorR").src = "../Assets/right_door_open.gif";
                getEle("doorButtonR").src = "../Assets/right_door/door_off.png";
                setTimeout(
                function()
                {
                    getEle("doorR").src = "";
                    getEle("doorR").className = "hidden";
                }, 500);
            }
        }
    }
};

//- światło -
function lightFunction(side)
{
    if (side == "Left")
    {
        if (!left_light) 
        {
            getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
            power_usage += 1;
            left_light = true;
            door_light2.play();
            getEle("lightButtonL").src = "../Assets/left_door/light_on.png";

            if (bonnie_door)
            {
                bb_stinger.play();
                getEle("officeLeft").src = "../Assets/left_bonnie.png";
                setTimeout(() => {
                    bb_stinger.volume = 0;
                }, 3000);
            }
            else
            {
                bb_stinger.volume = 1;
                getEle("officeLeft").src = "../Assets/left_light.png";
            }
        }
        else
        {
            getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
            power_usage = power_usage - 1;
            door_light2.pause();
            left_light = false;
            getEle("lightButtonL").src = "../Assets/left_door/light_off.png";
            getEle("officeLeft").src = "../Assets/left_normal.png";
        }
    }
    else if (side == "Right")
    {
        if (!right_light)
        {
            getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
            power_usage += 1;
            right_light = true;
            door_light.play();
            getEle("lightButtonR").src = "../Assets/right_door/light_on.png";

            if (chica_door)
            {
                cc_stinger.play();
                getEle("officeRight").src = "../Assets/right_chica.png";
                setTimeout(() => {
                    cc_stinger.volume = 0;
                }, 3000);
            }
            else
            {
                cc_stinger.volume = 1;
                getEle("officeRight").src = "../Assets/right_light.png";
            }
        }
        else
        {
            getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
            power_usage = power_usage - 1;
            door_light.pause();
            right_light = false;
            getEle("lightButtonR").src = "../Assets/right_door/light_off.png";
            getEle("officeRight").src = "../Assets/right_normal.png";
        }
    }
};

//- wiatrak -
function fanToggle() {
    desk_fan = !desk_fan;
    if(desk_fan) {

        clearInterval(aUp);
        aDown = setInterval(function() {

            if(temperature <= 20) {
                clearInterval(aDown);
                return;
            }

            temperature--;
            if (temperature < 53)
            {
                heat -= 3.25;
            }
            getEle("heat").innerHTML = `${temperature}∘`;
            getEle("inOffice").style.opacity = `${heat}%`;
            getEle("inOffice").className = "inOffice";
            if (heat == 0)
            {
                getEle("inOffice").className = "hidden";  
            }
        }, 1000);

        getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1;
        getEle("fan").src = "../Assets/fan_spin.gif";
        turn_on.play();
        buzzing.play(); 
    } else
    {

        clearInterval(aDown);
        aUp = setInterval(function() {

            if(temperature >= 100) {
                clearInterval(aUp);
                return;
            }
            temperature++;
            if (temperature < 53)
            {
                heat += 3.25;
            }
            getEle("heat").innerHTML = `${temperature}∘`;
            getEle("inOffice").style.opacity = `${heat}%`;
            getEle("inOffice").className = "inOffice";
        }, 1000);

        getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        getEle("fan").src = "../Assets/1.png";
        turn_off.play();
        buzzing.pause();
    }
}

//- tablet -
let tabletToggle = () =>
{
    camera_open_tablet = new Audio("../Audio/tablet_close.wav");
tablet_on = new Audio("../Audio/tablet_on.wav");
    if (camera)
    {
        cameraToggle();
    }
    if (!tablet)
    {
        for (var i = 0; i < 9; i++)
        {
            getEle(office_id_names[i]).style.filter = "blur(8px)";
        }

        for (var i = 0; i < 7; i++)
        {
            getEle(id_names_2[i]).className = id_names_2[i];
        }

        ad_music.play();
        getEle("tabletToggle").style.opacity = "100%";
        getEle("tabletToggle").style.top = "90px";
        getEle("tabletToggle").style.marginLeft = "1525px";
        getEle("tabletToggle").src = "../Assets/button_info_selected.png";

        let static = 100;
        getEle("static2").className = "static";
        camera_open_tablet.play();
        tablet = true;
        let inter = setInterval(
            function () 
            {
                getEle("static2").style.opacity = `${static}%`;
                static--;
                
            }, 10);
        
            setTimeout(() => {
                clearInterval(inter);
            }, 950);

            setTimeout(() => {
                tablet_on.play();
            }, 100);
    }
    else
    {
        for (var i = 0; i < 9; i++)
        {
            getEle(office_id_names[i]).style.filter = "none";
        }

        for (var i = 0; i < 7; i++)
        {
            getEle(id_names_2[i]).className = "hidden";
        }

        ad_music.pause();
        ad_music.load();
        getEle("tabletToggle").style.opacity = "50%";
        getEle("tabletToggle").style.top = "490px";
        getEle("tabletToggle").style.marginLeft = "1530px";
        getEle("tabletToggle").src = "../Assets/button_info.png";
        
        camera_open_tablet.play();
        tablet = false;
    }
};