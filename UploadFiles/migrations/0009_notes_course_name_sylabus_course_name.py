# Generated by Django 4.1.4 on 2023-01-08 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UploadFiles', '0008_quiz'),
    ]

    operations = [
        migrations.AddField(
            model_name='notes',
            name='course_name',
            field=models.CharField(default='hello', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='sylabus',
            name='course_name',
            field=models.CharField(default='hello', max_length=100),
            preserve_default=False,
        ),
    ]
