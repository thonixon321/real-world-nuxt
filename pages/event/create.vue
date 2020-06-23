<template>
  <div>
    <h1 class='text-purple-500'>Create an Event</h1>
  </div>
</template>

<script>
export default {
  //head is a property used by Nuxt's vue-meta
  head() {
    return {
      //title and meta are crawled by search engines
      title: 'Create an event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can create a new event in your neighborhood'
        }
      ]
    }
  }
}
</script>