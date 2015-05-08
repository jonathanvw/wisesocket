import sys
from time import sleep
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)


# Set up input pin
GPIO.setup(27, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

# Set up LED output
GPIO.setup(17, GPIO.OUT)


# callback function to run in another thread when button pressed
def motionSensor(channel):
	GPIO.output(17, GPIO.LOW)

	if GPIO.input(27):	
		global counter
		counter +=1
		# lcd.message('Motion Detected/n{0}'.format(counter))
		print "motion Detected"
		GPIO.output(17, GPIO.HIGH)

# add event listener on pin 2

GPIO.add_event_detect(27, GPIO.BOTH, callback=motionSensor, bouncetime=150)
counter = 0 

try:
	while True:
		sleep(1)

finally:
	GPIO.cleanup()