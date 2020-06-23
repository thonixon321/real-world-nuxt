<template>
  <div>
    <h1 class='text-red-500'>Events</h1>
    <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
          :data-index="index"
        />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  //head is a property used by Nuxt's vue-meta
  head() {
    return {
      //title and meta are crawled by search engines
      title: 'Event Listing',
    }
  },

  async fetch( { store, error } ) {
    //need {$axios} (es6 destructuring) because this component
    //hasn't loaded and it is how we
    //connect to $axios or $router, etc.
    try {
      //automatically namespaced in nuxt
     await store.dispatch('events/fetchEvents')
    } catch (e) {
      error(
        {
          statusCode: 503,
          message: 'Unable to fetch events at this time. Try again soon.'
        }
      )
    }
  },

  components: {
    EventCard
  },

  computed: mapState({
    events: state => state.events.events
  })
}
</script>