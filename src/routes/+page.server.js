import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let links = await directus.request(readItems('Links'));

    return {
        links
    }
};