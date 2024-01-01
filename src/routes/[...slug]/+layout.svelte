<script>
    import {SvLayout} from 'svelite'
    import 'svelite/dist/styles.css'

    let {data, children} = $props()
</script>

<SvLayout {data}>
    {@render children()}
</SvLayout>
