from flask import send_from_directory
from flask_restful import Resource


class Front(Resource):
    def get(self):
        return send_from_directory("./client/build", "index.html")

