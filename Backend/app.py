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
    # Listen on all interfaces so the app is reachable from containers and map to port 5000
    app.run(host='0.0.0.0', port=5000, debug=True)