function theWord(string) {
  $(string).each(function() {
    var theWord = $(this).text();
    theWord = theWord.split("");
    var splitPart = '';
    for (var i = 0, lengthyLength = theWord.length; i < lengthyLength; i++) {
      splitPart += '<span class="blurrr-' + i + '">' + theWord[i] + '</span>';
    }
    $(this).html(splitPart);
  });
}
$('document').ready(function() {
  var getThis = $('.continuous');
  theWord(getThis);
});
