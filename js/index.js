let number = document.getElementById('number');
let btnSend = document.getElementById('btnSend');


btnSend.addEventListener('click', (e)=>{
  e.preventDefault();
  $('.table tbody').empty();

  for(let i = 1; i <= 11; i++){
      let porcentajes = i*10; 
      $('.table').find('tbody').append(`
        <tr>
          <td>${porcentajes}% de ${number.value}</td>
          <td>${(number.value * (porcentajes / 100)).toFixed(2)}</td>
          <td class='options'>
            <input class='selectPorcent' type='checkbox'/>  
            <i row${i} class='newRegister bi-plus-circle'></i>
          </td>
        </tr>`);
  }
});

$(document).on('click','.newRegister',function(){
  let rowIndex = $(this).parent().parent().index();
  $('.table > tbody > tr').eq(rowIndex).after(`
  <tr>
    <td>
      <input class='porcentaje' type='text' style='width: 30px; border: none; background-color: transparent;'
      />
      % de ${number.value}
    </td>
    <td id='valPorcent'></td>
    <td class='options'>
      <input class='selectPorcent' type='checkbox'/>  
      <i row{i} class='newRegister bi-plus-circle'></i>
    </td>
  </tr>`);
});

$(document).on('focusout','.porcentaje',function(){
  let rowIndex = $(this).parent().parent().index();
  let newVal = (number.value * (this.value / 100)).toFixed(2);
  $(this).attr('value', this.value);
  $('.table > tbody > tr').eq(rowIndex).children('td#valPorcent').html(newVal);
});

$(document).on('change','.selectPorcent',function(){
  if($(this).is(':checked')){
    let rowIndex = $(this).parent().parent().index();
    let selectedVal = $('.table > tbody > tr').eq(rowIndex).html();
    $('.table-selected tbody').append(`<tr><td><input class='porcentaje' type='text' style='width: 50px; border: none; background-color: transparent;'/></td>'${selectedVal}'</tr>`);
    $('.table-selected > tbody > tr > td.options').remove();
  }
});