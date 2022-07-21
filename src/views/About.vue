<template>
    <h2>About test</h2>
    msg: {{ msg }}  apiHost:{{apiHost}}
</template>

<script>
export default {
  name: 'MyList',
  data() {
    return {
        msg: this.msg,
        apiHost: 'https://pwapi.jennyhoney.com/api',
    };
  },
}
</script>
