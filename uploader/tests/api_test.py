from django.test import RequestFactory, TestCase, Client
from uploader.models import Zine, Page

from rest_framework.test import APIRequestFactory, APIClient, APITestCase
from rest_framework import status

class UploaderRequestTest(APITestCase):
    def test_get_zines(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()

        response = self.client.get("/uploader/zines.json")

        self.assertEqual(
                response.data, [{'id': 1, 'name': "My First Zine", 'pages': []}])
    
    def test_create_zine(self):
        data = {'name': 'Test Zine'}
        response = self.client.post("/uploader/zines/", data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Zine.objects.count(),  1)
        self.assertEqual(Zine.objects.get().name, "Test Zine")

    def test_delete_zine(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()
        id = my_first_zine.id
        url = '/uploader/zines/' + str(id) + "/"
        
        response = self.client.delete(url, format='json')

        self.assertEqual(Zine.objects.count(),  0)

    def test_update_zine(self):
        my_first_zine = Zine(name="My First Zine")
        my_first_zine.save()
        id = my_first_zine.id
        url = '/uploader/zines/' + str(id) + "/"
        
        response = self.client.put(url, {'name': 'Anarchy 300'}, format='json')

        self.assertEqual(Zine.objects.get().name,  'Anarchy 300')

