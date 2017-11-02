import { Meteor } from 'meteor/meteor';
import '../collections/collections.js';

Meteor.publish("testData", function(){
  return Test.find();
})

Meteor.startup(() => {
  // code to run on server at startup
});
