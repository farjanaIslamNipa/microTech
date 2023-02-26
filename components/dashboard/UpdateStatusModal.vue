<template>
  <div>
    <modal :name="updateStatusModal">
    <div class="">
     <div class="brand-header bg-brand d-flex justify-content-between text-white py-2 px-3">
      <h5 class="mb-0">Update status</h5>
      <div>
        <button @click="closeUpdateStatusModal" class="btn text-white p-0"><i class="fa-solid fa-xmark"></i></button>
      </div>
     </div>
     <div class="p-4">
       <h6 class="brand-color text-capitalize">Appointment reschedule</h6>
     </div>
    </div>
  </modal>
  </div>
</template>

<script>
  export default {
    name: "UpdateStatusModal",
    props: ['update-status-modal', 'close-update-status-modal']
  }
</script>

<style scoped>

</style>
