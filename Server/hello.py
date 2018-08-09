from flask import Flask, jsonify, request
from neuralNetwork import trainNeuralNetwork, predictByNN
from knn import predictByKNN

NNModel = ""
tfidf = ""
graph = ""

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/trainNN', methods=['GET'])
def NN():
    global NNModel
    global tfidf
    global graph

    NNModel, tfidf, graph = trainNeuralNetwork()
    return "Hello World! Neural Network has been trained"

@app.route('/predictionByNN', methods=['POST'])
def predictTagsNN():
    global NNModel
    global tfidf
    global graph

    job = request.get_json()['job']

    # job = """.NET 4.x FrameworksC#, ASP.NET SQL Server, IIS HTML, CSS, JavaScript, XML, JSON Web Services (REST, SOAP, WCF)  Other skills that will be valuable include:  - RxJSMS Web API, MVC, .NET Core, VB.Net  - Common design patterns  - Visual Studio Team Services (VSO)- C++, COM, ATL, XSLT"""
    predicted = predictByNN(tfidf, NNModel, graph, job)

    return jsonify(tags = predicted)


@app.route('/predictionByKNN', methods=['POST'])
def predictTagsKNN():

    job = request.get_json()['job']

    # job = """.NET 4.x FrameworksC#, ASP.NET SQL Server, IIS HTML, CSS, JavaScript, XML, JSON Web Services (REST, SOAP, WCF)  Other skills that will be valuable include:  - RxJSMS Web API, MVC, .NET Core, VB.Net  - Common design patterns  - Visual Studio Team Services (VSO)- C++, COM, ATL, XSLT"""
    predicted = predictByKNN(job)

    return jsonify(tags = predicted)

@app.route('/', methods=['GET','POST'])
def index():
    if(request.method == 'POST'):
        json = request.get_json()
        return jsonify({'your a value ':json['a']}), 201
    else:
        return jsonify({'your a value ':'undefined'})


