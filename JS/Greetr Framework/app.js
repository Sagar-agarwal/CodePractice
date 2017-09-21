var g = G$('Jon', 'dow');
console.log(g);

$('#login').click(function(){

	var loginGreetr = G$('Jhon', 'dow');

	$('#logindiv').hide();

	loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});