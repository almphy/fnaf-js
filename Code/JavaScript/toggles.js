//---- Toggles ----

//- kamera -
let cameraToggle = () =>
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
        getEle("line").className = "line";
        getEle("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        getEle("cameras").className = "cameras";
        getEle("map").className = "map";
        getEle("camName").className = "camName";
        getEle("cam1A").className = "cam1A";
        getEle("cam1B").className = "cam1B";
        getEle("cam1C").className = "cam1C";
        getEle("cam2A").className = "cam2A";
        getEle("cam2B").className = "cam2B";
        getEle("cam3").className = "cam3";
        getEle("cam4A").className = "cam4A";
        getEle("cam4B").className = "cam4B";
        getEle("cam5").className = "cam5";
        getEle("cam6").className = "cam6";
        getEle("cam7").className = "cam7";
        getEle("static").className = "static";
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
        getEle("line").className = "hidden";
        getEle("usage").innerHTML = `Power usage: x${power_usage - 1 + 1}`;
        getEle("cameras").className = "hidden";
        getEle("static").className = "hidden";
        getEle("map").className = "hidden";
        getEle("camName").className = "hidden";
        getEle("cam1A").className = "hidden";
        getEle("cam1B").className = "hidden";
        getEle("cam1C").className = "hidden";
        getEle("cam2A").className = "hidden";
        getEle("cam2B").className = "hidden";
        getEle("cam3").className = "hidden";
        getEle("cam4A").className = "hidden";
        getEle("cam4B").className = "hidden";
        getEle("cam5").className = "hidden";
        getEle("cam6").className = "hidden";
        getEle("cam7").className = "hidden";
        camera_close.play();
        camera_open.pause();
        camera_open.load();
        camera = false;
    }
};

//- drzwi -
let doorFunction = (side) =>
{
    door_sound = new Audio("../Audio/door_close.wav");
    error_aud = new Audio("../Audio/error.wav");

    if (side == "Left")
    {
        if (!left_door)
        {
            if (bb_anger >= bb_half)
            {
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
                error_aud.play();
                left_door = false;
            }
            else
            {
                getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
                power_usage = power_usage - 1;
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
                error_aud.play();
                right_door = false;
            }
            else
            {
                getEle("usage").innerHTML = `Power usage: x${power_usage - 1}`;
                power_usage = power_usage - 1;
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
let lightFunction = (side) =>
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
    } else {

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
    if (camera)
    {
        cameraToggle();
    }

    camera_open_tablet = new Audio("../Audio/tablet_close.wav");
    tablet_on = new Audio("../Audio/tablet_on.wav");
    if (!tablet)
    {
        getEle("officeRight").style.filter = "blur(8px)";
        getEle("officeLeft").style.filter = "blur(8px)";
        getEle("doorButtonL").style.filter = "blur(8px)";
        getEle("lightButtonL").style.filter = "blur(8px)";
        getEle("doorButtonR").style.filter = "blur(8px)";
        getEle("lightButtonR").style.filter = "blur(8px)";
        getEle("doorL").style.filter = "blur(8px)";
        getEle("doorR").style.filter = "blur(8px)";
        getEle("fan").style.filter = "blur(8px)";

        ad_music.play();
        getEle("tabletToggle").style.opacity = "100%";
        getEle("tabletToggle").style.top = "90px";
        getEle("tabletToggle").style.marginLeft = "1525px";
        getEle("tabletToggle").src = "../Assets/button_info_selected.png";
        
        getEle("tablet").className = "tablet";
        getEle("power").className = "power";
        getEle("usage").className = "usage";
        getEle("heat").className = "heat";
        getEle("hour").className = "hour";
        getEle("night").className = "night";
        getEle("muteCall").className = "muteCall";

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
        getEle("officeRight").style.filter = "none";
        getEle("officeLeft").style.filter = "none";
        getEle("doorButtonL").style.filter = "none";
        getEle("lightButtonL").style.filter = "none";
        getEle("doorButtonR").style.filter = "none";
        getEle("lightButtonR").style.filter = "none";
        getEle("doorL").style.filter = "none";
        getEle("doorR").style.filter = "none";
        getEle("fan").style.filter = "none";

        ad_music.pause();
        ad_music.load();
        getEle("tabletToggle").style.opacity = "50%";
        getEle("tabletToggle").style.top = "490px";
        getEle("tabletToggle").style.marginLeft = "1530px";
        getEle("tabletToggle").src = "../Assets/button_info.png";

        getEle("tablet").className = "hidden";
        getEle("power").className = "hidden";
        getEle("usage").className = "hidden";
        getEle("heat").className = "hidden";
        getEle("hour").className = "hidden";
        getEle("night").className = "hidden";
        getEle("muteCall").className = "hidden";
        
        camera_open_tablet.play();
        tablet = false;
    }
};