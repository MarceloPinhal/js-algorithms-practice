const numbers = [1,1,2,3,4,5,5,6,7,8,8,9,10]


const removeDuplicates = (array) => {

    const noDuplicatesArray = [];

        array.forEach(element => {

           if (!noDuplicatesArray.includes(element)) {

            noDuplicatesArray.push(element)
           }
        })
    
    return noDuplicatesArray
}

console.log(removeDuplicates(numbers))