function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    function fn(){
        return 'hi'
    }
    return fn
}
// Anonymous functions don't have any name associated to it
function returnsAnAnonymousFunction(){
    return function (){
        return 'hi'
    }
}