// 심박수 데이터를 표시할 HTML 요소 가져오기
const heartRateElement = document.getElementById('heart-rate');
const warningMessageElement = document.getElementById('warning-message');

// 임의로 심박수 데이터를 생성하는 함수 (테스트용)
function getHeartRate() {
    // 60에서 120 사이의 임의의 심박수 생성
    return Math.floor(Math.random() * (120 - 60 + 1)) + 60;
}

// 실시간으로 데이터를 업데이트하는 함수
function updateHeartRate() {
    // 심박수 데이터 가져오기
    const heartRate = getHeartRate();

    // HTML 요소에 심박수 데이터 표시
    heartRateElement.textContent = `${heartRate} BPM`;

    // 심박수가 100 BPM을 초과하면 경고 메시지 표시
    if (heartRate > 100) {
        warningMessageElement.style.display = 'block';
    } else {
        warningMessageElement.style.display = 'none';
    }
}

// 매초마다 심박수 업데이트
setInterval(updateHeartRate, 1000);
