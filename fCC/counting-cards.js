var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6)
    count++;
  else if (card == 10 || ['J', 'Q', 'K', 'A'].includes(card)) 
    count--;
  return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
  // Only change code above this line
}

console.log(cc(2));
cc(3); cc(7); cc('K'); cc('A');