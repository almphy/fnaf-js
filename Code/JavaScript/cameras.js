//---- Cameras ----

//- zmiana kamery -
let camChange = (background, name) =>
{
    getEle("disabled").className = "hidden";
    let random = Math.floor(Math.random(1, 25) * 25);
    let random02 = Math.floor(Math.random(1, 10) * 10);

    getEle("camName").innerHTML = name;

    let static = 100;

    getEle("map").src = `../Assets/cam${background}.png`
    camera_switch = new Audio("../Audio/camera_switch.wav");
    camera_switch.play();
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
        if (bb_cam_1B && cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie-chica.png')`;
        }
        else if (bb_cam_1B && !cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-bonnie.png')`;
        }
        else if (!bb_cam_1B && cc_cam_1B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        }
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "2A")
    {
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
        if (cc_cam_4A)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "4B")
    {
        if (cc_cam_4B)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
        } 
        else
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}.png')`;
        }
    }
    else if (background == "7")
    {
        if (cc_cam_7)
        {
            getEle("cameras").style.backgroundImage = `url('../Assets/${background}-chica.png')`;
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
};

//- kropka znika -

setInterval(() => {
    getEle("dot").className = "hidden";

    setTimeout(() => {
        getEle("dot").className = "dot";
    }, 1000);
}, 2000);