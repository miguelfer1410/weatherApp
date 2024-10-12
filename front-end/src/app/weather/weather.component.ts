import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule, WeatherDetailsComponent, WeatherForecastComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  city : string = 'Porto';
  weatherData: any = {};
  weatherForecast : any = {};

  constructor(private weatherService: WeatherService) {
    this.getData();
  }

  getData(){
    this.getWeather();
    this.getForecast();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    });
  }

  getForecast(){
    this.weatherService.getForecast(this.city).subscribe(data =>{
      this.weatherForecast = data;
    });
  }

}
