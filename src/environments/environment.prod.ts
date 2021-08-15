export const environment = {
  production: true,
  apiUrl: 'https://edevmoney-api.herokuapp.com',

  tokenAllowedDomains: [ /edevmoney-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/]
};
