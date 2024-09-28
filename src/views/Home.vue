<template>
  <div>
    <div class="container">
      <section class="pt-20 md:pt-24 w-full">
        <div class="flex flex-col justify-center">
          <div
            class="cover-role text-gray-10 text-2xl md:text-6xl sm:leading-10 font-serif"
          >
            <span></span> Hi, I Vivek Singh
          </div>
          <div class="cover-role flex items-center">
            <typewriter
              class="font-serif text-gray-10 text-2xl md:text-6xl mr-3 text-gradient"
              :speed="100"
              :full-erase="true"
              :interval="300"
              :words="[
                'Frontend Developer',
                'UI & UX Developer',
                'Creative Developer',
                'UI Specialist',
                'UX Researcher',
              ]"
            >
              I work as
            </typewriter>
          </div>
          <div class="cover-desc mt-6 md:w-4/6">
            <p class="font-pb text-gray-10 text-md md:text-xl">
              With over a decade of experience in UI development and design, I
              have honed my expertise as a Frontend/UI Developer, focusing on
              product development. I am dedicated to crafting innovative
              features and producing clean, high-quality code. My proficiency in
              seamlessly transitioning between collaborative and detail-oriented
              tasks allows me to effectively translate design concepts into
              user-centric solutions.
            </p>
          </div>
          <div class="mt-10">
            <ul class="social-links flex space-x-4">
              <li>
                <a
                  :href="SOCIAL.in"
                  class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <Icon class="social-icon" name="in" />
                </a>
              </li>
              <li>
                <a
                  :href="SOCIAL.gt"
                  class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Icon class="social-icon" name="gt" />
                </a>
              </li>
              <li>
                <a
                  :href="SOCIAL.fb"
                  class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <Icon class="social-icon" name="fb" />
                </a>
              </li>
              <li>
                <a
                  :href="SOCIAL.tw"
                  class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <Icon class="social-icon" name="twitter" />
                </a>
              </li>
              <li>
                <a
                  :href="SOCIAL.ig"
                  class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <Icon class="social-icon" name="ig" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="bottom-fold">
      <section>
        <div class="container">
          <section
            class="flex flex-wrap justify-center mt-32"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div
              class="project-block w-full md:w-10/12 sticky mb-20 max-w-full"
              v-for="(item, index) in project.featured"
              :key="item.id"
              @click="openProjectView(item)"
            >
              <ProjectCard
                :name="item.name"
                :image="item.image"
                :isOpen="index === 0"
              />
            </div>
          </section>
          <div class="flex justify-center">
            <router-link class="btn" to="/projects"
              >View all Projects</router-link
            >
          </div>
        </div>
      </section>
      <ProjectView
        :selectedProject="selectedProject"
        :customClass="[selectedProject ? 'reveal' : '']"
        :closeProjectView="closeProjectView"
      />
      <Skills />
    </div>
  </div>
</template>

<script>
import { SOCIAL, MOBILE } from "@/constants/index";
import ProjectCard from "@/components/ProjectCard";
import Icon from "@/components/Icon";
import ProjectView from "@/components/ProjectView";
import { project } from "../constants/project";
import Skills from "@/components/Skills";

export default {
  name: "Home",
  components: {
    Icon,
    ProjectCard,
    ProjectView,
    Skills,
  },
  data() {
    return {
      SOCIAL,
      MOBILE,
      project,
      selectedProject: null,
    };
  },
  watch: {
    selectedProject(isClicked) {
      document.body.classList[isClicked ? "add" : "remove"](
        "overflow-y-hidden"
      );
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
<style lang="postcss" scoped>
.project-block {
  top: 100px;
  >>> .p-name {
    @apply h-32 text-3xl flex justify-center items-end;
    svg {
      bottom: -10px;
    }
  }
}
.cover-role {
  line-height: 4.5rem;
  @media screen and (max-width: 768px) {
    line-height: 35px;
  }
}
.project-block .project-card {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.grediant-bg {
  background: linear-gradient(45deg, #7375f8, #3942e5);
  background-color: #3942e5;
  @apply flex justify-center items-center transition duration-500 ease-in-out;
  box-shadow: 0 12px 20px rgb(0 0 0/0.2);
  .social-icon {
    width: 32px;
    @media screen and (max-width: 768px) {
      width: 22px;
    }
  }
}
.social-links {
  li {
    transition: 0.45s;
    &:hover {
      transform: scale(1.1);
      background-position: 99% 50%;
    }
  }
}
</style>
