(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// hackDuke2015.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
  // counter starts at 0                                               //
  Session.setDefault('category', "Male");                              // 3
                                                                       //
  Template.percent_affected_chart.helpers({                            // 5
    percent: function () {                                             // 6
      value = Session.get("category");                                 // 7
      return raise_minimium_affects_json[value]["Share_of_this_category_that_is_affected"];
    },                                                                 //
    category: function () {                                            // 10
      return Session.get("category");                                  // 11
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.body.events({                                               // 15
    'click button': function (event) {                                 // 16
      // increment the counter when button is clicked                  //
      var value = $(event.target).attr('value');                       // 18
      Session.set("category", value);                                  // 19
      $(event.target).siblings().removeClass("down");                  // 20
      $(event.target).addClass("down");                                // 21
    }                                                                  //
  });                                                                  //
}                                                                      //
                                                                       //
if (Meteor.isServer) {                                                 // 26
  Meteor.startup(function () {                                         // 27
    // code to run on server at startup                                //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
