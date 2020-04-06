$(document).ready(function(){
	var insta = ""
	var fb = ""
	var tweet = ""
	var snp = ""
	var tktok = ""
	var linked = ""
	var gml = ""
	var mcrsft = ""
	var yhoo = ""
	var hotml = ""
	var amzn = ""
	var flpkt = ""
	var ptm = ""
	var gthb = ""
	var ntflx = ""
	var vt = ""
	var htstr = ""
	var z5 = ""
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
		$('#lblinsta').html(
			"Instagram&emsp; <i style='font-size: 14pt;color:#F783AC;' class='fab fa-instagram'></i>"
		);
		insta = $('#insta').val()
		$('#insta').val('')
	});
	$('#fb').on('blur',function(){
		$('#lblfb').html(
			"Facebook&emsp; <i style='font-size: 14pt; color:#1778F2;' class='fab fa-facebook'></i>"
		);
		fb = $('#fb').val()
		$('#fb').val('')
	});
	$('#tweet').on('blur',function(){
		$('#lbltweet').html(
			"Twitter&emsp;&emsp;&nbsp; <i style='font-size: 14pt; color:#43BDF0 ' class='fab fa-twitter'></i>"
		);
		tweet = $('#tweet').val()
		$('#tweet').val('')
	});
	$('#snp').on('blur',function(){
		$('#lblsnp').html(
			"Snapchat &emsp;&emsp;<i style='font-size: 14pt; color:#F8F501;' class='fab fa-snapchat-square'></i>"
		);
		snp = $('#snp').val()
		$('#snp').val('')
	});
	$('#tktok').on('blur',function(){
		$('#lbltktok').html(
			"TikTok &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#000000;' class='fab fa-tumblr'></i>"
		);
		tktok = $('#tktok').val()
		$('#tktok').val('')
	});
	$('#linked').on('blur',function(){
		$('#lbllinked').html(
			"Linkedin &emsp;&emsp;<i style='font-size: 14pt; color:#007BB6;' class='fab fa-linkedin'></i>"
		);
		linked = $('#linked').val()
		$('#linked').val('')
	});
	$('#gml').on('blur',function(){
		$('#lblgml').html(
			"Google &emsp;&emsp;&emsp;<i style='font-size: 14pt; color::#EB4B3F' class='fab fa-google'></i>"
		);
		gml = $('#gml').val()
		$('#gml').val('')
	});
	$('#mcrsft').on('blur',function(){
		$('#lblmcrsft').html(
			"Microsoft &emsp;<i style='font-size: 14pt; color:#04AEDA;' class='fab fa-microsoft'></i>"
		);
		mcrsft = $('#mcrsft').val()
		$('#mcrsft').val('')
	});
	$('#yhoo').on('blur',function(){
		$('#lblyhoo').html(
			"Yahoo &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#720E9E;' class='fab fa-yahoo'></i>"
		);
		yhoo = $('#yhoo').val()
		$('#yhoo').val('')
	});
	$('#hotml').on('blur',function(){
		$('#lblhotml').html(
			"Hotmail &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#E96F00;' class='fas fa-envelope'></i>"
		);
		hotml = $('#hotml').val()
		$('#hotml').val('')
	});
	$('#amzn').on('blur',function(){
		$('#lblamzn').html(
			"Amazon &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#FFAE3C;' class='fab fa-amazon'></i>"
		);
		amzn = $('#amzn').val()
		$('#amzn').val('')
	});
	$('#flpkt').on('blur',function(){
		$('#lblflpkt').html(
			"Flipkart &emsp;&emsp;<i style='font-size: 14pt; color:#16679C;' class='fas fa-shopping-cart'></i>"
		);
		flpkt = $('#flpkt').val()
		$('#flpkt').val('')
	});
	$('#ptm').on('blur',function(){
		$('#lblptm').html(
			"Paytm &emsp;&emsp;&emsp;&emsp;&nbsp;<i style='font-size: 14pt; color:#0DBBEF;' class='fas fa-credit-card'></i>"
		);
		ptm = $('#ptm').val()
		$('#ptm').val('')
	});
	$('#gthb').on('blur',function(){
		$('#lblgthb').html(
			"Github &emsp;&emsp;&emsp;&nbsp;<i style='font-size: 14pt; color:#000000;' class='fab fa-github'></i>"
		);
		gthb = $('#gthb').val()
		$('#gthb').val('')
	});
	$('#ntflx').on('blur',function(){
		$('#lblntflx').html(
			"Netflix &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#A8060E;' class='fas fa-play'></i>"
		);
		ntflx = $('#ntflx').val()
		$('#ntflx').val('')
	});
	$('#vt').on('blur',function(){
		$('#lblvt').html(
			"Voot &emsp;&emsp;&emsp;&emsp;&emsp;<i style='font-size: 14pt; color:#670CCC;' class='fas fa-play'></i>"
		);
		vt = $('#vt').val()
		$('#vt').val('')
	});
	$('#htstr').on('blur',function(){
		$('#lblhtstr').html(
			"Hotstar &emsp;&emsp;&nbsp;<i style='font-size: 14pt; color:#5B743C;' class='fas fa-star'></i>"
		);
		htstr = $('#htstr').val()
		$('#htstr').val('')
	});
	$('#z5').on('blur',function(){
		$('#lblz5').html(
			"Zee5 &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<i style='font-size: 14pt; color:#040404;' class='fab fa-cuttlefish'></i>"
		);
		z5 = $('#z5').val()
		$('#z5').val('')
	});

	$('#other1social').on('blur',function(){
		$("#card").flip(false);
		$('#lblother1social').html(
			"Other 1 &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		other1social = $('#other1social').val()
		$('#other1social').val('')
	});
	$('#other1pass').on('blur',function(){
		$("#card").flip(false);
		$('#lblother1pass').html(
			"Pass 1 &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		other1pass = $('#other1pass').val()
		$('#other1pass').val('')
	});
	$('#other2social').on('blur',function(){
		$("#card2").flip(false);
		$('#lblother2social').html(
			"Other 2 &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		other2social = $('#other2social').val()
		$('#other2social').val('')
	});
	$('#other2pass').on('blur',function(){
		$("#card2").flip(false);
		$('#lblother2pass').html(
			"Pass 2 &emsp;&emsp;&emsp;<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"

		);
		other2pass = $('#other2pass').val()
		$('#other2pass').val('')
	});





	$('#insta').on('focus',function(){
		$('#lblinsta').html(
			"<i style='font-size: 14pt;color:#F783AC;' class='fab fa-instagram'></i>"
		);
		$('#insta').val(insta)
	});
	$('#fb').on('focus',function(){
		$('#lblfb').html(
			"<i style='font-size: 14pt; color:#1778F2;' class='fab fa-facebook'></i>"
		);
		$('#fb').val(fb)
	});
	$('#tweet').on('focus',function(){
		$('#lbltweet').html(
			"<i style='font-size: 14pt; color:#43BDF0 ' class='fab fa-twitter'></i>"
		);
		$('#tweet').val(tweet)
	})
	$('#snp').on('focus',function(){
		$('#lblsnp').html(
			"<i style='font-size: 14pt; color:#F8F501;' class='fab fa-snapchat-square'></i>"
		);
		$('#snp').val(snp)
	});
	$('#tktok').on('focus',function(){
		$('#lbltktok').html(
			"<i style='font-size: 14pt; color:#000000;' class='fab fa-tumblr'></i>"
		);
		$('#tktok').val(tktok)
	});
	$('#linked').on('focus',function(){
		$('#lbllinked').html(
			"<i style='font-size: 14pt; color:#007BB6;' class='fab fa-linkedin'></i>"
		);
		$('#linked').val(linked)
	});
	$('#gml').on('focus',function(){
		$('#lblgml').html(
			"<i style='font-size: 14pt; color::#EB4B3F' class='fab fa-google'></i>"
		);
		$('#gml').val(gml)
	});
	$('#mcrsft').on('focus',function(){
		$('#lblmcrsft').html(
			"<i style='font-size: 14pt; color:#04AEDA;' class='fab fa-microsoft'></i>"
		);
		$('#mcrsft').val(mcrsft)
	});
	$('#yhoo').on('focus',function(){
		$('#lblyhoo').html(
			"<i style='font-size: 14pt; color:#720E9E;' class='fab fa-yahoo'></i>"
		);
		$('#yhoo').val(yhoo)
	});
	$('#hotml').on('focus',function(){
		$('#lblhotml').html(
			"<i style='font-size: 14pt; color:#E96F00;' class='fas fa-envelope'></i>"
		);
		$('#hotml').val(hotml)
	});
	$('#amzn').on('focus',function(){
		$('#lblamzn').html(
			"<i style='font-size: 14pt; color:#FFAE3C;' class='fab fa-amazon'></i>"
		);
		$('#amzn').val(amzn)
	});
	$('#flpkt').on('focus',function(){
		$('#lblflpkt').html(
			"<i style='font-size: 14pt; color:#16679C;' class='fas fa-shopping-cart'></i>"
		);
		$('#flpkt').val(flpkt)
	});
	$('#ptm').on('focus',function(){
		$('#lblptm').html(
			"<i style='font-size: 14pt; color:#0DBBEF;' class='fas fa-credit-card'></i>"
		);
		$('#ptm').val(ptm)
	});
	$('#gthb').on('focus',function(){
		$('#lblgthb').html(
			"<i style='font-size: 14pt; color:#000000;' class='fab fa-github'></i>"
		);
		$('#gthb').val(gthb)
	});
	$('#ntflx').on('focus',function(){
		$('#lblntflx').html(
			"<i style='font-size: 14pt; color:#A8060E;' class='fas fa-play'></i>"
		);
		$('#ntflx').val(ntflx)
	});
	$('#vt').on('focus',function(){
		$('#lblvt').html(
			"<i style='font-size: 14pt; color:#670CCC;' class='fas fa-play'></i>"
		);
		$('#vt').val(vt)
	});
	$('#htstr').on('focus',function(){
		$('#lblhtstr').html(
			"<i style='font-size: 14pt; color:#5B743C;' class='fas fa-star'></i>"
		);
		$('#htstr').val(htstr)
	});
	$('#z5').on('focus',function(){
		$('#lblz5').html(
			"<i style='font-size: 14pt; color:#040404;' class='fab fa-cuttlefish'></i>"
		);
		$('#z5').val(z5)
	});
	$('#other1social').on('focus',function(){
		$('.back').show()
		$("#card").flip(true);
		$('#lblother1social').html(
			"<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		$('#other1social').val(other1social)
	});
	$('#other1pass').on('focus',function(){
		$('.back').show()
		$("#card").flip(true);
		$('#lblother1pass').html(
			"<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		$('#other1pass').val(other1pass)
	});
	$('#other2social').on('focus',function(){
		$('.back').show()
		$("#card2").flip(true);
		$('#lblother2social').html(
			"<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		$('#other2social').val(other2social)
	});
	$('#other2pass').on('focus',function(){
		$('.back').show()
		$("#card2").flip(true);
		$('#lblother2pass').html(
			"<i style='font-size: 14pt; color:black;' class='fas fa-random'></i>"
		);
		$('#other2pass').val(other2pass)
	});

	$('#socialQr').on('click',function(){
		if(insta!="" || fb!="" || tweet!="" || snp!="" || tktok!="" || linked!="" || gml!="" || mcrsft!="" || yhoo!="" || hotml!="" || amzn!="" || flpkt!="" || ptm!="" || gthb!="" || ntflx!="" || vt!="" || htstr!="" || z5!="" ||((other1social!="" && other1pass!="") || (other2social!="" && other2pass!="")) ){
			var qrdata="fakedata╡fakedata"
			if(insta!=""){
				qrdata+="╠Instagram ╡ "+insta
			}
			if(fb!=""){
				qrdata+="╠ Facebook ╡ "+fb
			}
			if(tweet!=""){
				qrdata+="╠ Twitter ╡ "+tweet
			}
			if(snp!=""){
				qrdata+="╠ Snapchat ╡ "+snp
			}
			if(tktok!=""){
				qrdata+="╠ TikTok ╡ "+tktok
			}
			if(linked!=""){
				qrdata+="╠ Linkedin ╡ "+linked
			}
			if(gml!=""){
				qrdata+="╠ Google ╡ "+gml
			}
			if(mcrsft!=""){
				qrdata+="╠ Microsoft ╡ "+mcrsft
			}
			if(yhoo!=""){
				qrdata+="╠ Yahoo ╡ "+yhoo
			}
			if(hotml!=""){
				qrdata+="╠ Hotmail ╡ "+hotml
			}
			if(amzn!=""){
				qrdata+="╠ Amazon ╡ "+amzn
			}
			if(flpkt!=""){
				qrdata+="╠ Flipkart ╡ "+flpkt
			}
			if(ptm!=""){
				qrdata+="╠ Paytm ╡ "+ptm
			}
			if(gthb!=""){
				qrdata+="╠ Github ╡ "+gthb
			}
			if(ntflx!=""){
				qrdata+="╠ Netflix ╡ "+ntflx
			}
			if(vt!=""){
				qrdata+="╠ Voot ╡ "+vt
			}
			if(htstr!=""){
				qrdata+="╠ Hotstar ╡ "+htstr
			}
			if(z5!=""){
				qrdata+="╠ Zee5 ╡ "+z5
			}
			if(other1social!="" && other1pass!=""){
				qrdata+="╠ "+other1social+" ╡ "+other1pass
			}
			if(other2social!="" && other2pass!=""){
				qrdata+="╠ "+other2social+" ╡ "+other2pass
			}
			qrdata+="☰"
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
                     	$('#demo').modal('show');
                     	$('#previewQR').attr('src',"/static/QR/SocialQR/SocialQR "+available.True+".png")
                     	$('#downloadQR').attr('href',"/static/QR/SocialQR/SocialQR "+available.True+".png")

                    }
                    else
                    {
                     	alert('failure');
                    }
                },
			});
		}
	});
	 $('#demo').on('show.bs.modal', function (e) {
	     $('#demo .modal-dialog').attr('class', 'modal-dialog zoomInUp animated');
	     setTimeout(function () {
         	$(".modal-body").attr('class', ' animated tada');
         }, 1000);
	  })
	 $('#demo').on('hide.bs.modal', function (e) {
	     $('#demo .modal-dialog').attr('class', 'modal-dialog zoomOutDown animated');
	  })
});