<template>
  <div class="c-list__header">
    <div class="c-list__operations">
      <slot name="operations" />
    </div>
    <div class="c-list__filters">
      <slot name="filters" />
    </div>
  </div>
  <slot name="default" />
  <pagination :total="total" :page-size="pageSize" />
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
