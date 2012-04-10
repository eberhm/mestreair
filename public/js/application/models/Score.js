var Score = Backbone.Model.extend({
    setScorable: function(scorable) {
        //the model for the score is the RoutesList
        //this object will bubbles up all flightRoutes score events
        this.set({
            'scorable': scorable
        });
        scorable.bind('score', this.score, this);
    },
    score: function(scoreBeat) {
        this.set({
            'score' : (this.get('score') || 0) + scoreBeat.get('value')
        });
        this.trigger('score');
    }
});
