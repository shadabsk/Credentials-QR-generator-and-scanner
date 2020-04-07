# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import qrcode,os
from datetime import datetime
import re,base64
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
import cv2
import pyzbar.pyzbar as pyzbar


# Create your views here.
def index(request):
	return render(request,'index.html',{})

def generateSocialQR(request):
	if request.method == 'POST':
		data={}
		qrsocialdata=request.POST['qrsocialdata']

		buf=[]
		qrsocialdata = qrsocialdata.replace('fakedata9892327169fakedata7506455707','[')

		qrsocialdata = qrsocialdata.replace('7506455707','] 7506455707 [')

		qrsocialdata = qrsocialdata.replace('8898112336',']')

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

		now = datetime.now()
		dt_string = now.strftime("%d-%m-%Y %H-%M-%S")

		img.save(directory+'SocialQR '+dt_string+'.png')

		data={'True':dt_string}
		return JsonResponse(data)

def qrScan(request):
	if request.method == 'POST':
		qrscandata=request.POST['qrcheck']

		directory = 'credQRGenandScan/templates/static/QR/ScanQR/'
		if not os.path.exists(directory):
		    os.makedirs(directory)

		now = datetime.now()
		dt_string = now.strftime("%d-%m-%Y %H-%M-%S")

		base64_data = re.sub('^data:image/.+;base64,', '', qrscandata)
		img = Image.open(BytesIO(base64.b64decode(base64_data)))
		img.save(directory+'ScanQR '+dt_string+'.png')

		im=cv2.cv2.imread(directory+'ScanQR '+dt_string+'.png')
		im=cv2.cv2.resize(im,(300,300))
		decodedObjects = pyzbar.decode(im)

		str1=""

		try:
			str1=str((decodedObjects[0][0]))
			str1=str1.lstrip('b\'\"(\'').rstrip('\'\")\'')
			str1=str1.replace('[','').replace(']','')
		except:
			pass

		str1=str1.split('7506455707')

		str2=[]
		for i in range(len(str1)):
			str2.append(str1[i].split('9892327169'))

		# create Image object with the input image
 
		image = Image.open('credQRGenandScan/templates/static/background.png')
		 
		# initialise the drawing context with
		# the image object as background
		 
		draw = ImageDraw.Draw(image)
		# create font object with the font file and specify
		# desired size
		 
		font = ImageFont.truetype('credQRGenandScan/templates/static/Roboto-Bold.ttf', size=45)
		 
		# starting position of the message
		#instagram 
		(x, y) = (200, 50)
		instagram = str2[0][1]
		color = 'rgb(0, 0, 0)' # black color
		draw.text((x, y), instagram, fill=color, font=font)

		#facebook
		(x, y) = (200, 200)
		facebook = str2[1][1]
		draw.text((x, y), facebook, fill=color, font=font)

		#twitter
		(x, y) = (200, 320)
		twitter = str2[2][1] 
		draw.text((x, y), twitter, fill=color, font=font)

		#snapchat
		(x, y) = (200, 450)
		snapchat = str2[3][1] 
		draw.text((x, y), snapchat, fill=color, font=font)

		#tiktok
		(x, y) = (200, 560)
		tiktok = str2[4][1] 
		draw.text((x, y), tiktok, fill=color, font=font)

		#Linkedin 
		(x, y) = (1100, 50)
		Linkedin = str2[5][1]
		color = 'rgb(0, 0, 0)' # black color
		draw.text((x, y), Linkedin, fill=color, font=font)

		#Google
		(x, y) = (1100, 160)
		Google = str2[6][1] 
		draw.text((x, y), Google, fill=color, font=font)

		#Microsoft
		(x, y) = (1100, 300)
		Microsoft = str2[7][1] 
		draw.text((x, y), Microsoft, fill=color, font=font)

		#Yahoo
		(x, y) = (1100, 440)
		Yahoo = str2[8][1] 
		draw.text((x, y), Yahoo, fill=color, font=font)

		#Hotmail
		(x, y) = (1100, 560)
		Hotmail = str2[9][1] 
		draw.text((x, y), Hotmail, fill=color, font=font)

		#Amazon
		(x, y) = (2300, 50)
		Amazon = str2[10][1]
		draw.text((x, y), Amazon, fill=color, font=font)

		#Flipkart
		(x, y) = (2300, 160)
		Flipkart = str2[11][1] 
		draw.text((x, y), Flipkart, fill=color, font=font)

		#Paytm
		(x, y) = (2300, 300)
		Paytm = str2[12][1] 
		draw.text((x, y), Paytm, fill=color, font=font)

		#Github
		(x, y) = (2300, 440)
		Github = str2[13][1]
		draw.text((x, y), Github, fill=color, font=font)

		#Netflix
		(x, y) = (2300, 580)
		Netflix = str2[14][1] 
		draw.text((x, y), Netflix, fill=color, font=font)

		#Voot
		(x, y) = (3300, 60)
		Voot = str2[15][1] 
		draw.text((x, y), Voot, fill=color, font=font)

		#Zee5
		(x, y) = (3300, 190)
		Zee5 = str2[17][1]
		draw.text((x, y), Zee5, fill=color, font=font)

		#Other1 app
		(x, y) = (2860, 340)
		Other1 = str2[18][0]
		draw.text((x, y), Other1, fill=color, font=font)
		#Other1 pass
		(x, y) = (3300, 340)
		Other1password = str2[18][1] 
		draw.text((x, y), Other1password, fill=color, font=font)


		#Other2 app
		(x, y) = (2860, 440)
		Other2 = str2[19][0] 
		draw.text((x, y), Other2, fill=color, font=font)
		#Other2 pass
		(x, y) = (3300, 440)
		Other2password = str2[19][1] 
		draw.text((x, y), Other2password, fill=color, font=font)

		#Hotstar
		(x, y) = (3300, 630)
		Hotstar = str2[16][1] 
		draw.text((x, y), Hotstar, fill=color, font=font)

		# save the edited image
		image.save(directory+'OutputQR '+dt_string+'.png')
		data={'true':'OutputQR '+dt_string+'.png'}
		return JsonResponse(data)