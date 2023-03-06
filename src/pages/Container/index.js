import { connect } from 'react-redux'

import { Container as Self } from './Container'
import {getFeatured } from '../../store/actions/images'

const mapDispatchToProps = {
  getFeatured
}
export const Container = connect(null, mapDispatchToProps)(Self)