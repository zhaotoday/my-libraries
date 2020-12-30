import { useRouter } from "vue-router";
import $REST from "jt-rest";
import { ElMessage } from "element-plus";

export class REST extends $REST {
  showLoading() {}

  hideLoading() {}

  toString(obj = {}) {
    const ret = {};

    Object.keys(obj).forEach(v => {
      const types = Object.keys(obj[v]);

      if (types.length) {
        ret[v] = {};

        types.forEach(type => {
          if (obj[v][type] === undefined || obj[v][type] === "") {
            delete ret[v];
          } else if (type === "$like") {
            ret[v][type] = `%${obj[v][type]}%`;
          } else {
            ret[v] = obj[v];
          }
        });
      } else {
        if (
          typeof obj[v] !== "object" &&
          obj[v] !== undefined &&
          obj[v] !== "" &&
          obj[v] !== 0
        ) {
          ret[v] = obj[v];
        }
      }
    });

    return JSON.stringify(ret);
  }

  request(
    method = "GET",
    { id, query = {}, body = {}, showLoading = false, showError = true }
  ) {
    query.where = this.toString(query.where);

    if (query.include) {
      query.include = JSON.stringify(query.include);
    }

    if (query.order) {
      query.order = JSON.stringify(query.order);
    }

    if (query.attributes) {
      query.attributes = JSON.stringify(query.attributes);
    }

    if (method === "GET") {
      query._ = new Date().getTime();
    }

    showLoading && this.showLoading();

    return new Promise((resolve, reject) => {
      super
        .request(method, { id, query, body })
        .then(res => {
          showLoading && this.hideLoading();
          resolve(res.data);
        })
        .catch(({ response: res }) => {
          showLoading && this.hideLoading();

          if (res.status === 401) {
            ElMessage.error("登入过期，请重新登入");
            useRouter().push("/logout");
          } else {
            if (showError) {
              if (res.status === 500) {
                ElMessage.error("服务器出错");
              } else {
                ElMessage.error(res.data.error.message);
              }
            } else {
              reject(res.data.error);
            }
          }
        });
    });
  }
}
