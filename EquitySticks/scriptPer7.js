//Students
let blue6 = ["Jesus S.", " Tony", "Idalmis", "Elizabeth", "Jasmin", "Emily", "Alex"];
let yellow6 = ["Mayra", "Rosie", "Justin", "Luis", "Alondra", "Flore", "Uday"];
let orange6 = ["Hana", "Anahi", "Teresa", "Sean", "Amari", "Amanda M.", "Kevin"];
let pink6 = ["Amanda D.", "Jesus R.", "Flora", "Bassam", "Jonathan", "Giovanni", "Alianna"];

let blue7 = ["Rubi", "Michael", "Veronica", "Lamar", "Astrid"];
let yellow7 = ["Enrique", "Edgar R.", "Jasmine", "Armando", "Adolfo"];
let orange7 = ["Rosa", "Jesus", "Edgar M.", "Diana", "Jonathan"];
let pink7 = ["Ofelia", "Agustin", "Jacqueline", "Cristopher", "Paola"];

//Generate random number
function newBlueName(){
    let randomNum = Math.floor(Math.random()*(blue7.length));
    document.getElementById('blueName').innerHTML = blue7[randomNum];
}

function newYellowName(){
    let randomNum = Math.floor(Math.random()*(yellow7.length));
    document.getElementById('yellowName').innerHTML = yellow7[randomNum];
}

function newOrangeName(){
    let randomNum = Math.floor(Math.random()*(orange7.length));
    document.getElementById('orangeName').innerHTML = orange7[randomNum];
}

function newPinkName(){
    let randomNum = Math.floor(Math.random()*(pink7.length));
    document.getElementById('pinkName').innerHTML = pink7[randomNum];
}