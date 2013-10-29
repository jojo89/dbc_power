function menu_slide() {
  $('#open_settings').on('click', function() {
    $('#settings').animate({right: '0'}, 1000, function() {

    });
  });

  $('#close_settings').on('click', function() {
    $('#settings').animate({right: '-300'}, 1000, function() {

    });
  });

  // $('.student_cluster').hover(function() {
  //   $(this).find('.student_vote_show').show();
  // });

  // $('.student_cluster').mouseenter(function() {
  //   $(this).find('.student_vote_show').show();
  // });

  $( ".student_cluster" )
  .mouseenter(function() {
    $( this ).find( ".student_vote_show" ).fadeIn();
  })
  .mouseleave(function() {
    $( this ).find( ".student_vote_show" ).fadeOut();
  });
  $( ".student_c" )
  .mouseenter(function() {
    $( this ).find( ".student_v" ).fadeIn();
  })
  .mouseleave(function() {
    $( this ).find( ".student_v" ).fadeOut();
  });

}

$(function() {
  setup();
});
$(window).bind('page:change', function() {
  setup();
});
function setup() {
    menu_slide();
}
