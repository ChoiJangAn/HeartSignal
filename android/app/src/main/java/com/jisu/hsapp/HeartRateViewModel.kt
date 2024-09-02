import androidx.lifecycle.ViewModel
import androidx.lifecycle.liveData
import kotlinx.coroutines.Dispatchers

class HeartRateViewModel : ViewModel() {
  private val retrofit = Retrofit.Builder()
    .baseUrl("http://10.27.18.87:5000")
    .addConverterFactory(GsonConverterFactory.create())
    .build()

  private val api = retrofit.create(HeartRateApi::class.java)

  val heartRateData = liveData(Dispatchers.IO) {
    while (true) {  // 계속해서 데이터를 가져오고 업데이트합니다.
      val response = api.getHeartRate()
      emit(response.heartrate)
      delay(1000)  // 1초마다 갱신
    }
  }
}
