/*
 * Copyright (c) 2022 RainMachine - Green Electronics LLC
 * Author: Nicu Pavel
 * License: MIT
 */

export type DataSet = 'currentWeather' | 'forecastDaily' | 'forecastHourly' | 'forecastNextHour' | 'weatherAlerts'

export interface QueryParams {
    countryCode?: string
    currentAsOf?: Date
    dailyEnd?: Date
    dailyStart?: Date
    hourlyEnd?: Date
    hourlyStart?: Date
    dataSets?: DataSet[]
    timezone?: string | 'Etc/UTC'
}