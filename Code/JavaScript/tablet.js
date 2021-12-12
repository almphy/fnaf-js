//---- Tablet ----

//- czas -
setInterval(() => {

    if (hour == 12)
    {
        hour = 1;
        document.getElementById("hour").innerHTML = `${hour} AM`;
        document.getElementById("hour").style.marginLeft = "54px";
    }
    else if (hour == 6)
    {
        hour = 12;
        document.getElementById("hour").innerHTML = `${hour} AM`;
        document.getElementById("hour").style.marginLeft = "1px";
    }
    else if (hour >= 0)
    {
        hour++;
        document.getElementById("hour").innerHTML = `${hour} AM`;
        document.getElementById("hour").style.marginLeft = "54px";
    }
}, 90000);


//- zużywanie energi -
setInterval(
    function ()
    {

        if (power_usage == 1)
        {
            power = power - 1;

            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 2)
        {
            power = power - 2;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 3)
        {
            power = power - 3;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 4)
        {
            power = power - 4;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 5)
        {
            power = power - 5;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 6)
        {
            power = power - 6;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 7)
        {
            power = power - 7;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 8)
        {
            power = power - 8;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 9)
        {
            power = power - 9;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 10)
        {
            power = power - 10;
            if (tablet)
            {
                ad_music.volume = 0.2;
                setTimeout(() => {
                    garble01.play();
                }, 150);
                setTimeout(() => {
                    ad_music.volume = 1;
                }, 2000);
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
    }, 9000);