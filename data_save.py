from flask import Flask, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# 데이터베이스 초기화
def init_db():
    conn = sqlite3.connect('health_data.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS heart_rate (
            id INTEGER PRIMARY KEY,
            timestamp TEXT,
            heart_rate INTEGER
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/data', methods=['POST'])
def receive_data():
    data = request.json
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    heart_rate = data['heart_rate']

    conn = sqlite3.connect('health_data.db')
    c = conn.cursor()
    c.execute("INSERT INTO heart_rate (timestamp, heart_rate) VALUES (?, ?)", (timestamp, heart_rate))
    conn.commit()
    conn.close()

    return "Data received and stored", 200

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000)


//flask서버에서 라즈베리파이로부터 전송된 데이터를 수신하고
//이를 데이터베이스에 저장