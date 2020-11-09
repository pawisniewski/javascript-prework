function getMoveName(argMoveId){
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
function displayResult(argComputerMove, argPlayerMove){
  console.log('Zagrania:', argComputerMove, argPlayerMove);
  printMessage('Ja zagrałem ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove + '.');
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
    printMessage('Remis!(');
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

displayResult(argComputerMove, argPlayerMove);