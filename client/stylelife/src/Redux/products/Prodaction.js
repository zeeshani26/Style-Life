import axios from "axios";
import { GET_PRODUCT, Loading, Filter } from "./ProdactionTypes";

export const getdata =
  (page = 1, sort = "rating", order = "", cat = "restro") =>
  async (dispatch) => {
    dispatch({ type: Loading });

    try {
      fetch(`http://glorious-bass-poncho.cyclic.app/${cat}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_PRODUCT, payload: res.data });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
    // try {
    //   let res = await axios.get(
    //     `https://glorious-bass-poncho.cyclic.app/${cat}?_page=${page}&_limit=12&_sort=${sort}&_order=${order}`
    //   );

    //   dispatch({ type: GET_PRODUCT, payload: res.data });
    // } catch (e) {
    //   console.log(e);
    // }
  };

export const filterdata = (val, page, sort, order, cat) => async (dispatch) => {
  dispatch({ type: Loading });

  let res = await axios.get(
    `http://localhost:8080/${cat}?_page=${page}&_limit=30&_sort=${sort}&_order=${order}`
  );
  console.log(val);
  let filtered = res.data.filter((el) => {
    if (el.address !== null && el.address.includes(val)) {
      return el;
    }
  });

  dispatch({ type: Filter, payload: filtered });
};
