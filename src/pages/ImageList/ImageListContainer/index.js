import { connect } from 'react-redux'

import { ImageListContainer as Self } from './ImageListContainer'
import { getImages } from '../../../store/actions/images'

const mapDispatchToProps = {
  getImages
}

const mapStateToProps = ({ images }) => ({
  images: images.list,
})

export const ImageListContainer = connect(mapStateToProps, mapDispatchToProps)(Self)