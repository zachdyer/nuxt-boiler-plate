<template>
  <nav class="site-header sticky-top py-1">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between"
    >
      <NuxtLink v-for="link in menu.records" :key="link.fields.Name" to="/" class="py-2 d-none d-md-inline-block">{{link.fields.Name}}</NuxtLink>
      <!-- <NuxtLink class="py-2" to="/" aria-label="Product">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mx-auto"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10" />
          <path
            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
          />
        </svg>
      </NuxtLink>
      <NuxtLink class="py-2 d-none d-md-inline-block" to="/register"
        >Register</NuxtLink
      > -->
      <!-- <a class="py-2 d-none d-md-inline-block" href="#">About</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
      <a class="py-2 d-none d-md-inline-block" href="#">Cart</a> -->
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
    this.menu = await this.$axios.$get(
      `https://api.airtable.com/v0/${base}/${table}?api_key=keynZf6Bg5j58ZXjN&view=${view}`
    )
    console.log(this.menu)
  }
};
</script>

