import fetch from 'cross-fetch'

import { QueryParams, Err } from '../types'

const BASE_URL_V1 = 'https://weatherkit.apple.com/api/v1'

export default class Api {
    constructor(private accessToken: string) {
        this.accessToken = accessToken
    }

    async get<T>(path: string, params?: QueryParams): Promise<T | Err> {
        const queryParams = params ? new URLSearchParams(this.convertParams(params)).toString() : ''
        const url = `${BASE_URL_V1}${path}?${queryParams}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })

        if (response.status >= 400) {
            return Err(`API Fail for ${url}`)
        }

        return (await response.json()) as T
    }

    private convertParams(params: QueryParams): Record<string, string> {
        if (!params) return {}

        const records: Record<string, string> = {}

        let val
        for (const k in params) {
            switch (k) {
                case 'currentAsOf':
                case 'dailyEnd':
                case 'dailyStart':
                case 'hourlyEnd':
                case 'hourlyStart':
                    val = params[k]?.toISOString()
                    break
                case 'dataSets':
                    val = params[k]?.join(',')
                    break
                default:
                    val = params[k as keyof QueryParams]
            }
            if (val) {
                records[k] = val as string
            }
        }

        return records
    }
}
