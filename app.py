import serial
import requests
import time

# Serial 포트와 Baud Rate 설정
ser = serial.Serial('COM4', 9600)  # COM 포트는 실제 포트에 맞게 조정해야 합니다.

while True:
    try:
        # Serial 데이터 읽기
        line = ser.readline().decode('utf-8').strip()
        bpm = int(line)

        # Flask 서버에 데이터 전송
        response = requests.post('http://127.0.0.1:5000/update_bpm', json={'bpm': bpm})
        
        # 서버 응답 확인
        print(response.json())

    except Exception as e:
        print(f"Error: {e}")

    time.sleep(1)  # Adjust the sleep time if needed
