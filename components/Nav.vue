<template>
  <nav class="site-header sticky-top py-1">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between"
    >
      <NuxtLink v-for="link in menu.records" :key="link.fields.Name" :to="link.fields.Permalink" class="py-2 d-none d-md-inline-block">{{link.fields.Name}}</NuxtLink>
      
    </div>
  </nav>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      menu: []
    }
  },
  async fetch() {
    let base = 'apppwZva5vqAmdIfx'
    let table = 'Links'
    let view = 'Main Menu'
    let url = `https://api.airtable.com/v0/${base}/${table}?api_key=${process.env.AIRTABLE_KEY}&view=${view}`
    this.menu = await fetch(url).then((response) => {
      return response.json()
    })
  },
  mounted(){
    console.log(process.env.AIRTABLE_KEY, this.menu)
  }
};
</script>

