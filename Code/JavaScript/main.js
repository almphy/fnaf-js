//---- Main ----

setInterval(() => {
    
    if (power <= 0)
    {
        jumpscare.play();
        getEle("jumpscare5").className = "jumpscare";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
        }, 850);
    }

}, 1000);

setInterval(() => {
    
    if (hour == 6)
    {
        win.play();

        getEle("win").className = "jumpscare";
        setTimeout(() => {
            document.location.reload(true)
        }, 14000);
    }

}, 1000);

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

//- twierdzenie streetz'a (streetz's theorem) -
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