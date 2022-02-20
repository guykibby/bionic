//alert("Thiis is AAlleeeert!");

console.log("stuff");

//console.log(document.getElementById("cypher1").innerHTML);

// document.getElementById("cypher2").innerHTML = "Hello JavaScript!";

//console.log(document.getElementById("cypher2").innerHTML)

function rot13(str) {
  str=str.toUpperCase();    
  let alphStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let Nstr = "";

for (let i=0; i< str.length; i++ ){
  
       let x = alphStr.indexOf(str[i]);
        if (x<0){
          Nstr += str[i];
        }
        else {
          Nstr += alphStr[(x+13)%26];
        }
     } 
  
  return Nstr;
}

console.log(rot13("SERR SNZC"));

function Encrypt(){
   
    let inputStr = document.getElementById("cypher1").value;

    document.getElementById("cypher1answer").innerHTML = rot13(inputStr);

}

console.log("help");

function convertToRoman(num) {
      
      let strR="";
      
      let x = num % 10; 
      let y = Math. floor(num/10) % 10; 
      let z = Math. floor(num/100) % 10;
      let m = Math. floor(num/1000) % 10;
      console.log("x:"+x)
      console.log("y:"+y)
      console.log("z:"+z)
      console.log("m:"+m)
      
      switch (m) {
      case 1:
        strR += "M";
        break;
      case 2:
        strR += "MM";
        break;
      case 3:
        strR += "MMM";
          break;
      case 4:
        strR += "MV̅";
        break;
      case 5:
        strR += "V̅";
        break;
      case 6:
        strR += "V̅M";
          break;
      case 7:
        strR += "V̅MM";
        break;
      case 8:
        strR += "V̅MMM";
        break;
      case 9:
        strR += "MX̅";
          break;default:
        break;
    }
    
      
      switch (z) {
      case 1:
        strR += "C";
        break;
      case 2:
        strR += "CC";
        break;
      case 3:
        strR += "CCC";
          break;
      case 4:
        strR += "CD";
        break;
      case 5:
        strR += "D";
        break;
      case 6:
        strR += "DC";
          break;
      case 7:
        strR += "DCC";
        break;
      case 8:
        strR += "DCCC";
        break;
      case 9:
        strR += "CM";
          break;
      default:
        break;
    }
      
      switch (y) {
      case 1:
        strR += "X";
        break;
      case 2:
        strR += "XX";
        break;
      case 3:
        strR += "XXX";
          break;
      case 4:
        strR += "XL";
        break;
      case 5:
        strR += "L";
        break;
      case 6:
        strR += "LX";
          break;
      case 7:
        strR += "LXX";
        break;
      case 8:
        strR += "LXXX";
        break;
      case 9:
        strR += "XC";
          break;
      default:
        break;
    }
        
      switch (x) {
      case 1:
        strR += "I";
        break;
      case 2:
        strR += "II";
        break;
      case 3:
        strR += "III";
          break;
      case 4:
        strR += "IV";
        break;
      case 5:
        strR += "V";
        break;
      case 6:
        strR += "VI";
          break;
      case 7:
        strR += "VII";
        break;
      case 8:
        strR += "VIII";
        break;
      case 9:
        strR += "IX";
          break;
      default:
        break;
    }   
      if (num==10000) {strR="X̅"}
      return strR;
    //*/
    }

    function turnRoman() {
        let inputStr = document.getElementById("cypher2").value;

        document.getElementById("cypher2answer").innerHTML = convertToRoman(inputStr);
    
    }

  

