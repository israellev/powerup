from flask_restful import Resource
from flask import request
from services.openai import OpenAiService


class OpenAiCompilation(Resource):
    openai_service = OpenAiService()
    def get(self):
        prompt = request.args.get('prompt')
        print(prompt)
        return self.openai_service.get_compilation(prompt)
