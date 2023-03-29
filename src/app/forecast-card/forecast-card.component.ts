import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent {
  constructor(private weatherApiService: WeatherApiService){}
  weatherResponse: string | undefined;
  showLoading = false;
  locationString = '';
  weatherDesc = '';
  FeelsLikeF = '';
  FeelsLikeC = '';
  areaName = '';
  country = '';
  region = '';
  hourlyArray?: any[];
  weatherName = '';
  weatherSymbol = '';

  WWO_CODE: any = {
    "113": "Sunny",
    "116": "PartlyCloudy",
    "119": "Cloudy",
    "122": "VeryCloudy",
    "143": "Fog",
    "176": "LightShowers",
    "179": "LightSleetShowers",
    "182": "LightSleet",
    "185": "LightSleet",
    "200": "ThunderyShowers",
    "227": "LightSnow",
    "230": "HeavySnow",
    "248": "Fog",
    "260": "Fog",
    "263": "LightShowers",
    "266": "LightRain",
    "281": "LightSleet",
    "284": "LightSleet",
    "293": "LightRain",
    "296": "LightRain",
    "299": "HeavyShowers",
    "302": "HeavyRain",
    "305": "HeavyShowers",
    "308": "HeavyRain",
    "311": "LightSleet",
    "314": "LightSleet",
    "317": "LightSleet",
    "320": "LightSnow",
    "323": "LightSnowShowers",
    "326": "LightSnowShowers",
    "329": "HeavySnow",
    "332": "HeavySnow",
    "335": "HeavySnowShowers",
    "338": "HeavySnow",
    "350": "LightSleet",
    "353": "LightShowers",
    "356": "HeavyShowers",
    "359": "HeavyRain",
    "362": "LightSleetShowers",
    "365": "LightSleetShowers",
    "368": "LightSnowShowers",
    "371": "HeavySnowShowers",
    "374": "LightSleetShowers",
    "377": "LightSleet",
    "386": "ThunderyShowers",
    "389": "ThunderyHeavyRain",
    "392": "ThunderySnowShowers",
    "395": "HeavySnowShowers",
  }
  WEATHER_SYMBOL: any = {
    "Unknown":             "✨",
    "Cloudy":              "☁️",
    "Fog":                 "🌫",
    "HeavyRain":           "🌧",
    "HeavyShowers":        "🌧",
    "HeavySnow":           "❄️",
    "HeavySnowShowers":    "❄️",
    "LightRain":           "🌦",
    "LightShowers":        "🌦",
    "LightSleet":          "🌧",
    "LightSleetShowers":   "🌧",
    "LightSnow":           "🌨",
    "LightSnowShowers":    "🌨",
    "PartlyCloudy":        "⛅️",
    "Sunny":               "☀️",
    "ThunderyHeavyRain":   "⛈️",
    "ThunderyShowers":     "⛈",
    "ThunderySnowShowers": "⛈",
    "VeryCloudy": "☁️",
  }

  // Font Awesome icons
  faSun = faSun;

  getWeather(location: string) {
    this.weatherDesc = '';
    this.showLoading = true;
    this.weatherApiService.getWeatherByLocation(location)
    .subscribe((res: any) => {
      this.showLoading = false;
      this.weatherResponse = res;
      this.weatherDesc = res.current_condition[0].weatherDesc[0].value;
      this.FeelsLikeF = res.current_condition[0].FeelsLikeF;
      this.FeelsLikeC = res.current_condition[0].FeelsLikeC;
      this.areaName = res.nearest_area[0].areaName[0].value;
      this.country = res.nearest_area[0].country[0].value;
      this.region = res.nearest_area[0].region[0].value;
      let wCode: any = res.current_condition[0].weatherCode;
      this.weatherName = this.WWO_CODE[wCode];
      this.weatherSymbol = this.WEATHER_SYMBOL[this.weatherName];
      this.hourlyArray = res.weather[0].hourly;
      console.log(res);
    })
  }
}
