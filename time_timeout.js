// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

setTimeout(function(){window.alert("Gingers")}, 10000);

setTimeout(() => window.alert("Arrow Function"), 14000);

const timeoutId = setTimeout(() => window.alert("Arrow Function"), 1000);

clearTimeout(timeoutId);

// console.time() = tool that allows you to measure the time it takes
//                              for a section of code or process to execute
//                              Great for identifying performance "bottlenecks"

function loadData(){

    console.time("loadData");

    for(let i = 0; i < 1000000000; i++){
        //pretend to load some data
    }

    console.timeEnd("loadData");
}

function processData(){

    console.time("processData");

    for(let i = 0; i < 1000000; i++){
        //pretend to process some data
    }
    
    console.timeEnd("processData");
}

loadData();
processData();