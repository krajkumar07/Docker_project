from flask import Flask , request ,jsonify
from business import get_data
app=Flask(__name__)

@app.route('/')
def home():
    return "hello world"

@app.route('/api' , methods=['GET'])
def hello():
    data=get_data()
    data={
        'data':data
    }
    return jsonify(data)


if __name__=='__main__':
    app.run(port=8000, debug=True)