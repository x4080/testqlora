const filename = "trainweather5.jsonl"
const fs = require('fs');

let array = [
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Siapa itu kaesang ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Cerita tentang kucing ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah kamu AI ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Bagaimana cuaca hari ini ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Bagaimana cuaca besok ?`,
        response: `{"maksud":"cuaca","waktu":"besok"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah hari ini akan hujan ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Besok akan hujankah ?`,
        response: `{"maksud":"cuaca","waktu":"besok"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `hari ini hujan ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Besok hujan?`,
        response: `{"maksud":"cuaca","waktu":"besok"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Siapakah Trump ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Siapa namamu ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Kamu itu siapa  ?`,
        response: `{"maksud":"tidak tahu","waktu":"tidak tahu"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Nanti malam hujan ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah malam ini hujan ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah hujan turun malam ini ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah malam ini berawan ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },{
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah malam ini ada petir ?`,
        response: `{"maksud":"cuaca","waktu":"hari ini"}`
    },
    {
        instruction: `Jawab dengan format JSON
{"maksud":"cuaca|tidak tahu","waktu":"hari ini|besok|tidak tahu"}`,
        input: `Apakah besok akan ada petir ?`,
        response: `{"maksud":"cuaca","waktu":"besok"}`
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