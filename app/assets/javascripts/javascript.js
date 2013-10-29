
function responder(response){
  if(response == "Make it bigger!"){      
    $('.information').append("<li class=\"bigger\"  >"+ response  +"</li>");
    }  
  else if(response == "Dude buy some votes!"){  
    $('.comment').hide();  
    $('#student').hide();     
    $('.information').append("<li class=\"bigger\"  >"+ response  +"</li>");
    }else{
      $('.comment').prepend("<li class=\"addition\"  >"+ response  +"</li>");
      $('#student').hide();   
      var amount = $('#count').text();
      var amount= parseInt(amount);
      var newcount = amount + 1 ;
      $('#count').text( newcount )
  }  
}

function poster(){
$('#student').hide();
    $("#up_vote_button").on('click', function(e){
      e.preventDefault();
      $('#student').show();
      $('#student').on('submit',function(e){
        e.preventDefault();
        $('.comment').show(); 
        $('.bigger').remove()  
        var url = $(this).attr('action')
        var data = $(this).serialize();
        console.log(data)
      $.post(url,data,function(response){
        responder(response.comment);
      });
    });
  });
}


$(function() {
  initPage();
});
$(window).bind('page:change', function() {
  initPage();
});
function initPage() {
    poster();

}
