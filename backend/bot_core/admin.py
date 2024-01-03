from django.contrib import admin
from bot_core.models import Collection, Embedding
from bot_core.file_preprocessing import FilePreprocessingAdmin

admin.site.register(Collection, FilePreprocessingAdmin)
admin.site.register(Embedding)
