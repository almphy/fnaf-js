//---- Main ----

let night = 1;

setInterval(() => {
    
}, 100);

document.body.onkeyup = function(event)
{
    switch(event.key)
    {
        case "s":
            cameraToggle();
            break;
        case "q":
            doorFunction("Left");
            break;
        case "e":
            doorFunction("Right");
            break;
        case "d":
            lightFunction("Right");
            break;
        case "a":
            lightFunction("Left");
            break;
        case " ":
            tabletToggle();
            break;
        case "f":
            fanToggle();
            break;
    }
}


//- 0% mocy moment -
if (power == 0)
{
    getEle("power").className = "hidden";
    getEle("usage").className = "hidden";
    getEle("doorButtonL").className = "hidden";
    getEle("doorButtonR").className = "hidden";
    getEle("doorR").className = "hidden";
    getEle("doorL").className = "hidden";
}

//- telefon -
let phoneCall = () =>
{
    clicked = true;

    if (clicked)
    {
        setTimeout(() => {
            night_1_call.play();
        }, 1500);

        setTimeout(() => {
            getEle("muteCall").className = "muteCall";
        }, 15000);
    };
};

//- nos freddiego -
let freddyNoseSound = () =>
{
    audio.play();
    console.log("Boop!");
};

//- zmiana tła -
let backgroundChange = () =>
{
    document.body.background = "../Assets/background_hover.png";
};

let backgroundChangeBack = () =>
{
    document.body.background = "../Assets/background.png";
};

//- te get element by id od kafki -
let getEle = (id) =>
{
    return(document.getElementById(id));
};

//- twierdzenie streetz'a -
function emptyFunction()
{

};

function buttonChange(ez)
{
    if (ez === "one")
    {
        getEle("musicButton1").value = "one <<";
    }
    else if (ez ==="two")
    {
        getEle("musicButton2").value = "two <<";
    }
    else if (ez ==="three")
    {
        getEle("musicButton3").value = "three <<";
    }
}

function buttonChangeBack(ez)
{
    if (ez === "one")
    {
        getEle("musicButton1").value = "one";
    }
    else if (ez ==="two")
    {
        getEle("musicButton2").value = "two";
    }
    else if (ez ==="three")
    {
        getEle("musicButton3").value = "three";
    }
}

localStorage.setItem("nightSave", night);
console.log(localStorage.getItem("nightSave"));