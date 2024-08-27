from flask import Flask, render_template, jsonify
import random
import threading
import time

app = Flask(__name__)

# 전역 변수
heartbeat = 80

def generate_heartbeat():
    global heartbeat
    while True:
        heartbeat = random.randint(80, 150)
        time.sleep(1)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    # 쓰레드를 사용하여 심박도 생성
    threading.Thread(target=generate_heartbeat, daemon=True).start()
    app.run(host='0.0.0.0', port=8000)
