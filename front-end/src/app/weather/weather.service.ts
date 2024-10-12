import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://localhost:5000/api/weather';

  constructor(private http:HttpClient){}

  getWeather(city:string) {
    return this.http.get(`${this.apiUrl}?city=${city}`)
  }

  getForecast(city:string) {
    return this.http.get(`${this.apiUrl}/forecast?city=${city}`)
  }

}
