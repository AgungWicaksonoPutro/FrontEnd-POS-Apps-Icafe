<template>
    <div>
        <NavbarProduct/>
        <div class="row no-gutters">
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 left">
                <VerticalNav/>
            </div>
            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-10 bg-grey right">
                <div class="row no-gutters">
                    <TableProduct/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarProduct from '../../../components/_base/NavbarProduct'
import VerticalNav from '../../../components/_base/VerticalNav'
import TableProduct from '../../../components/_base/TableProduct'
export default {
  name: 'Add',
  components: {
    NavbarProduct,
    VerticalNav,
    TableProduct
  }
}
</script>

<style scoped>
.left {
    height: 100vh;
    box-shadow: 6px 0px 16px -8px rgba(173,173,173,1);
}
.right{
    height: 100vh;
    box-shadow: inset 0px 8px 16px -9px rgba(173,173,173,1);
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.bg-grey {
    background-color: rgba(190, 195, 202, 0.3);
}
.right::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.right::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
</style>
