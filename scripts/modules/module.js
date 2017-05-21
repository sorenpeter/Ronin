function Module(rune)
{
  this.name = this.constructor.name.toLowerCase();
  this.rune = rune;
  this.element = null;
  this.settings  = {};
  this.methods  = {};
  this.layer = null;

  this.docs = "Missing documentation.";
  
  this.install = function()
  {
  }

  this.context = function()
  {
    return this.get_layer().context();
  }

  this.create_layer = function()
  {
    this.layer = new Layer(this.constructor.name+".Preview",this);
    this.layer.element.setAttribute("style","z-index:7000");
    ronin.frame.add_layer(this.layer);
  }

  this.get_layer = function(is_blinking = false)
  {
    if(!this.layer){ this.create_layer(); this.layer.is_blinking = is_blinking }
    return this.layer;
  }

  this.active = function(cmd)
  {
  }
  
  this.passive = function(cmd)
  {
  }
  
  this.update_setting = function(name,value)
  {
    this.settings[name] = value.content.join(" ");
    return 1, "ok";
  }

  this.add_method = function(method)
  {
    method.host = this;
    this.methods[method.name] = method;
  }
  
  this.hint = function(content)
  {
    var html = "";

    for(method in this.methods){
      html += ".<b>"+method+"</b> ";
    }
    for(setting in this.settings){
      html += setting+"="+this.settings[setting]+" ";
    }

    return html;
  }

  this.pad = function(input)
  {
    var s = "";
    for (i = 0; i < input.length+1; i++){
      s += "_";
    }
    return "<span style='color:#000'>"+s+"</span>";
  }
  
  this.widget = function()
  {
    return "";
  }

  // Mouse

  this.mouse_mode = function()
  {
    return null;
  }

  this.mouse_pointer = function(position)
  {
    return ronin.cursor.draw_pointer_arrow(position);
  }

  this.mouse_from = null;
  this.mouse_held = null;
  this.mouse_prev = null;
  
  this.mouse_down = function(position)
  {
  }
  
  this.mouse_move = function(position,rect)
  {
  }
  
  this.mouse_up = function(position,rect)
  {
  }

  // Keyboard

  this.key_escape = function()
  { 
    
  }

  this.key_delete = function()
  {
  }

  this.key_arrow_up = function()
  { 
    ronin.frame.layer_up();
  }

  this.key_arrow_down = function()
  { 
    ronin.frame.layer_down();
  }

  this.key_arrow_left = function()
  { 
  }

  this.key_arrow_right = function()
  { 
  }
}