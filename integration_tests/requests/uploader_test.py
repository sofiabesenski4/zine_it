from django.test import RequestFactory, TestCase, Client
from uploader.models import Zine, Page
from uploader.views import PageIndexView, PageCreateView

class UploaderRequestTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

    def test_index(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()

        page = Page(index=1, zine=my_first_zine).save()

        # Create an instance of a GET request.
        request = self.factory.get("/uploader/pages")

        # Use this syntax for class-based views.
        response = PageIndexView.as_view()(request)
        self.assertEqual(response.status_code, 200)
        
        response.render()

        self.assertContains(response, "My First Zine")
        self.assertContains(response, "Index: 1")
    
    def test_create_page(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()

        request = self.factory.post("/uploader/pages", data={"zine": my_first_zine.id, "index": "2"})

        response = PageCreateView.as_view()(request)
        response.client = Client()
        
        self.assertRedirects(response, "/uploader/pages")
