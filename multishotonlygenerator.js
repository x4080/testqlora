const filename = "multishotonly.jsonl"
const fs = require('fs');

let array = [
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Good morning`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Whats happening`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    }, {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Whats up`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Bonjour`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I want to order pizza`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I want some pizza please`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I like to buy pizza`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `1 pepperoni pizza please`,
        response: `{"message":"One pepperoni pizza coming up, would you like anything else ?","order":"pepperoni pizza,1","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `2 pepperoni pizza please`,
        response: `{"message":"Two pepperoni pizza coming up, would you like anything else ?","order":"pepperoni pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `2 cheese pizza please`,
        response: `{"message":"Two cheese pizza coming up, would you like anything else ?","order":"cheese pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `1 cheese pizza and 2 rendang pizza please`,
        response: `{"message":"One cheese pizza and two rendang pizza coming up, would you like anything else ?","order":"cheese pizza,1;rendang pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `who is biden`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `whats the weather like`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    {
        instruction:`message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `whats trending`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    
]

fs.writeFile(filename, '', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

array.forEach(e => {
    const json = JSON.stringify(e)
    fs.appendFile(filename, json + '\n', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

// fs.close();