import os
import serial
import logging
from flask import Flask, render_template, jsonify

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# 환경 변수로 시리얼 포트 설정
if os.getenv('FLASK_ENV') == 'development':
    try:
        ser = serial.Serial('COM7', 9600)
    except Exception as e:
        logging.error(f"시리얼 포트 연결 오류: {e}")
        ser = None
else:
    ser = None  # 배포 환경에서는 시리얼 포트를 사용하지 않음

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    heartbeat = '!'  # 기본값을 '!'로 설정

    if ser:
        try:
            if ser.in_waiting > 0:
                line = ser.readline().decode('utf-8').strip()
                logging.debug(f"시리얼에서 읽은 데이터: {line}")

                if line.isdigit():  # 숫자인 경우만 심박도로 처리
                    heartbeat = int(line) // 3
                else:
                    heartbeat = '!'  # 리드 오프 상태를 나타냄

        except Exception as e:
            logging.error(f"시리얼 통신 오류: {e}")

    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
