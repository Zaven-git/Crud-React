import {IMAGE_TYPES} from '../types/images'
import Api from '../../api/index';

export const getImages = (credentials) => async dispatch => {
  try {
    let res = await Api.image('getImages', credentials)
    if (res) {
      let newData = [];
      let paginatedData = [];
      if (!credentials.categories) {
        newData = res.data
      } else {
        credentials.categories.split(',').forEach((c) => {
          newData = [...newData, res.data.filter(e => e.category === c)].flat(Infinity)
        })
      }
      if(credentials.prices){
        if (credentials.prices.includes('-')) {
          let [start, end] = credentials.prices.split('-');
          if (!start) {
            newData = newData.filter(e => e.price < end);
          }
          if (start && end) {
            newData = newData.filter(e => e.price > start && e.price < end)
          }
        };
        if (credentials.prices.includes('+')) {
          newData = newData.filter(e => e.price > credentials.prices.split('+')[1])
        };
      }
      newData.sort((a, b) => credentials.order === '-'
        ? (a[credentials.sort] - b[credentials.sort]) : (b[credentials.sort] - a[credentials.sort]))
      let endCount = res.perPage * credentials.page
      let startCount = endCount - res.perPage;
      paginatedData = newData.length <= res.perPage ? newData : newData.slice(startCount, endCount)
      dispatch({
        type: IMAGE_TYPES.GET_IMAGES,
        payload: {list: paginatedData, pageCount: Math.ceil(newData.length / res.perPage)}
      })
    }
  } catch (ex) {
    console.log(ex)
  }
}

export const addImageToCard = (image) => async dispatch => {
  try {
    let res = Api.image('addImageToCard', image)
    if (res.success) {
      dispatch({
        type: IMAGE_TYPES.ADD_IMAGE_TO_CARD,
        payload: {Tree: res.data}
      })
    }
  } catch (message) {
    console.log(message)
  }
}

export const removeImgFromBadge = (TreeId) => async dispatch => {
  try {
    let res = await Api.image('removeImgFromBadge', TreeId)
    if (res.success) {
      dispatch({
        type: IMAGE_TYPES.DELETE_IMAGE,
        payload: {id: TreeId}
      })
    }
  } catch (message) {
    console.log(message)
  }
}

export const getFilters = () => async dispatch => {
  try {
    let res = await Api.image('getFilters')
    if (res.success) {
      dispatch({
        type: IMAGE_TYPES.GET_FILTERS,
        payload: {categories: res.data}
      })
    }
  } catch (message) {
    console.log(message)
  }
}

export const getFeatured = () => async dispatch => {
  try {
    let res = await Api.image('getFeatured')
    if (res) {
      dispatch({
        type: IMAGE_TYPES.GET_FEATURED,
        payload: res[0]
      })
    }
  } catch (message) {
    console.log(message)
  }
}