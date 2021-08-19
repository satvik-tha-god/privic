const pinarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","10"];
const rand1 = pinarr[Math.floor(Math.random() * pinarr.length)];
const rand2 = pinarr[Math.floor(Math.random() * pinarr.length)];
const rand3 = pinarr[Math.floor(Math.random() * pinarr.length)];
const rand4 = pinarr[Math.floor(Math.random() * pinarr.length)];
const rand5 = pinarr[Math.floor(Math.random() * pinarr.length)];
const rand6 = pinarr[Math.floor(Math.random() * pinarr.length)];
const pinstring = rand1 + rand2 + rand3 + rand4 + rand5 + rand6;

module.exports = pinstring;
