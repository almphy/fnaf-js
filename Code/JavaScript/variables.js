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
let cam_1A = true;
let cam_1B = false;
let cam_1C = false;
let cam_2A = false;
let cam_2B = false;
let cam_3 = false;
let cam_4A = false;
let cam_4B = false;
let cam_5 = false;
let cam_6 = false;
let cam_7 = false;

//---- Audio ----

//- office - 
audio = new Audio("../Audio/boop.wav");
turn_on = new Audio("../Audio/turn_on.wav");
turn_off = new Audio("../Audio/turn_off.wav");
buzzing = new Audio("../Audio/buzzing.wav");
door_light = new Audio("../Audio/light_hum.wav");
door_light2 = new Audio("../Audio/light_hum.wav");
night_1_call = new Audio("../Audio/voiceover1c.wav");

//- cameras \/ tablets -
stinger = new Audio("../Audio/windowscare.wav");
camera_move = new Audio("../Audio/camera_move.wav");
music_box_01 = new Audio("../Audio/music_box_01.mp3");
music_box_02 = new Audio("../Audio/music_box_02.mp3");
music_box_03 = new Audio("../Audio/music_box_03.mp3");
music_box_04 = new Audio("../Audio/music_box_04.mp3");
camera_open = new Audio("../Audio/camera_open.wav");
camera_close = new Audio("../Audio/camera_close.wav");
ad_music = new Audio("../Audio/ad_music.mp3");
william_laugh = new Audio("../Audio/william_laugh.wav");
garble01 = new Audio("../Audio/garble1.wav");
garble02 = new Audio("../Audio/garble2.wav");
garble03 = new Audio("../Audio/garble3.wav");
garble012 = new Audio("../Audio/garble1-2.wav");

//- ambiance \/ other -
ambiance01 = new Audio("../Audio/camera_move.wav");
ambiance01 = new Audio("../Audio/camera_move.wav");
ambiance03 = new Audio("../Audio/camera_move.wav");
circus_organs = new Audio("../Audio/camera_move.wav");
fnaf2_alarm = new Audio("../Audio/camera_move.wav");

//- Foxy the Pirate Fox -
fp_pirate_song = new Audio("../Audio/gf_laugh.wav");
fp_hallway_run = new Audio("../Audio/gf_laugh.wav");
fp_banging = new Audio("../Audio/gf_laugh.wav");

//- Golden Freddy -
gf_laugh = new Audio("../Audio/gf_laugh.wav");
gf_jumpscare = new Audio("../Audio/gf_jumpscare.wav");
gf_talking = new Audio("../Audio/gf_talking.wav");

//- shared animatronic sounds -
jumpscare = new Audio("../Audio/XSCREAm.wav");
deep_steps = new Audio("../Audio/deep_steps.wav");
breathing = new Audio("../Audio/gf_laugh.wav");

//- definitions -

buzzing.loop = true;
deep_steps.volume = .2;
door_light.loop = true;
door_light2.loop = true;
camera_move.loop = true;
ad_music.loop = true;
gf_talking.loop = true;