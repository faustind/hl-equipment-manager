<template>
<div class="container">
	<div class="field">
	  <label class="label is-large">Item</label>
	  <div class="control">
	  <input v-model="current_equipment.name" class="input is-large" type="text" placeholder="Item Name">
	  </div>
	</div>

	<div class="field">
	  <label class="label is-large">Quantity</label>
	  <div class="control">
	  <input v-model="current_equipment.quantity" class="input is-large" type="number" placeholder="Item Name">
	  </div>
	</div>

	  <div class="field is-large">
	<label class="label is-large">Status</label>
		<div class="control">
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="current_equipment.status" type="radio" name="status" value="just-enough">
			Just Enough
		  </label>
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="current_equipment.status"type="radio" name="status" value="available">
			Available
		  </label>
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="current_equipment.status"  type="radio" name="status" value="needed">
			Needed
		  </label>
		</div>
	  </div>	

	  <div class="field">
		<label class="label is-large">Last Checked On</label>
		<div class="control">
		<input v-model="current_equipment.date_last_checked" class="input is-large" type="date" placeholder="Item Name">
		</div>
	  </div>

	  <div class="field is-grouped">
		  <p class="control">
			<button @click="updateEquipment" class="button is-primary">Submit</button>
		  </p>
		  <p class="control">
			<button @click="goBack" class="button" >Go Back</button>
		  </p>
	  </div>
  </div>
</template>

<script>

export default {
  data: function() {
      return {
          current_equipment: {}
      }
  },
  methods: {
      updateEquipment() {
          this.$store.dispatch('pushEquipmentUpdate', this.current_equipment)
          this.current_equipment = {}
          this.goBack()
      },
      goBack() {
          this.$router.go(-1)
      }
  },
  mounted() {
      this.current_equipment = Object.assign({}, this.$store.state.equipments.find( equipment => {
          return equipment.id == this.$route.params.id 
      }))
  }
}
</script>
