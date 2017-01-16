//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require quiz_master
//= require react
//= require react_ujs
//= require_tree ./shared/components
//= require_tree ./shared/models
//= require_tree ./shared/collections
//= require_tree ./shared/views
//= require_tree ./shared/routers

$(document).on("click", "a:not([data-bypass])", function(evt) {
  var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
  var root = location.protocol + "//" + location.host + Backbone.history.options.root;

  if (href.prop && href.prop.slice(0, root.length) == root) {
    evt.preventDefault();
    Backbone.history.navigate(href.attr, {trigger: true});
  }
})