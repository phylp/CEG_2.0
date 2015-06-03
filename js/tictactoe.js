var main = function(){
    //establish user symbols
    var computerSymbol;
    var userSymbol = prompt("choose X or O");
    userSymbol = userSymbol.toUpperCase();
    
    if (userSymbol==="X"){
        computerSymbol = "O";
    } else {
        computerSymbol = "X";
    }
    
    //event handler and computer response
    $('td').click(function() {
       $(this).text(userSymbol); 
        computerTry();
        ticTacTest();
    });
    
    function isDone(){
        var count = 0;
        $('td').each(function(){
            if ($(this).text() === "X" || $(this).text()==="O"){
            count+=1;
           }
         });
         if(count===9){
            return true;
       }         
  }
    
    function computerTry(){
        if(isDone()===true){
            return;
        }
        var compPick = Math.ceil(Math.random()*9);
        if($('.cell' + compPick).text()===''){
                $('.cell' + compPick).text(computerSymbol);
                } else {
                computerTry();
                }
    }
    
    
    
    /* ------------------- ANNOUNCE WINNER ----------------*/
    
    function ticTacTest(){
            if (isDone()===true) {
            var board = [];
            $('#board tr').each(function(){ 
                board.push($('td').text());
                });
            board=board.splice(2).join().split(''); //ghetto rigging, I know
            var row1 = board.slice(0,3);
            var row2 = board.slice(3,6);
            var row3 = board.slice(6,9);
            var arrangedBoard = [];
            arrangedBoard.push(row1, row2, row3);
            /* END OF SETUP, BEGINNING OF CHECK */
            
            var groups =[];
            for(var r = 0; r<arrangedBoard.length; r++) {
                groups.push(arrangedBoard[r]);
            }
            
            for (var c = 0; c<arrangedBoard.length; c++) {
                var col = [];
                for (r = 0; r<arrangedBoard.length; r++) {
                    col.push(arrangedBoard[r][c]);
                }
            groups.push(col);
            }
            
            var diagA=[];
            var diagB=[];
            for (r = 0; r<arrangedBoard.length; r++) {
                diagA.push(arrangedBoard[r][r]);
                diagB.push(arrangedBoard[r][arrangedBoard.length-r-1]);
            }
            groups.push(diagA);
            groups.push(diagB);
            
                
            for(var g = 0; g<groups.length; g++) {
                var winner = findWinner(groups[g]);
                if(winner !== null){ 
                    alert("winner is " + winner);
                    break;
                } 
             }
          }
       }
    

        function findWinner(group){
            var first = group[0];
            for (var i = 1; i<group.length; i++){
                if(group[i]!==first){
                    return null;
                }
            }
            return first;
        }

            
    
    /* --------------- MENU -------------------- */
    
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
    $('.icon-menu').hide(); 
   });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    $('.icon-menu').show();
  });
}

$(document).ready(main);