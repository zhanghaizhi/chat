<template>
    <div>
        <div>33333333333333</div>
    </div>
</template>
<script>
    import webim from '@/utils/chat/webim_handler'
    export default {
        data(){
            messageList:[]
        },
        mounted() {
             webim.webimLogin()
        },
    }
</script>
