<script setup>
import NotificationIcon from "@/Icons/NotificationIcon.vue";
import Dropdown from "@/Components/Dropdown.vue";
</script>

<template>
  <Dropdown width="80">
    <template #trigger>
      <button
        class="px-4 relative text-xl text-gray-800 rounded-full hover:text-primary-500 focus:outline-none focus:text-primary-600 transition duration-150 ease-in-out"
      >
        <NotificationIcon />
      </button>
    </template>

    <template #content>
      <div class="p-4">notification content</div>
    </template>
  </Dropdown>
</template>

<style lang="scss" scoped></style>
