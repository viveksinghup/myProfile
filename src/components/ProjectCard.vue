<template>
  <div
    class="relative project-card transition duration-500 ease-in-out rounded-lg overflow-hidden cursor-pointer"
    @click="isActive = !isActive"
    :class="{ isOpen: isActive }"
  >
    <div
      class="flex img-wrap"
    >
      <img
        :src="$props && $props.image"
        :alt="$props && $props.name"
        loading="lazy"
      />
    </div>
    <div
      class="p-name pb-0 flex flex-col text-center bottom-0 absolute left-0 right-0 w-full after:content"
    >
      <svg
        class="w-full relative"
        width="100%"
        height="70"
        viewBox="0 0 500 70"
        preserveAspectRatio="none"
      >
        <path d="M0,70 L0,40 Q250,-40 500,40 L580,70 Z" fill="#3942e5"></path>
      </svg>

      <span
        class="text-center bg-blue block w-full font-bold pb-8 z-10 text-white"
        >{{ $props && $props.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      name: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      isActive: this.$props.isOpen,
    };
  },
};
</script>
<style lang="postcss" scoped>
.project-card {
  transition: 0.45s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  .p-name {
    transition: 0.45s;
    transform: translateY(100%);
    @apply h-32 text-xl flex justify-center items-end;
    svg {
      bottom: -30px;
    }
  }
  &:hover {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);
    .p-name {
      transition-delay: 0.25s;
      transform: translateY(7%);
    }
  }
}
.img-wrap {
  position: relative;
  padding-bottom: 56.2%;
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>