window.AircraftList = Backbone.Collection.extend({
    model:Aircraft,
    initialize: function() {
        this.bind('activate', function(aircraft) {
            var model, i;
            for (i in this.models) {
                model = this.models[i];
                if (aircraft !== model) {
                    model.deactivate();
                }
            }
        }, this);
        this.bind('deactivate', function() {
            //alert('someone got deactivated');
        }, this);
    }
});