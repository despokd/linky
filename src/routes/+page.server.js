import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const links = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (links.ok) {
        return {
            links: await links.json()
        }
    }

    throw error(404, 'Not found');
}

