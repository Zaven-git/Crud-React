import { connect } from 'react-redux'

import { ImageRepresentation as Self } from './ImageRepresentation'
import { addImageToCard } from '../../store/actions/images'

const mapDispatchToProps = {
  addImageToCard
}

const mapStateToProps = ({ images }) => ({
  featured: images.featured,
})
export const ImageRepresentation = connect(mapStateToProps, mapDispatchToProps)(Self)