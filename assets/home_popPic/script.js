jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	var RedBookQR	=	'./images/contact/RedBookQR.png';
	var WeChatQR	=	'./images/contact/WeChatQR.png';

	

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#contactBox1,#contactBox2').addClass('blur');
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass('showQR');
		});
	}

	$('#contactBox1>li,#contactBox2>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'RedBook') {
			showQR(RedBookQR);
		} else if (thisID === 'WeChat') {
			showQR(WeChatQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#contactBox1,#contactBox2').removeClass('blur');
		},600);

	});
});