<template>
  <div>
    <div class="container">
      <div class="pt-20 pb-5 md:pb-20 text-center">
        <h2 class="text-4xl md:text-6xl font-serif text-gradient">My Career Journey</h2>
        <p class="text-md md:text-lg px-5 w-full md:w-10/12 mx-auto text-gray-10">
          Becoming an expert in everything will be difficult, but basic knowledge & with a great focus on frontend development, I hope to build & design the coolest systems. I've been working on amazing companies in my years & it's hard to say what the perfect workplace is. As long as I develop myself, develop products & get the chance to work with something that creates value or difference for others.
        </p>
      </div>
    </div>
    <div class="w-full mb-10 relative timeline-group" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0">
      <div
        class="tg-list flex items-start mt-16"
        v-for="jorney in career"
        :key="jorney.id"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="w-1/2 px-6 tg-left">
          <div class="text-xl font-bold font-serif">
            {{ jorney.year }}
          </div>
          <span>{{ jorney.location }}</span>
        </div>
        <div class="w-1/2 px-6 tg-right">
          <div class="tg-info">
            <div class="text-xl font-bold font-serif text-blue">
              {{ jorney.company }}
            </div>
            <div class="text-md text-gray-10">{{ jorney.post }}</div>
            <p class="mt-3 text-lg mb-0 text-gray-10 w-11/12">
              {{ jorney.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { career } from "../constants/career";

export default {
  name: "Journey",
  components: {},
  data() {
    return {
      career,
    };
  },
};
</script>
<style lang="postcss" scoped>
.timeline-group {
  padding: 0px 20px;
  &:after {
    @apply bg-black;
    content: "";
    height: 99%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 20px;
    width: 2px;
  }
  @media screen and (max-width: 768px){
    padding-left: 30px;
    &:after {
      margin: 0px;
      left: 35px;
    }
  }
}
.tg {
  &-list {
    &:hover {
      .tg-left:after {
        @apply bg-black;
        transform: scale(1.5);
      }
    }
    &:nth-child(even){
      @apply flex flex-row-reverse;
      .tg-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        p{
          text-align: right;
        }
      }
      .tg-left {
        @apply items-start;
        &:after {
          right: auto;
          left: -6px;
          @media screen and (max-width: 768px){
            left: 0;
          }
        }
      }
      @media screen and (max-width: 768px){
        @apply flex flex-row flex-wrap;
        .tg-info {
          align-items: flex-start;
          p{
            text-align: left;
          }
        }
      }
    }
    @media screen and (max-width: 768px){
      @apply w-full flex-col;
    }
  }
  &-left {
    @apply relative flex flex-col items-end;
    &:after {
      transition: 0.45s;
      border: 2px solid #262626;
      content: "";
      position: absolute;
      top: 12px;
      width: 12px;
      right: -6px;
      height: 12px;
      z-index: 1;
      @apply bg-black;
      border-radius: 30px;
    }
    @media screen and (max-width: 768px){
      @apply w-full items-start mb-5;
      &:after{
        right: auto;
        left: 0px;
      }
    }
  }
  &-right {
    @media screen and (max-width: 768px){
      @apply w-full;
    }
  }
}
</style>