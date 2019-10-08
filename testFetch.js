const url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed/?url=https://habr.com/";
const fetch = require('node-fetch');


const getData = async () => {
    const response = await fetch(url, {method: 'GET'});
    const data = await response.json();
    const audits = Array.from(Object.values(data.lighthouseResult.audits));
    let count = 0;
    for (let i = 0; i < audits.length; i++) {
        if (audits[i].details === undefined
            || audits[i].details.overallSavingsMs === undefined) continue;
        count++;
        console.log(`${audits[i].title} \t ${audits[i].details.overallSavingsMs}`);
    }
    console.log(count);
    //console.log(audits[23].details.overallSavingsMs);
    /*
    console.log(audits
        .filter(value => value.details !== undefined)
        .map(value => value.displayValue)
        .filter(value => value !== undefined)
    );*/

    const opportunity = 5;
    const saving = 5;

    //console.log(data.length);
};

getData();




