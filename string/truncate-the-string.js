// Ques 1 : Truncate the Text
// write a function truncate that checks the length of a given string - str and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character '...' so that length matches the maximum length

// Input str = Subscribe to my channel, maxlength = 9 
// Output: "Subscribe..."

function truncate (str, maxlength) {
    let strlength = str.lenght;
    if (strlength < maxlength) {
        return str
    }
    else {
        return str.slice(0, maxlength) + '...';
    }

}