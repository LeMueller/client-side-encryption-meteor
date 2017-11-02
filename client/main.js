import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



import './main.html';

Template.test.onCreated(function () {
  var instance=this;
  instance.subscribe("testData");
});

Template.test.helpers({
  tests() {
    return Test.find();
  },
});
