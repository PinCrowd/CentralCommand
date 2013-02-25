(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_game'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

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
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"player\">\n        <div class=\"avatar\"><img src=\"";
  stack1 = depth0.player;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.avatar;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" /></div>\n        <div class=\"name\">";
  stack1 = depth0.player;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.username;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"frames\">\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"1\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[1];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"2\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[2];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"3\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[3];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[4];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"4\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[4];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[4];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[4];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[5];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"5\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[5];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[5];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[5];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[6];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"6\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[6];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[6];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[6];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[7];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"7\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[7];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[7];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[7];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[8];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"8\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[8];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[8];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[8];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[9];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"9\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[9];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[9];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[9];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n        <div class=\"frame ";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[10];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.edited;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-frame=\"10\">\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[10];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw1;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[10];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw2;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"throw\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[10];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.throw3;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.value;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n            <div class=\"total\">";
  stack1 = depth0.frames;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1[10];
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.score;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</div>\n        </div>\n    </div>\n</div>";
  return buffer;});
})();