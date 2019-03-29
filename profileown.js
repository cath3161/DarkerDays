    // All the interaction buttons
    var buttons = document.querySelectorAll(".interactionButton");

    // Loop through them and assign a click event handler
    for(var i = 0; i<buttons.length;i++) {
        buttons[i].addEventListener("click", handleClick);
    }

    function handleClick(event) {
        console.log("clicked on:");
        console.log(event.currentTarget);

        // Get the label value
        var label = event.currentTarget.lastElementChild;
        //console.log(label);
        
        var labelValue = label.textContent;
        //console.log(labelValue);
        
        // Make the text node to a number
        labelValue = parseInt(labelValue);

        // Make new value
        labelValue++;

        // Update the label to new value
        label.textContent = labelValue;
    }