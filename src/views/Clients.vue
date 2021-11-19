<template>
    <div>
        <Clients/>
        <Banners/>
    </div>
</template>
<script>
import Clients from '@/components/ClientsComp/Clients.vue'
import Banners from '@/components/ClientsComp/Banners.vue'
export default {
    name: "clients" ,
    components:{
       Clients ,
       Banners
    }
}
</script>