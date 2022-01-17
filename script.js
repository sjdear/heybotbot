let userStatus = 0;

const nar = () => {
    
    //Wanna chat
    const stageZero = () => {
      const playBtn = document.querySelector(".intro button");
      const zeroScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        zeroScreen.classList.add("fadeOut"); //intro screen fades out
        match.classList.add("fadeIn"); //stage one fades in
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

//gets the first message


function firstBotMessage() {
    let firstMessage = "botbot: are you having a good time so far, talking to me?"
    let time = getTime();
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + time + firstMessage + '</span></p>';

    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();


//gets botbot's response from our list and displays it
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + 'botbot: ' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//gets the text from the user, diplays it, and processes it, sends to getHardResponse()
function getResponse() {
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
    }, 2000) //botbot needs 2 seconds to think of a response

}

//press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


