<template>
  <div>
    <div class="container">
      <div class="py-20 text-center">
        <h2 class="text-4xl md:text-6xl font-serif text-gradient">
          All Projects
        </h2>
        <p
          class="text-md md:text-lg px-5 w-full md:w-11/12 mx-auto text-gray-10"
        >
          Being responsible for implementing enhancements and analytical tools
          for our web applications and websites, focusing on expanding existing
          functionalities and developing new features while optimizing speed and
          loading times. In larger projects, I act as the bridge between
          technology and the client, facilitating effective communication and
          ensuring alignment of goals. Additionally, I manage several smaller
          projects, overseeing all phases from analysis to frontend development,
          as well as the processing of results and statistics. Below are the key
          projects I have contributed to throughout my career.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="bottom-fold">
        <section class="flex flex-wrap justify-between mt-30">
          <div
            class="p-card mb-10 md:mb-16"
            v-for="(item, index) in project.all.slice().reverse()"
            :key="item.id"
            @click="openProjectView(item)"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <ProjectCard
              :name="item.name"
              :image="item.image"
              :isOpen="index === 0"
            />
          </div>
        </section>
      </div>
      <div class="flex justify-center">
        <router-link class="btn" to="/">Back to Home</router-link>
      </div>
    </div>
    <ProjectView
      :selectedProject="selectedProject"
      :customClass="[selectedProject ? 'reveal' : '']"
      :closeProjectView="closeProjectView"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import ProjectView from "@/components/ProjectView";
import { project } from "../constants/project";

export default {
  name: "Projects",

  components: {
    ProjectCard,
    ProjectView,
  },
  data() {
    return {
      project,
      selectedProject: null,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    openProjectView(item) {
      this.selectedProject = item;
    },
    closeProjectView() {
      this.selectedProject = null;
    },
  },
};
</script>
<style lang="postcss">
.p-card {
  width: 48%;
  @media screen and (max-width: 768px) {
    @apply max-w-full w-full;
  }
}
</style>
