'''
Created on Feb 13, 2012

@author: Rahul
'''
from flask import Flask
import time
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
    
if __name__ == "__main__":
    app.run()