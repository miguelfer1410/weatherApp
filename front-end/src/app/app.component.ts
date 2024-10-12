import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VotesComponent } from './votes/votes.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule, WeatherComponent, CommonModule],
})

export class AppComponent {
  title = 'Votes';

  http = inject(HttpClient)
}
