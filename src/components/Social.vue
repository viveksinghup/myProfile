<template>
  <div>
    <ul class="flex space-x-4">
      <li>
        <a
          :href="SOCIAL.fb"
          class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
          target="_blank"
        >
          <Icon class="social-icon" name="fb" />
        </a>
      </li>
      <li>
        <a
          :href="SOCIAL.tw"
          class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
          target="_blank"
        >
          <Icon class="social-icon" name="twitter" />
        </a>
      </li>
      <li>
        <a
          :href="SOCIAL.ig"
          class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
          target="_blank"
        >
          <Icon class="social-icon" name="ig" />
        </a>
      </li>
      <li>
        <a
          :href="SOCIAL.in"
          class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
          target="_blank"
        >
          <Icon class="social-icon" name="in" />
        </a>
      </li>
      <li>
        <a
          :href="SOCIAL.gt"
          class="w-12 h-12 md:w-16 md:h-16 cursor-pointer grediant-bg rounded-full"
          target="_blank"
        >
          <Icon class="social-icon" name="gt" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { SOCIAL, MOBILE } from "@/constants/index";
import Icon from "@/components/Icon";

export default {
  name: "Social",
  props: {},
  components: { Icon },
  data: () => ({
    SOCIAL,
    MOBILE,
  }),
};
</script>

<style lang="postcss" scoped>
.grediant-bg {
  background: linear-gradient(45deg, #7375f8, #3942e5);
  @apply flex justify-center items-center transition duration-500 ease-in-out;
  box-shadow: 0 12px 20px rgb(0 0 0/0.2);
  .social-icon {
    width: 32px;
    @media screen and (max-width: 768px) {
      width: 22px;
    }
  }
  &:hover {
    transform: scale(1.1);
    background-position: 99% 50%;
  }
}
</style>