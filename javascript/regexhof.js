let pattern = 'pw'
let regExOne = new RegExp(pattern)
let flag = 'gi'
let regExTwo = new RegExp(pattern ,flag)
let regExThree = /pw/gi
const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent on pw";

 const result = regExThree.test(strToCheck);
console.log(result);   //return true or false

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const OneMoreResult = strToCheck.replace(regExThree ,'p-w')
console.log(OneMoreResult);

const webUrl = "http://pwskills.com/hitesh%20choudhary"
const useableUrl = webUrl.replace(/%\d\d/,'-')
console.log(useableUrl);




