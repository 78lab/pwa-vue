<template>
    <h1 class="text-3xl font-bold underline">About test 111</h1>
    msg: {{ msg }}  apiHost:{{apiHost}}
    <button class="btn">Button</button>
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
