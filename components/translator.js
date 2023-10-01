const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

function swap(obj) {
  let swapped = {};
  for (let key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
};

const britishToAmericanSpelling = swap(americanToBritishSpelling);
const britishToAmericanTitles = swap(americanToBritishTitles);

const americanToBritishWordSpell = {...americanOnly, ...americanToBritishSpelling};
const britishToAmericanWordSpell = {...britishOnly, ...britishToAmericanSpelling};

function capitalizeFirstLetter(word){
  let capitalized = word[0].toUpperCase() + word.slice(1);
  return capitalized;
}

class Translator {

  americanToBritish(text) {
    const lowerCaseText = text.toLowerCase();
    let translate;

    //Dealing with titles
    const titles = Object.keys(americanToBritishTitles);
    for (let i=0; i<titles.length; i++){
      if(lowerCaseText.includes(titles[i])) {
        const find = new RegExp(titles[i],"gi");
        const replace = `<span class="highlight">${capitalizeFirstLetter(americanToBritishTitles[titles[i]])}</span>`;
        translate = text.replace(find, replace);
      }
    }

    translate = translate || text;

    //Dealing with time format
    const times = lowerCaseText.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g);
    if(times) {
      times.map( time => {
        const find = new RegExp(time,"gi");
        const replace = `<span class="highlight">${time.replace(":",".")}</span>`;
        translate = translate.replace(find, replace);
      })
    }

    //Dealing with words and spells
    const wordAndSpell = Object.keys(americanToBritishWordSpell);
    for(let i=0; i<wordAndSpell.length; i++) {
      if(lowerCaseText.includes(wordAndSpell[i])){
        const atStart = new RegExp('^'+wordAndSpell[i],'i').test(lowerCaseText);
        const atEnd = new RegExp(wordAndSpell[i]+'$','i').test(lowerCaseText);
        const notContamined = new RegExp('(?<=[^a-zA-Z])(' + wordAndSpell[i] + ')(?=[^a-zA-Z])','i').test(lowerCaseText);
        
        if(atStart || atEnd || notContamined) {
        const find = new RegExp(wordAndSpell[i],"gi");
        const replace = `<span class="highlight">${americanToBritishWordSpell[wordAndSpell[i]]}</span>`;
        translate = translate.replace(find, replace);
        }
      }
    }

    return translate;
  }

  britishToAmerican(text){
    const lowerCaseText = text.toLowerCase();
    let translate;

    //Dealing with titles
    const titles = Object.keys(britishToAmericanTitles);
    for (let i=0; i<titles.length; i++){
      if(lowerCaseText.includes(titles[i])) {
        const find = new RegExp(titles[i],"gi");
        const replace = `<span class="highlight">${capitalizeFirstLetter(britishToAmericanTitles[titles[i]])}</span>`;
        translate = text.replace(find, replace);
      }
    }

    translate = translate || text;

    //Dealing with time format
    const times = lowerCaseText.match(/([0-9]|0[0-9]|1[0-9]|2[0-3]).[0-5][0-9]/g);
    if(times) {
      times.map( time => {
        const find = new RegExp(time,"gi");
        const replace = `<span class="highlight">${time.replace(".",":")}</span>`;
        translate = translate.replace(find, replace);
      })
    }

    //Dealing with words and spells
    const wordAndSpell = Object.keys(britishToAmericanWordSpell);
    for(let i=0; i<wordAndSpell.length; i++) {
      if(lowerCaseText.includes(wordAndSpell[i])){
        const atStart = new RegExp('^'+wordAndSpell[i],'i').test(lowerCaseText);
        const atEnd = new RegExp(wordAndSpell[i]+'$','i').test(lowerCaseText);
        const notContamined = new RegExp('(?<=[^a-zA-Z])(' + wordAndSpell[i] + ')(?=[^a-zA-Z])','i').test(lowerCaseText);
        
        if(atStart || atEnd || notContamined) {
        const find = new RegExp(wordAndSpell[i],"gi");
        const replace = `<span class="highlight">${britishToAmericanWordSpell[wordAndSpell[i]]}</span>`;
        translate = translate.replace(find, replace);
        }
      }
    }

    return translate;
  }
  
}

module.exports = Translator;