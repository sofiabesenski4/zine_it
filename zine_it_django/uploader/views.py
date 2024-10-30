from django.http import HttpResponse

def new(request):
    return HttpResponse("""
    Image upload page
    
    <a>Upload</a>

    """)
