const messages = [
        "Frontend practice Started!",
        "Keep Practicing",
        "You're Doing Great!",
        "Almost There!",
        "Practice Makes Perfect!"
    ]

let index = 0;

function  changeMessage(){    
    const message = document.getElementById("message"); 
    message.textContent = messages[index];

    index++;

    if(index === messages.length){
        index = 0;
    }
}