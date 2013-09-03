var player1 = 0;
var player2 = 0;

$(document).off('keyup');
$(document).ready(function(){
  var finish_line = $('#player1_strip td').size();
  $(document).on('keyup', function(e){
    if (e.keyCode === 80){
      $('#player2_strip td').eq(player2).removeClass('active')
      player2 ++;
      $('#player2_strip td').eq(player2).addClass('active')
      if (player2 === finish_line){
        alert('Player 2 wins. Select OK to refresh.');
        location.reload();
      }
    }else if (e.keyCode === 81){
      $('#player1_strip td').eq(player1).removeClass('active')
      player1 ++;
      $('#player1_strip td').eq(player1).addClass('active')
      if (player1 === finish_line){
        alert('Player 1 wins. Select OK to refresh.');
        location.reload();
      }
    }
  });
});
