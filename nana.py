from flask import Flask, jsonify
import serial
import threading
import time
import numpy as np

app = Flask(__name__)

# 시리얼 포트 설정 (예: '/dev/ttyUSB0' 또는 '/dev/ttyACM0')
ser = serial.Serial('/dev/ttyUSB0', 9600)
heart_rate_data = []
average_heart_rate = 0

def read_serial_data():
    global heart_rate_data
    while True:
        if ser.in_waiting > 0:
            try:
                data = ser.readline().decode('utf-8').strip()
                heart_rate = int(data)
                heart_rate_data.append(heart_rate)
            except ValueError:
                continue

# 데이터를 수집하고 30초마다 평균을 계산하는 함수
def calculate_average_heart_rate():
    global average_heart_rate, heart_rate_data
    while True:
        time.sleep(30)  # 30초 동안 데이터를 수집
        if heart_rate_data:
            average_heart_rate = np.mean(heart_rate_data)  # 평균 계산
            heart_rate_data = []  # 데이터 초기화

# 시리얼 데이터를 읽는 스레드 시작
threading.Thread(target=read_serial_data, daemon=True).start()
# 평균을 계산하는 스레드 시작
threading.Thread(target=calculate_average_heart_rate, daemon=True).start()

@app.route('/average_heart_rate', methods=['GET'])
def get_average_heart_rate():
    return jsonify({'average_heart_rate': average_heart_rate})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


#라파에서 데이터전송하려명 requests패키지가 필요함
#pip install flask waitress requests
