<template>
 <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{data.idProduct ? 'Update Data': 'Add Data'}}</h5>
                        <button type="button" class="close" data-dismiss="modal"  @click="$emit('close-modal')" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Product Name</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <input type="text" v-model="data.nameProduct" class="form-control 1 shadow-sm" name="name" id="name">
                            </div>
                        </div>
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Stock Product</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <input type="text" v-model="data.stockProduct" class="form-control 2 shadow-sm" name="name" id="name">
                            </div>
                        </div>
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Description Product</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <input type="text" v-model="data.descriptionProduct" class="form-control 3 shadow-sm" name="name" id="name">
                            </div>
                        </div>
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Image Product</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <input type="file" @change="handleImage" name="name" id="name">
                            </div>
                        </div>
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Price Product</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <input type="text" v-model="data.priceProduct" class="form-control 4 shadow-sm" name="name" id="name">
                            </div>
                        </div>
                        <div class="form add-data d-flex text-left my-2">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 label">
                                <label for="name">Category</label>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 input name">
                                <select name="CategoryName" v-model="data.idCategory" class="border">
                                    <option selected disabled>Please Select One</option>
                                    <option value="4">Food</option>
                                    <option value="1">Drink</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('close-modal')">Close</button>
                        <button type="button" class="btn btn-primary" @click="$emit('handle-event')"> {{data.idProduct ? 'Update Data': 'Add'}} </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    handleImage (e) {
      this.data.imageProduct = e.target.files[0]
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

.btn-secondary{
    margin: 10px;
    border-radius: 5px;
    background: #F24F8A;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 33px;
    font-weight: bold;
    border-color: transparent;
}
.btn-primary{
    margin: 10px;
    border-radius: 5px;
    background: #57CAD5;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 33px;
    font-weight: bold;
    border-color: transparent;
}
</style>
