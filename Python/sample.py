

#sum for entire number

def numberSum(num):
	if(num > 998):
		return
	else:
		return numberSum(num-1)



num = int(input('enter a number\n'))
print(numberSum(num))




