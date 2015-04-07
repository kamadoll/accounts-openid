Template.configureLoginServicesDialogForOpenIDC.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServicesDialogForOpenIDC.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client secret'}
  ];
};