from django.test import RequestFactory, TestCase
from uploader.models import Zine, Page
from uploader.views import PageIndexView

class UploaderRequestTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

    def test_details(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()

        page = Page(index=1, zine=my_first_zine).save()

        # Create an instance of a GET request.
        request = self.factory.get("/uploader/pages")

        # Use this syntax for class-based views.
        response = PageIndexView.as_view()(request)
        self.assertEqual(response.status_code, 200)
        
        self.assertEqual(Zine.objects.filter(name="My First Zine").exists(), True)

