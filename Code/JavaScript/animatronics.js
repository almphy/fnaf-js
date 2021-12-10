//---- Animatronics ----

if (night == 1)
{
    //let ff_aggression = [1, 2, 3, 4, 5, 6, 7];
    bb_aggression = 1;
    ff_aggression = 0;
    cc_aggression = 1;
    //let fp_aggression = [1, 2, 3, 4, 5, 6, 7];
    //let gf_aggression = [1, 2, 3, 4, 5, 6, 7];
}
else if (night == 2)
{
    bb_aggression = 3;
    ff_aggression = 1;
    cc_aggression = 3;
}
else if (night == 3)
{
    bb_aggression = 6;
    ff_aggression = 3;
    cc_aggression = 6;
}
else if (night == 4)
{
    bb_aggression = 8;
    ff_aggression = 7;
    cc_aggression = 8;
}
else if (night == 5)
{
    bb_aggression = 10;
    ff_aggression = 10;
    cc_aggression = 10;
}
else if (night == 6)
{
    bb_aggression = 20;
    ff_aggression = 20;
    cc_aggression = 20;
}