import { readItems } from '@directus/sdk';
import { directus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let links = await directus.request(readItems('Links'));
    let me = await directus.request(readItems('me'));
    let meTranslations = await directus.request(readItems('me_translations'));

    return {
        links,
        me,
        meTranslations
    }
};