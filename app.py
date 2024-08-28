from flask import Flask, render_template, jsonify
import logging
import random
import os

app = Flask(__name__)

# 로깅 설정
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

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
            logging.debug(f"파일에서 읽은 데이터: {data_list}")
        except Exception as e:
            logging.error(f"파일을 읽는 중 오류 발생: {e}")
    else:
        logging.error(f"파일을 찾을 수 없습니다: {file_path}")

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
        heartbeat = random.randint(70, 150)  # 랜덤 값을 70에서 150 사이로 변경
        logging.debug(f"No data found. Returning random heartbeat value: {heartbeat}")
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
