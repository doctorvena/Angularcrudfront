export class PodaciRow{
    id: number;
    brand: string;
    model: string;
    fuel: string;
    color: string;
    numberOfGears: string;
//  powerKw: number;
//  wheelSize: number;
}

export class PodaciPrikazVM{
    list: PodaciRow[]=[];
    g?: any;
    total: number;
}

