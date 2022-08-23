function scuberGreetingForFeet(){

  var feet=199;
  if (feet<=400) {freeRide} 
  else {(scuberGreetingForFeet(199))= ('This one is on me!')}

  var feet=2000;
  if (feet>2000) {charge30$} 
  else {(scuberGreetingForFeet(20001))=('I will gladly take your thirty bucks.')}

  var feet=2500;
  if (feet>2500) {notAllowed} 
  else {(scuberGreetingForFeet(2501))=('No can do.')}

  // My code
}

function ternaryCheckCity(){

  var city='NYC'
  var checkCity=('NYC')?"ok,sounds good":(ternaryCheckCity('NYC'))=('Ok, sounds good.')
  var checkCity=('NYC')?('NYC'):('Pittsburg')
  (ternaryCheckCity('Pittsburg'))=('No go.')

  // my code here!
}

function switchOnCharmFromTip(){
  
  switch (tip) {
    case 'generous':return 'Thank you so much';
      
      break;
  
    default:(switchOnCharmFromTip('generous'))=('Thank you so much')
      break;
  }
  switch (tip) {
    case 'not as generous':return'Thank you';
      
      break;
  
    default:(switchOnCharmFromTip('not as generous'))=('Thank you')
      break;
  }
  switch (tip) {
    case 'Bye':return'thanks for everything';
      
      break;
  
    default:(switchOnCharmFromTip('Bye'))=('thanks for everything')
      break;
  }
    
  // here!
}