from flask import Flask

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Hi vishalini'

@app.route("/calculator/add", methods=['POST'])
def add():
    a=int(input())
    b=int(input())
    c=a+b
    return c

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    a=int(input())
    b=int(input())
    c=a-b
    return c

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
