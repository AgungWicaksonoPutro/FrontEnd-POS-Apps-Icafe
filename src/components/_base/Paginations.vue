<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" @click="$emit('select-page', data.prevPage)">Previous</a></li>
    <li class="page-item" v-for="page in data.totalPage" :key="page"><a class="page-link" @click="$emit('select-page', page)" href="#">{{page}}</a></li>
    <li class="page-item"><a class="page-link" href="#" @click="$emit('select-page', data.nextPage)">Next</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['data']
}
</script>

<style scoped>
.page-link{
    color: rgb(66, 66, 66);
}
</style>
