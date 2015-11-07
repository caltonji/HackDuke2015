var apiKey = '95e3454973361d26a6478ed1fd4a5e16b3d55680';

var getAllRacesPoverty2015 =  "http://api.census.gov/data/timeseries/poverty/histpov2?get=PCTPOV&time=2015&RACE=1";



$.ajax({                                                                                                                                                                                                        
  type: 'GET',                                                                                                                                                                                                 
  url: getAllRacesPoverty2015,                                                                                                                                              
  dataType: 'json',                                                                                                                                                                                                
  success: function(data) { console.log('Success!',data); },                                                                                                                                                                                       
  error: function() { console.log('Uh Oh!'); },
  jsonp: 'false'                                                                                                                                                
});