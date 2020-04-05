$(document).ready(function(){
	var insta = ""
	var fb = ""
	var tweet = ""
	var vk = ""
	var other1social = ""
	var other1pass = ""
	var other2social = ""
	var other2pass = ""

	$("#card").flip({
	  axis: 'x',
	  trigger: 'manual'
	});
	$("#card2").flip({
	  axis: 'x',
	  trigger: 'manual'
	});

	$('#insta').on('blur',function(){
		insta = $('#insta').val()
		$('#insta').val('')
	});
	$('#fb').on('blur',function(){
		fb = $('#fb').val()
		$('#fb').val('')
	});
	$('#tweet').on('blur',function(){
		tweet = $('#tweet').val()
		$('#tweet').val('')
	});
	$('#vk').on('blur',function(){
		vk = $('#vk').val()
		$('#vk').val('')
	});
	$('#other1social').on('blur',function(){
		$("#card").flip(false);
		other1social = $('#other1social').val()
		$('#other1social').val('')
	});
	$('#other1pass').on('blur',function(){
		$("#card").flip(false);
		other1pass = $('#other1pass').val()
		$('#other1pass').val('')
	});
	$('#other2social').on('blur',function(){
		$("#card2").flip(false);
		other2social = $('#other2social').val()
		$('#other2social').val('')
	});
	$('#other2pass').on('blur',function(){
		$("#card2").flip(false);
		other2pass = $('#other2pass').val()
		$('#other2pass').val('')
	});


	$('#insta').on('focus',function(){
		$('#insta').val(insta)
	});
	$('#fb').on('focus',function(){
		$('#fb').val(fb)
	});
	$('#tweet').on('focus',function(){
		$('#tweet').val(tweet)
	});
	$('#vk').on('focus',function(){
		$('#vk').val(vk)
	});
	$('#other1social').on('focus',function(){
		$('.back').show()
		$("#card").flip(true);
		$('#other1social').val(other1social)
	});
	$('#other1pass').on('focus',function(){
		$('.back').show()
		$("#card").flip(true);
		$('#other1pass').val(other1pass)
	});
	$('#other2social').on('focus',function(){
		$('.back').show()
		$("#card2").flip(true);
		$('#other2social').val(other2social)
	});
	$('#other2pass').on('focus',function(){
		$('.back').show()
		$("#card2").flip(true);
		$('#other2pass').val(other2pass)
	});

});