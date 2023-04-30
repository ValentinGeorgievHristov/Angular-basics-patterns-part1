export interface Ng4Model {

    name: string
    date: string
    time: string
    location: {
        address?: string
        city?: string
        country?: string
    }
    // sessions: ISessions[]
}