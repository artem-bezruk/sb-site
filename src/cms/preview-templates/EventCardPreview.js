import React from 'react'
import PropTypes from 'prop-types'
import { EventCardTemplate } from '../../templates/event'
const EventCardPreview = ({ entry, widgetFor }) => (
  <EventCardTemplate
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    start={entry.getIn(['data', 'start'])}
    end={entry.getIn(['data', 'end'])}
    image={entry.getIn(['data', 'image'])}
    event-url={entry.getIn(['data', 'event-url'])}
  />
)
EventCardPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}
export default EventCardPreview
