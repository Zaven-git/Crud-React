import { connect } from 'react-redux'

import { Description as Self } from './Description'

const mapStateToProps = ({ images }) => ({
  featured: images.featured,
})
export const Description = connect(mapStateToProps, null)(Self)