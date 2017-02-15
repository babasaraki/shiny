var textOutputBinding = new OutputBinding();
$.extend(textOutputBinding, {
  find: function(scope) {
    console.log('find textoutputbinding')
    return $(scope).find('.shiny-text-output');
  },
  renderValue: function(el, data) {
    console.log('renderValue textoutputbinding')
    $(el).text(data);
  }
});
outputBindings.register(textOutputBinding, 'shiny.textOutput');

