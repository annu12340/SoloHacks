# Generated by Django 4.0.3 on 2022-06-05 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0005_alter_campaign_is_verified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
    ]