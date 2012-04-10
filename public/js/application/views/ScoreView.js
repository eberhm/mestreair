var ScoreView = Backbone.View.extend({
    el: '.score',
    initialize:function () {
        this.model.bind('score', this.render, this);
    },
    render:function () {
        $(this.el).html(this.model.get('score'));
    }
});