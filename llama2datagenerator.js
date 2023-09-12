const filename = "llama2data.jsonl"
const fs = require('fs');

let instruction = `Choose from ('weather' or 'other topic') what input is related to, input can be in indonesian or english, response always in english. Detail is from last context if not available in input`
let othertopic = `Related to : other topic`

let array = [
    {
        instruction: instruction,
        last_context:``,
        input: `Siapa namamu ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Apakah kemarin hujan ?`,
        response: `Related to : weather, detail : rain, when : yesterday, how many days from today : -1`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Apakah hari ini akan hujan ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Apakah 2 hari lagi akan hujan ?`,
        response: `Related to : weather, detail : rain, when : 2 days from now, how many days from today : 2`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Apakah besok akan hujan ?`,
        response: `Related to : weather, detail : rain, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Apakah minggu depan akan hujan ?`,
        response: `Related to : weather, detail : rain, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:`snow`,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Will it rain today ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Will it rain 2 days from now ?`,
        response: `Related to : weather, detail : rain, when : 2 days from now, how many days from today : 2`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Is it raining yesterday ?`,
        response: `Related to : weather, detail : rain, when : yesterday, how many days from today : -1`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `What about today ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `What about 2 days from now ?`,
        response: `Related to : weather, detail : rain, when : today, how many days from today : 2`
    },
    {
        instruction: instruction,
        last_context:`snow`,
        input: `What about 3 days from now ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 3`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Will it rain next week ?`,
        response: `Related to : weather, detail : rain, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : rain, when : tommorow, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:`thunderstorm`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : thunderstorm, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        last_context:`snow`,
        input: `What about tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        last_context:`snow`,
        input: `What about next week ?`,
        response: `Related to : weather, detail : snow, when : next week, how many days from today : 7`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Will it snow tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow, how many days from today : 1`
    },
    {
        instruction: instruction,
        last_context:`rain`,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today, how many days from today : 0`
    },
    {
        instruction: instruction,
        last_context:``,
        input: `What's your name ?`,
        response: othertopic
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Tell me about trump`,
        response: othertopic
    },
    {
        instruction: instruction,
        last_context:``,
        input: `Explain why you so smart`,
        response: othertopic
    },
    {
        instruction: instruction,
        last_context:``,
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
    const text = `### Instruction : ${e.instruction}\n### Last Context : ${e.last_context}\n### Input : ${e.input}\n### Response : ${e.response}\n`
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