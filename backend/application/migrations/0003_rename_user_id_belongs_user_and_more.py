# Generated by Django 4.1.7 on 2023-02-21 23:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0002_alter_rsos_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='belongs',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='comments',
            old_name='event_id',
            new_name='event',
        ),
        migrations.RenameField(
            model_name='comments',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='created_by',
            old_name='event_id',
            new_name='event',
        ),
        migrations.RenameField(
            model_name='created_by',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='creates',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='joins',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='rsos',
            old_name='admin_id',
            new_name='admin',
        ),
        migrations.RenameField(
            model_name='views',
            old_name='event_id',
            new_name='event',
        ),
        migrations.RenameField(
            model_name='views',
            old_name='user_id',
            new_name='user',
        ),
    ]
