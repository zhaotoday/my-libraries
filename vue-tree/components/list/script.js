import Pagination from "./components/pagination";
import consts from "@/utils/consts";

export default {
  name: "List",
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
  components: { Pagination }
};
