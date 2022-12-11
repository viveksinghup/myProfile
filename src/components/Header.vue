<template>
  <div>
    <div
      ref="submenu"
      :class="`fixed bg-white transition duration-500 ease-in-out w-full z-10 left-0 top-0 right-0 sub-header ${
        isMenuVisible ? 'sub-header--visible' : 'sub-header--hidden'
      }`"
    >
      <div ref="submenu" class="container flex py-3 justify-between">
        <div class="logo">
          <router-link to="/"
            ><img src="@/assets/images/logo.svg"
          /></router-link>
        </div>
        <ul class="head-link flex space-x-4 items-center">
          <li
            class="cursor-pointer hover:text-blue"
          >
            <router-link to="/projects">Projects</router-link>
          </li>
          <li
            class="cursor-pointer hover:text-blue"
          >
            <router-link to="/journey">My Journey</router-link>
          </li>
          <li
            class="cursor-pointer hover:text-blue"
          >
            <router-link to="/contact">Contact Me</router-link>
          </li>
          <li>
            <div class="mode-toggle" @click="modeToggle" :class="darkDark">
              <div class="toggle">
                <div id="dark-mode" type="checkbox"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-box"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data: () => ({
    isMenuVisible: true,
    isHamburgerOpen: false,
    lastScrollPosition: 0,
    darkMode: false,
  }),

  watch: {
    isHamburgerOpen(isOpen) {
      document.body.classList[isOpen ? "add" : "remove"]("overflow-y-hidden");
    },
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // this.isMenuVisible = currentScrollPosition > 90
      if (currentScrollPosition > 90) {
        this.isMenuVisible = currentScrollPosition < this.lastScrollPosition;
      } else {
        this.isMenuVisible = true;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
    dark() {
      document.querySelector("body").classList.add("dark-mode");
      this.darkMode = true;
      this.$emit("dark");
    },

    light() {
      document.querySelector("body").classList.remove("dark-mode");
      this.darkMode = false;
      this.$emit("light");
    },

    modeToggle() {
      if (
        this.darkMode ||
        document.querySelector("body").classList.contains("dark-mode")
      ) {
        this.light();
      } else {
        this.dark();
      }
    },
  },
  computed: {
    darkDark() {
      return this.darkMode && "darkmode-toggled";
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
};
</script>
<style lang="postcss" scoped>
.logo img {
  max-width: 40px;
}
.header-box {
  height: 70px;
}
.head-link li {
  position: relative;
  a {
    @apply relative;
    &:after {
      width: 0%;
    }
  }
  .router-link-active {
    @apply text-blue font-bold;
    &:after {
      @apply absolute bg-blue w-full left-0 origin-center;
      content: "";
      top: -20px;
      height: 5px;
      border-radius: 5px;
    }
  }
}
.sub-header {
  &--visible {
    transform: translateY(0);
  }
  &--hidden {
    transform: translateY(-100%);
  }
  li > a {
    @screen md {
      padding-top: 4px;
    }
  }
}
.mode-toggle {
  position: relative;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border: 0;
  border-radius: 24px;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  appearance: none;
  transition: 0.25s;
  .toggle {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 3px solid transparent;
    box-shadow: inset 0 0 0 2px #262626;
    overflow: hidden;
    transition: transform 0.5s ease;
    #dark-mode {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;
      &:before {
        content: "";
        position: relative;
        width: 100%;
        height: 100%;
        left: 50%;
        float: left;
        background-color: #262626;
        transition: border-radius 0.5s ease, width 0.5s ease, height 0.5s ease,
          left 0.5s ease, transform 0.5s ease;
      }
    }
  }
  &.darkmode-toggled{
    transform: rotate(180deg);
  }
}
</style>
