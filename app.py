from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    heartbeat = random.randint(80, 150)  # 요청 시마다 새 값을 생성
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    threading.Thread(target=generate_heartbeat, daemon=True).start()
    app.run(debug=True)
