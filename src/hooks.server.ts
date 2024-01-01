import { createSveliteServer } from 'svelite'

export async function handle({event, resolve}) {

    const svServer = createSveliteServer({})

    if(event.url.pathname.startsWith('/api')) {
        return svServer(event.request)
    }

    return resolve(event)
}
