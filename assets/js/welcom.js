$(function () {
  var a = 0;
  $('.secreteyesk1').hide();
  $('.secreteyesk2').hide();
  $('.eyes1').click(function () {
    a += 1;
    if (a % 2 == 0) {
      $('.secreteyesk1').hide();
      $('.secreteyes1').show();
      $('.secret1').prop('type', 'password');
    } else if (a % 2 != 0) {
      $('.secreteyes1').hide();
      $('.secreteyesk1').show();
      $('.secret1').prop('type', 'text');
    }
  });
  a = 0;
  $('.eyes2').click(function () {
    a += 1;
    if (a % 2 == 0) {
      $('.secreteyesk2').hide();
      $('.secreteyes2').show();
      $('.secret2').prop('type', 'password');
    } else if (a % 2 != 0) {
      $('.secreteyes2').hide();
      $('.secreteyesk2').show();
      $('.secret2').prop('type', 'text');
    }
  });
});
