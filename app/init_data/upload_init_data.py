import json
import os
 
from app.models import PartField, SoilMap

APP_DIR = os.path.abspath(os.path.dirname(__file__))

INIT_DATA_FILES = [
    '1-partfields.json',
    '1-soilmaps.json'
]

def upload_init_data():
    upload_partfields()
    upload_soilmaps()


def upload_partfields():
    partfields = PartField.objects.all()

    if len(partfields) > 0:
        return None
    
    with open(os.path.join(APP_DIR, '1-partfields.json'), "r") as f: 
        data = json.load(f)

        for item in data['items']:
            item['partfield_id'] = item['id']
            del item['id']
            partfield = PartField(**item)
            partfield.save()


def upload_soilmaps():
    soilmaps = SoilMap.objects.all()

    if len(soilmaps) > 0:
        return None

    with open(os.path.join(APP_DIR, '1-soilmaps.json'), "r") as f:
        data = json.load(f)

        for item in data['items']:
            item['soilmap_id'] = item['id']
            del item['id']
            soilmap = SoilMap(**item)
            soilmap.save()
