<template>
  <div id="app">
	<nav class="navbar is-dark" style="margin-bottom: 5px">
        <div class="navbar-brand">
          <p class="navbar-item title">
            <router-link class="has-text-light" to="#">Software Science Lab</router-link>
          </p>
        </div>
  
        <div class="navbar-menu">
          <div class="navbar-start">
            <p class="navbar-item is-active is-size-4">
              <router-link class="has-text-light" to='/'>Equiment Manager</router-link> 
            </p>
          </div>
          <div class="navbar-end">
            <div class="navbar-item field has-addons">
              <p class="control">
                <input  class="input" type="text" placeholder="looking for smth...">
              </p>
              <p class="control">
                <button class="button">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>
      </nav> 

      <div class="container columns">

          <aside class="menu column is-narrow">
           <ul class="menu-list">
             <li>
                 <router-link to="/" class="button is-medium" >Dashboard</router-link>
             </li>
             <li>
                 <router-link to="/new-item" class="button is-medium">New Item</router-link>
             </li>
           </ul>
         </aside>
     
         <section class="column">
			<router-view/>
         </section>
       </div>


  </div>
</template>

<style lang="scss">
 @import '~bulma/css/bulma.css'
</style>
