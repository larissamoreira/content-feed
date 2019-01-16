from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from content_api.views import ItemViewSet

router = routers.DefaultRouter()
router.register('item', ItemViewSet, base_name='test')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
