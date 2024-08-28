from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

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
            print(f"파일을 읽는 중 오류 발생: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    global data_index
    # 데이터를 읽어오기
    read_data()
    if data_list:
        heartbeat = int(data_list[data_index])  # 인덱스에 해당하는 데이터를 반환
        data_index = (data_index + 1) % len(data_list)  # 다음 데이터로 인덱스 이동
    else:
        heartbeat = 80  # 데이터가 없는 경우 기본값
    
    return jsonify({'heartbeat': heartbeat})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
