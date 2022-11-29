/*
 * Copyright (c) 2022 RainMachine - Green Electronics LLC
 * Author: Nicu Pavel
 * License: MIT
 */

export interface WeatherKitResponse {
    currentWeather?: CurrentWeather
    forecastDaily?: ForecastDaily
    forecastHourly?: ForecastHourly
}

export interface CurrentWeather {
    name: string
    metadata: Metadata
    asOf: string
    cloudCover: number
    conditionCode: string
    daylight: boolean
    humidity: number
    precipitationIntensity: number
    pressure: number
    pressureTrend: string
    temperature: number
    temperatureApparent: number
    temperatureDewPoint: number
    uvIndex: number
    visibility: number
    windDirection: number
    windGust: number
    windSpeed: number
}

export interface Metadata {
    attributionURL: string
    expireTime: string
    latitude: number
    longitude: number
    readTime: string
    reportedTime: string
    units: string
    version: number
}

export interface ForecastDaily {
    name: string
    metadata: Metadata
    days: Day[]
}

export interface Day {
    forecastStart: string
    forecastEnd: string
    conditionCode: string
    maxUvIndex: number
    moonPhase: string
    moonrise?: string
    moonset: string
    precipitationAmount: number
    precipitationChance: number
    precipitationType: string
    snowfallAmount: number
    solarMidnight: string
    solarNoon: string
    sunrise: string
    sunriseCivil: string
    sunriseNautical: string
    sunriseAstronomical: string
    sunset: string
    sunsetCivil: string
    sunsetNautical: string
    sunsetAstronomical: string
    temperatureMax: number
    temperatureMin: number
    daytimeForecast: DaytimeForecast
    overnightForecast: OvernightForecast
    restOfDayForecast?: RestOfDayForecast
}

export interface DaytimeForecast {
    forecastStart: string
    forecastEnd: string
    cloudCover: number
    conditionCode: string
    humidity: number
    precipitationAmount: number
    precipitationChance: number
    precipitationType: string
    snowfallAmount: number
    windDirection: number
    windSpeed: number
}

export interface OvernightForecast {
    forecastStart: string
    forecastEnd: string
    cloudCover: number
    conditionCode: string
    humidity: number
    precipitationAmount: number
    precipitationChance: number
    precipitationType: string
    snowfallAmount: number
    windDirection: number
    windSpeed: number
}

export interface RestOfDayForecast {
    forecastStart: string
    forecastEnd: string
    cloudCover: number
    conditionCode: string
    humidity: number
    precipitationAmount: number
    precipitationChance: number
    precipitationType: string
    snowfallAmount: number
    windDirection: number
    windSpeed: number
}

export interface ForecastHourly {
    name: string
    metadata: Metadata
    hours: Hour[]
}

export interface Hour {
    forecastStart: string
    cloudCover: number
    conditionCode: string
    daylight: boolean
    humidity: number
    precipitationAmount: number
    precipitationIntensity: number
    precipitationChance: number
    precipitationType: string
    pressure: number
    pressureTrend: string
    snowfallIntensity: number
    snowfallAmount: number
    temperature: number
    temperatureApparent: number
    temperatureDewPoint: number
    uvIndex: number
    visibility: number
    windDirection: number
    windGust: number
    windSpeed: number
}
