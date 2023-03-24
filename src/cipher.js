const cipher = {
  
  encode : function (offset , string){ 
    let result = "";
     offset = parseInt(offset);
     for (let i= 0; i<(string.length); i++) {
       let code = string.charCodeAt(i);
      
       if (code >= 65 && code <= 90) {
       let enCodex = (code - 65 + offset) %26 + 65;
     
       result = result + String.fromCharCode(enCodex);
       } else {
         result += string[i];
       }
      
     }
     
       return result;
   },
  decode : function (offset , string) {
    let result = "";
    offset = parseInt(offset);
    for (let i= 0; i<(string.length); i++) {
      let code = string.charCodeAt(i);
     
      if (code >= 65 && code <= 90) {
      let enCodex = (code + 65 - offset) %26 + 65;
    
      result = result+String.fromCharCode(enCodex);
      } else {
        result += string[i];
      }
    }
    
      return result;
  
  }
}
console.log(cipher.encode(3,"ABCD"));
export default cipher;
