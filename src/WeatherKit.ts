import jwt from 'jsonwebtoken'
import { WeatherEndpoint, AvailabilityEndpoint } from './api/endpoints'

export interface WeatherKitAuth {
    teamId: string
    serviceId: string
    keyId: string
    key: string | Buffer
    expireTime?: number
}

export class WeatherKit {
    private readonly token: string

    constructor(protected readonly options: WeatherKitAuth) {
        this.token = this.encodeJWT(options)
    }

    get jwt(): string {
        return this.token
    }

    get availability(): AvailabilityEndpoint {
        return new AvailabilityEndpoint(this.token)
    }

    get weather(): WeatherEndpoint {
        return new WeatherEndpoint(this.token)
    }

    private encodeJWT(options: WeatherKitAuth): string {
        const now: Date = new Date()
        const currentTime = (now.getTime() / 1000) >> 0

        if (!options.expireTime) {
            options.expireTime = now.setFullYear(now.getFullYear() + 1)
        }

        const payload = {
            iss: options.teamId,
            iat: currentTime,
            exp: options.expireTime,
            sub: options.serviceId,
        }

        const headers = {
            alg: 'ES256',
            kid: options.keyId,
            id: options.teamId + '.' + options.serviceId,
        }

        return jwt.sign(payload, options.key, {
            algorithm: 'ES256',
            header: { ...headers },
        })
    }
}
