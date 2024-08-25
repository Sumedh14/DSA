/* Easy 

Input: s = "Was it a car or a cat I saw?"
Output: true

*/

const isPalandrome = (str) => {

    if (str.length <= 1) return true;

    let [left, right] = [0, str.length - 1];
    while (left < right) {
        let leftChar = str[left];
        let rightChar = str[right];

        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        }
        else if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false
        } else {
            left++;
            right--;
        }
    }
    return true;
}


let s = "Was it a car or a cat I saw?"

const value = isPalandrome(s);

console.log(value);

