<template>
 <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog" @click="$emit('close-modal')">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row no-gutters">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 text-left d-flex align-items-end">
                                <h5 class="title-modal">Checkout</h5>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 text-right Receipt">
                                <div class="row no-gutters">
                                    <div v-if="getCart.length" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        Receipt no: #010410919
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters mb-2">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 Cashier text-left">
                                Cashier : Pevita Pearce
                            </div>
                        </div>
                        <div class="row no-gutters my-1" v-for="item in getCart" :key="item.id">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 text-left">{{item.nameProduct}} {{item.qty}}X</div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-right">Rp. {{(item.priceProduct*item.qty).toLocaleString('de-DE')}}</div>
                        </div>
                        <div v-if="getCart.length" class="row no-gutters">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 text-left">PPN 10%</div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-right">Rp. {{setTax.toLocaleString('de-DE')}}</div>
                        </div>
                        <div v-if="getCart.length" class="row no-gutters text-right my-2">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">Total: </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">Rp. {{setTotalPricing.toLocaleString('de-DE')}}</div>
                        </div>
                        <div v-if="getCart.length" class="row no-gutters">
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-left">Payment:</div>
                            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 text-left px-1">Cash</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" >Print</button>
                        <button type="button" class="btn btn-primary">Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalCheckout',
  methods: {

  },
  computed: {
    ...mapGetters(['getCart', 'getPricing']),
    setTax () {
      return this.getPricing * 0.1
    },
    setTotalPricing () {
      return this.setTax + this.getPricing
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-dialog {
    font-family: 'Airbnb Cereal App Medium', sans-serif;
    letter-spacing: 1px;
    width: 1600px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease-in-out;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.Receipt{
    font-size: 12px;
}
.Cashier{
    font-size: 14px;
}
.btn-secondary{
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
.btn-primary{
    width: 100%;
    margin: 10px;
    border-radius: 0;
    background: #57CAD5;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 33px;
    font-weight: bold;
    border-color: transparent;
}
</style>
