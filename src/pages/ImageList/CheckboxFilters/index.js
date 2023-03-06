import { connect } from 'react-redux'

import { CheckboxFilters as Self } from './CheckboxFilters'
import { getFilters,getImages } from '../../../store/actions/images'

const mapDispatchToProps = {
  getFilters,
  getImages
}

const mapStateToProps = ({ images }) => ({
  categories: images.categories,
})

export const CheckboxFilters = connect(mapStateToProps, mapDispatchToProps)(Self)