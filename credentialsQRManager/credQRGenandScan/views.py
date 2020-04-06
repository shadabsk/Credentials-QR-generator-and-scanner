from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import qrcode,os

# Create your views here.
def index(request):
	return render(request,'index.html',{})

def generateSocialQR(request):
	if request.method == 'POST':
		data={}
		qrsocialdata=request.POST['qrsocialdata']

		buf=[]
		qrsocialdata = qrsocialdata.replace('fakedata╡fakedata╠','[')

		qrsocialdata = qrsocialdata.replace('╠','] ╠ [')

		qrsocialdata = qrsocialdata.replace('☰',']')

		qr = qrcode.QRCode(
            version=1,
            box_size=15,
            border=5
        )

		qr.add_data(qrsocialdata)
		qr.make(fit=True)
		img = qr.make_image(fill='black', back_color='white')
		directory = 'credQRGenandScan/templates/static/QR/SocialQR/'
		if not os.path.exists(directory):
		    os.makedirs(directory)

		img.save(directory+'SocialQR.png')

		data={'True':qrsocialdata}
		return JsonResponse(data)

