// **Find the First Non-Repeating Character**
// - **Question:** Given a string, find the first character that appears only once.
// - **Input:** `"swiss"`
// - **Output:** `"w"`

function firstNonRepeating(string){
    let charCount = {};

    for (char of string){
        charCount[char] = (charCount[char]||0)+1;
    }

    for (char of string){
        if(charCount[char]===1){
            console.log(char);
            return;
        }
    }
}
firstNonRepeating("swiss")