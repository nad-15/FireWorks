let fireworks = document.getElementsByClassName("firework");
let amount = 100;
let counter = 0;

for (const firework of fireworks) {
    let background = "";
    let rocketPosX = Math.round(Math.random() * 80 + 10) + "%";
    let rocketPosY = Math.round(Math.random() * 30 + 10) + "%";

    // Generate multiple colors for each firework
    let colors = [];
    for (let j = 0; j < 5; j++) {
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(color);
    }

    for (let i = 0; i < amount; i++) {
        let posX = Math.round(Math.random() * 100) + "%";
        let posY = Math.round(Math.random() * 100) + "%";
        let rSize = (Math.random() * 0.5 + 0.3).toFixed(2);

        // Pick random color from the colors array for each radial gradient
        let color = colors[Math.floor(Math.random() * colors.length)];

        if (i + 1 === amount) {
            background += `radial-gradient(circle, ${color} 0, black ${rSize}vh) ${posX} ${posY}`;
        } else {
            background += `radial-gradient(circle, ${color} 0, black ${rSize}vh) ${posX} ${posY}, `;
        }
    }

    firework.style.top = rocketPosY;
    firework.style.left = rocketPosX;
    firework.style.transform = `translate(-${rocketPosX}, -${rocketPosY})`;
    firework.style.background = background;
    firework.style.backgroundSize = "1vh 1vw";
    firework.style.backgroundRepeat = "no-repeat";
    firework.style.animation = "firework 5s infinite";
    firework.style.animationDelay = counter * 0.5 + "s";
    counter++;
}


// //////
// let fireworks = document.getElementsByClassName("firework");
// let amount = 100;
// let counter = 0;

// for (const firework of fireworks) {
//     let background = "";
//     let rocketPosX = Math.round(Math.random() * 80 + 10) + "%";
//     let rocketPosY = Math.round(Math.random() * 30 + 10) + "%";
//     var color = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     for (let i = 0; i < amount; i++) {
//         let posX = Math.round(Math.random() * 100) + "%";
//         let posY = Math.round(Math.random() * 100) + "%";
//         let rSize = (Math.random() * 0.5 + 0.3).toFixed(2);

//         if (i + 1 === amount) {
//             background += radial-gradient(circle, ${color} 0, black ${rSize}vh) ${posX} ${posY};
//         } else {
//             background += radial-gradient(circle, ${color} 0, black ${rSize}vh) ${posX} ${posY}, ;
//         }
//     }

//     firework.style.top = rocketPosY;
//     firework.style.left = rocketPosX;
//     firework.style.transform = translate(-${rocketPosX}, -${rocketPosY});
//     firework.style.background = background;
//     firework.style.backgroundSize = "1vh 1vw";
//     firework.style.backgroundRepeat = "no-repeat";
//     firework.style.animation = "firework 5s infinite";
//     firework.style.animationDelay = counter * 0.5 + "s";
//     counter++;
// }