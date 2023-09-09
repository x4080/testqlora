const filename = "llama2data.jsonl"
const fs = require('fs');

let array = [
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Whats the weather like next week ?`,
        response: `Related to : weather, detail : weather, when : next week`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Whats the weather like today ?`,
        response: `Related to : weather, detail : weather, when : today`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Will it rain today ?`,
        response: `Related to : weather, detail : rain, when : today`
    },    
    {
        instruction: `Today's date is 02/01/2023 (dd/mm/yyyy). Choose from ('weather' or 'other topic') what input is related to`,
        input: `Will it rain next week ?`,
        response: `Related to : weather, detail : rain, when : next week`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Will it snow today ?`,
        response: `Related to : weather, detail : snow, when : today`
    },    
    {
        instruction: `Today's date is 05/01/2023 (dd/mm/yyyy). Choose from ('weather' or 'other topic') what input is related to`,
        input: `Will it snow tommorow ?`,
        response: `Related to : weather, detail : snow, when : tommorow`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Is thunderstorm coming ?`,
        response: `Related to : weather, detail : thunderstorm, when : today`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `What's your name ?`,
        response: `Related to : other topic`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Tell me about trump`,
        response: `Related to : other topic`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `Explain why you so smart`,
        response: `Related to : other topic`
    },    
    {
        instruction: `Choose from ('weather' or 'other topic') what input is related to`,
        input: `I want to order pizza`,
        response: `Related to : other topic`
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
    const json = JSON.stringify({text:text})
    // console.log(text)
    fs.appendFile(filename, json + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

// fs.close();