import {IMAGE_TYPES} from '../types/images'

const initialState = {
  loading: false,
  list: [{
    name: "",
    category: "",
    price: 0,
    currency: "USD",
    image: {
      src: "",
      alt: ""
    },
    bestseller: false,
    featured: false,
    details: {
      dimmentions: {
        width: 0,
        height: 0
      },
      size: 0,
      description: "",
      recommendations: [
        {
          src: "",
          alt: ""
        },
        {
          src: "",
          alt: ""
        },
        {
          src: "",
          alt: ""
        }
      ]
    }
  },],
  pageCount: 0,
  categories: [],
  featured: {},
  itemsInBadge: [],
  badgeIsOpen: false
}

export const images = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_TYPES.GET_IMAGES:
      return {
        ...state,
        list: action.payload.list,
        pageCount: action.payload.pageCount
      }
    case IMAGE_TYPES.GET_FILTERS:
      return {
        ...state,
        categories: action.payload.categories
      }
    case IMAGE_TYPES.GET_FEATURED:
      return {
        ...state,
        featured: action.payload
      }
    case IMAGE_TYPES.ADD_IMAGE_TO_CARD:
      return {
        ...state,
        list: state.list.concat(action.payload.tree)
      }
    case IMAGE_TYPES.DELETE_IMAGE:
      return {
        ...state,
        list: state.list.filter(tree => tree.id !== action.payload.id)
      }
    case IMAGE_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case IMAGE_TYPES.SET_ITEM_TO_BADGE:
      let items = [...state.itemsInBadge.filter(e => e.id !== action.payload.newBadge.id), action.payload.newBadge]
      return {
        ...state,
        itemsInBadge: items,
        badgeIsOpen: true,
      }
    case IMAGE_TYPES.TOGGLE_BADGE_MENU:
      return {
        ...state,
        badgeIsOpen: action.payload
      }
    case IMAGE_TYPES.CLEAR_BADGE:
      return {
        ...state,
        itemsInBadge: [],
        badgeIsOpen: false
      }
    default:
      return state
  }
}