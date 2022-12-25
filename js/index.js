let number = document.getElementById('number');
let btnSend = document.getElementById('btnSend');


btnSend.addEventListener('click', (e)=>{
  e.preventDefault();
  $('.table tbody').empty();

  for(let i = 1; i <= 11; i++){
      let porcentajes = i*10; 
      $('.table').find('tbody').append(`<tr><td>${porcentajes}% de ${number.value}</td><td>${(number.value * (porcentajes / 100)).toFixed(2)}</td><td><input type='checkbox' onclick='getRow(this)'/>  <i row${i} class='newRegister bi-plus-circle'></i></td></tr>`);
  }
});

$(document).on('click','.newRegister',function(){
  let rowIndex = $(this).parent().parent().index();
    
  $('.table > tbody > tr').eq(rowIndex).after(`<tr><td><input class='porcentaje' type='text' style='width: 38px; border: none'"/>% de ${number.value}</td><td id='valPorcent'>1</td><td><input type='checkbox' onclick='getRow(this)'/>  <i row{i} class='newRegister bi-plus-circle' onclick='test(this, {i})'></i></td></tr>`);
});

$(document).on('focusout','.porcentaje',function(){
  let rowIndex = $(this).parent().parent().index();
  let newVal = (number.value * (this.value / 100)).toFixed(2);
  $('.table > tbody > tr').eq(rowIndex).children('td#valPorcent').html(newVal);
});