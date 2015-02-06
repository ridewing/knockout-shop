var App = function() {

    var application = {
        products : ko.observableArray(),
        currencies : [
            SekCurrency(),
            EuroCurrency(),
            DollarCurrency(),
            YenCurrency()
        ],
        currency : ko.observable()
    };
    
    // Set default currency
    application.currency(application.currencies[0]);
    
    // Get cart total
    application.total = ko.computed(_getTotal, application);
    
    // Cart total beautified
    application.totalString = ko.computed(function() {
        return _nicePrice(this.total());
    }, application);
    
    // Public methods
     application.boot = function() {
        application.products.push(_createRandomProduct())
        application.products.push(_createRandomProduct())
        application.products.push(_createRandomProduct())
        application.products.push(_createRandomProduct())
    }
    
    application.addProduct = function() {
        
        var product = _createRandomProduct();
        application.products.push(product);
    }
    
    application.removeProduct = function(index, item) {
        application.products.splice(index, 1);
    }
    
    application.hasProducts = ko.computed(function() {
        return (this.products().length > 0);
    }, application);
    
    application.setCurrency = function(item) {
        console.log('asadsasd')
        application.currency(item)
    }
    
    application.nicePrice = function(value) {
       return _nicePrice(value);
    }
    
    // Private methods
    function _nicePrice(value){
         if(application.currency().symbolPlace == 'before'){
            return application.currency().symbol + value.toFixed(2);
        } else {
            return value.toFixed(2) + application.currency().symbol;
        }
    }
    
    // Sum all products total
    function _getTotal() {

        var total = 0;

        for(var i in application.products()) {
            total += application.products()[i].total();
        }

        return total;
    }
    
    function _createRandomProduct() {
        
        var id      = Math.round(Math.random()*1000000);
        var name    = "Product-"+id;
        var price   = Math.round(Math.random()*100);
        
        // Create product
        var product = Product(id, name, price);
        
        return product;
    }
    
    return application;
}