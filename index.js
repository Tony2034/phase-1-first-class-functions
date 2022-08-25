function receivesAFunction (main) {
    console.log (main());
}
function returnsANamedFunction() {
    return function goodcar() {
        console.log("porsche")
    }
}
function returnsAnAnonymousFunction () {
    return function(){
        console.log("anonymus")
    }
   
}