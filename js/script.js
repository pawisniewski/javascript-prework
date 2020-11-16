{
  const playGame = function(playerInput){
    clearMessages()
    
    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      if(argMoveId == 2){
        return 'papier';
      }
      if(argMoveId == 3){
        return 'nożyce';
      } else {
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
        }
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove = getMoveName(randomNumber),
      argPlayerMove = getMoveName(playerInput);
    
    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('Zagrania:', argComputerMove, argPlayerMove);
      printMessage('Ja zagrałem ' + argComputerMove + ', Ty zagrałeś ' + argPlayerMove + ':');
      if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      } 
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrywasz!!!');
      }
      if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz :(');
      }
      if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz :(');
      } 
      if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      }
      if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywasz!!!');
      }
      if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!!!');
      } 
      if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz :(');
      }
      if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      }
    }
    displayResult(argComputerMove, argPlayerMove);
  }  
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}