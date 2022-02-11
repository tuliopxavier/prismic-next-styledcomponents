import Prismic from 'prismic-javascript';

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(`${apiEndpoint}`, { accessToken });
