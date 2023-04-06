import { useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GOOGLE_MAPS_API_KEY } from 'src/services/google';

import { fetchPartfields, fetchSoilmaps } from './services';
import { Partfield, Soilmap, SoilmapFeature } from './types';

export function usePartfields() {
    const [partfields, setPartfields] = useState<Partfield[]>([]);
    const [activePartfield, setActivePartfield] = useState<Partfield | undefined>();
    const [soilmaps, setSoilmaps] = useState<Soilmap[]>([]);

    const { isLoaded: isMapLoaded } = useJsApiLoader({
        id: 'google-map-script',
        libraries: ['places', 'geometry'],
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    const getPartfieldPath = (partfield: Partfield) => {
        return partfield.boundaries.coordinates[0][0].map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
        });
    };

    const getSoilmapFeaturePath = (feature: SoilmapFeature) => {
        return feature.geometry.coordinates[0][0].map((coordinate) => {
            return { lat: coordinate[1], lng: coordinate[0] };
        });
    };

    useEffect(() => {
        fetchPartfields().then((json) => setPartfields(json));
    }, []);

    const getAverageCenter = useCallback((coords: [number, number][]) => {
        if (coords.length === 0) return { lat: 0, lng: 0 };

        let sumLat = 0;
        let sumLng = 0;

        for (const coord of coords) {
            sumLng += coord[0];
            sumLat += coord[1];
        }

        return { lat: sumLat / coords.length, lng: sumLng / coords.length };
    }, []);

    const center = useMemo(() => {
        if (!activePartfield) {
            return getAverageCenter(partfields.map((partfield) => partfield.center));
        }

        return { lat: activePartfield.center[1], lng: activePartfield.center[0] };
    }, [partfields, activePartfield?.partfield_id]);

    const onPartfieldClick = useCallback((partfield: Partfield) => {
        if (partfield.partfield_id !== activePartfield?.partfield_id) {
            fetchSoilmaps(partfield).then((json) => {
                setActivePartfield(partfield);
                setSoilmaps(json);
            });
        }
    }, []);

    const onResetPartfield = useCallback(() => {
        setActivePartfield(undefined);
        setSoilmaps([]);
    }, []);

    return {
        partfields,
        activePartfield,
        soilmaps,
        center,
        isMapLoaded,
        getPartfieldPath,
        getSoilmapFeaturePath,
        onPartfieldClick,
        onResetPartfield,
        setPartfields,
    };
}
