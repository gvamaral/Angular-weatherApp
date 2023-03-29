import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  cachedResponse = '';

  getWeatherByLocation(location: string){
    return this.http.get<any>(
      `https://wttr.in/${location}?format=j1`
    );
  }
  // https://wttr.in/Lehi?format=j1
}
