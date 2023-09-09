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
        input: `Apakah hari ini akan hujan ?`,
        response: `Related to : weather, detail : rain, when : today`
    },
    {
        instruction: instruction,
        input: `Apakah besok akan hujan ?`,
        response: `Related to : weather, detail : rain, when : tommorow`
    },
    {
        instruction: instruction,
        input: `Apakah minggu depan akan hujan ?`,
        response: `Related to : weather, detail : rain, when : next week`
    },
    {
        instruction: instruction,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week`
    },
    {
        instruction: instruction,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today`
    },
    {
        instruction: instruction,
        input: `Will it rain today ?`,
        response: `Related to : weather, detail : rain, when : today`
    },
    {
        instruction: instruction,
        input: `Will it rain next week ?`,
        response: `Related to : weather, detail : rain, when : next week`
    },
    {
        instruction: instruction,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today`
    },
    {
        instruction: instruction,
        input: `Will it snow tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow`
    },
    {
        instruction: instruction,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today`
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