<template>
<div>
    <Navbar/>
    <div class="row no-gutters">
        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 left">
            <VerticalNav/>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-10 bg-grey center">
            <div class="row card-row no-gutters">
                <CardProduct/>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 bg-white right">
            <div class="list-cart">
                <AddItems/>
                <AddItems/>
                <AddItems/>
                <AddItems/>
                <AddItems/>
            </div>
            <div class="execute">
                <SumTransaction/>
                <div class="row summary-transaction no-gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">1</div>
                </div>
                <div class="row button-execute no-gutters">
                    <ButtonCheckout/>
                    <ButtonCancel/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../../../components/_base/Navbar'
import VerticalNav from '../../../components/_base/VerticalNav'
import CardProduct from '../../../components/_base/CardProduct'
import AddItems from '../../../components/_base/AddItems'
import SumTransaction from '../../../components/_base/SumTransaction'
import ButtonCheckout from '../../../components/_base/ButtonCheckout'
import ButtonCancel from '../../../components/_base/ButtonCancel'
export default {
  name: 'Home',
  components: {
    VerticalNav,
    CardProduct,
    Navbar,
    AddItems,
    SumTransaction,
    ButtonCheckout,
    ButtonCancel
  }
}
</script>

<style scoped>
.left {
    height: 100vh;
    box-shadow: 6px 0px 16px -8px rgba(173,173,173,1);
}
.center{
    height: 100vh;
    box-shadow: inset 0px 8px 16px -9px rgba(173,173,173,1);
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.right{
    height: 100vh;
    box-shadow: inset 0px 8px 16px -9px rgba(173,173,173,1);
}
.card-row {
    padding: 10px;
}
.bg-grey {
    background-color: rgba(190, 195, 202, 0.3);
}
.bg-white {
    background-color: #FFFFFF;
}
.list-cart{
    height: 70%;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
}
.execute{
    height: 30%;
}
.center::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.center::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.726);
  border-radius: 10px;
}
.list-cart::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.list-cart::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.726);
  border-radius: 10px;
}
</style>
