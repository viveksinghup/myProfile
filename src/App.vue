<template>
  <div id="app">
    <Header />
    <div class="app-view">
      <div class="dots w-full md:w-1/2"></div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="postcss">
#app {
  @apply flex flex-col justify-between;
  min-height: 100vh;
}
body {
  @apply text-black font-sans overflow-x-hidden;
  transition: 0.25s;
  &.dark-mode {
    @apply bg-black text-white;
    .sub-header {
      @apply text-white;
    }
    .border {
      &-gray-200 {
        @apply border-white;
      }
    }
    .app-footer {
      @apply bg-black;
    }
    .img-block{
      @apply bg-white;
    }
    .timeline-group:after, .tg-left:after{
      background-color: #fff;
    }
    .text {
      &-blue {
        @apply text-gradient;
      }
      &-gray-10 {
        @apply text-white;
        opacity: 0.8;
      }
      &-black {
        @apply text-white;
      }
    }
    .project {
      &-modal {
        @apply bg-black;
      }
    }
    .bg {
      &-white {
        @apply bg-black;
      }
    }
    .skills-wrapper {
      &:before,
      &:after {
        display: none;
      }
    }
    &::-webkit-scrollbar-track {
      width: 8px;
      @apply bg-black;
    }
  }
}
.btn {
  transition: 0.6s;
  border-radius: 30px;
  @apply text-white;
  font-size: 18px;
  padding: 16px 42px;
  text-align: center;
  display: inline-block;
  box-shadow: 0 12px 20px rgb(0 0 0/0.2);
  background: linear-gradient(
    270deg,
    #7375f8,
    #7375f8,
    rgba(34, 34, 34, 0),
    rgba(34, 34, 34, 0)
  );
  background-size: 300% 300%;
  background-color: #3942e5;
  &:hover {
    background-position: 99% 50%;
    box-shadow: 0 12px 20px rgb(0 0 0/0.4);
  }
  @media screen and (max-width: 768px) {
    padding: 16px 42px;
  }
}
.container {
  @apply mx-auto px-4;
}
.text-gradient {
  background: linear-gradient(45deg, #7375f8, #3942e5);
  background-clip: text;
  background-color: #3942e5;
  color: #3942e5;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.dots {
  display: flex;
  content: "";
  position: absolute;
  top: 100px;
  left: 3%;
  height: 12rem;
  background-image: radial-gradient(#262626 2px, transparent 0);
  background-size: 20px 20px;
  background-position: 0 0;
  opacity: 0.08;
  @media screen and (max-width: 768px) {
    left: 0;
  }
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  width: 5px;
  @apply bg-white;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  opacity: 1;
  width: 5px;
  @apply bg-blue;
  background: linear-gradient(
    to bottom,
    #7375f8 25%,
    #3942e5 0,
    #3942e5 50%,
    #1c24c0 0,
    #1c24c0 75%,
    #1c24c0 0
  );
}
::-moz-selection {
    @apply bg-black text-white;
    text-shadow: none;
    opacity: 1;
}
::selection {
    @apply bg-black;
    @apply text-white;
    text-shadow: none;
    opacity: 1;
}
</style>