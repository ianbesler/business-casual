// EMOJI MODE INTERFACE APRIL 2018 DESIGNED AND BUILT ENTIRELY BY HAND
// WITH LOVING CARE AND JUST FOR YOU IN DOWNTOWN LOS ANGELES
// BY IAN BESLER HTTPS://WWW.IANBESLER.COM HTTPS://WWW.BESLERANDSONS.COM/
$('div.interface-box button').click(function(){
	$(this).toggleClass('page-buttons page-buttons-active');
});
$('button#emoji-mode').click(function(){
	$('span.emoji-mode').toggleClass('display-none');
	$('span.emoji-mode + sup').toggleClass('display-initial');
});