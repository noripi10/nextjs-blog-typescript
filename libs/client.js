import { createClient } from 'microcms-js-sdk';

export const client = createClient({
	serviceDomain: 'noripi10',
	apiKey: process.env.API_KEY,
});
