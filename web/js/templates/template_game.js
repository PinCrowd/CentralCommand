(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_game'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "edited";}

function program3(depth0,data) {
  
  
  return "edited";}

function program5(depth0,data) {
  
  
  return "edited";}

function program7(depth0,data) {
  
  
  return "edited";}

function program9(depth0,data) {
  
  
  return "edited";}

function program11(depth0,data) {
  
  
  return "edited";}

function program13(depth0,data) {
  
  
  return "edited";}

function program15(depth0,data) {
  
  
  return "edited";}

function program17(depth0,data) {
  
  
  return "edited";}

function program19(depth0,data) {
  
  
  return "edited";}

  buffer += "<div class=\"game\" id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"player\">\n        <div class=\"avatar\"><img src=\"";
  foundHelper = helpers.player;
  stack1 = foundHelper || depth0.player;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.avatar);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "player.avatar", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" /></div>\n        <div class=\"name\">";
  foundHelper = helpers.player;
  stack1 = foundHelper || depth0.player;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.name);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "player.name", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"frames\">\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[1]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"1\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[1]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.1.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[1]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.1.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[1]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.1.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[2]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"2\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[2]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.2.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[2]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.2.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[2]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.2.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[3]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"3\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[3]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.3.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[3]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.3.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[3]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.3.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[4]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"4\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[4]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.4.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[4]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.4.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[4]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.4.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[5]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"5\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[5]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.5.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[5]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.5.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[5]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.5.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[6]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"6\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[6]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.6.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[6]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.6.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[6]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.6.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[7]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"7\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[7]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.7.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[7]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.7.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[7]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.7.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[8]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"8\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[8]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.8.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[8]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.8.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[8]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.8.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[9]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"9\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[9]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.9.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[9]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.9.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[9]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.9.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[10]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.edited);
  stack2 = helpers['if'];
  tmp1 = self.program(19, program19, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"10\">\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[10]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.one);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.10.throw.one.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[10]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.two);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.10.throw.two.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[10]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1['throw']);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.three);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.value);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.10.throw.three.value", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  foundHelper = helpers.frames;
  stack1 = foundHelper || depth0.frames;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1[10]);
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.score);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "frames.10.score", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n    </div>\n</div>";
  return buffer;});
})();