if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('category', "Male");

  Template.percent_affected_chart.helpers({
    percent: function () {
      value = Session.get("category");
      return raise_minimium_affects_json[value]["Share_of_this_category_that_is_affected"];
    },
    category: function () {
      return Session.get("category");
    }
  });

  Template.body.events({
    'click button': function (event) {
      // increment the counter when button is clicked
      var value = $(event.target).attr('value');
      Session.set("category", value);
      $(event.target).siblings().removeClass("down");
      $(event.target).addClass("down");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
