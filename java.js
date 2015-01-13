var colors = ["orange", "orange", "yellow", "yellow",
"green", "green", "blue", "blue", "purple", "purple", "cyan", "cyan"]

var random = function(){
  var x = Math.floor(Math.random()*colors.length);
  var color = colors[x];
  colors.splice(x, 1);
  return color;
}

var back_one = document.getElementById('back_one');
var back_two = document.getElementById('back_two');
var back_three = document.getElementById('back_three');
var back_four = document.getElementById('back_four');
var back_five = document.getElementById('back_five');
var back_six = document.getElementById('back_six');
var back_seven = document.getElementById('back_seven');
var back_eight = document.getElementById('back_eight');
var back_nine = document.getElementById('back_nine');
var back_ten = document.getElementById('back_ten');
var back_eleven = document.getElementById('back_eleven');
var back_twelve = document.getElementById('back_twelve');
back_one.style.backgroundColor= random();
back_two.style.backgroundColor= random();
back_three.style.backgroundColor= random();
back_four.style.backgroundColor= random();
back_five.style.backgroundColor= random();
back_six.style.backgroundColor= random();
back_seven.style.backgroundColor= random();
back_eight.style.backgroundColor= random();
back_nine.style.backgroundColor= random();
back_ten.style.backgroundColor= random();
back_eleven.style.backgroundColor= random();
back_twelve.style.backgroundColor= random();


var init = function() {
  var card = document.getElementById('card');
  var card_two = document.getElementById('card_two');
  var card_three = document.getElementById('card_three');
  var card_four = document.getElementById('card_four'); 
  var card_five = document.getElementById('card_five');
  var card_six = document.getElementById('card_six');
  var card_seven = document.getElementById('card_seven');
  var card_eight = document.getElementById('card_eight');
  var card_nine = document.getElementById('card_nine');
  var card_ten = document.getElementById('card_ten');
  var card_eleven = document.getElementById('card_eleven');
  var card_twelve = document.getElementById('card_twelve');    

  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  });
  document.getElementById('flip_two').addEventListener( 'click', function(){
    card_two.toggleClassName('flipped');
  });
  document.getElementById('flip_three').addEventListener( 'click', function(){
    card_three.toggleClassName('flipped');
  });
  document.getElementById('flip_four').addEventListener( 'click', function(){
    card_four.toggleClassName('flipped');
  });


  document.getElementById('flip_five').addEventListener( 'click', function(){
    card_five.toggleClassName('flipped');
  });
  document.getElementById('flip_six').addEventListener( 'click', function(){
    card_six.toggleClassName('flipped');
  });
  document.getElementById('flip_seven').addEventListener( 'click', function(){
    card_seven.toggleClassName('flipped');
  });
  document.getElementById('flip_eight').addEventListener( 'click', function(){
    card_eight.toggleClassName('flipped');
  });


  document.getElementById('flip_nine').addEventListener( 'click', function(){
    card_nine.toggleClassName('flipped');
  });
  document.getElementById('flip_ten').addEventListener( 'click', function(){
    card_ten.toggleClassName('flipped');
  });
  document.getElementById('flip_eleven').addEventListener( 'click', function(){
    card_eleven.toggleClassName('flipped');
  });
  document.getElementById('flip_twelve').addEventListener( 'click', function(){
    card_twelve.toggleClassName('flipped');
  });

};

window.addEventListener('DOMContentLoaded', init, false);


