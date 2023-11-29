import { readItems } from '@directus/sdk';
import { directus } from '$lib/directus/client';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let links = await directus.request(readItems('Links'));
    let me = await directus.request(readItems('me', {
        fields: ['*', { 'translations': ['*'] }]
    }));

    return {
        links,
        me
    }
};