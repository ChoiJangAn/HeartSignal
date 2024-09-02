package com.jisu.hsapp

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

// Retrofit 인터페이스
interface HeartRateApi {
  @GET("/heartrate")
  suspend fun getHeartRate(): HeartRateResponse
}

// 데이터 클래스
data class HeartRateResponse(val heartrate: Int)

// Retrofit 설정
val retrofit = Retrofit.Builder()
  .baseUrl("http://10.27.18.87:5000")  // 라즈베리파이의 IP 주소
  .addConverterFactory(GsonConverterFactory.create())
  .build()

val api = retrofit.create(HeartRateApi::class.java)
