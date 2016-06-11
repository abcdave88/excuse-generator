$(document).ready(function(){

  var excuses = ["I'm washing my hair that night", "I have some really important cat pictures to look at", "There's temporary lights at the end of my road", "I'm not getting my suede shoes wet", "I'd really rather not"];

  function pickRandom(){
    var random = excuses[Math.floor(Math.random() * excuses.length)];

    return random
  }

  function printExcuse(){
    pickedItem = pickRandom();
    $('.excuse-contain h2').text(pickedItem)
  }

  function clearScreen(){
    $('.excuse-contain h2').text('');
  }

  $('.btn').click(function(){
    clearScreen();
    printExcuse();
  });

});