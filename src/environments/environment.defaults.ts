
const restHeaders = {
  requestDate: new Date().toISOString(),
};

export const servers: { [server: string]: any } = {
  URL: 'https://pixabay.com/api/',
  KEY: '13119377-fc7e10c6305a7de49da6ecb25'
};

export const environment:  { [key: string]: any } = {
  name: 'default',
  production: false,
  services: {
    pixabay: {
      get: {
        url: servers['URL'],
        key: servers['KEY']
      }
    }
  }
}
