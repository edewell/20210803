function main() {
ex1();
ex2();
ex3();
ex4();
ex5();
}

function ex1() {
   
   
    let x = "*"

    for (let index = 0; index < 25; index++) {
        // const element = array[index];
        console.log(x)
    }
}

function ex2() {
    // let numElement = "x"


    for (index = -10; index <= 5; index++) {
        // const element = array[index];
        console.log(index)
    }
}

function ex3() {
    for (let index = -50; index <= 50; index+=4) {
       
        console.log(index)
    }
}


function ex4() {
    const newArray = [0,1,2,3,4,5]

    for (let index = 0; index < newArray.length; index++) {
        
        console.log(newArray[index])
    }
    
    if (newArray == [2])
    alert(two);

    if (newArray == [4])
    alert(four);

    else {
        return false
    }

}

function ex5() {
    let userAnswer = prompt ("Enter any number"); 

    for (index = 0; index <= userAnswer; index++) {
        
        console.log(index)
    } 
    
    // let response = [0,1,2,3,4,5]

    // if (response > 5)
    // return false
}





    











main(); 