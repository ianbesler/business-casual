// FONT COLOR INTERFACE
// APRIL 2018 DESIGNED AND BUILT ENTIRELY BY HAND
// WITH LOVING CARE AND JUST FOR YOU IN DOWNTOWN LOS ANGELES
// IAN BESLER HTTPS://WWW.IANBESLER.COM HTTPS://WWW.BESLERANDSONS.COM/

//DROP-DOWN MENU ANIMATES ONTO STAGE FROM TOP WHEN USER CLICKS FONT MENU BUTTON
$('button#font-color').click(function(){
	$('aside#font-color-menu').toggleClass('slide-down');
});

//FONT MENU ANIMATES OFF OF STAGE WHEN USER PRESSES ESC KEY
$(document).keyup(function(e){
	if (e.keyCode == 27){
		$('aside').removeClass('slide-down');
		$('button#font-color').removeClass('page-buttons-active').addClass('page-buttons');
	}
});

//ASIDE BUTTON CLICKED WILL REMOVE THE ACTIVE STATE FROM THE INTERFACE BUTTON
$('aside#font-color-menu button').click(function(){
	$('button#font-color').toggleClass('page-buttons-active').toggleClass('page-buttons');
});

//REMOVE COLOR CLASS FROM UNIVERSAL SELECTOR, REMOVE HOVER STATE FROM ALL FONT BUTTONS
//APPLY HOVER STATE TO FONT BUTTON CLICKED, CLOSE FONT MENU
$('aside#font-color-menu button').click(function(){
	$('*').removeClass('font-black font-red font-orange font-yellow font-green font-cyan font-blue font-purple font-magenta font-white');
	$('aside#font-color-menu button').removeClass('interface-button-active');
	$(this).addClass('interface-button-active');
	$('svg').removeClass('fill-black fill-red fill-orange fill-yellow fill-green fill-cyan fill-blue fill-purple fill-magenta fill-white');
	$('aside#font-color-menu').removeClass('slide-down');
});

//BACKGROUND-COLOR BUTTONS
$('button#font-black').click(function(){
	$('*').addClass('font-black');
	$('svg').addClass('fill-black');
});
$('button#font-red').click(function(){
	$('*').addClass('font-red');
	$('svg').addClass('fill-red');
});
$('button#font-orange').click(function(){
	$('*').addClass('font-orange');
	$('svg').addClass('fill-orange');
});
$('button#font-yellow').click(function(){
	$('*').addClass('font-yellow');
	$('svg').addClass('fill-yellow');
});
$('button#font-green').click(function(){
	$('*').addClass('font-green');
	$('svg').addClass('fill-green');
});
$('button#font-cyan').click(function(){
	$('*').addClass('font-cyan');
	$('svg').addClass('fill-cyan');
});
$('button#font-blue').click(function(){
	$('*').addClass('font-blue');
	$('svg').addClass('fill-blue');
});
$('button#font-purple').click(function(){
	$('*').addClass('font-purple');
	$('svg').addClass('fill-purple');
});
$('button#font-magenta').click(function(){
	$('*').addClass('font-magenta');
	$('svg').addClass('fill-magenta');
});
$('button#font-white').click(function(){
	$('*').addClass('font-white');
	$('svg').addClass('fill-white');
});