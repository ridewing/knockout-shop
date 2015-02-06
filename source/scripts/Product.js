var Product = function(id, title, price) {
    
    var product = { };
    
    product.id = id;
    product.title = title;
    product.count = ko.observable(1);
    product.price = ko.observable(price / application.currency().value);
    
    application.currency.subscribe(function(){
        product.price(price / application.currency().value);
        product.price.valueHasMutated();
    })
    
    product.total = ko.computed(function() {
        return (this.price() * this.count());
    }, product);
   
    product.priceString = ko.computed(function() {
        return application.nicePrice(this.price())
    }, product);
    
    product.totalString = ko.computed(function() {
        return application.nicePrice(this.total());
    }, product);
    
    product.add = function() {
        product.count( parseInt(product.count()) + 1);
    }
    
    product.subtract = function() {
        if(product.count() > 1){
            product.count( parseInt(product.count()) - 1);
        }
    }
    
    product.changed = function(item, e) {
        
        var value = parseInt(e.target.value);
        
        if(isNaN(value)) {
            value = 1;
        }
        
        item.count(value);
    }
    
    return product;
}