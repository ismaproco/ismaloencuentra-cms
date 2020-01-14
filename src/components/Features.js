import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <a href={item.link} target="_blank">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </a>
          </div>
          <p className="has-text-centered">
            {item.text}
            <br />
            <a href={item.link} target="_blank">{item.link}</a>
          </p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
