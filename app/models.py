from . import db


class PartField(db.Document):
    partfield_id = db.StringField(required=True, unique=True)
    parent_id = db.StringField(max_length=60)
    created_at = db.DateTimeField()
    updated_at = db.DateTimeField()
    designator = db.StringField()
    description = db.StringField()
    external_id = db.StringField()
    color = db.IntField()
    color_hex = db.StringField()
    farm_id = db.IntField()
    customer_id = db.IntField()
    account_id = db.StringField()
    specified_area = db.StringField()
    calculated_area = db.FloatField()
    crop_id = db.IntField()
    crop_variety_id = db.IntField()
    soil = db.StringField()
    year = db.StringField()
    center = db.ListField(db.FloatField())
    boundaries = db.DictField()
    soil_type_id = db.StringField()
    geometries = db.ListField()
    options = db.ListField()

    def __unicode__(self):
        return self.designator

    def __repr__(self):
        return self.designator


class SoilMap(db.Document):
    soilmap_id = db.StringField(required=True, unique=True)
    account_id = db.StringField()
    comment = db.StringField()
    created_at = db.DateTimeField()
    import_status = db.StringField()
    is_hidden = db.BooleanField()
    mapdata = db.DictField()
    metadata = db.DictField()
    name = db.StringField()
    origin_id = db.StringField()
    partfield_id = db.StringField()
    source = db.DictField()
    task_id = db.StringField()
    type_id = db.IntField()
    updated_at = db.DateTimeField()
    year = db.StringField()

    def __unicode__(self):
        return self.name

    def __repr__(self):
        return self.name
