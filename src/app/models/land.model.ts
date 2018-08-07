import { Point } from 'angular2-baidu-map';

export interface Land {
    pathlng: string;
    pathlat: string;
    name: string;
    acreage: number;
    nature_of_land: string;
    business_share: string;
    volume_rate: string;
    premium_rate: number;
    owner: string;
    transfer_time: Date;
    final_price: number;
    floor_final_price: number;
    floor_start_price: number;
    start_price: number;
    insurance: number;
    four_bound: string;
    apartment?: Apartment;
}

export interface SR {
    city: string;
    district: string;
    project_name: string;
    project_addr: string;
    implementation_subject: string;
    invest_subject: string;
    project_type: string;
    planned_time: Date;
    lat: string;
    lng: string;
    planned_number: PlannedNumber;
}

export interface PlannedNumber {
    subtotal: number;
    government_purchase: number;
    residents_purchase: number;
    residents_compensation: number;
    resettlement: number;
}

export interface Apartment {
    PRJID: string;
    PRJNAME: string;
    PRJX: string;
    PRJY: string;
    LOCATED: string;
    SELLTELL: string;
    PROPERTYTYPE: string;
    PROPERTYSTATEID: number;
    DAYALL: number;
    PICURL: string;
    OPENDATE: string;
    DISTRICTID: number;
    RESIDEAVANUM: string;
}

