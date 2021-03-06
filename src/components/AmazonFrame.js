import React from 'react'
import PropTypes from 'prop-types'

const AmazonFrame = ({ data }) => (
  <div className="content">
    <iframe
      style={{ width: '16em', height: '32em' }}
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
      frameBorder="0"
      src={data}
    ></iframe>
  </div>
)

AmazonFrame.propTypes = {
  data: PropTypes.string,
}

export default AmazonFrame
