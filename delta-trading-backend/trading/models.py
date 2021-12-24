from django.db import models

# Create your models here.
# class StockList(models.Model):
#     name = models.CharField(max_length=200)

#     def __str__(self):
#         return self.name

class Stock(models.Model):
    # stockList = models.ForeignKey(StockList, on_delete=models.CASCADE, null=True)
    symbol = models.CharField(max_length=200)
    PEG = models.DecimalField(max_digits = 20, decimal_places = 2, default=0.00)

    def __str__(self):
        return self.symbol
