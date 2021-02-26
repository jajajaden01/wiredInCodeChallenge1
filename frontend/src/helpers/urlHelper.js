import 'dotenv/config';

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

// const { BACKEND_URL } = process.env;
const  BACKEND_URL = 'http://localhost:4002';

const frontend = {
   reactUrl: BACKEND_URL,
   herokuUrl: '',
   defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
};

const backend = {
   reactUrl: BACKEND_URL,
   defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
};

export { frontend, backend };
