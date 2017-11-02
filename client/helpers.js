import { Session } from 'meteor/session';

Meteor.startup(function(){
  Session.set("passphrase","PurpleMonkeyDishwasher123");

  Test.before.insert(function (userId, doc){
    doc.data_enc=CryptoJS.AES.encrypt(doc.data, Session.get("passphrase")).toString();
    doc._encrypted=true;

    delete doc.data;
  });
});
