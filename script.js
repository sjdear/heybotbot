let userStatus = 0;

const nar = () => {
    
    //Wanna chat
    const stageZero = () => {
      const playBtn = document.querySelector(".intro button");
      const zeroScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        zeroScreen.classList.toggle("fadeOut", true); //intro screen fades out
        match.classList.toggle("fadeOut", false);
        firstBotMessage();
      });
    };
    
    stageZero();

  };
  
//start the game function
nar();

//getting time
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = "<" + hours + ":" + minutes + "> ";
    return time;
}


//intro section
function firstBotMessage() {
    var div = document.getElementById('botStarterMessage');
    let firstMessage = "botbot: You’ve been waiting for a while… maybe I can guess what you were in a past life?"
    let time = getTime();
    var typewriter = new Typewriter(div, {
        delay: 50
    });
    typewriter.typeString(time + firstMessage)
    .start();
    //document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + time + firstMessage + '</span></p>';

    document.getElementById("userInput").scrollIntoView(false);

    setTimeout(() => {
        secondBotMessage();
    }, 1000)
}


function secondBotMessage() {
    let secondMessage = 'botbot: Wait, before you answer that. You don’t even know me. My bad, getting used to this talking thing… I need to introduce myself. I’m bot-bot.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + secondMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        thirdBotMessage();
    }, 1000)
}

function thirdBotMessage() {
    let thirdMessage = 'botbot: What’s your name?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + thirdMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
            chatDisappearOne();
        }
    });

}


function chatAppearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", true);
    chatBox.classList.toggle("fadeOut", false);

}


//chat section


//gets botbot's response from our list and displays it
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + 'botbot: ' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

     setTimeout(() => {
     fourthBotMessage();
     }, 1000)

}

function noop() {};

//gets the text from the user, diplays it, and processes it, sends to getHardResponse()
function getResponse() {
    getResponse = noop;
    let userText = $("#textInput").val();
    let time = getTime();

    if (userText == "") {
        userText = "The user was too stunned to speak";
    }

    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000) //botbot needs 2 seconds to think of a response

}



function chatDisappearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", false);
    chatBox.classList.toggle("fadeOut", true);
}


function fourthBotMessage() {
    let thirdMessage = 'Right, right. Sorry.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + thirdMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fifthBotMessage();
    }, 1000)
}


function fifthBotMessage() {
    let secondMessage = 'I think I can help though. I’m what they call an assistant in your world. Or an understudy. Maybe an intern?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + secondMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponseTwo();
            chatDisappearOne();
        }
    });

}

function getBotResponseTwo(input) {
    //prompt 1
    if (input == "same here") {
        return "So I think I read the room, read the chat as it were and guess your “vibe.” Beats being stuck waiting for a page to load, right?";
    } else if (input == "Not an intern…. ") {
        return "NOT AN INTERN? IN THIS ECONOMY?"; 
    } else {
        return "intern life";
    }
}
//chat section
//gets botbot's response from our list and displays it
function getHardResponseTwo(userTextTwo) {
    let botResponseTwo = getBotResponseTwo(userTextTwo);
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + 'botbot: ' + botResponseTwo + '</span></p>';
    $("#chatbox").append(botHtml);


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


//gets the text from the user, diplays it, and processes it, sends to getHardResponse()
function getResponseTwo() {
    let userTextTwo = $("#textInput").val(); //something is wrong with this line 
    let time = getTime();

 //   if (userTextTwo == "") {
 //       userTextTwo = "The user was too stunned to speak";
 //   } 

    userHtmlTwo = '<p class="userText"><span>' + time + 'you: ' + userTextTwo + '</span></p>';
    

    $("#textInput").val("");
    $("#chatbox").append(userHtmlTwo);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    console.log(userTextTwo);

    setTimeout(() => {
        getHardResponseTwo(userTextTwo);
    }, 1000) //botbot needs 2 seconds to think of a response

}


