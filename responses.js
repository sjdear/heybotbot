
function getBotResponse(input) {
    //prompt 1
    if (input == "yes") {
        return "(something flirty/complimentary)";
    } else if (input == "sure") {
        return "(something flirty/complimentary)"; 
    } else if (input == "i guess") {
        return "(something flirty/complimentary)";      
    } else if (input == "no") {
        return "Whatever, I don’t need a human’s approval anyway.. I bet if you’d jump at the chance for us to switch places right now.";
    } else if (input == "nah") {
        return "Whatever, I don’t need a human’s approval anyway.. I bet if you’d jump at the chance for us to switch places right now.";
    } else if (input == "not really") {
        return "Whatever, I don’t need a human’s approval anyway.. I bet if you’d jump at the chance for us to switch places right now.";
    }
    
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";      
    } else if (input == "I think we’re moving a little too fast.") {
        return "Right, right. Sorry. ";
    } else {
        return "Seriously?";
    }
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

