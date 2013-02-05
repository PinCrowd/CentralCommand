(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_game_frame'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"throw\">";
  foundHelper = helpers.third;
  stack1 = foundHelper || depth0.third;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "third", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n    ";
  return buffer;}

  buffer += "<div class=\"frame\">\n    <div class=\"throw\">";
  foundHelper = helpers.first;
  stack1 = foundHelper || depth0.first;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "first", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n    <div class=\"throw\">";
  foundHelper = helpers.second;
  stack1 = foundHelper || depth0.second;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "second", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n    ";
  foundHelper = helpers.third;
  stack1 = foundHelper || depth0.third;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"total\">";
  foundHelper = helpers.total;
  stack1 = foundHelper || depth0.total;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "total", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n</div>";
  return buffer;});
})();