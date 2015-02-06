var EuroCurrency = function(){
    
    var currency = BaseCurrency();
    
    currency.value = 9.43978007;
    currency.id = 'euro';
    currency.label = 'Euro';
    currency.symbol = '€ ';
    currency.symbolPlace = 'before';
    
    return currency;
}