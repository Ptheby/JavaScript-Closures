///From Closure Article

// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }
//   sayHiBye("Paul", "Theby");


///FROM TASK  
/////2.1 Create a simple function that demostrates the concept of a closure by accessing a variable from it's outer function

function outerFunc() {
    const outerVar= "OUTER!";
    
    function innerFunc() {
        console.log(outerVar);
    }
  innerFunc();

}
outerFunc();

///Explanation  I create the function outerFun. Iside outerFunc i name a const outerVar with "OUTER" string as it's value
//and another function named "innerFunc" as another value of the function which has a function of 
//logging the outerVar's value to console. Right outside that innerFunc, i can call it to execute the log,
//and right outside that I callouterFUnc to run the whole thing. innerFunc having access to it i am not sure if that 
//is what is meant by closure but it does have access to the outer variables but as far as after it has executed?
//the inner executes before the outer so of course it has access at this point. ? i am not sure.  