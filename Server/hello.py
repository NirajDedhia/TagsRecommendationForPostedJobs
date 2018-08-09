from flask import Flask, jsonify, request
from neuralNetwork import trainNeuralNetwork, predictByNN
from knn import predictByKNN

NNModel = ""
tfidf = ""
graph = ""

app = Flask(__name__)

# The method was created to test the api.
# It returns the confirmation that the api is up and running.
@app.route("/")
def hello():
    return "Congratulations! I am alive!"

# The method is used to train the neural network.
# Following method is being called when we start the server.
# It stores the trained neural network model and tfidf model.
@app.route('/trainNN', methods=['GET'])
def NN():
    global NNModel
    global tfidf
    global graph

    NNModel, tfidf, graph = trainNeuralNetwork()
    return "Hello World! Neural Network has been trained"

# The method is used to predict a set of tags by neural network.
# It takes a job description and using the stored models
# it predicts a set of tags.
@app.route('/predictionByNN', methods=['POST'])
def predictTagsNN():
    global NNModel
    global tfidf
    global graph

    job = request.get_json()['job']

    # job = """.NET 4.x FrameworksC#, ASP.NET SQL Server, IIS HTML, CSS, JavaScript, XML, JSON Web Services (REST, SOAP, WCF)  Other skills that will be valuable include:  - RxJSMS Web API, MVC, .NET Core, VB.Net  - Common design patterns  - Visual Studio Team Services (VSO)- C++, COM, ATL, XSLT"""
    predicted = predictByNN(tfidf, NNModel, graph, job)

    return jsonify(tags = predicted)


# The method is used to predict a set of tags by K nearest neighbor.
# It takes a job description and predicts a set of tags from the k similar jobs.
@app.route('/predictionByKNN', methods=['POST'])
def predictTagsKNN():

    job = request.get_json()['job']

    # job = """.NET 4.x FrameworksC#, ASP.NET SQL Server, IIS HTML, CSS, JavaScript, XML, JSON Web Services (REST, SOAP, WCF)  Other skills that will be valuable include:  - RxJSMS Web API, MVC, .NET Core, VB.Net  - Common design patterns  - Visual Studio Team Services (VSO)- C++, COM, ATL, XSLT"""
    predicted = predictByKNN(job)

    return jsonify(tags = predicted)
