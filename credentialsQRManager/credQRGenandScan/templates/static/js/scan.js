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
        					    fg: 'http://jennamolby.com/scratch-and-win/images/overlay.png',
        					    'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
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

  $('#scanQR').on('click',function(){
    myVar=setInterval(QrFunc, 4000);
      function QrFunc(){
        let video = document.getElementById("videoInput"); // video is the id of video tag
        video.width =500;
        video.height = 500;
        navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function(stream) {
          video.srcObject = stream;
          video.play();

          let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
          let cap = new cv.VideoCapture(video);

          const FPS = 30;
          function processVideo(){
            try{
              let begin = Date.now();
              frame=cap.read(src);
              
              //cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
              //cv.imshow("canvasOutput", dst);
              let delay = 1000 / FPS - (Date.now() - begin);
              setTimeout(processVideo, delay);
            }catch (err) {
              console.error(err);
              }
            }
          setTimeout(processVideo, 0);
          })
        .catch(function(err) {
          console.log("An error occurred! " + err);
        });

        var canvas = document.createElement("canvas");
        canvas.width = video.width;
        canvas.height = video.height;
        var canvasContext = canvas.getContext("2d");
        canvasContext.drawImage(video, 0, 0, 500, 500);
        var qr_data=canvas.toDataURL('image/png');
        console.log(qr_data)
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
                  fg: 'https://i.ibb.co/xh9rNV9/scratch-coin.png',
                  'cursor': 'url("/static/scratch-coin.png) 5 5, auto',
               });
            }
            else
            {
              
              
            }
          }
        });
        return false;

      }
  });
});