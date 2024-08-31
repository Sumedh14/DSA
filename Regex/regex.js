
let text = 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these';

// constructor syntax-----------

let regex1 = new RegExp('HE');
console.log(regex1.test(text))
// test()->method->>>return boolean value if value is present or not and it is case sensitive

// 


// literal syntax----------

let regex2 = /services/;
console.log(regex2.test(text))
console.log(regex2.exec(text))

// test()->method->>>return boolean value if value is present or not and it is case sensitive

// exec()-> method-> return array containing ['serch value','value position in text', 'input','groups']


// String Methods------------

// 1. .match()--> method-> return array containing ['serch value','value position in text', 'input','groups'](only first match),  return null if match not found, case sensetive
console.log(text.match(regex2))

// 2. .serach() return -1 if match not found, case sensetive
console.log(text.search(regex2))

// 3. .replace() return new string with reeplace text
console.log(text.replace(regex2, 'globle'));

/*
    let names = ['Gates, Bill','Pichai, Sundar','Nadella, Satya']

    let newName = names.map((name)=>{
        return name.replace(/(\w+), (\w+)/,'$2 $1')
    });
 */

// 4. .split() it split the text and return new array , the second paramater  a value used to limit the number of elements returned in the array.  
console.log(text.split(regex2, 2));
console.log(text.split('', 7));


// Identifiers(flags) in Regex ---------------

// 1. global flag -> 'g'

const regexG = new RegExp('s', 'g');
console.log(text.match(regexG));

const regexE = new RegExp('s', 'g');
console.log(regexE.exec(text));
// .exce() only give first occurance even with global flag and return null if no natch found



// 2. insensetive flag -> 'i'

const regexGI = new RegExp(',', 'gi');
console.log(text.match(regexGI));


const regexEI = new RegExp('s', 'gi');
console.log(regexEI.exec(text));
// .exce() only give first occurance even with global flag  and insendetive flag and return null if no natch found

let match = '';
while ((match = regexEI.exec(text)) !== null) {
    console.log(match)
}


// string literal=>  /s/ig

/* 

    wild card is represented by a period(.). it will take any character onthat position of dot. it has exception with some contol characters(\t, \n, \r, \v) like New line. it is only for single character not for multiple characters==>

    /h.t/g   first and last should be h and t and middle charater can be anything except New line.

*/

/*
   Escaping meta characters using forward slash (\) ---------

   /d\./g ==> only after d it will take '.' as a meta character and leave other character

   /d\\/g

*/

/*
    Mtching control characters: \t, \n, \r, \v -----------------

    1. /h\tt/g =>>> h   t
        it will match 'h' tab 't' only
    
    2.  /h\nt/g =>>> h   t
        it will match 'h' newline 't' only

    3. /h\rt/g(/h\r\nt/g)=>>
         it will match 'h' carrage returns and newline 't' only
    
*/

/*
    matching the group of characters in the text using [] with character set----------

    let re = /gr[ae]y/g it will take only either 'a' or 'e'

    /[ k][abcd][ i]/g
    /[123][abc][a-g]/g
    /[123][a-d][.]/g==> if '.' is mention inside the squre brackets then it will check the dot(.) as a character not as a wild card characters.

    for escaping the meta character in the square brackets '\' can be used [\-]. 
    eg:- range from 1 - 5 or a-t
        /[1-5][a-t]/g
    /[1-5][1\-5]/g  
    /[A-Za-z]/g
    /[\-,.]/g

    exceptions: 0xAF==> /0x[0-9A-F][0-9A-F]/g

*/

/*
    Excluding set of character using carat symbol(^)---------------
    
    [^1-5] it will exclude all the number from 1 to 5. and will take all remaing character
    
    /0x[^0-9A-z][^0-9A-Z]/g

    /[\^a-z]/g ==> will match all the charactes or /[a-z^]/g

*/


/*
    Shorthands set------
    \d -> [0-9]
    \w -> [a-zA-Z0-9_]
    \s -> [ \t\r\n]
    \D -> [^0-9]
    \W -> [^a-zA-Z0-9]
    \S -> [^ \t\r\n]

*/


/*
   repetion of characters in pattern ---------------
   + -> Matchers one or more occurances
   ? -> Matched zero or one occurance
   * -> Matches zero or more occurances

   /[A-Z]+/g
   /[A-Z]?/g
   /[A-Z]*'/g

*/

