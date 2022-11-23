import { BaseEndpoint } from './Base'
import { DataSet, Err } from '../../types'

const ENDPOINT_PATH = '/availability'

export class AvailabilityEndpoint extends BaseEndpoint {
    constructor(protected readonly accessToken: string) {
        super(accessToken)
    }

    async get(lat: number, lon: number): Promise<DataSet[] | Err> {
        return await this.api.get<DataSet[] | Err>(`${ENDPOINT_PATH}/${lat}/${lon}`)
    }
}
