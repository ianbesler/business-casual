// PAGE BACKGROUND COLOR INTERFACE
// APRIL 2018 DESIGNED AND BUILT ENTIRELY BY HAND
// WITH LOVING CARE AND JUST FOR YOU IN DOWNTOWN LOS ANGELES
// IAN BESLER HTTPS://WWW.IANBESLER.COM HTTPS://WWW.BESLERANDSONS.COM/

//DROP-DOWN MENU ANIMATES ONTO STAGE FROM TOP WHEN USER CLICKS FONT MENU BUTTON
$('button#background-color').click(function(){
	$('aside#background-color-menu').toggleClass('slide-down');
});

//FONT MENU ANIMATES OFF OF STAGE WHEN USER PRESSES ESC KEY
$(document).keyup(function(e){
	if (e.keyCode == 27){
		$('aside').removeClass('slide-down');
		$('button#background-color').removeClass('page-buttons-active').addClass('page-buttons');
	}
});

//ASIDE BUTTON CLICKED WILL REMOVE THE ACTIVE STATE FROM THE INTERFACE BUTTON
$('aside#background-color-menu button').click(function(){
	$('button#background-color').toggleClass('page-buttons-active').toggleClass('page-buttons');
});

//REMOVE COLOR CLASS FROM UNIVERSAL SELECTOR
//REMOVE HOVER STATE FROM ALL FONT BUTTONS
//APPLY HOVER STATE TO FONT BUTTON CLICKED
//CLOSE FONT MENU
$('aside#background-color-menu ol li button').click(function(){
	$('*').removeClass('black red orange yellow green cyan blue purple magenta white');
	$('aside#background-color-menu button').removeClass('interface-button-active');
	$(this).addClass('interface-button-active');
	$('aside#background-color-menu').removeClass('slide-down');
});

//BACKGROUND-COLOR BUTTONS
$('button#black').click(function(){
	$('body').addClass('black');
});
$('button#red').click(function(){
	$('body').addClass('red');
});
$('button#orange').click(function(){
	$('body').addClass('orange');
});
$('button#yellow').click(function(){
	$('body').addClass('yellow');
});
$('button#green').click(function(){
	$('body').addClass('green');
});
$('button#cyan').click(function(){
	$('body').addClass('cyan');
});
$('button#blue').click(function(){
	$('body').addClass('blue');
});
$('button#purple').click(function(){
	$('body').addClass('purple');
});
$('button#magenta').click(function(){
	$('body').addClass('magenta');
});
$('button#white').click(function(){
	$('body').addClass('white');
});