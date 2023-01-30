/*
 * Copyright (c) 2022 RainMachine - Green Electronics LLC
 * Author: Nicu Pavel
 * License: MIT
 */

export type Err = {
    isErr: true
    error: unknown
    code: number
}

export function Err(message: string, code: number): Err {
    return { isErr: true, error: message, code: code }
}

export function isErr(err: unknown): err is Err {
    return typeof err === 'object' && err != null && 'isErr' in err
}
