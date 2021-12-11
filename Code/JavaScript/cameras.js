//---- Cameras ----

var current_camera;

var camera_details =
[
    ["Show Stage", "1A"], // 0
    ["Dinning Room", "1B"], // 1
    ["Pirate`s Cove", "1C"], // 2
    ["Left Corridor", "2A"], // 3
    ["Left Cubby", "2B"], // 4
    ["Right Corridor", "4A"], // 5
    ["Right Cubby", "4B"], // 6
    ["Closet", "3"], // 7
    ["Parts and Services", "5"], // 8
    ["Kitchen", "6"], // 9
    ["Restroom", "7"] // 10
];



//- zmiana kamery -
function camChange(background, name)
{
    camera_switch = new Audio("../Audio/camera_switch.wav");
    setInterval(() => {
        if (camera)
        {
            camera_switch.volume = 1;
        }
        else
        {
            camera_switch.volume = 0;
        }
    }, 10);

    camera_switch.load();
    camera_switch.play();
    let random = Math.floor(Math.random(1, 25) * 25);
    let random02 = Math.floor(Math.random(1, 10) * 10);

    getEle("camName").innerHTML = name;

    let static = 100;

    getEle("map").src = `../Assets/cam${background}.png`
    getEle("static").className = "static";

    let inter = setInterval(
    function () 
    {
        getEle("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);

    if (background == "1A")
    {
        current_camera = camera_details[0];
        cam_6 = false;

        if (bb_cam_1A && cc_cam_1A && ff_cam_1A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
        else if (!bb_cam_1A && cc_cam_1A && ff_cam_1A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else if (bb_cam_1A && !cc_cam_1A && ff_cam_1A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        }
        else if (!bb_cam_1A && !cc_cam_1A && ff_cam_1A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-freddy.png')`;
        }
        else if (!bb_cam_1A && !cc_cam_1A && !ff_cam_1A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-none.png')`;
        }
    }
    else if (background == "1B")
    {
        current_camera = camera_details[1];
        cam_6 = false;

        if (bb_cam_1B && cc_cam_1B && ff_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-all.png')`;
        }
        else if (!ff_cam_1B && bb_cam_1B && cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie-chica.png')`;
        }
        else if (!ff_cam_1B && bb_cam_1B && !cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else if (!ff_cam_1B && !bb_cam_1B && cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        }
        else if (!cc_cam_1B && bb_cam_1B && ff_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie-freddy.png')`;   
        }
        else if (!bb_cam_1B && !cc_cam_1B && ff_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-freddy.png')`;   
        }
        else if (!bb_cam_1B && cc_cam_1B && ff_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica-freddy.png')`;   
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "2A")
    {
        current_camera = camera_details[3];
        cam_6 = false;

        if (bb_cam_2A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "2B")
    {
        current_camera = camera_details[4];
        cam_6 = false;

        if (bb_cam_2B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "3")
    {
        current_camera = camera_details[7];
        cam_6 = false;

        if (bb_cam_3)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "5")
    {
        current_camera = camera_details[8];
        cam_6 = false;

        if (bb_cam_5)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "4A")
    {
        current_camera = camera_details[5];
        cam_6 = false;

        if (!ff_cam_4A && cc_cam_4A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        } 
        else if (ff_cam_4A && !cc_cam_4A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-freddy.png')`;
        }
        else if (ff_cam_4A && cc_cam_4A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-both.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "4B")
    {
        current_camera = camera_details[6];
        cam_6 = false;

        if (cc_cam_4B && !ff_cam_4B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        } 
        if (ff_cam_4B && !cc_cam_4B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-freddy.png')`;
        } 
        if (cc_cam_4B && ff_cam_4B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-both.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "7")
    {
        current_camera = camera_details[10];
        cam_6 = false;

        if (cc_cam_7 && ff_cam_7)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-both.png')`;
        } 
        else if (!cc_cam_7 && ff_cam_7)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-freddy.png')`;
        } 
        else if (cc_cam_7 && !ff_cam_7)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "6")
    {
        cam_6 = true;
        current_camera = camera_details[9];
    }
    else if (background == "1C")
    {
        cam_6 = false;
        current_camera = camera_details[2];

        if (fp_irritation == 1)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-one.png')`;
        }
        else if (fp_irritation == 2)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-two.png')`;
        }
        else if (fp_irritation == 3)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-three.png')`;
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else
    {
        getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
    }
}


/*- sekrety -
    if (background == "1A" || background == "5" || background == "2B")
    {
        if (random == 1)
        {
            console.warn("It's me.");
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-2.png')`;
    
            setTimeout(() => {
                stinger.play();
            }, 500)
        }
        else 
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "4B")
    {
        switch (random02) {
            case 1:
                console.warn("It was him");
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-2.png')`;
        
                setTimeout(() => {
                    william_laugh.play();
                }, 500)
                break;
            case 2:
                console.warn("He was behind it all");
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-3.png')`;
            
                setTimeout(() => {
                    william_laugh.play();
                }, 500)
                break;
            case 3:
                console.warn("A door. The restroom");
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-4.png')`;
            
                setTimeout(() => {
                    william_laugh.play();
                }, 500)
                break;
            case 4:
                console.warn("1983");
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-5.png')`;
            
                setTimeout(() => {
                    william_laugh.play();
                }, 500)
                break;
            default:
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
                break;
          }          
    }
    else if (background == "4A")
    {
        switch (random02) {
            case 1:
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-2.png')`;
        
                setT+imeout(() => {
                    garble012.play();
                }, 500)
                break;
            case 2:
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}-3.png')`;
            
                setTimeout(() => {
                    garble012.play();
                }, 500)
                break;
            default:
                getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
                break;
        }          
    }
    else
    {
        getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
    }*/


//- kropka znika -

setInterval(() => {
    getEle("dot").className = "hidden";

    setTimeout(() => {
        getEle("dot").className = "dot";
    }, 1000);
}, 2000);