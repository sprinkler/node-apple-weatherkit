export type Err = {
    isErr: true
    error: unknown
}

export function Err(message: string): Err {
    return { isErr: true, error: message }
}

export function isErr(err: unknown): err is Err {
    return typeof err === 'object' && err != null && 'isErr' in err
}
