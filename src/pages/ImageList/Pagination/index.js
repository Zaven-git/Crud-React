import { connect } from 'react-redux'

import { Pagination as Self } from './Pagination'

const mapStateToProps = ({ images }) => ({
  pageCount: images.pageCount,
})

export const Pagination = connect(mapStateToProps, null)(Self)