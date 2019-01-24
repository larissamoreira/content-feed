from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from content_api.views import ItemViewSet

router = routers.DefaultRouter()
router.register('item', ItemViewSet, base_name='test')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
] +  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
