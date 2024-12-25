# Zine It!
Create zines quickly and easily from image uploads


## Features
### Uploader:
Create a new Zine record, and upload images into the provided template. You can then export the Zine in a format that can be easily printed and stapled for distribution.

### Library:
For registered users, you are allowed to upload your Zines to the library, and tag them with categories for others to find.


# Graphql
We will use GraphQL in the "Library" feature of the project.
For simplicity, we will use the DRF Serializers on the Uploader app, since we aren't going to benefit much from switching from REST.

## Export from Python

https://docs.graphene-python.org/projects/django/en/latest/introspection/#graphql-sdl-representation

To Regenerate the `schema.graphql` file, run:

```
python manage.py graphql_schema
```

## Import into javascript-land

```
cd frontend
npm run gql
```
