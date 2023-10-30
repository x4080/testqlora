// training using example is not working, when training dont use example just instruction, but when inferencing use example
const filename = "llama2data.jsonl"
const fs = require('fs');

let instruction = ` Modify json variables based on input`
let example = `# Input : 
- Add field partnumber to fieldNames,fieldValidations
- Add field partnumber:"Part#" to fieldTitle
- Add field partnumber:200 to fieldWidths
- Add field partnumber:"text" to fieldKind

let fieldNames = [
    "itemid",
    "description",
]
let fieldTitle = {
    itemid: "ID",
    description: "Name",
}
let fieldKind = {
    itemid: "text",
    description: "text",
    partnumber: "text",
}
let fieldWidths = {
    itemid: 400,
    description: 400,
}
let fieldValidations = {
    itemid: "",
    description: "",
};


# Response :
let fieldNames = [
    "itemid",
    "description",
    "partnumber"
]

let fieldTitle = {
    itemid: "ID",
    description: "Name",
    partnumber:"Part#"
}
let fieldKind = {
    itemid: "text",
    description: "text",
    partnumber: "text",
}
let fieldValidations = {
    itemid: "",
    description: "",
    partnumber: "",
};
let fieldWidths = {
    itemid: 400,
    description: 400,
    partnumber:200,
}
let fieldValidations = {
    itemid: "",
    description: "",
    partnumber: "",
};
`

// let lines = example.split('\n');
// let combinedText = lines.join('\n');
// console.log(combinedText);

let array = [
    {
        instruction: instruction,
        input: `- Add field cstatus to fieldNames,fieldNamesPost
let fieldNames = [
    "txdate",
    "due",
    // "ppn",
    "soref",
    "customerdescription",
    "salesman",
    "gudang",
    "s_inv",
    "fp",
];
let fieldNamesPost = [
	"txdate",
	"duedate",
	"due",
	"customerid",
	"total",
	"head",
	"disc",
	"discp",
	"txid",
	"soref",
	"branch",
	"gudang",
	"salesman",
	"s_inv",
	"username",
	"fp",
	"ppn",
	"taxvalue",
];`,
        response: `let fieldNames = [
    "txdate",
    "due",
    // "ppn",
    "soref",
    "customerdescription",
    "salesman",
    "gudang",
    "s_inv",
    "fp",
    "cstatus"
];
let fieldNamesPost = [
	"txdate",
	"duedate",
	"due",
	"customerid",
	"total",
	"head",
	"disc",
	"discp",
	"txid",
	"soref",
	"branch",
	"gudang",
	"salesman",
	"s_inv",
	"username",
	"fp",
	"ppn",
	"taxvalue",
    "cstatus"
];`},
    
]

fs.writeFile(filename, '', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

// for example
let text = `# Instruction : ${instruction}\n`
text = text + example
const json = JSON.stringify({ text: text })
fs.appendFile(filename, json + '\n', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

array.forEach(e => {
    // let text = `# Instruction : ${e.instruction}\nexample\n`
    let text = `# Instruction : ${e.instruction}\n`
    text = text + `# Input : ${e.input}\n# Response : ${e.response}\n`
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