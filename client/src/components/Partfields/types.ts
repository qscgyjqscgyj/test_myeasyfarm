export interface Partfield {
    _id: { $oid: string };
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    partfield_id: string;
    parent_id: string;
    designator: string;
    external_id: string;
    color: number;
    color_hex: string;
    farm_id: number;
    customer_id: number;
    account_id: number;
    specified_area: number;
    calculated_area: number;
    crop_id: number;
    crop_variety_id: number;
    soil: string;
    year: string;
    center: [number, number];
    boundaries: {
        type: string;
        coordinates: [[[[number, number]]]];
    };
    soil_type_id: string;
    geometries: [];
    options: [];
}

export type SoilmapFeature = {
    type: string;
    geometry: {
        type: string;
        coordinates: [[[[number, number]]]];
    };
    properties: {
        id: string;
        analysis: string;
        color: string;
    };
};

export interface Soilmap {
    _id: { $oid: string };
    soilmap_id: string;
    account_id: string;
    comment: string;
    created_at: string;
    import_status: string;
    is_hidden: boolean;
    mapdata: {
        features: SoilmapFeature[];
    };
    name: string;
    origin_id: string;
    partfield_id: string;
    source: { type: string };
    task_id: string;
    type_id: number;
    updated_at: string;
    year: string;
    metadata?: {};
}
