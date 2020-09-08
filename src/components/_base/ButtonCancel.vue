<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <button @click="emptyCart" type="button" class="btn btn-danger">Cancel</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ButtonCancel',
  methods: {
    ...mapMutations(['emptyCart'])
  }
}
</script>

<style scoped>
.btn-danger{
    width: 100%;
    margin: 10px;
    border-radius: 0;
    background: #F24F8A;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 33px;
    font-weight: bold;
    border-color: transparent;
}
</style>
