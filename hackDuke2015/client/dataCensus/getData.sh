#!/bin/bash

YEAR=1980

while [ $YEAR -lt 2014 ]; do
	sleep 10
	wget "http://api.census.gov/data/timeseries/poverty/histpov2?get=PCTPOV&time=$YEAR&RACE=1" 
	let YEAR=YEAR+1
done
