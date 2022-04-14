function receivesAFunction(Spy){
  Spy();
}
let undefined;
function returnsANamedFunction(){
    return function dog(){
        console.log('Biscuit is the best dog ever.');
    }   
    
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log('Odis is also the best dog ever.')
    }
}