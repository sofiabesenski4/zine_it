from django.test import RequestFactory, TestCase, Client
from uploader.models import Zine, Page

from rest_framework.test import APIRequestFactory, APIClient

class UploaderRequestTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.api_factory = APIRequestFactory()

    def test_api_get_zines(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()

        api_client = APIClient()
        response = api_client.get("/uploader/zines.json")

        self.assertContains(response, "My First Zine")
        
