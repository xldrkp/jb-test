// Builds a custom tag (div) around the area marked by spans in the HTML. spans are excluded.
$(".beginner-start").nextUntil(".beginner-end").wrapAll("<div class='wrapper'></div>")

$(".expert-start").nextUntil(".expert-end").wrapAll("<div class='wrapper'></div>")


// Catches the click on the "+" on the right and toggles
$( ".beginner-start" ).click(function() {
  $(this).next( ".wrapper" ).toggle( "slow", function() {
    // Animation complete.
  });
});

// Catches the click on the "+" on the right and toggles
$( ".expert-start" ).click(function() {
  $(this).next( ".wrapper" ).toggle( "slow", function() {
    // Animation complete.
  });
});

// Final thoughts: The toggler makes the headlines disappear. This should be changed. Otherwise users don't know that there are sections. Let's check out this solution in the context of the book and go on with new insights afterwards. XL