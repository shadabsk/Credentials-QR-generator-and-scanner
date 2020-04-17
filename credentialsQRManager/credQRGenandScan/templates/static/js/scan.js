$(document).ready(function(){
	$('#upload').on('change',function(){
		var filename1=$('#upload').val();
        filename1=filename1.replace(/.*[\/\\]/, '');
        $('#uploadImage').html(
        	filename1
        )

        let video = document.getElementById("upload"); // video is the id of video tag
        video.width =300;
        video.height = 300;
        var reader = new FileReader();
        var f = video.files;

        reader.onloadend = function () {
            //console.log(reader.result);
            qr_data=reader.result;
            console.log(qr_data);

            $.ajax({
              type: "POST",
              url: "qrScan",
              data: {'qrcheck':qr_data,
              csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()},
              cache: false,
              dataType: 'json',
              success: function(data){
                if(data.true)
                { 
                	$('#demoScanner').modal('hide')
                  	$('#scannedData').wScratchPad({
        					    size        : 70,       
        					    bg:  '/static/QR/ScanQR/'+data.true,
        					    realtime    : true, 
                      fg: '/static/over.jpg',
                      'cursor': 'url("/static/scra.png") 5 5, default',
        					 });
                }
                else
                {
                  
                  
                }
              }
            });
            return false;
        }
        reader.readAsDataURL(f[0]);
	});

});