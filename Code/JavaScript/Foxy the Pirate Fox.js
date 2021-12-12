//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------   Foxy     ------------------------------------------------------------
//----------------------------------------------------   The      ------------------------------------------------------------
//----------------------------------------------------   Pirate   ------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//- zmienne -

let foxy_songs =
[
    ["song 1", false],
    ["song 2", false],
    ["song 3", false],
];

fp_song_1 = false;
fp_song_2 = false;
fp_song_3 = false;

fp_irritation = 0;

let song_min = Math.ceil(1);
let song_max = Math.floor(4);

//- ai -

setInterval(() => {
    
    if (camera)
    {
        fp_pirate_song.volume = 1;
    }
    else
    {
        fp_pirate_song.volume = .1;
    }

}, 100);

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
    
    if (fp_irritation > 3)
    {
        fp_irritation = 0;
        camChange(current_camera[1], current_camera[0]);
        getEle("foxyAnger").innerHTML = `Irritation level: ${fp_irritation}`;
    }

}, 100);

function foxyLullaby(az)
{
    if (az === "one")
    {
        foxy_songs[0][1] = true;
        foxy_songs[1][1] = false;
        foxy_songs[2][1] = false;

        music_box_01.load();
        music_box_01.play();
        music_box_02.pause();
        music_box_03.pause();
    }
    else if (az === "two")
    {
        foxy_songs[0][1] = false;
        foxy_songs[1][1] = true;
        foxy_songs[2][1] = false;

        music_box_02.load();
        music_box_02.play();
        music_box_01.pause();
        music_box_03.pause();
    }
    else if (az === "three")
    {
        foxy_songs[0][1] = false;
        foxy_songs[1][1] = false;
        foxy_songs[2][1] = true;

        music_box_03.load();
        music_box_03.play();
        music_box_02.pause();
        music_box_01.pause();
    }
}

setInterval(() => {
    // current_song = Math.floor(Math.random() * (song_max - song_min)) + song_min;

    setTimeout(() => {
        if (fp_irritation == 0)
        {
            fp_irritation++;
            camChange(current_camera[1], current_camera[0]);
            getEle("foxyAnger").innerHTML = `Irritation level: ${fp_irritation}`;
        }
    }, 1000);

    if (fp_irritation == 1)
    {
        if (!foxy_songs[0][1])
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!foxy_songs[0][1])
                {
                    jumpscare.play();
                    getEle("jumpscare4").className = "jumpscare";
                    getEle("jumpscare4").requestFullscreen();
                    //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 900);
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
                fp_irritation++;
                camChange(current_camera[1], current_camera[0]);
                getEle("foxyAnger").innerHTML = `Irritation level: ${fp_irritation}`;
                return
            }, 5000);
        }
    }
    else if (fp_irritation == 2)
    {
        if (!foxy_songs[1][1])
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!foxy_songs[1][1])
                {
                    jumpscare.play();
                    getEle("jumpscare4").className = "jumpscare";
                    getEle("jumpscare4").requestFullscreen();
                    //getEle("jumpscare").src = "../Assets/Freddy/jumpscare.gif";
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 900);
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
                fp_irritation++;
                camChange(current_camera[1], current_camera[0]);
                getEle("foxyAnger").innerHTML = `Irritation level: ${fp_irritation}`;
                return
            }, 5000);
        }
    }
    else if (fp_irritation == 3)
    {
        if (!foxy_songs[2][1])
        {
            fp_pirate_song.play();
            setTimeout(() => {
                
                if (!foxy_songs[2][1])
                {
                    jumpscare.play();
                    getEle("jumpscare4").className = "jumpscare";
                    getEle("jumpscare4").requestFullscreen();
                    setTimeout(() => {
                        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
                    }, 900);
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
                fp_irritation++;
                camChange(current_camera[1], current_camera[0]);
                getEle("foxyAnger").innerHTML = `Irritation level: ${fp_irritation}`;
                return
            }, 5000);
        }
    }

}, 10000)

