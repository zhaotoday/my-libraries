import { ref } from "vue";
import consts from "@/utils/consts";

export default {
  name: "ListPagination",
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: consts.PageSize
    }
  },
  setup() {
    const currentPage = ref(0);

    const onCurrentChange = e => {
      console.log(e);
    };

    return {
      currentPage,
      onCurrentChange
    };
  }
};
