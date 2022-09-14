import PropTypes from 'prop-types'

export const Card = ({ children, reverse, completed }) => {
  return (
    <div
      className={`card ${completed ? 'completed' : ''} ${
        reverse ? 'reverse' : ''
      }`}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
  completed: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
