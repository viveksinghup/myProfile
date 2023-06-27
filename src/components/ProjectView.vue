<template>
    <div
        class="fixed top-0 left-0 right-0 w-full min-h-screen bg-white project-modal"
        :class="$props && $props.customClass"
    >
        <div class="absolute base-info-bg right-0 bg-lightblue">
            <ul
                class="skills absolute bottom-0 left-0 ml-16 mb-10 flex space-x-6"
            >
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="vuejs" />
                </li>
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="html" />
                </li>
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="css" />
                </li>
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="angular" />
                </li>
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="git" />
                </li>
                <li
                    class="overflow-hidden block w-12 h-12 bg-white rounded-full"
                >
                    <Icon name="ps" />
                </li>
            </ul>
        </div>
        <div
            @click="close"
            class="pm-cross absolute inline-block w-10 h-10 cursor-pointer"
        >
            <Icon name="cross" />
        </div>
        <div class="container">
            <div class="w-full h-24 mt-16 mx-auto pm-content">
                <div
                    class="base-info relative overflow-hidden md:overflow-visible"
                >
                    <div class="text-4xl font-serif text-blue">01</div>
                    <div class="text-lg text-gray-10 flex items-center">
                        <div class="p-1 w-8 h-8 img-block">
                            <Icon name="category" />
                        </div>
                        <span class="ml-4">{{
                            $props &&
                                $props.selectedProject &&
                                $props.selectedProject.category
                        }}</span>
                    </div>
                    <div
                        class="cover-role mt-6 text-black text-2xl md:text-6xl font-serif inline-block z-10 relative bg-white py-2 pr-10"
                    >
                        {{
                            $props &&
                                $props.selectedProject &&
                                $props.selectedProject.name
                        }}
                    </div>
                    <div
                        class="text-lg text-gray-10 mt-10 md:mt-0 flex items-center"
                    >
                        <div class="p-1 w-8 h-8 img-block">
                            <Icon name="team" />
                        </div>
                        <span class="ml-4"
                            >Team:
                            {{
                                $props &&
                                    $props.selectedProject &&
                                    $props.selectedProject.team
                            }}</span
                        >
                    </div>
                    <div class="mt-10">
                        <a
                            class="btn"
                            :href="
                                $props &&
                                    $props.selectedProject &&
                                    $props.selectedProject.link
                            "
                            target="_blank"
                            >Visit Website</a
                        >
                    </div>
                </div>
                <div
                    class="mx-auto mt-16 mb-20 md:mb-32 md:mt-48 w-full md:w-11/12"
                >
                    <div class="text-xl text-gray-10 text-center mb-20">
                        {{
                            $props &&
                                $props.selectedProject &&
                                $props.selectedProject.description
                        }}
                    </div>
                    <div class="w-full">
                        <img
                            class="w-full img"
                            :src="
                                $props &&
                                    $props.selectedProject &&
                                    $props.selectedProject.image
                            "
                            :alt="
                                $props &&
                                    $props.selectedProject &&
                                    $props.selectedProject.name
                            "
                        />
                        <div class="h-20"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from "@/components/Icon";

export default {
    name: "ProjectView",
    props: ["customClass", "closeProjectView", "selectedProject"],
    components: { Icon },
    watch: {
        selectedProject(isClicked) {
            document.body.classList[isClicked ? "add" : "remove"](
                "overflow-y-hidden"
            );
        },
    },
    methods: {
        close() {
            this.$props && this.$props.closeProjectView();
        },
    },
};
</script>
<style lang="postcss" scoped>
.pm {
    &-cross {
        transition: 0.45s;
        transform-orgin: center;
        right: 6%;
        top: 10%;
        z-index: 1;
        &:hover {
            transform: rotate(-180deg);
        }
        @media screen and (max-width: 768px) {
            @apply bg-blue;
            &:focus {
                outline: none;
            }
        }
    }
    &-content {
        transform: translateY(30px);
        opacity: 0;
        transition: 0.35s;
        .img {
            border: 1px solid #ececec;
            border-radius: 8px;
        }
    }
}
.base-info {
    &-bg {
        width: 0%;
        height: calc((100% - 430px));
        margin-right: -100px;
        overflow: hidden;
        img {
            object-fit: cover;
        }
        .skills {
            li {
                padding: 8px;
                opacity: 0;
                transition: 0.45s;
                transform: scale(0);
            }
        }
    }
}
.project-modal {
    opacity: 0;
    transition: 0.25s;
    pointer-events: none;
    overflow-y: auto;
    overflow-x: hidden;
    &.reveal {
        opacity: 1;
        z-index: 11;
        pointer-events: all;
        .pm-content {
            transform: translateY(0px);
            opacity: 1;
            transition-delay: 0.25s;
        }
        .base-info-bg {
            transform-origin: right;
            width: 70%;
            transition: 1s;
            transition-delay: 0.35s;
            @media screen and (max-width: 768px) {
                opacity: 0;
            }
            .skills {
                li {
                    opacity: 1;
                    transition-delay: 1.2s;
                    transform: scale(1);
                }
                li:nth-child(2) {
                    transition-delay: 1.3s;
                }
                li:nth-child(3) {
                    transition-delay: 1.4s;
                }
                li:nth-child(4) {
                    transition-delay: 1.5s;
                }
                li:nth-child(5) {
                    transition-delay: 1.6s;
                }
                li:nth-child(6) {
                    transition-delay: 1.7s;
                }
            }
        }
    }
}
</style>
