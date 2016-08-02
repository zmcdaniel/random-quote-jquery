var quoteArray = ["\"Hodor hodor.\"", "\"Hodor!? Hodor hodor.\"", "\"Hodor; hodor, hodor.\"","\"Hooodoooor!\"", "\"Hodor?\"", "\"Hodor...\"", "\"Hodor? Hodor hodor\"", "\"Hodorhodor Hodor\"", "\"Hodor?\"", "\"Ho. Dor?\""];


$(document).ready(function() {

  var quote = $('.quotation');

  $('#btnRefresh').click(function() {
    var random = Math.floor(Math.random()*quoteArray.length);
    quote.html(quoteArray[random]);
  });

  $('#btnAdd').click(function(){
    $('#quotes').css('visibility', 'hidden');
    $('#addQuote').css('visibility', 'visible');
  });


});
