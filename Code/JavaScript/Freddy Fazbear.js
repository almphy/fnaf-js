//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Chica    ------------------------------------------------------------
//----------------------------------------------------   The      ------------------------------------------------------------
//----------------------------------------------------   Chicken  ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -
let ff_aggression = 0;

let ff_cam_1A = true;
let ff_cam_1B = false;
let ff_cam_4A = false;
let ff_cam_4B = false;
let ff_cam_6 = false;
let ff_cam_7 = false;

let ff_move_min = Math.ceil(10000);
let ff_move_max = Math.floor(40000);

let ff_laugh_min = Math.ceil(1);
let ff_laugh_max = Math.floor(4);

//- audio -
ff_laugh01 = new Audio("../Audio/freddy01.wav");

ff_laugh02 = new Audio("../Audio/freddy02.wav");

ff_laugh03 = new Audio("../Audio/freddy03.wav");

ff_lullaby = new Audio("../Audio/music box.wav");
ff_lullaby.loop = true;

//- dupa -

setInterval(() => {
    
    if (ff_cam_1A)
    {
        ff_cam_1A = false;
        ff_cam_1B = true;
        ff_cam_4A = false;
        ff_cam_4B = false;
        ff_cam_6 = false;
        ff_cam_7 = false;

        ff_lullaby.pause();
        ff_laugh01.play();
        if (camera)
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
            let static = 100;

            getEle("static").className = "static";

            deep_steps.volume = 1;
            deep_steps.play();

            if (garble_random == 1)
            {
                garble01.play();
            }
            else if (garble_random == 2)
            {
                garble02.play();
            }
            else if (garble_random == 3)
            {
                garble03.play();
            }

            getEle("static").style.opacity = `${static}%`;

            setTimeout(() => {
                let inter = setInterval(
                    function () 
                    {
                        getEle("static").style.opacity = `${static}%`;
                        static--;
                    }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 800);
            }, 2000);

        }
        else
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

            deep_steps.volume = .2;
            deep_steps.play();
        }   
    }
    else if (ff_cam_1B)
    {
        ff_cam_1A = false;
        ff_cam_1B = false;
        ff_cam_4A = false;
        ff_cam_4B = false;
        ff_cam_6 = false;
        ff_cam_7 = true;

        ff_lullaby.pause();
        ff_laugh02.play();
        if (camera)
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
            let static = 100;

            getEle("static").className = "static";

            deep_steps.volume = 1;
            deep_steps.play();

            if (garble_random == 1)
            {
                garble01.play();
            }
            else if (garble_random == 2)
            {
                garble02.play();
            }
            else if (garble_random == 3)
            {
                garble03.play();
            }

            getEle("static").style.opacity = `${static}%`;

            setTimeout(() => {
                let inter = setInterval(
                    function () 
                    {
                        getEle("static").style.opacity = `${static}%`;
                        static--;
                    }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 800);
            }, 2000);

        }
        else
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

            deep_steps.volume = .2;
            deep_steps.play();
        }   
    }
    else if (ff_cam_7)
    {
        ff_cam_1A = false;
        ff_cam_1B = false;
        ff_cam_4A = false;
        ff_cam_4B = false;
        ff_cam_6 = true;
        ff_cam_7 = false;

        ff_lullaby.play();
        ff_laugh03.play();
        if (camera)
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
            let static = 100;

            getEle("static").className = "static";

            deep_steps.volume = 1;
            deep_steps.play();

            if (garble_random == 1)
            {
                garble01.play();
            }
            else if (garble_random == 2)
            {
                garble02.play();
            }
            else if (garble_random == 3)
            {
                garble03.play();
            }

            getEle("static").style.opacity = `${static}%`;

            setTimeout(() => {
                let inter = setInterval(
                    function () 
                    {
                        getEle("static").style.opacity = `${static}%`;
                        static--;
                    }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 800);
            }, 2000);

        }
        else
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

            deep_steps.volume = .2;
            deep_steps.play();
        }   
    }
    else if (ff_cam_6)
    {
        ff_cam_1A = false;
        ff_cam_1B = false;
        ff_cam_4A = true;
        ff_cam_4B = false;
        ff_cam_6 = false;
        ff_cam_7 = false;

        ff_lullaby.pause();
        ff_laugh01.play();
        if (camera)
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
            let static = 100;

            getEle("static").className = "static";

            deep_steps.volume = 1;
            deep_steps.play();

            if (garble_random == 1)
            {
                garble01.play();
            }
            else if (garble_random == 2)
            {
                garble02.play();
            }
            else if (garble_random == 3)
            {
                garble03.play();
            }

            getEle("static").style.opacity = `${static}%`;

            setTimeout(() => {
                let inter = setInterval(
                    function () 
                    {
                        getEle("static").style.opacity = `${static}%`;
                        static--;
                    }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 800);
            }, 2000);

        }
        else
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

            deep_steps.volume = .2;
            deep_steps.play();
        }   
    }
    else if (ff_cam_4A)
    {
        ff_cam_1A = false;
        ff_cam_1B = false;
        ff_cam_4A = false;
        ff_cam_4B = true;
        ff_cam_6 = false;
        ff_cam_7 = false;

        ff_lullaby.pause();
        ff_laugh02.play();
        if (camera)
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";
            let static = 100;

            getEle("static").className = "static";

            deep_steps.volume = 1;
            deep_steps.play();

            if (garble_random == 1)
            {
                garble01.play();
            }
            else if (garble_random == 2)
            {
                garble02.play();
            }
            else if (garble_random == 3)
            {
                garble03.play();
            }

            getEle("static").style.opacity = `${static}%`;

            setTimeout(() => {
                let inter = setInterval(
                    function () 
                    {
                        getEle("static").style.opacity = `${static}%`;
                        static--;
                    }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 800);
            }, 2000);

        }
        else
        {
            getEle("map").src = "../Assets/map.png"
            getEle("cameras").style.backgroundImage = "url('../Assets/6.png')";

            deep_steps.volume = .2;
            deep_steps.play();
        }   
    }
    else if (ff_cam_4B)
    {
        ff_cam_1A = false;
        ff_cam_1B = false;
        ff_cam_4A = false;
        ff_cam_4B = true;
        ff_cam_6 = false;
        ff_cam_7 = false;
    }

}, 50000);