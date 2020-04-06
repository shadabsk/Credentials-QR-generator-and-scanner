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
		$('#lbinsta').html(
			"Instagram&emsp; <i style='font-size: 14pt;color:#F783AC;' class='fab fa-instagram'></i>"
		);
		insta = $('#insta').val()
		$('#insta').val('')
	});
	$('#fb').on('blur',function(){
		$('#lbfb').html(
			"Facebook&emsp; <i style='font-size: 14pt; color:#1778F2;' class='fab fa-facebook'></i>"
		);
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
		$('#lbinsta').html(
			"<i style='font-size: 14pt;color:#F783AC;' class='fab fa-instagram'></i>"
		);
		$('#insta').val(insta)
	});
	$('#fb').on('focus',function(){
		$('#lbfb').html(
			"<i style='font-size: 14pt; color:#1778F2;' class='fab fa-facebook'></i>"
		);
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

	$('#socialQr').on('click',function(){
		if(insta!="" || fb!="" || tweet!="" || vk!="" || ((other1social!="" && other1pass!="") || (other2social!="" && other2pass!="")) ){
			var qrdata="fakedata╡fakedata"
			if(insta!=""){
				qrdata+="╠Instagram ╡ "+insta
			}
			if(fb!=""){
				qrdata+="╠Facebook ╡ "+fb
			}
			if(tweet!=""){
				qrdata+="╠Twitter ╡ "+tweet
			}
			if(vk!=""){
				qrdata+="╠VK ╡ "+vk
			}
			if(other1social!="" && other1pass!=""){
				qrdata+="╠"+other1social+" ╡ "+other1pass
			}
			if(other2social!="" && other2pass!=""){
				qrdata+="╠"+other2social+" ╡ "+other2pass+"☰"
			}
			$.ajax({
				type:'POST',
                url:'generateSocialQR',
                data:{
                    qrsocialdata:qrdata,
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
                },
                cache:false,
                success:function(available){
                    if(available.True)
                    {
                     	$('#downprev').show();
                    }
                    else
                    {
                     	alert('failure');
                    }
                },
			});
		}
	});
});