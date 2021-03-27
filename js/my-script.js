// Declare a function that will execute when the html is fully loaded. = document.addEventListener('DOMContentLoaded', function(){....})
$(document).ready(function() { 
    $('h2').removeClass('underline'); //underlines all h2 elements ==> add the pre-defined class to the elements
    $('ul').removeClass('border'); //Adds a border to all lists
})