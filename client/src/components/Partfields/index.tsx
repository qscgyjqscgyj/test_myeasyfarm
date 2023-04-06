import { GoogleMap, Polygon } from '@react-google-maps/api';

import { ActivePartField } from './ActivePartfield';
import { usePartfields } from './hooks';
import './styles.css';

export function Partfields() {
    const {
        partfields,
        activePartfield,
        soilmaps,
        center,
        isMapLoaded,
        getPartfieldPath,
        getSoilmapFeaturePath,
        onPartfieldClick,
        onResetPartfield,
    } = usePartfields();

    return (
        <div className="partfieldsWrapper">
            {activePartfield ? (
                <ActivePartField
                    activePartfield={activePartfield}
                    soilmaps={soilmaps}
                    onResetPartfield={onResetPartfield}
                />
            ) : null}

            {isMapLoaded ? (
                <div>
                    <GoogleMap
                        mapContainerStyle={{
                            width: activePartfield ? '80vw' : '100vw',
                            height: '100vh',
                        }}
                        center={center}
                        options={{
                            disableDefaultUI: true,
                            mapTypeId: 'satellite',
                            zoom: activePartfield ? 17 : 15,
                        }}
                    >
                        <>
                            {partfields.map((partfield) => {
                                return (
                                    <Polygon
                                        key={partfield.partfield_id}
                                        path={getPartfieldPath(partfield)}
                                        onClick={() => onPartfieldClick(partfield)}
                                        options={{
                                            fillColor: `#${partfield.color_hex}`,
                                            strokeColor: `#${partfield.color_hex}`,
                                            strokeWeight: 1,
                                            fillOpacity: 0.5,
                                            zIndex: 1,
                                            visible: !(
                                                activePartfield?.partfield_id ===
                                                    partfield.partfield_id && soilmaps?.length > 0
                                            ),
                                        }}
                                    />
                                );
                            })}

                            {soilmaps.map((soilmap, soilmapIndex) => {
                                return soilmap.mapdata.features.map((feature, featureIndex) => {
                                    return (
                                        <Polygon
                                            key={`${feature.properties.id}`}
                                            path={getSoilmapFeaturePath(feature)}
                                            options={{
                                                fillColor: `${feature.properties.color}`,
                                                strokeColor: `${feature.properties.color}`,
                                                strokeWeight: 1,
                                                fillOpacity: 1,
                                                zIndex: (soilmapIndex + 1) * featureIndex + 2,
                                            }}
                                        />
                                    );
                                });
                            })}
                        </>
                    </GoogleMap>
                </div>
            ) : null}
        </div>
    );
}
