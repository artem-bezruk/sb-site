import React from 'react'
import PropTypes from 'prop-types'
import { ExecomPageTemplate } from '../../templates/execom-page'
const ExecomPagePreview = ({ entry, widgetFor }) => (
  <ExecomPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)
ExecomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default ExecomPagePreview
