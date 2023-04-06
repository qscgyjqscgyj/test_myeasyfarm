import { Partfield, Soilmap } from 'src/components/Partfields/types';

interface ActivePartFieldProps {
    activePartfield: Partfield;
    soilmaps: Soilmap[];
    onResetPartfield: () => void;
}

export function ActivePartField(props: ActivePartFieldProps) {
    const { activePartfield, soilmaps, onResetPartfield } = props;

    return (
        <div className="activePartfieldBlock">
            <p>Active field: {activePartfield.partfield_id}</p>

            <div>
                <button className="greenButton" onClick={onResetPartfield}>
                    Reset field
                </button>
            </div>

            {soilmaps.map((soilmap) => {
                return (
                    <div>
                        <p>{soilmap.name}</p>

                        {soilmap.mapdata.features.map((feature) => {
                            return (
                                <div
                                    key={feature.properties.id}
                                    className="activePartfieldBlock__item"
                                >
                                    <div
                                        className="activePartfieldBlock__item__color"
                                        style={{ backgroundColor: `${feature.properties.color}` }}
                                    />
                                    <div className="activePartfieldBlock__item__text">
                                        {feature.properties.analysis}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
