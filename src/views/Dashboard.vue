<template>
  <div class="dashboard">
    <div v-for="equipment in equipments" :key="equipment.id" class="card" style="margin-top: 4px"> 
        <div class="card-content">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://img.icons8.com/dusk/64/000000/stack.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p class="is-margin-less is-size-5">
                <router-link v-bind:to="`/item-detail/${equipment.id}`"><strong>{{ equipment.name }}</strong></router-link>
                </p>
                <p class="is-marginless"> <strong>Quantity :</strong>{{ equipment.quantity }}</p>
                <p class="is-marginless"> <strong>Status :</strong> {{ equipment.status }}</p>
                <p class="is-marginless"> <strong>Last checked on :</strong>{{ equipment.date_last_checked }}</p>
              </div>
            </div>
            <div class="media-right">
              <button class="delete"></button>
            </div>
          </article>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data: function() {
	return {
        equipments: this.$store.state.equipments,
    }
  }
}
</script>
