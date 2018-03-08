
//Horizontal
var redux_width = 0;
var redux_width_max = 780;
var redux_width_min = 10;

//Vertical
var redux_heigth = 0;
var redux_heigth_max = 575;
var redux_heigth_min = 5;

var redux_up_heigth = 5;
var redux_up_width = 5;
var redux_up_step = 5;

var moedas = 0;
var moedas_somador = 1;
var moedas_total = 0;

var moeda = [];
var moeda_length = 1;

var deadPoints = [];
var deadPointsLenght = 300;
var deadPointPenalidade = 10;
var deadPointColor = "black";

var resetTimer = 30;
var resetCache = resetTimer;

var background_color = "green";
var redux_color = "white";

var upgrade_reset = 10;

var deadNoReset = false;
var moedaNoReset = false;

var box_aberto;

var bonus_box_time = (Math.floor(Math.random() * (20 - 10 + 1)) + 10)*60;
var bonus_box_openad = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
var bonus_box_count_start = 20;
var bonus_box_count_dead_max = 10;
var bonus_box_count_dead = bonus_box_count_dead_max;
var bonus_box_count = bonus_box_count_start;
var bonusDieCounting = false;
var bonus_box_running = false;

var game_interaction_status = true;