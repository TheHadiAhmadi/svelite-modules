import Header from "./Header.svelte";

export default {
    name: "Header",
    description: "Header component",
    props: {
        title: {label: 'Title', type: 'plain_text'}
    },
    component: Header


}
