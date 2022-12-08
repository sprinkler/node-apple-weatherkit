# Apple WeatherKit for node.js

Allows fetching weather data using Apple WeatherKit API.

# Using
```
import * as fs from 'fs'
import WeatherKit from 'node-apple-weatherkit'
import { WeatherKitAuth, DataSet, Err, isErr, WeatherKitResponse } from 'node-apple-weatherkit'

;(async () => {

    // Read the key from file. Can be also assigned inline
    const key = fs.readFileSync('key/AuthKey_APPLEKEYID.p8')

    const defaultAuth: WeatherKitAuth = {
        teamId: 'APPLETEAMID',
        serviceId: 'com.example.weather',
        keyId: 'APPLEKEYID',
        key: key,
    }

    const location = {
        lat: 29.42,
        lon: -81.93
    }

    const wk = new WeatherKit(defaultAuth)
    const availability: DataSet[] | Err = await wk.availability.get(location.lat, location.lon)

    if (!isErr(availability)) {
        const weather: WeatherKitResponse | Err = await wk.weather.get(location.lat, location.lon, { dataSets: availability })
        if (!isErr(weather)) {
            console.log(weather.forecastDaily?.days[0].temperatureMin)
        }
    } else {
        console.log('Cannot get location available datasets')
    }
})()
```



