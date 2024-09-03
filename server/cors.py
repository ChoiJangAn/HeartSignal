from flask_cors import CORS

def init_cors(app):
    # 모든 도메인에서 요청을 허용하는 설정
    CORS(app)
    
    # 특정 도메인만 허용하려면 아래와 같이 설정
    # CORS(app, resources={r"/*": {"origins": "http://example.com"}})
