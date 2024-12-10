//Students
let list = ["Zane", "Julian", "Matthew", "Alex", "Ethan", "Abdula", "Alvin", "Liam", "Ricky", "Chris", "Brennan", "Miguel"];


//Generate the name of a student to be called on
function newName(){
    //Random number generation for
    let randomNum = Math.floor(Math.random()*(list.length));
    document.getElementById('studentName').innerHTML = list[randomNum];


    //Remove student from list once they have gone
    if(list.length === 0){
        document.getElementById('studentName').innerHTML = "All students have gone! Please refresh the page.";
    }else{
        if(randomNum !== -1){
            list.splice(randomNum, 1);
        }
    }

}
