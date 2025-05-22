function sayBye(){
    console.log("goodbye");
}


function greet(name, callback){
    console.log("hello  " + name);
    callback();
}
greet("golu", sayBye);