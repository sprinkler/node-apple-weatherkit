import { WeatherKitAuth, WeatherKit } from '../src/WeatherKit'
import { DataSet, Err, isErr, WeatherKitResponse } from '../src/types'

const key = `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEICXoLhGdD6jzX5ePTY9O9YBgv0ZZ6oBWDRsjKaeASXp6oAoGCCqGSM49
AwEHoUQDQgAELCnuRSU9Vf+bx65i3Vbibj123RQFrIEaXuMuXunzPXGURKge07fy
FoiMucdGZ2MZGsm37JdlnVGd5yU1h4D4Rg==
-----END EC PRIVATE KEY-----`

const defaultAuth: WeatherKitAuth = {
    teamId: 'APPLETEAMID',
    serviceId: 'com.example.weather',
    keyId: 'APPLEKEYID',
    key: key,
}

const location = {
    lat: 10,
    lon : 10
}

let wk : WeatherKit

beforeAll(() => { wk = new WeatherKit(defaultAuth)})

test('init', () => {
    expect(wk).toBeDefined()
})

test('jwt', () => {
  expect(wk.jwt).toBeDefined()
})

test('API /availability', async () => {
    const availability: DataSet[] | Err = await wk.availability.get(location.lat, location.lon)
    expect(isErr(availability)).toBe(true)
})

test('API /weather', async () => {
    const weather: WeatherKitResponse | Err = await wk.weather.get(location.lat, location.lon)
    expect(isErr(weather)).toBe(true)
})

