// FONT COLOR INTERFACE
// APRIL 2018 DESIGNED AND BUILT ENTIRELY BY HAND
// WITH LOVING CARE AND JUST FOR YOU IN DOWNTOWN LOS ANGELES
// IAN BESLER HTTPS://WWW.IANBESLER.COM HTTPS://WWW.BESLERANDSONS.COM/

//DROP-DOWN MENU ANIMATES ONTO STAGE FROM TOP WHEN USER CLICKS FONT MENU BUTTON
$('button#font').click(function(){
	$('aside#font-menu').toggleClass('slide-down');
});

//FONT MENU ANIMATES OFF OF STAGE WHEN USER PRESSES ESC KEY
$(document).keyup(function(e){
	if (e.keyCode == 27){
		$('aside').removeClass('slide-down');
		$('button#font').removeClass('page-buttons-active').addClass('page-buttons');
	}
});

//ASIDE BUTTON CLICKED WILL REMOVE THE ACTIVE STATE FROM THE INTERFACE BUTTON
$('aside#font-menu button').click(function(){
	$('button#font').toggleClass('page-buttons-active').toggleClass('page-buttons');
});

//REMOVE COLOR CLASS FROM UNIVERSAL SELECTOR, REMOVE HOVER STATE FROM ALL FONT BUTTONS
//APPLY HOVER STATE TO FONT BUTTON CLICKED, CLOSE FONT MENU
$('aside#font-menu ol li button').click(function(){
	$('*').removeClass('arial brush-script comic-sans-ms courier-new georgia impact papyrus rockwell times-new-roman verdana');
	$('*').removeClass('font-line-adjust');
	$('aside#font-menu button').removeClass('interface-button-active');
	$(this).addClass('interface-button-active');
	$('aside#font-menu').removeClass('slide-down');
});

//BACKGROUND-COLOR BUTTONS
$('button#arial').click(function(){
	$('*').addClass('arial');
});
$('button#brush-script').click(function(){
	$('*').addClass('brush-script');
	$('div.interface-box button').addClass('font-line-adjust');
});
$('button#comic-sans-ms').click(function(){
	$('*').addClass('comic-sans-ms');
});
$('button#courier-new').click(function(){
	$('*').addClass('courier-new');
	$('div.interface-box button').addClass('font-line-adjust');
});
$('button#georgia').click(function(){
	$('*').addClass('georgia');
});
$('button#impact').click(function(){
	$('*').addClass('impact');
});
$('button#papyrus').click(function(){
	$('*').addClass('papyrus');
	$('div.interface-box button').addClass('font-line-adjust');
});
$('button#rockwell').click(function(){
	$('*').addClass('rockwell');
	$('div.interface-box button').addClass('font-line-adjust');
});
$('button#times-new-roman').click(function(){
	$('*').addClass('times-new-roman');
});
$('button#verdana').click(function(){
	$('*').addClass('verdana');
});