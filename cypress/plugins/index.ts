/* eslint-env node */
// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on: any, config: any) => {
    return config
   }
require('@applitools/eyes-cypress')(module);

/*export default ((on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    return config
  }) as Cypress.PluginConfig
  require('@applitools/eyes-cypress');*/