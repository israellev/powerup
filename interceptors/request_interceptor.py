import time
from flask import request, g
import json
import logging
logging.basicConfig(level=logging.INFO)


class RequestInterceptor:
    logger = logging.getLogger("RequestInterceptor")

    @staticmethod
    def before_request():
        # Log request method, URL, headers, and parameters
        RequestInterceptor.logger.info(f"Request Method: {request.method}")
        RequestInterceptor.logger.info(f"Request URL: {request.url}")
        RequestInterceptor.logger.info(f"Request Headers: {dict(request.headers)}")
        RequestInterceptor.logger.info(f"Request Query Parameters: {request.args}")
        RequestInterceptor.logger.info(f"Request Body Parameters: {request.get_json(force=True, silent=True)}")
        g.request_start_time = time.time()

    @staticmethod
    def after_request(response):
        # Calculate request duration
        request_duration = time.time() - g.request_start_time
        RequestInterceptor.logger.info(f"Request Duration: {request_duration:.4f} seconds")
        # Log response status, headers, and body
        RequestInterceptor.logger.info(f"Response Status: {response.status}")
        RequestInterceptor.logger.info(f"Response Headers: {dict(response.headers)}")
        try:
            response_json = json.loads(response.get_data(as_text=True))
            RequestInterceptor.logger.info(f"Response Body: {response_json}")
        except Exception as e:
            RequestInterceptor.logger.info(f"Response Body: Not a JSON response")
        return response
