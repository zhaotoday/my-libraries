"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var dayjs=_interopDefault(require("dayjs")),index={DATE_FORMATTER:"YYYY-MM-DD",TIME_FORMATTER:"YYYY-MM-DD HH:mm",getDate:function(t){return dayjs(t||"").format(this.DATE_FORMATTER)},getTime:function(t){return dayjs(t||"").format(this.TIME_FORMATTER)},format:function(t,e){return dayjs(t||"").format(e)},add:function(t,e,r){return dayjs(t||"").add(e,r)}};module.exports=index;
//# sourceMappingURL=index.js.map
