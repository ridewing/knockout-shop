var BaseCurrency = function() {

    var currency = {
        id          : 'sek',
        value       : 1.0,
        symbol      : ' kr',
        symbolPlace : 'after',
        label       : 'Sek',
        selected    : false
    };
    
    currency.setCurrency = function(){
        console.log('aasdads')
    }
    
    return currency;
}