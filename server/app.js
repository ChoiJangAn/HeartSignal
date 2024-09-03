const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // CORS 미들웨어 추가
// 다른 미들웨어와 라우터 설정...
