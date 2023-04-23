import os
import openai


class OpenAiService:
    def __init__(self):
        openai.api_key = os.environ.get("OPENAI_API_KEY")

    def get_compilation(self, prompt, optional_params=None):
        data = {
            "model": "text-davinci-003",
            "prompt": prompt,
            "max_tokens": 300,
            "temperature": 0.9,
            "stream": False,
            **(optional_params or {})
        }
        response = openai.Completion.create(**data)
        completion = response.choices[0].text.strip()
        return completion
