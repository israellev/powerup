from flask import send_from_directory
from flask_restful import Resource


class Front(Resource):
    def get(self):
        headers = {'Content-Type': 'text/html'}
        a = send_from_directory("./client/build", "index.html")
        print(a)
        return a
