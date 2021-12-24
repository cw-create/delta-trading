from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def stock_list(request):
    if request.method == 'GET':
        data = Stock.objects.all()

        serializer = StockSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            if Stock.objects.filter(symbol = serializer.validated_data.get('symbol')).exists():
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["PEG"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["EBITDA"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["bookValue"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["divPerShare"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["divYield"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["EPS"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["ROA"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["ROE"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["quarterEarningsGrowth"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["quarterRevenueGrowth"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["targetPrice"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["trailingPE"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["forwardPE"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["priceToSales"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["priceToBook"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["yearlyHigh"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["yearlyLow"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["fiftyDayMovingAvg"])
                Stock.objects.filter(symbol=serializer.validated_data.get('symbol')).update(PEG=serializer.validated_data["twoHundredDayMovingAvg"])
                return Response(status=status.HTTP_201_CREATED)
            else:
                serializer.save()
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def stock_detail(request, pk):
    try:
        stock = Stock.objects.get(pk=pk)
    except Stock.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StockSerializer(stock, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        stock.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class StockView(APIView):
#     queryset = Stock.objects.all()
#     serializer_class = StockSerializer

#     def get(self, request):
#         detail = [{"symbol": detail.symbol, "PEG": detail.PEG}
#         for detail in Stock.objects.all()]
#         return Response(detail)

