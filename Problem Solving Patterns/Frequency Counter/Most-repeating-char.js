// **Most Frequent Character**
//    - **Question:** Find the character that appears the most in a given string.
//    - **Input:** `"banana"`
//    - **Output:** `"a"`


function mostFreqChar(string){
    let charCount = {};

    for(char of string){
        charCount[char]=(charCount[char]||0)+1;
    }

   let  mostCount = 0;
   let mostfreqcharacter;
    
    for(char of string ){
        if(charCount[char]>mostCount){
            mostCount=charCount[char];
            mostfreqcharacter=char;
        }
    }
    console.log(mostfreqcharacter)
}

mostFreqChar("banana")