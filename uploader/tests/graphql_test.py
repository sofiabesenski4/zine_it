# Create a fixture using the graphql_query helper and `client` fixture from `pytest-django`.
import json
import pytest
from django.test import TestCase

from uploader.models import Zine
from graphene_django.utils.testing import graphql_query

@pytest.fixture
def client_query(client):
    def func(*args, **kwargs):
        return graphql_query(*args, **kwargs, client=client)
    return func

# Test you query using the client_query fixture.
# Need to include this mark to access the database.
@pytest.mark.django_db
def test_all_zines_query_returns_data(client_query):
    Zine(name="Anarchy 101").save()
    Zine(name="Socialism 101").save()

    response = client_query(
        '''
        query {
            allZines {
                id
                name
            }
        }
        '''
    )

    content = json.loads(response.content)
    zine_data = content['data']['allZines']

    assert response.status_code == 200
    assert 'errors' not in content

    assert 'Anarchy 101' == zine_data[0]['name']
    assert '1' == zine_data[0]['id']
    assert 'Socialism 101' == zine_data[1]['name']

@pytest.mark.django_db
def test_zine_by_id(client_query):
    zine = Zine(name="Anarchy 101")
    zine.save()

    response = client_query(
        '''
        query ZineByIdQuery($id: String) {
            zineById(id: $id}) {
                id
                name
            }
        }
        ''',
        variables={"id": str(zine.id)}
    )

    
    content = json.loads(response.content)
    breakpoint()

    assert response.status_code == 200
    assert 'errors' not in content

