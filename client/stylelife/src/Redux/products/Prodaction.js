import axios from "axios";
import { GET_PRODUCT, Loading, Filter } from "./ProdactionTypes";

export const getdata =
  (page = 1, sort = "", order = false, cat = "restro") =>
  async (dispatch) => {
    dispatch({ type: Loading });
    let val = order ? "asc" : "desc";
    if (sort == "pop") {
      try {
        let res = await axios.get(
          `https://nice-ruby-tortoise.cyclic.app/${cat}/filter?page=${page}&&popular=true&&limit=6`
        );
        dispatch({ type: GET_PRODUCT, payload: res.data });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let res = await axios.get(
          `https://nice-ruby-tortoise.cyclic.app/${cat}/filter?page=${page}&&sort=${val}&limit=6`
        );
        dispatch({ type: GET_PRODUCT, payload: res.data });
      } catch (err) {
        console.log(err);
      }
    }

    // try {
    //   let res = await axios.get(
    //     `https://nice-ruby-tortoise.cyclic.app/${cat}?_page=${page}&_limit=12&_sort=${sort}&_order=${order}`
    //   );

    //   dispatch({ type: GET_PRODUCT, payload: res.data });
    // } catch (e) {
    //   console.log(e);
    // }
  };

export const filterdata = (val, page, sort, order, cat) => async (dispatch) => {
  dispatch({ type: Loading });

  let v = order ? "asc" : "desc";
  let res;
  if (sort == "pop") {
    try {
      res = await axios.get(
        `https://nice-ruby-tortoise.cyclic.app/${cat}/filter?page=${page}&&popular=true&&limit=6`
      );
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      res = await axios.get(
        `https://nice-ruby-tortoise.cyclic.app/${cat}/filter?page=${page}&&sort=${v}&limit=6`
      );
    } catch (err) {
      console.log(err);
    }
  }
  // let res = await axios.get(
  //   `https://nice-ruby-tortoise.cyclic.app/${cat}?_page=${page}&_limit=30&_sort=${sort}&_order=${order}`
  // );
  // console.log(val);
  let filtered = res.data.filter((el) => {
    if (el.address !== null && el.address.includes(val)) {
      return el;
    }
  });

  dispatch({ type: Filter, payload: filtered });
};
