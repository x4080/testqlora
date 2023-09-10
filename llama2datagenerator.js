const filename = "llama2data.jsonl"
const fs = require('fs');

let instruction = `Choose from ('weather' or 'other topic') what input is related to, input can be in indonesian or english, response always in english`
let othertopic = `Related to : other topic`

let array = [
    {
        instruction: instruction,
        input: `Siapa namamu ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        input: `Apakah kemarin hujan ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : -1`
    },
    {
        instruction: instruction,
        input: `Apakah hari ini akan hujan ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `Apakah besok akan hujan ?`,
        response: `Related to : weather, detail : rain, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        input: `Apakah minggu depan akan hujan ?`,
        response: `Related to : weather, detail : rain, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `Will it rain today ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `Will it rain 2 days from now ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 2`
    },
    {
        instruction: instruction,
        input: `Is it raining yesterday ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : -1`
    },
    {
        instruction: instruction,
        input: `Will it rain next week ?`,
        response: `Related to : weather, detail : rain, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `Will it snow tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        input: `What's your name ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        input: `Tell me about trump`,
        response: othertopic
    },
    {
        instruction: instruction,
        input: `Explain why you so smart`,
        response: othertopic
    },
    {
        instruction: instruction,
        input: `I want to order pizza`,
        response: othertopic
    },
]

fs.writeFile(filename, '', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

array.forEach(e => {
    const text = `### Instruction : ${e.instruction}\n### Input : ${e.input}\n### Response : ${e.response}\n`
    const json = JSON.stringify({ text: text })
    // console.log(text)
    fs.appendFile(filename, json + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

// fs.close();