# TagsRecommendationForPostedJobs

## Description:

Repository contain a server code and a web code.
- Run the server and follows its instructions
- Run the web and follows its instructions

## Server:
Server code consists of APIs and models.
It has three APIs as follows:
1) trainNN: 
	- Request: GET
	- This api calls neural network scripts which trains the network and stores model for prediction. 
2) predictionByKNN: 
	- Request: POST
	- It accepts the job description as an input then calls KNN script to search for k similar jobs.
	- Computes confidence and based on predefined confidence threshold it predicts the tags. 
3) predictionByNN: 
	- Request: POST
	- It accepts the job description as an input and predicts a set of tags using stored model. 
 
Technology used: Flask Python, Keras, Tensorflow

How to run: 
- Open a cmd
- Go to the server folder
- set FLASK_APP=hello.py
- python -m flask run

How to train the model:
- http://localhost:5000/trainNN 

## Web: 
Web code consists of front-end (Client).

Technology used: Angular 6.0

How to run: 
- Open a cmd
- Go to the web folder
- ng serve

How to start:
- http://localhost:4200

