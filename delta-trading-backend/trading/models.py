from django.db import models

# Create your models here.
# class StockList(models.Model):
#     name = models.CharField(max_length=200)

#     def __str__(self):
#         return self.name

class Stock(models.Model):
    # stockList = models.ForeignKey(StockList, on_delete=models.CASCADE, null=True)
    symbol = models.CharField(max_length=200, default='0')
    companyName = models.CharField(max_length=200, default='0')
    description = models.CharField(max_length=5000, default='0')
    industry = models.CharField(max_length=300, default='0')
    PEG = models.DecimalField(max_digits = 20, decimal_places=5, default=0.000)
    bookValue = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    divPerShare = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    divYield = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    EPS = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    ROA = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    ROE = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    quarterEarningsGrowth = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    quarterRevenueGrowth = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    targetPrice = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    trailingPE = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    forwardPE = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    priceToSales = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    priceToBook = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    yearlyHigh = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    yearlyLow = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    fiftyDayMovingAvg = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)
    twoHundredDayMovingAvg = models.DecimalField(max_digits=20, decimal_places=5, default=0.00)

    def __str__(self):
        return self.symbol
