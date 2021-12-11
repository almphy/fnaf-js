//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Foxy     ------------------------------------------------------------
//----------------------------------------------------   The      ------------------------------------------------------------
//----------------------------------------------------   Pirate   ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -

fp_song_1 = false;
fp_song_2 = false;
fp_song_3 = false;

fp_irrotation = 0;

let song_min = Math.ceil(1);
let song_max = Math.floor(4);

fp_pirate_song = new Audio("../Audio/pirate_song.wav");

music_box_01 = new Audio("../Audio/music_box_01.mp3");
music_box_01.loop = true;
music_box_01.volume = .2;

music_box_02 = new Audio("../Audio/music_box_02.mp3");
music_box_02.loop = true;
music_box_02.volume = .2;

music_box_03 = new Audio("../Audio/music_box_03.mp3");
music_box_03.loop = true;
music_box_03.volume = .2;  

//- ai -

setInterval(() => {
    
    if (camera)
    {
        music_box_01.volume = 1;
        music_box_02.volume = 1;
        music_box_03.volume = 1;
    }
    else
    {
        music_box_01.volume = .1;
        music_box_02.volume = .1;
        music_box_03.volume = .1;  
    }

}, 100);

setInterval(() => {
    
    if (fp_irrotation > 3)
    {
        fp_irrotation = 0;
        getEle("foxyAnger").innerHTML = `Irrotation level: ${fp_irrotation}`;
    }

}, 100);

function foxyLullaby(az)
{
    if (az === "one")
    {
        fp_song_1 = true;
        fp_song_2 = false;
        fp_song_3 = false;
        music_box_01.load();
        music_box_01.play();
        music_box_02.pause();
        music_box_03.pause();
    }
    else if (az === "two")
    {
        fp_song_1 = false;
        fp_song_2 = true;
        fp_song_3 = false;
        music_box_02.load();
        music_box_02.play();
        music_box_01.pause();
        music_box_03.pause();
    }
    else if (az === "three")
    {
        fp_song_1 = false;
        fp_song_2 = false;
        fp_song_3 = true;
        music_box_03.load();
        music_box_03.play();
        music_box_02.pause();
        music_box_01.pause();
    }
}

setInterval(() => {
    // current_song = Math.floor(Math.random() * (song_max - song_min)) + song_min;

    setTimeout(() => {
        if (fp_irrotation == 0)
        {
            fp_irrotation++;
            getEle("foxyAnger").innerHTML = `Irrotation level: ${fp_irrotation}`;
        }
    }, 1000);

    if (fp_irrotation == 1)
    {
        if (!fp_song_1)
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!fp_song_1)
                {
                    jumpscare.play();
                    getEle("jumpscare1").className = "jumpscare";
                    getEle("jumpscare1").requestFullscreen();
                    //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 1300);
                    return
                }
                else
                {
                    return
                }

            }, 10000);
        }
        else
        {
            setTimeout(() => {
                fp_irrotation++;
                getEle("foxyAnger").innerHTML = `Irrotation level: ${fp_irrotation}`;
                return
            }, 5000);
        }
    }
    else if (fp_irrotation == 2)
    {
        if (!fp_song_2)
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!fp_song_2)
                {
                    jumpscare.play();
                    getEle("jumpscare1").className = "jumpscare";
                    getEle("jumpscare1").requestFullscreen();
                    //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 1300);
                    return
                }
                else
                {
                    return
                }

            }, 10000);
        }
        else
        {
            setTimeout(() => {
                fp_irrotation++;
                getEle("foxyAnger").innerHTML = `Irrotation level: ${fp_irrotation}`;
                return
            }, 5000);
        }
    }
    else if (fp_irrotation == 3)
    {
        if (!fp_song_3)
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!fp_song_3)
                {
                    jumpscare.play();
                    getEle("jumpscare1").className = "jumpscare";
                    getEle("jumpscare1").requestFullscreen();
                    //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 1300);
                    return
                }
                else
                {
                    return
                }

            }, 10000);
        }
        else
        {
            setTimeout(() => {
                fp_irrotation++;
                getEle("foxyAnger").innerHTML = `Irrotation level: ${fp_irrotation}`;
                return
            }, 5000);
        }
    }

}, 10000)

