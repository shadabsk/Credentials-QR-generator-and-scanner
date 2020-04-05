
str1="google.com╡S8898112336╡facebook.com╡S7651423╡vk.com╡"
buf=[]

buf.append(str1.split("╡"))

for i in range(len(buf[0])):
	if(buf[0][i]==''):
		print('something else')
	#print(buf[0][i])