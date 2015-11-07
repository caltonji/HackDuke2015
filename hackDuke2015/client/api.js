var getAllRacesPoverty2015 = "http://api.census.gov/data/timeseries/poverty/histpov2?get=PCTPOV&time=2013&RACE=1";

$.ajax({                                                                                                                                                                                                        
  type: 'GET',                                                                                                                                                                                                 
  url: getAllRacesPoverty2015,                                                                                                                                              
  dataType: 'json',                                                                                                                                                                                                
  success: function(data) { console.log('Success!',data); },                                                                                                                                                                                       
  error: function() { console.log('Uh Oh!'); },
  jsonp: 'false'                                                                                                                                                
});

