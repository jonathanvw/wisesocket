#Getting Setup:

##Update apt-get
    sudo apt-get update

##Install node.js for arm
    wget http://node-arm.herokuapp.com/node_latest_armhf.deb
    sudo dpkg -i node_latest_armhf.deb

###Confirm Node was installed
    node -v

###Should output something like
    v0.12.1

##Download github example
    git clone https://github.com/jonathanvw/wisesocket.git

##Change directory into project folder
    cd wisesocket

##Install socket.io
    sudo npm install socket.io

##You will need this to control the gpio's
    npm install rpi-gpio

##Test out the app
    sudo node app.js
Open in webpage at [your raspi's ip address]:8080 (eg: 192.168.1.66:8080)
