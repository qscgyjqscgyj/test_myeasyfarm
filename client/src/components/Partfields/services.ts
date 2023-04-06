import { Partfield, Soilmap } from './types';

export async function fetchPartfields(): Promise<Partfield[]> {
    const parfieldsResponse = await fetch('/api/v1/partfields');

    return parfieldsResponse.json();
}

export async function fetchSoilmaps(partfield: Partfield): Promise<Soilmap[]> {
    const soilmapsResponse = await fetch(`/api/v1/soilmaps?partfield_id=${partfield.partfield_id}`);

    return soilmapsResponse.json();
}
