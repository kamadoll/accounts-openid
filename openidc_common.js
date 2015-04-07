if (!Meteor.accounts.openidc) {
	Meteor.accounts.openidc = {};
}

Meteor.accounts.openidc.config = function(options) {
	Meteor.accounts.openidc._options = options;
};