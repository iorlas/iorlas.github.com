function gsearch_show() {
  $('.blog-content-container').hide();
  $('.search-box').fadeIn('fast');
  $('#gsc-i-id1').focus();
}
function gsearch_hide() {
  $('.search-box').fadeOut('fast', function(){
    $('.blog-content-container').show();
  });
}
