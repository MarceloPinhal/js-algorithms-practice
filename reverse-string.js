
const reverseString = (str)=>{
    
    const stringToArray = str.split(" ")
    const reverseArray = [];

    for (let i = stringToArray.length - 1; i >= 0; i--) {
        reverseArray.push(stringToArray[i])
       
    } 

    console.log(reverseArray.join(""))
   
}

reverseString("Marcelo Martins Pinhal")
