// only english for mistral
const filename = "train.csv"
const fs = require('fs');

let instruction = `Choose from one of ('weather' or 'other topic') what input is related to, input can be in indonesian or english, response always in english. Detail is from context if not available in input`
let othertopic = `Related to : other topic`

let array = [

    {
        instruction: instruction,
        context: ``,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Will it rain today ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Will it rain 2 days from now ?`,
        response: `Related to : weather, detail : rain, when : 2 days from now, how many days from today : 2`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Is it raining yesterday ?`,
        response: `Related to : weather, detail : rain, when : yesterday, how many days from today : -1`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `What about today ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `What about 2 days from now ?`,
        response: `Related to : weather, detail : rain, when : 2 days from now, how many days from today : 2`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `What about 10 days from now ?`,
        response: `Related to : weather, detail : rain, when : 10 days from now, how many days from today : 10`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `How about 10 days from now ?`,
        response: `Related to : weather, detail : rain, when : 10 days from now, how many days from today : 10`
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `What about 3 days from now ?`,
        response: `Related to : weather, detail : snow, when : 3 days from now, how many days from today : 3`
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `What about 15 days from now ?`,
        response: `Related to : weather, detail : snow, when : 15 days from now, how many days from today : 15`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Will it rain next week ?`,
        response: `Related to : weather, detail : rain, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : rain, when : tommorow, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: `thunderstorm`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : thunderstorm, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `What about next week ?`,
        response: `Related to : weather, detail : snow, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Will it snow tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        context: ``,
        input: `What's your name ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `What's your name ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: ``,
        input: `Tell me about trump`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: `thunderstorm`,
        input: `Explain why you so smart`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: ``,
        input: `Explain why you so smart`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: ``,
        input: `I want to order pizza`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: `weather`,
        input: `I want to order pizza`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: `weather`,
        input: `what is 20+40`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: ``,
        input: `fuck you`,
        response: othertopic
    },
    {
        instruction: instruction,
        context: ``,
        input: `motherfucker`,
        response: othertopic
    },
]

// function jsonToCsv(data) {
//     return (
//         Object.keys(data[0]).join(",") +
//         "\n" +
//         data.map((d) => Object.values(d).join(",")).join("\n")
//     );
// }

// console.log(jsonToCsv(array))

fs.writeFile(filename, '', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

line = "text\n"
array.forEach(e => {
    const text = `"### Instruction : ${e.instruction}\n### Context : ${e.context}\n### Input : ${e.input}\n### Response : ${e.response}"`
    // const text = ','+`### Instruction : ${e.instruction} ### Context : ${e.context} ### Input : ${e.input} ### Response : ${e.response}`
    line = line + text + "\n"
});

fs.appendFile(filename, line, (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

// console.log(line)
