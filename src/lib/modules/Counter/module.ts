import sv from "$lib/sv.js";
import Counter from "./Counter.svelte";

export default {
    name: "Counter",
    description: "Counter module",
    props: {
        name: {type: 'plain_text', label: "Name"},
        type: {type: 'select', label: "Type", items: ["client", "server"]}
    },
    component: Counter,
    async load({type, name}) {

        if(type === 'client') return { value: 0 }

        const value = await sv.api.db('counter').find().filter('name', '=', name).all();

        let set;
        if(value.data.length == 0) {
            set = async (val: number) => {
                await sv.api.db('counter').insert({name, value: val});
            }
        } else {
            set = async (val: number) => {
                await sv.api.db('counter').update({id: value.data[0].id, value: val});
            }
        }

        console.log(value.data[0].value)

        return {
            value: value.data[0].value,
            set
        }
    }
}
