$(document).ready(function(){
  
  var author;
  var quote;
  var characterImage;
  
  function getQuote(){
    
  $.ajax({
    url: 'https://thesimpsonsquoteapi.glitch.me/quotes',

    success: function(response){
      console.log(""+response);
      quote = response[0].quote;
      author = response[0].character;
      characterImage = response[0].image;
      $('#quote1').html(quote);
      if(author){
        $('#authorOne').text(author);
      }
      else{
        $('#authorOne').text('unknown character');
      }
      $('#image1').attr('src', characterImage);
    }
  });
  /*
   $.getJson(url, function(data){
    $("#quote1").html(data);
  })*/
  }
  
  $('#buttonOne').click( function(event){
    event.preventDefault();
    getQuote();
  })
  
  $('#tweetButton').click(function(event){
    event.preventDefault();
    if(quote.length > 110){
      quote = quote.replace(quote, quote.substr(0, 110));
      window.open('https://twitter.com/intent/tweet?text=' + quote + '...&hashtags=' + author);
    }else{
    window.open('https://twitter.com/intent/tweet?text=' + quote + '&hashtags=' + author);
    }
  });
  
 getQuote();
});
   




