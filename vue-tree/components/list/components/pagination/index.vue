<template>
  <div class="c-list__pagination">
    <el-pagination
      background
      @current-change="onCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="total"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
