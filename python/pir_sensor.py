import sys
import time
import RPi.GPIO as gpio

gpio.setwarnings(False)
gpio.setmode(gpio.BOARD)
gpio.setup(3,gpio.IN)

def motion_detect():
	try:
		while True:
			if gpio.input(3)==1:
				print "Motion is Detected"
	except KeyboardInterrupt:
		gpio.cleanup()
		print "Terminated by user"
		sys.exit()

# if__name__== "__main__":
motion_detect()