#!/usr/bin/env node

const fs = require('fs');
const { exec} = require('child_process');

fs.readFile(__dirname + "/current-theme", "utf-8", (err, data) => {
    if (err) return;

    // Get current color
    const text = data.split(" ");
    const color = text[2];
    
    switch (color) {
        case "purple":
            text[2] = "green"
            break;
        default:
            text[2] = "purple"
            break;
    }

    fs.writeFile(__dirname + "/current-theme", text.join(" "), "utf-8", (err) => {
        if (err) return;
        console.log("Theme has changed")
        exec("sway reload");
    })

})