/*
    Greediness and laziness in Regex--------
    --by default Regex are greed

    ex:- /<p>.*</p>/g ---> greedy
        /<p>.*?</p>/g ---> converted to lazey

 */

/*
    specific characters repetion amount minimum and maximum in the pattern-------------

    {min,max}

    ex: /\w{3,5}/g
        /\w\w{3,5}/g
    
    ex: selecting hexa decimal numbers
         /[0-9A-Z]{6}/ig
         /#[0-9A-Z]{6}/ig
    
    ex: 529-66-6789
        /\d{3}-\d{2}-\d{4}/g

    ex: laziness 
        /\d{2}-\d{4,6}?-/g
*/

/*
    Anchor expresion ---------
    ^ -> where the match is at the start

    $-> match is at the end

    ex: The letter or word should be first.
    The letter match with first.
    The word with another.

    /^The/gm ->> letter 'The' will be match in each line by using '^' and 'm' metaCharacter.

    /\.$/gm --> it will find all the sentence ends with '.'

    ------Word boundary--Non-Word boundarys-----

    ** \b -> word boundary pattern   should bounded by a non wrod character.

    ex: \bplan ->> it will match
        -plant
        -planet
        -plan
    will not match if any lettter present befor 'plan'
        -implant
    
    ex: \bplan\b ->> it will match only word 'plan'. No other letter should be present befor and after 'plan'

    ** \B -> nonword boundary -> pattern is bounded by a word.

    ex: \Bplan --> it will match
        -Iplan
        -Iplant
        -Inplant
    will not match if any lettter is not present befor 'plan'
        -plant

    ex: \Bpaln\B ->> it will match only word 'plan'if other letter should be present befor and after 'plan'.
     -Implant
     -Implank

     will not match  -- plant

    \w => [a-zA-Z0-9_]

*/

/*

    specifying options------
    (|) -> or symbole
    ---pattern | pattern

        /\b[m,t,w,f,s][a-z]{2,5}day\b/g

        /\bmonday|tuesday|wednesday\b/g
 */

/*
    Grouping Regex using parenthesis ()--------used for precedence--------

    ex: a5c4d3h8 l5k3l6b4n1
        /\b([a-z][0-9]){5}\b/g

    ex: /\b(mon|tues|fri)day\b/g


   -------- exec() method--------

    ex:date = 2023/01/04
     let reg =   /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/;

    let newArr = reg.exec(date);
        newArr[1]==> 2023
        newArr[2]==> 01
        newArr[3]==> 04

*/

/*

    Capturing group and non-capturing group---------

    by default in javascript the groups are capture group

    non-capture group->> capturing group can be converted into non capturing group by adding ?: in capturing group   
    ex: 
    let reg = /^((\d{4})(?:[-/.])(\d{1,2})[-/.](\d{1,2}))$/ 

    date = 2023-01-04

    let newdata = reg.exce(date)

    output: 

    newdata[1] => 2023
    newdata[2] => -
    newdata[3] => 01
    newdata[4] => 04

    let reg = /^((\d{4})([-/.])(\d{1,2})\2(\d{1,2}))$/ 

    non-captring group: 
    let reg = /^(?:\d{4})([-/.])(\d{1,2})\1(\d{1,2})$/ 

    for repeting the capture group use \1 \2 ... (backreference to group)

    -------
    backreference
    ex: 
    <strong>This is a strong tag</strong><i>ds hd sdjh s</i>

    regex = /<(\w+>)[\w\s]+</\1/g


    Name group chaptring-----------
    /<(\w+>).+?</\1/g


   -----------lookahead----------------(?=) the reselt will be not a part of search

    ex: let text = google.com facebook.com;
        let regex = /\w+(?=\.com)/g;

        let data = regex.exce(text);
        
        data will contain only 'google' & 'facebook' as a result .com will not return 

    que: password strength using lookahead group
    /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\@).*$/g



    Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.

    ex: let str = "1 turkey costs $30";

    // the dollar sign is escaped \$
    alert( str.match(/(?<=\$)\d+/) ); // 30

    Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.


    ex: let str = "2 turkeys cost $60";

    alert( str.match(/(?<!\$)\b\d+/g) ); // 2 (the price is not matched)

 */

/*
    -------------unicode-----------
    /[\u0061-\u0070]/g

 */

/**
     -------Matching email address
     
     let text = abcdA123@gmail.com

     let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\@)(gmail|yahoo)\.com$/

     or

     /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*@(gmail|yahoo)(\.com)$/g
*/


/*
    -------date validation----
    
 */