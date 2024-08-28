from flask import Flask, render_template, jsonify
import threading
import time

app = Flask(__name__)

# 데이터 파일 경로 설정
file_path = 'C:\\Users\\chldu\\OneDrive\\바탕 화면\\HEARTSIGNAL\\HeartSignal\\output.txt'

# 데이터를 저장할 리스트 생성
data_list = []
data_index = 0  # 현재 데이터를 가리키는 인덱스

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
    global data_index, data_list
    while True:
        if data_list:
            data_index = (data_index + 1) % len(data_list)  # 다음 데이터를 가리키도록 인덱스를 순환시킴
        time.sleep(1)  # 1초마다 인덱스를 갱신

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    global data_index
    # 현재 인덱스의 데이터를 반환
    if data_list:
        heartbeat = int(data_list[data_index])  # 인덱스에 해당하는 데이터를 반환
    else:
        heartbeat = 80  # 데이터가 없는 경우 기본값
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    # 데이터 갱신을 위한 스레드 시작
    threading.Thread(target=generate_heartbeat, daemon=True).start()
    app.run(host='0.0.0.0', port=8000)
