import { BaseEndpoint } from './Base'
import { QueryParams, Err } from '../../types'
import { WeatherKitResponse } from '../../types'

const ENDPOINT_PATH = '/weather'

const DEFAULT_PARAMS: QueryParams = {
    timezone: 'Etc/UTC',
    dataSets: ['currentWeather', 'forecastDaily'],
}

export class WeatherEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken)
    }

    async get(lat: number, lon: number, params = DEFAULT_PARAMS, lang = 'en'): Promise<WeatherKitResponse | Err> {
        return await this.api.get<WeatherKitResponse | Err>(`${ENDPOINT_PATH}/${lang}/${lat}/${lon}`, params)
    }
}
