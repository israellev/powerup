from flask import Flask
from flask_restful import Api
from interceptors.request_interceptor import RequestInterceptor
from pathlib import Path
from api.base import Front
from api.gpt import OpenAiCompilation
front_folder = f'{Path().parent.resolve()}/client/build'
print(front_folder)
app = Flask(
    __name__,
    static_url_path='/',
    static_folder=front_folder,
    template_folder=front_folder,
)
api = Api(app)
api.add_resource(Front, '/')
api.add_resource(OpenAiCompilation, '/api/complication')
app.before_request(RequestInterceptor.before_request)
app.after_request(RequestInterceptor.after_request)

if __name__ == '__main__':
    app.run(debug=True)
