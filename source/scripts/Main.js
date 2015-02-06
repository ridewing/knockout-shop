var application;

function init() {

    application = App();
    
    ko.applyBindings(application);
    
    application.boot();
}
