//---- Variables ----

//- office -
let left_door = false;
let right_door = false;
let left_light = false;
let right_light = false;
let desk_fan = true;
let clicked = false;

//- fazbear entertainment mobile security device
let tablet = false;
let power = 100;
let power_usage = 2;
let hour = 12;
let temperature = 20;
var aDown;
var aUp;
let heat = 0;
let sound_min = Math.ceil(1);
let sound_max = Math.floor(4);

//- cameras -
let camera = false;
let cam_6 = false;

//---- Audio ----

audio = new Audio("../Audio/boop.wav");
turn_on = new Audio("../Audio/turn_on.wav");
turn_off = new Audio("../Audio/turn_off.wav");
buzzing = new Audio("../Audio/buzzing.wav");
door_light = new Audio("../Audio/light_hum.wav");
door_light2 = new Audio("../Audio/light_hum.wav");
night_1_call = new Audio("../Audio/voiceover1c.wav");
camera_open_tablet = new Audio("../Audio/tablet_close.wav");
tablet_on = new Audio("../Audio/tablet_on.wav");
stinger = new Audio("../Audio/windowscare.wav");
camera_move = new Audio("../Audio/camera_move.wav");
camera_open = new Audio("../Audio/camera_open.wav");
camera_close = new Audio("../Audio/camera_close.wav");
ad_music = new Audio("../Audio/ad_music.mp3");
william_laugh = new Audio("../Audio/william_laugh.wav");
garble01 = new Audio("../Audio/garble1.wav");
garble02 = new Audio("../Audio/garble2.wav");
garble03 = new Audio("../Audio/garble3.wav");
garble012 = new Audio("../Audio/garble1-2.wav");
cc_kitchen01 = new Audio("../Audio/pots01.wav");
cc_kitchen02 = new Audio("../Audio/pots02.wav");
cc_kitchen03 = new Audio("../Audio/pots03.wav");
cc_kitchen04 = new Audio("../Audio/pots04.wav");
cc_stinger = new Audio("../Audio/windowscare.wav");
bb_guitar = new Audio('../Audio/bonnie_guitar.mp3');
bb_stinger = new Audio("../Audio/windowscare.wav");
ambiance01 = new Audio("../Audio/camera_move.wav");
ambiance01 = new Audio("../Audio/camera_move.wav");
ambiance03 = new Audio("../Audio/camera_move.wav");
circus_organs = new Audio("../Audio/camera_move.wav");
fnaf2_alarm = new Audio("../Audio/camera_move.wav");
gf_laugh = new Audio("../Audio/gf_laugh.wav");
gf_jumpscare = new Audio("../Audio/gf_jumpscare.wav");
gf_talking = new Audio("../Audio/gf_talking.wav");
jumpscare = new Audio("../Audio/XSCREAm.wav");
deep_steps = new Audio("../Audio/deep_steps.wav");
breathing = new Audio("../Audio/gf_laugh.wav");
fp_pirate_song = new Audio("../Audio/pirate_song.wav");
music_box_01 = new Audio("../Audio/music_box_01.mp3");
music_box_02 = new Audio("../Audio/music_box_02.mp3");
music_box_03 = new Audio("../Audio/music_box_03.mp3");
ff_laugh01 = new Audio("../Audio/freddy01.wav");
ff_laugh02 = new Audio("../Audio/freddy02.wav");
ff_laugh03 = new Audio("../Audio/freddy03.wav");
ff_lullaby = new Audio("../Audio/music box.wav");
ff_run = new Audio("../Audio/freddy_run.wav");

//- definitions -

buzzing.loop = true;
deep_steps.volume = .2;
door_light.loop = true;
door_light2.loop = true;
camera_move.loop = true;
ad_music.loop = true;
gf_talking.loop = true;
cc_kitchen03.loop = true;
cc_kitchen01.loop = true;
cc_kitchen04.loop = true;
cc_kitchen02.loop = true;
bb_guitar.loop = true;
bb_guitar.volume = .025;
music_box_01.loop = true;
music_box_01.volume = .2;
music_box_02.loop = true;
music_box_02.volume = .2;
music_box_03.loop = true;
music_box_03.volume = .2;  
ff_lullaby.loop = true;
ff_lullaby.volume = .05
ff_run.volume = 1;