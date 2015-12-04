(function(){
  
var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.windowSlideShow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
  // remove .show from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');    
};

// add click events to prev & next buttons 
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
})();  
(function(){
  
var dinCounter = 0, // to keep track of current slide
    $dinItems = document.querySelectorAll('.dinner figure'), // a collection of all of the slides, caching for performance
    numDinItems = $dinItems.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var dinItemToShow = Math.abs(dinCounter%numDinItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
  // remove .show from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $dinItems, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $dinItems[dinItemToShow].classList.add('show');    
};

// add click events to prev & next buttons 
document.querySelector('.dinNext').addEventListener('click', function() {
     dinCounter++;
     showCurrent();
  }, false);

document.querySelector('.dinPrev').addEventListener('click', function() {
     dinCounter--;
     showCurrent();
  }, false);
  
})();  