# Generated by Django 4.0 on 2021-12-24 17:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trading', '0004_stock_eps_stock_roa_stock_roe_stock_bookvalue_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='EPS',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='PEG',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='ROA',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='ROE',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='bookValue',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='divPerShare',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='divYield',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='fiftyDayMovingAvg',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='forwardPE',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='priceToSales',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='pricesToBook',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='quarterEarningsGrowth',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='quarterRevenueGrowth',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='symbol',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='targetPrice',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='trailingPE',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='twoHundredDayMovingAvg',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='yearlyHigh',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='yearlyLow',
        ),
    ]
