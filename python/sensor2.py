import time
import RPi.GPIO as GPIO

sensor = 3

GPIO.setmode(GPIO.BCM)
GPIO.setup(sensor,GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(11,gpio.IN)

previous_state = False
current_state = False

while True:
			time.sleep(1)
			previous_state = current_state
			current_state = GPIO.input(sensor)
			# Set up LED output 
			GPIO.setup(11, GPIO.OUT)
			if current_state != previous_state:
				new_state = "HIGH" if current_state else "LOW"
				print("GPIO pin %s is %s" % (sensor, new_state))
				