import sv from '$lib/sv.js';

export async function load({params}) {
    return await sv.load(params.slug)
}
