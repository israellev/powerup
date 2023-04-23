from flask_restful import Resource
from flask import request
from services.openai import OpenAiService


class OpenAiCompilation(Resource):
    openai_service = OpenAiService()

    def get(self):
        name = request.args.get('name')
        country = request.args.get('country')
        role = request.args.get('role')
        expertise = request.args.get('expertise').split(",")
        hobbies = request.args.get('hobbies').split(",")
        additional = request.args.get('additional')
        prompt = f"Please a create nice creative and unique 'About Me' description for a professional social network within the organization, a description based on the information the user has entered attached here."
        styles = [
            "Please create it in a professional style.",
            "Please create it in a free and inviting style with 1 or 2 emoji.",
            "Please create it with humor.",
        ]
        all_details = f"User details: \nname: ${name}\ncountry: {country}\nrole: {role}\nexpertise: {expertise}\nhobbies: {hobbies}\nadditional info: {additional}\n."
        print('prompt: ', prompt, all_details)
        response = []
        for style in styles:
            response.append(self.openai_service.get_compilation(f'{prompt}\n{style}\n{all_details}'))
        print('GPT response: ', response)
        return response
