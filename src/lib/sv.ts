import { createSvelite } from 'svelite'
import {layouts, modules} from './index.js'

export default createSvelite({
    modules, 
    layouts,
    pages: [
        {
            slug: 'abc', 
            modules: [
                {name: 'HelloWorld'},
                {name: 'Counter', props: {name: 1, type: 'client'}},
                {name: 'Counter', props: {name: 4, type: 'client'}},
                {name: 'Counter', props: {name: 6, type: 'server'}},
                {name: 'Header', props: {title: "Header Component"}},
            ]
        },
        {
            slug: 'admin/pages', 
            layout: { name: "AdminLayout", props: {theme: "dark", dir: "ltr"}},
            modules: [
                {name: 'Header', props: {title: "Pages Admin page"}},
            ]
        },
        {
            slug: 'admin/pages-light', 
            layout: { name: "AdminLayout", props: {theme: "light", dir: "ltr"}},
            modules: [
                {name: 'Header', props: {title: "Pages light Admin page"}},
            ]
        }

    ],
    //api: 'http://localhost:3000/api'
    api: 'https://svelite-api.hadiahmadi.dev/api'
})
