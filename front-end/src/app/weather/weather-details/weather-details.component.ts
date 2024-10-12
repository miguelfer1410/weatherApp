import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})

export class WeatherDetailsComponent {
  @Input() weatherDetails:any
}
