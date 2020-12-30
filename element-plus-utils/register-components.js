import { Vue } from "vue-property-decorator";
import BulkDelete from "../components/bulk-delete";
import CategorySelect from "../components/category-select";
import ConfirmButton from "../components/confirm-button";
import DateRange from "../components/date-range";
import Dropdown from "../components/dropdown";
import Editor from "../components/editor";
import Icon from "../components/icon";
import IconSelect from "../components/icon-select";
import List, {
  ListHeader,
  ListNavigation,
  ListOperations,
  ListSearch
} from "../components/list";
import ListImage from "../components/list-image";
import Map from "../components/map";
import Uploader from "../components/uploader";
import WxUserInfo from "../components/wx-user-info";
import WxUserSelect from "../components/wx-user-select";

Vue.component("c-bulk-delete", BulkDelete);
Vue.component("c-category-select", CategorySelect);
Vue.component("c-confirm-button", ConfirmButton);
Vue.component("c-date-range", DateRange);
Vue.component("c-dropdown", Dropdown);
Vue.component("c-editor", Editor);
Vue.component("c-icon", Icon);
Vue.component("c-icon-select", IconSelect);
Vue.component("c-list", List);
Vue.component("c-list-header", ListHeader);
Vue.component("c-list-operations", ListOperations);
Vue.component("c-list-search", ListSearch);
Vue.component("c-list-navigation", ListNavigation);
Vue.component("c-list-image", ListImage);
Vue.component("c-uploader", Uploader);
Vue.component("c-wx-user-info", WxUserInfo);
Vue.component("c-wx-user-select", WxUserSelect);
Vue.component("c-map", Map);
