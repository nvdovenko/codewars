// Two functions that convert a roman numeral to and from an integer value. 
// Multiple roman numeral values will be tested for each function.
// Modern Roman numerals are written by expressing each digit separately 
// starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals: 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC 
//
// Input range : 1 <= n < 4000

class RomanNumerals {
  
  static toRoman(num) {
    
    const digits = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let result = '';
    
    for (let key in digits)
      while ( num >= digits[key] ) {
        result += key;
        num -= digits[key];
      }
    
    return result;
    
  }
 
  static fromRoman(str) {
    
    const digits = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let result = 0;
    if (digits[str]) return digits[str];
    let addThisSymbol = false;
    let n = 0 ;
    
    str.split('').forEach((key) => {
      if(str[n+1] && digits[key + String(str[n+1])]){
        if(!addThisSymbol) result += digits[key + str[n+1]];
        addThisSymbol = true;
      }
      else {
        if(!addThisSymbol) result += digits[key];
        addThisSymbol = false;
      };  
      
      n ++;
      
    });

    return result;
    
  }
  
}