/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   let crv=init
   return{
    increment:function(){
       ++crv
        return crv
    },
    decrement:function(){
        --crv
        return crv
    },
    reset:function(){
        crv= init
        return crv
        
        
    }
    
   }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */