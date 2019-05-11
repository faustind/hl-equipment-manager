<template>
<div class="container">
	<div class="field">
	  <label class="label is-large">Item</label>
	  <div class="control">
	  <input v-model="new_equipment.name" class="input is-large" type="text" placeholder="Item Name">
	  </div>
	</div>

	<div class="field">
	  <label class="label is-large">Quantity</label>
	  <div class="control">
	  <input v-model="new_equipment.quantity" class="input is-large" type="number" placeholder="Item Name">
	  </div>
	</div>

	  <div class="field is-large">
	<label class="label is-large">Status</label>
		<div class="control">
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="new_equipment.status" type="radio" name="status" value="just-enough">
			Just Enough
		  </label>
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="new_equipment.status"type="radio" name="status" value="available">
			Available
		  </label>
		  <label class="radio is-large is-size-5 has-text-grey-dark">
			<input v-model="new_equipment.status"  type="radio" name="status" value="needed">
			Needed
		  </label>
		</div>
	  </div>	

	  <div class="field">
		<label class="label is-large">Last Checked On</label>
		<div class="control">
		<input v-model="new_equipment.date_last_checked" class="input is-large" type="date" placeholder="Item Name">
		</div>
	  </div>

      {{ new_equipment }}

	  <div class="field is-grouped">
		  <p class="control">
			<button @click="submitNewEquipment" class="button is-primary">Submit</button>
		  </p>
		  <p class="control">
			<button class="button" >Go Back</button>
		  </p>
	  </div>
  </div>
</template>

<script>
import equipments from '@/data/equipments'

export default {
  name: 'newitem',
  data: function() {
      return {
          equipments,
          new_equipment: {}
      }
  },
  methods: {
      submitNewEquipment() {
        this.new_equipment.id = this.equipments[this.equipments.length-1].id + 1
        this.equipments.push( this.new_equipment )
        console.log(this.new_equipment)
        this.new_equipment = {}
      }
  }
}
</script>
