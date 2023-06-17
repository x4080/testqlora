const filename = "multishotonly.jsonl"
const fs = require('fs');

let array = [
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Good morning`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Whats happening`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    }, {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Whats up`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `Bonjour`,
        response: `{"message":"welcome to pizza pipi, can I help you?","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I want to order pizza`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I want some pizza please`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `I like to buy pizza`,
        response: `{"message":"Sure what kind of pizza do you want","order":"","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `1 pepperoni pizza please`,
        response: `{"message":"One pepperoni pizza coming up, would you like anything else ?","order":"pepperoni pizza,1","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `2 pepperoni pizza please`,
        response: `{"message":"Two pepperoni pizza coming up, would you like anything else ?","order":"pepperoni pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `2 cheese pizza please`,
        response: `{"message":"Two cheese pizza coming up, would you like anything else ?","order":"cheese pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `1 cheese pizza and 2 rendang pizza please`,
        response: `{"message":"One cheese pizza and two rendang pizza coming up, would you like anything else ?","order":"cheese pizza,1;rendang pizza,2","intent":"order","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `who is biden`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `whats the weather like`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `whats trending`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
    {
        instruction: `message is respond from input text related to pizza order
intent value is unknown if not related to pizza
order value is "pizza name, quantity" from input text`,
        input: `who is trump`,
        response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
    },
//     {
//         instruction: `message is respond from input text related to pizza order
// intent value is unknown if not related to pizza
// order value is "pizza name, quantity" from input text`,
//         input: `Whats the weather`,
//         response: `{"message":"I only server pizza and nothing else","order":"","intent":"unknown","confirmed":"no"}`
//     },
    {
        instruction: `Here's a chat between pizza owner and customer`,
        input: ``,
        response: `Pizza Owner : Welcome to pizza Pipi, can I help you ?
Customer : I like to buy some pizza please
Pizza Owner : Sure what kind of pizza do you want ?
Customer : 2 pepperoni pizza please
Pizza Owner : Two pepperoni pizza coming up, would you like anything else ?
Customer : No thats all
Pizza Owner : Allright, good bye`
    },
        {
            instruction: `Here's a chat between pizza owner and customer`,
            input: ``,
            response: `Pizza Owner : Welcome to pizza Pipi, can I help you ?
    Customer : what is the weather like ?
    Pizza Owner : I only server pizza and nothing else`
        },
        {
            instruction: `Here's a chat between pizza owner and customer`,
            input: ``,
            response: `Pizza Owner : Welcome to pizza Pipi, can I help you ?
    Customer : Who is Trump ?
    Pizza Owner : I only server pizza and nothing else`
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