// alert("SANITY!!!!!")

// runs main function
function main() {
   console.log("EX 1")
   console.log([3,5,8,10,12],3)

   ex5();
}

function first(theArray, numberofElements) {
    // let (index, index < first.length, index++)
    if (numberofElements > theArray.lenght)
    {
        return `You asked for ${numberofElements} elements but the array passed in only has ${theArray} elements`
    }

    let resultArray = [];

    for (let index = 0; index < numberofElements; index++ ) {
        resultArray.push(theArray[index]);
        
    }
   console.log(resultArray)
    
}

function ex5(newArray) {
let pet_List = [];

let pet1 = {
    type: "pitbull",
    age: 2,
    color: 'black'
}
let pet2 = {
    type: "Siamese",
    age: 5,
    color: "brown and black"
}
let pet3 = {
    type: "Lizard",
    age: 12,
    color: "green"
}
pet_List.push(pet1);
pet_List.push(pet2);
pet_List.push(pet3);


    for (let index = 0; index < pet_List.length; index++) {
        // const element = array[index];
        
        console.log(`Age: ${pet_List[index].age} Type: ${pet_List[index].type} Color: ${pet_List[index].color}`)
    }
}


main();