Players = new Mongo.Collection("players");

if(Meteor.isServer) {
  Players.allow({
    insert: function () {
      return false;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return false;
    }
  });
  Meteor.publish('players', function() {
    return Players.find({});
  });
}
