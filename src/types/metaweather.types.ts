export interface MetaResponse {
    data:MetaLocation[]
}

export interface MetaLocation {
    distance: number
    latt_long:string;
    location_type:string;
    title:string;
    woeid: number
}
