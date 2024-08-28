from flask import Flask, render_template, jsonify
import logging  # 로깅 모듈을 추가합니다
import os

app = Flask(__name__)

# 로깅 설정
logging.basicConfig(level=logging.DEBUG)  # 디버깅 수준으로 로깅 설정

# 데이터 파일 경로 설정
file_path = 'C:\\Users\\chldu\\OneDrive\\바탕 화면\\HEARTSIGNAL\\HeartSignal\\output.txt'

# 데이터를 저장할 리스트 생성
data_list = []
data_index = 0  # 현재 데이터를 가리키는 인덱스

def read_data():
    global data_list
    if os.path.exists(file_path):
        try:
            with open(file_path, 'r') as file:
                data_list = [line.strip() for line in file if line.strip().isdigit()]
        except Exception as e:
            logging.error(f"파일을 읽는 중 오류 발생: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    global data_index
    read_data()
    if data_list:
        heartbeat = int(data_list[data_index])
        logging.debug(f"Returning heartbeat value: {heartbeat}")
        data_index = (data_index + 1) % len(data_list)
    else:
        heartbeat = 80
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
