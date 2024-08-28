from flask import Flask, render_template, jsonify
import logging
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
                # 데이터를 읽어 숫자인 경우에만 리스트에 추가하고, 3으로 나눔
                data_list = [int(line.strip()) // 3 for line in file if line.strip().isdigit()]
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
        heartbeat = data_list[data_index]
        logging.debug(f"Returning heartbeat value: {heartbeat}")
        data_index = (data_index + 1) % len(data_list)
    else:
        heartbeat = 80  # 데이터가 없는 경우 기본값 80
        logging.debug(f"No data found. Returning default heartbeat value: {heartbeat}")
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
