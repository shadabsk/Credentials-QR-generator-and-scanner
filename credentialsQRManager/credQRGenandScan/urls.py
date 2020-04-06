from django.urls import path
from credQRGenandScan import views

urlpatterns = [
    path('',views.index,name='index'),
    path('generateSocialQR',views.generateSocialQR,name='generateSocialQR'),
    
]
