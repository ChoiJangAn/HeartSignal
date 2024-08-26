import serial
import requests
import time

# Serial 포트와 통신 설정
ser = serial.Serial('COM4', 9600, timeout=1)  # 포트와 속도는 환경에 맞게 설정

FLASK_URL = 'http://localhost:5000/data'

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').strip()
        if line != '!':  # '!'는 데이터가 아닌 신호일 수 있음
            payload = {"value": line}
            try:
                response = requests.post(FLASK_URL, json=payload)
                print(f"Server response: {response.json()}")
            except Exception as e:
                print(f"Failed to send data: {e}")
    time.sleep(1)  # 1초 간격으로 데이터 읽기
