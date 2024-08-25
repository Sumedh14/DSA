/*
  Que1: Write a JavaScript function to check whether an 'input' is a string or not.

    Using typeOf Operator
    Using Instanceof Operator
    Underscore.js _.isString()
    Object.prototype.toString.call(str) 


import { isString } from 'underscore';

function checkString (str) {
    if (typeof str == 'string') {
        return true;
    }
    if (str instanceof String) {
        return true;
    }
    if (isString(str)) {
         return true;
    }
    if(str.constructor === String){
        return true
    }
    if (Object.prototype.toString.call(str) === '[object String]') {
        return true
    }
    return false;
}
console.log(checkString('Strk'))
console.log(checkString([1, 3, 4, 5]))

*/

/*
2. Write a JavaScript function to check whether a string is blank or not. 

function is_Blank (str) {
    if (str.length === 0) {
        return true;
    }
    if (str.trim() === '') {
        return true;
    }
    if (!str) {
        return true;
    }
    if (Object.prototype.toString.call(str) == '[object String]' && str.trim() === '') {
        return true
    }
    if (/^\s*$/.test(str)) {
        return true;
    }
    if (str && str.toString().trim() === "") {
        return true
    }
    return false;
}
*/

/*
    3. Write a JavaScript function to split a string and convert it into an array of words.

    function splitString(str){
        return str.trim().split(' ')
    }

*/

/*
    4. Write a JavaScript function to extract a specified number of characters from a string.

    function extractStr(str,num){
        if((str.constructor === String) && (num>0))
            return str.substring(0,num)
        
        return false
    }

 */

/*
5. Write a JavaScript function to convert a string into abbreviated form. 

function abravation(str){
     let spl = str.split(' ')
    if(str && (Object.prototype.toString.call(str)=='[object String]')){
       
        return ( spl[0] + " " + spl[1].charAt(0) + ".")
    }
    return spl[0]
}
 */

/*
6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

function hideEmail(str){
   let part1, part2;
   let spl = str.split('@');
   part1 = spl[0];
   part2 = spl[1];
   part1 = part1.substring(0,(part1.length - (part1.length/2)));
   return part1 +  '...@' + part2
}
*/

/*
    7. Write a JavaScript function to parameterize a string.

    function str_parameterize(str){
        if(str && (typeof str == 'string')){
            // return str.split(' ').join('-').toLowerCase();
            return str.trim().toLowerCast().replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s/g,"-")
        }
        
    }

*/

/*
8. Write a JavaScript function to capitalize the first letter of a string.

function captalize_first(str){
    let arr = [];
    arr = str.split(' ')
    for(let i = 0; i < arr.length;i++){
       arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1); 
    }
    //  return arr.toString().replace(/\,/g," ")

    return str.replace(/\w\S*\/g,function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}

 */

/*
9. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

    function replace_letter(str){
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(txt,chr){
            return chr ? txt.toUpperCase() : txt.toLowerCase();
        });
    }


*/

/*
10. Write a JavaScript function to convert a string into camel case.

    function camelize(str){
        return str.replace(/\W(.)/g,function(match,chr){
            return chr.toUpperCase();
        });
    }

*/

/*
11. Write a JavaScript function to uncommelize a string.
    function uncommelize(str,separator){
       if(typeof(seprator) == 'undefined'){
        separator = ' '; 
       } 

       let strr = str.replace(/[A-Z]/g,function(text){
        return separator + text.toLowerCase();
       });

       return strr.replace('/^'+ seprator +'/','');
    }

*/

/*
12. Write a JavaScript function to concatenate a given string n times (default is 1).

function string_concatenation(str,num){
    if(!num) return str
    return str.repeat(num)

    if(typeof(num) == "undefined") {
    num =1;
    }
    return num < 1 ? '' : new Array(num + 1).join(str);
}

*/

/*
13. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(str1, str2 ,position){
    if(!str2){ return str1;}
    if(!position){
        return `str2 + " " + str1`
    }
    
    let firstStr = str1.substring(0,position);
    let secondStr = str1.substring(position);
    
    return (firstStr +" " str2 + " "+  secondStr) 
}

*/

/*
14. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.

humanize_format = function humanize(num) {
   if(typeof(num) == "undefined") return;
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        switch(num % 10) {
            case 1: return num + "st";
            case 2: return num + "nd";
            case 3: return num + "rd";
        }
        return num + "th";
    }

*/

/*
15. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.


function truncate_string(str,num,spacial){
    if(!num){
        return str;
    }
    if(!spacial){
        return (str.splice(0,num)+'...')
    }
    return (str.splice(0,num)+spacial)   
}

 */

/*
16. Write a JavaScript function to chop a string into chunks of a given length.

function chop_chunk(str,num){
   return str.match(/(.|[\r\n]){1,num}/g);
}

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

*/

/*
17. Write a JavaScript function to count substrings in a string.

fuunction count_substring(str,target){
   str += '';
   target += '';
   if(!str){
    if (sub_str.length <= 0) 
    {
      return main_str.length + 1;
    }
    subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }

    let count = 0,
    i = 0;
    while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
    }
}

*/

/*
18. Write a JavaScript function to escape a HTML string.

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
        var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

        return chars_to_replace[tag] || tag;
    });
}

*/

/*
19. Write a JavaScript function that can pad (left, right) a string to get to a specific length.

function formatted_string(pad, user_str, pad_pos)
{
  if (typeof user_str === 'undefined') 
    return pad;
  if (pad_pos == 'l')
     {
     return (pad + user_str).slice(-pad.length);
     }
  else 
    {
    return (user_str + pad).substring(0, pad.length);
    }
}

*/

/*
20. Write a JavaScript function to repeat a string for a specified time.



*/