from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to the Heart Rate Data API!"

# 심박도 데이터를 저장할 리스트
heart_rate_data = []

@app.route('/upload', methods=['POST'])
def upload_data():
    data = request.json
    if 'heart_rate' in data and 'timestamp' in data:
        heart_rate_data.append(data)
        return jsonify({"status": "success"}), 200
    else:
        return jsonify({"status": "fail", "reason": "invalid data"}), 400

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(heart_rate_data), 200

if __name__ == '__main__':
    from waitress import serve
    serve(app, host='0.0.0.0', port=5000)
