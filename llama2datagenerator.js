const filename = "llama2data.jsonl"
const fs = require('fs');

let array = [
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Whats the weather like today ?`,
        response: `Related to weather`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Will it rain today ?`,
        response: `Related to weather`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Will it snow today ?`,
        response: `Related to weather`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Is thunderstorm coming ?`,
        response: `Related to weather`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `What's your name ?`,
        response: `Related to other topic`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Tell me about trump`,
        response: `Related to other topic`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `Explain why you so smart`,
        response: `Related to other topic`
    },    
    {
        instruction: `Choose from ("weather" or "other topic") what instruction is related to`,
        input: `I want to order pizza`,
        response: `Related to other topic`
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