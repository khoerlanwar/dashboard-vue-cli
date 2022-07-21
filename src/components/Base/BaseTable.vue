<template>
  <div class=" overflow-auto">
    <table class=" lg:table-fixed w-full border-separate">
      <thead class=" bg-slate-300">
        <tr>
          <td v-for="items in thead">{{ items }}</td>
        </tr>
      </thead>
      <tbody v-for="items in tbody" :key="items" class="bg-slate-100">
        <tr>
          <td v-for="value in Object.values(items)">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      default: null,
    },
    tbody: {
      type: Array,
      default: null
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
</style>