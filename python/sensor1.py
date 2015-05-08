import sys
import time
import RPi.GPIO as gpio

gpio.setwarnings(False)
gpio.setmode(gpio.BOARD)
gpio.setup(3,gpio.IN)

# Set up LED output
gpio.setup(11, gpio.OUT)

def motion_detect():
	try:
		while True:
			if gpio.input(3)==1:
				print "Motion Detected"
				gpio.output(11, gpio.HIGH)
	except KeyboardInterrupt:
		gpio.cleanup()
		print "Terminated by user"
		sys.exit()
gpio.add_event_detect(3, gpio.BOTH, callback=motion_detect, bouncetime=150)

counter = 0 


#if__name__== __main__:
motion_detect()
