let number_1='';  
let number_2 ='';
let i =0,j=0;
let operator ='',result='';
let Array_of_buttons =document.getElementsByClassName('num');
let Array_of_oprators =document.getElementsByClassName('but');
    for(let aob of Array_of_buttons){
    aob.addEventListener('click', (e)=>{
      number_1 = number_1+e.target.innerText;
      document.getElementById('previous').innerHTML=number_1;
      console.log(number_1);
      if(number_1>16&& j==1){
       operation(number_2,number_1,operator);
      }
    });
  }

  for(let aoo of Array_of_oprators){
  aoo.addEventListener('click',(f)=>{
    operator = f.target.innerText;
    i=1;
    document.getElementById('current').innerHTML=operator;
    console.log(operator);
    transfer_num();
    for(aob of Array_of_buttons){
    aob.disabled = false;
    }
  });

}
function transfer_num() {
  number_2=number_1;
  number_1='';
  console.log(number_1);
  
  console.log(number_2);
  
  j=1
  
}
function operation(number_2,number_1,operator){
  switch(operator){
  case '+':
    result = Number(number_2) + Number(number_1);
    console.log(result);
    break;
  case '-':
    result = Number(number_2) - Number(number_1);
    console.log(result);
    break;
  case '*':
    result = Number(number_2) * Number(number_1);
    console.log(result);
    break;
  case '/':
    result = Number(number_2) / Number(number_1);
    console.log(result);
    break;
  }
    document.getElementById('current').innerHTML=result;
};

function operation_call() {
  operation(number_2,number_1,operator);
  number_1='';
  number_2='';

};
