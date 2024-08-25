const charAt = "Hello".charAt(4);  //  const charAt = "Hello".charAt(index): number
const charCodeAt = "Hello".charCodeAt(4);  //  const charAt = "Hello".charCodeAt(index): number
const fromcharCode = String.fromCharCode(4);  //  const charAt = String.fromCharCode(index): string
const concat = "Hello".concat("", "World");  //  const concat = str1.concat(["space","symbols"], str2): string
const startsWith = "Hello".startsWith("H");  //  const startsWith = str1.startsWith(str2, position): Boolean
const endsWith = "Hello".endsWith("o");  //  const endsWith = str1.endsWith(str2, position): Boolean
const includes = "Hello".includes("x");  //  const includes = str1.includes(search string, position): Boolean
const indexOf = "Hello".indexOf("l");  //  const indexOf = str1.indexOf(search string, position): number
const lastIndexOf = "Hello".lastIndexOf("l");  //  const lastIndexOf = str1.lastIndexOf(search string, position): number
const match = "Hello".match(/[a-z]/g); // const match = str.match(Regex): Regex[] array
const padStart = "Hello".padStart(6, "?");
const padEnd = "Hello".padEnd(6, "?");
const repeat = "Hello".repeat(3);  //  const repeat = str.repeat(number): string
const replace = "Hello".replace("llo", "y");  //  const replace = str.replace(['search value' || regex], replace value): string
const search = "Hello".search("e") // const search = str.search(regexp): number
const slice = "Hello".slice(1, 3); // const slice = str.slice(start: number, end: number): string
const substring = "Hello".substring(2, 4); //  const substring = str.substring(start:number,end:number): string
const split = "Hello".split("",3); //  const split = str.split(seperator:"string | regexp",limit:number): string[]
const join = ["Hello"," "].join("",4); //  const split = ["Array of string"].join(seperator:"string | regexp",limit:number): string
const tolower = "Hello".toLowerCase(); // const tolower = str.toLowerCase(): string
const toupper = "Hello".toUpperCase(); // const toupper = str.toUpperCase(): string
const trim = "Hello".trim();   // const trim = str.trim(): string
const trimEnd = " Hello ".trimStart(); // const trimEnd = str.trimStart(): string
const trimStart = " Hello ".trimEnd(); // const trimStart = str.trimEnd(): string
const localeCompare = " Hello ".localeCompare('Hello'); // const trimStart = str.localeCompare(str): string