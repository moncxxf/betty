window.onload = function () {
    document.querySelector('#footerMessage').innerHTML = FooterMessage
    LoadProducts();
    change()
    Shop();
    promcode();
}
function order(){
  var numero = document.querySelector('#numero')
  if(numero.value == ""){
    Swal.fire(
      'Confirm Your Number',
      'We cant contact you without your number',
      'question'
    )
    document.querySelector('#order').classList.add("dis-button");
  }else {
  setTimeout(function(){document.querySelector('#order').textContent = 'Ordered !'}, 1000)
  document.querySelector('#order').classList.add("dis-button");
  location.href="#"
  Swal.fire(
    'Your Product in On The Way!',
    `Successfully Ordered ${Products[product_number].brand} ${Products[product_number].name} !`,
    'success'
  )  
  setTimeout(function(){
    location.href="https://Destin.gq"
  },7000)
}}
function LoadProducts(){
	buildTable(Products)
	function buildTable(data){
		var table = document.querySelector('#new-drop')

		for (var i = 0; i < data.length; i++){
            var row = `<a href="${data[i].link}" class="card ${data[i].available}">
                            <img id='${data[i].id}' src='${data[i].img}' style='${data[i].style}'">
                            <h6>${data[i].brand}</h6>
                            <h4>${data[i].name}</h4>
                            <h5>${data[i].price}</h5>
                       </a>`
			table.innerHTML += row
		}
	}
}
function Shop(){
	buildTable(Products)
	function buildTable(data){
		var table = document.querySelector('#shop-all')

		for (var i = 1; i < data.length; i++){
            var row = `<a href="${data[i].link}" class="card ${data[i].available}">
                            <img id="${data[i].id}" src='${data[i].img}' style='${data[i].style}'">
                            <h6>${data[i].brand}</h6>
                            <h4>${data[i].name}</h4>
                            <h5>${data[i].price}</h5>
                       </a>`
			table.innerHTML += row
		}
	}
}
function promcode(){
    e = document.querySelector('#promo-code').value
    if (e == code[0].code){
        location.href="#thumb1"
        document.querySelector('#Pprice').innerHTML = `${Products[product_number].price} (-${code[0].moins})`
    }
}
