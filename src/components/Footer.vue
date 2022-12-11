<template>
  <div class="mt-10 md:mt-32">
    <div class="flex items-center justify-center bg-baseWhite app-footer py-10">
        <Social/>
    </div>
  </div>
</template>

<script>
import Social from "@/components/Social";
export default {
  name: "Footer",
  props: {
    msg: String
  },
  components: {
    Social,
  },
};
</script>
<style lang="postcss" scoped>
</style>
