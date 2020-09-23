const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\ ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`Meet ${name}. ${name} likes ${activity} and listening to ${music}. ${name}'s favourite meal is ${meal}! ${name} can't go a day without ${food}! ${name} loves ${sport}!!`);
            rl.close();
          })
        })
      })
    })
  })
});