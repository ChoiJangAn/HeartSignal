from flask import Flask, render_template, jsonify
import threading
import time

app = Flask(__name__)

# 데이터 파일 경로 설정
file_path = 'C:/Users/82109/Desktop/대학/3학년/여름학기/임베디드 소프트웨어 경진대회/output.txt'

# 데이터를 저장할 리스트 생성
data_list = []

def read_data():
    global data_list
    try:
        with open(file_path, 'r') as file:
            data_list = [line.strip() for line in file if line.strip().isdigit()]
    except FileNotFoundError:
        print(f"파일을 찾을 수 없습니다: {file_path}")

# 초기 데이터 읽기
read_data()

def generate_heartbeat():
    global data_list
    while True:
        # 데이터를 읽어와서 새 데이터 리스트를 갱신
        read_data()
        time.sleep(1)  # 1초마다 업데이트

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    # 마지막 데이터를 반환하거나 랜덤으로 생성 (비정상적으로 데이터를 제공)
    if data_list:
        heartbeat = int(data_list[-1])  # 마지막 데이터를 반환
    else:
        heartbeat = 80  # 데이터가 없는 경우 기본값
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    # 데이터 갱신을 위한 스레드 시작
    threading.Thread(target=generate_heartbeat, daemon=True).start()
    app.run(host='0.0.0.0', port=8000)
