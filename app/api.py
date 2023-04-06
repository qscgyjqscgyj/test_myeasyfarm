from flask import jsonify, request

from app import app
from app.models import PartField, SoilMap


@app.route('/api/v1/partfields', methods=['GET'])
def partfields():
    partfields = PartField.objects.all()
    return jsonify(partfields)


@app.route('/api/v1/soilmaps', methods=['GET'])
def soilmaps():
    partfield_id = request.args.get('partfield_id')

    soilmaps = SoilMap.objects.filter(partfield_id=partfield_id)
    return jsonify(soilmaps)
