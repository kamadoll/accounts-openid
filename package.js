Package.describe({
  summary: "Login service for generic Open ID Connect accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['openidc_configure.html', 'openidc_configure.js'],
    'client');
  
  api.add_files('openidc_common.js', ['client', 'server']);
  api.add_files('openidc_server.js', 'server');
  api.add_files('openidc_client.js', 'client');
});
