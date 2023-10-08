// training using example is not working, when training dont use example just instruction, but when inferencing use example
const filename = "llama2data.jsonl"
const fs = require('fs');

let instruction = `Choose from one of ('weather' or 'other topic') for response`
// let example =`# Context : 
// # Input : Whats the weather like next week ?
// # Response : Related to : weather, detail : weather, when : next week, how many days from today : 7
// # Context : 
// # Input : who is trump
// # Response : other topic
// # Context : rain
// # Input : how about next week
// # Response : Related to : weather, detail : rain, when : next week, how many days from today : 7`

// let lines = example.split('\n');
// let combinedText = lines.join('\n');
// console.log(combinedText);

// # Instruction : Choose from one of ('weather' or 'other topic') for response
// below is example
// # Context :
// # Input : Whats the weather like next week ?
// # Response : Related to : weather, detail : weather, when : next week, how many days from today : 0
// # Context :
// # Input : who is trump
// # Response : other topic
// # Context : rain
// # Input : how about next week
// # Response : Related to : weather, detail : rain, when : next week, how many days from today : 7
// solve below based on example
// # Context :
// # Input : how about next week
// # Response :

let array = [
    {
        instruction: instruction,
        context: `empty`,
        input: `will it rain`,
        response: 'Related to : weather, detail : rain, when : today, how many days from today : 0'
    },
    {
        instruction: instruction,
        context: `empty`,
        input: `whats the weather like`,
        response: 'Related to : weather, detail : weather, when : today, how many days from today : 0'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `whats the weather`,
        response: 'Related to : weather, detail : snow, when : today, how many days from today : 0'
    },

    {
        instruction: instruction,
        context: `rain`,
        input: `bagaimana dengan 12 hari dari hari ini`,
        response: 'Related to : weather, detail : thunderstorm, when : 12 days from today, how many days from today : 12'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `bagaimana dengan 12 hari dari sekarang`,
        response: 'Related to : weather, detail : snow, when : 12 days from today, how many days from today : 12'
    },
    {
        instruction: instruction,
        context: `thunderstorm`,
        input: `bagaimana dengan 20 hari dari sekarang`,
        response: 'Related to : weather, detail : thunderstorm, when : 20 days from today, how many days from today : 20'
    },
    {
        instruction: instruction,
        context: `empty`,
        input: `i want to order some pizza please`,
        response: 'Related to : other topic'
    },
    {
        instruction: instruction,
        context: `empty`,
        input: `apakah nanti malam akan hujan`,
        response: 'Related to : weather, detail : rain, when : tonight, how many days from today : 0'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `apakah nanti malam akan hujan`,
        response: 'Related to : weather, detail : rain, when : tonight, how many days from today : 0'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `bagaimana dengan kemarin`,
        response: 'Related to : weather, detail : snow, when : yesterday, how many days from today : -1'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `bagaimana dengan besok`,
        response: 'Related to : weather, detail : rain, when : tommorow, how many days from today : 1'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `apakah hari ini akan hujan`,
        response: 'Related to : weather, detail : rain, when : today, how many days from today : 0'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `how about tommorow`,
        response: 'Related to : weather, detail : rain, when : 1 days from now, how many days from today : 1'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `how about 2 days from now`,
        response: 'Related to : weather, detail : rain, when : 2 days from now, how many days from today : 2'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `how about 2 days from now`,
        response: 'Related to : weather, detail : snow, when : 2 days from now, how many days from today : 2'
    },
    {
        instruction: instruction,
        context: `thunderstorm`,
        input: `bagaimana dengan kemarin`,
        response: 'Related to : weather, detail : thunderstorm, when : yesterday, how many days from today : -1'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `bagaimana dengan kemarin`,
        response: 'Related to : weather, detail : snow, when : yesterday, how many days from today : -1'
    },
    {
        instruction: instruction,
        context: `empty`,
        input: `Whats your name`,
        response: 'Related to : other topic'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `Whats your name`,
        response: 'Related to : other topic'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `what about 30 days from today`,
        response: 'Related to : weather, detail : snow, when : 30 days from today, how many days from today : 30'
    },
    {
        instruction: instruction,
        context: `thunderstorm`,
        input: `what about previous 2 days from today`,
        response: 'Related to : weather, detail : thunderstorm, when : previous 2 days from today, how many days from today : -2'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `what about yesterday`,
        response: 'Related to : weather, detail : thunderstorm, when : yesterday, how many days from today : -1'
    },
    {
        instruction: instruction,
        context: `rain`,
        input: `will thunderstorm coming next week ?`,
        response: 'Related to : weather, detail : thunderstorm, when : next week, how many days from today : 7'
    },
    {
        instruction: instruction,
        context: `snow`,
        input: `did thunderstorm came yesterday ?`,
        response: 'Related to : weather, detail : snow, when : yesterday, how many days from today : -1'
    },
]

fs.writeFile(filename, '', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

array.forEach(e => {
    // let text = `# Instruction : ${e.instruction}\nexample\n`
    let text = `# Instruction : ${e.instruction}\n`
    // text=text+example+'\nsolve this\n'+`# Context : ${e.context}\n# Input : ${e.input}\n# Response : ${e.response}\n`
    text=text+`# Context : ${e.context}\n# Input : ${e.input}\n# Response : ${e.response}\n`
    // console.log(text)
    const json = JSON.stringify({ text: text })
    // console.log(text)
    fs.appendFile(filename, json + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});