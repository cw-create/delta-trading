# Generated by Django 4.0 on 2021-12-24 02:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trading', '0002_stocklist_rename_name_stock_symbol_stock_peg_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='stockList',
        ),
        migrations.DeleteModel(
            name='StockList',
        ),
    ]
