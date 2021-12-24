from rest_framework import serializers
from . models import *

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = [
            'companyName',
            'description', 
            'industry', 
            'EBITDA', 
            'symbol', 
            'PEG', 
            'bookValue', 
            'divPerShare', 
            'divYield', 
            'EPS', 
            'ROA', 
            'ROE', 
            'quarterEarningsGrowth', 
            'quarterRevenueGrowth', 
            'targetPrice', 
            'trailingPE', 
            'forwardPE', 
            'priceToSales', 
            'priceToBook', 
            'yearlyHigh', 
            'yearlyLow',
            'fiftyDayMovingAvg', 
            'twoHundredDayMovingAvg'
        ]
