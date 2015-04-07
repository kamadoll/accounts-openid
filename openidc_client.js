(function () {
	Meteor.loginWithopenidc = function (callback) {
		var config = Meteor.accounts.configuration.findOne({service: 'openidc'});
		if (!config) {
			callback && callback(new Meteor.accounts.ConfigError("Service not configured"));
			return;
		}
		var state = Meteor.uuid();
		
		var required_scope = ['user'];
		var scope = [];
		if (Meteor.accounts.openidc._options && Meteor.accounts.openidc._options.scope)
			scope = Meteor.accounts.openidc._options.scope;
		scope = _.union(scope, required_scope);
		var flat_scope = _.map(scope, encodeURIComponent).join('+');
		
		var loginUrl =
		      'https://github.com/login/oauth/authorize' +
		      '?client_id=' + config.clientId +
		      '&scope=' + flat_scope +
		      '&redirect_uri=' + Meteor.absoluteUrl('_oauth/github?close') +
		      '&state=' + state;
		
		Meteor.accounts.oauth.initiateLogin(state, loginUrl, callback);
	};
}) ();