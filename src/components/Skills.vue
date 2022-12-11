<template>
  <div>
    <div class="pt-20 text-center">
      <h2 class="text-4xl md:text-6xl font-serif text-gradient">
        Technologies
      </h2>
      <p
        class="text-md md:text-lg w-11/12 md:w-9/12 mt-8 md:mt-10 mx-auto text-gray-10"
      >
        Here are few Technologies, I am Working with that. Efficient to Build
        Best user friendly Web Application with all W3C Standard Criteria
        Standard. Great Ability to write clear, Maintainable, Well-Documented,
        Well-Commented & Efficient Code for Web Development.
      </p>
      <div class="mt-10 flex justify-center skills-wrapper">
        <marquee
          behavior="alternate"
          scrollamount="2"
          direction="left"
          onmouseover="this.stop();"
          onmouseout="this.start();"
        >
          <ul class="flex space-x-6 py-5 skills">
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="vuejs" />
              </div>
              <span class="block text-black mt-2">Vue Js</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="html" />
              </div>
              <span class="block text-black mt-2">HTML</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="css" />
              </div>
              <span class="block text-black mt-2">CSS</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="angular" />
              </div>
              <span class="block text-black mt-2">Angular Js</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="github" />
              </div>
              <span class="block text-black mt-2">github</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="ps" />
              </div>
              <span class="block text-black mt-2">Adobe</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="ph" />
              </div>
              <span class="block text-black mt-2">Photoshop</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="less" />
              </div>
              <span class="block text-black mt-2">Less</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="git" />
              </div>
              <span class="block text-black mt-2">GIT</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="bootstrap" />
              </div>
              <span class="block text-black mt-2">Bootstrap</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="django" />
              </div>
              <span class="block text-black mt-2">Django</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="gulp" />
              </div>
              <span class="block text-black mt-2">Gulp</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="handlebar" />
              </div>
              <span class="block text-black mt-2">Handlebar</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="js" />
              </div>
              <span class="block text-black mt-2">Java Script</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="jq" />
              </div>
              <span class="block text-black mt-2">JQuery</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="react" />
              </div>
              <span class="block text-black mt-2">React Js</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="sass" />
              </div>
              <span class="block text-black mt-2">Sass</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="ts" />
              </div>
              <span class="block text-black mt-2">Type Script</span>
            </li>
            <li class="text-center">
              <div class="img-block p-5 border border-gray-200 rounded-full">
                <Icon name="wp" />
              </div>
              <span class="block text-black mt-2">Wordpress</span>
            </li>
          </ul>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Skills",
  props: {},
  components: {
    Icon,
  },
};
</script>
<style lang="postcss" scoped>
.skills {
  li {
    .img-block {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
      filter: grayscale(1);
      transition: 0.45s;
      min-width: 120px;
      padding: 40px;
    }
    span {
      transition: 0.45s;
      transform: translateY(-10px);
      opacity: 0;
    }
    >>> svg {
      transition: 0.45s;
      opacity: 0.5;
    }
    &:hover {
      .img-block {
        filter: grayscale(0);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        >>> svg {
          transform: scale(1.2);
          opacity: 1;
        }
      }
      span {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
}
</style>
