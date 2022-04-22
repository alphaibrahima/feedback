import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
        <div>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

// text par defaut en cas si le props n'existe pas
Header.defaultProps = {
    text: 'Feedback UI',
}


Header.propTypes = {
    text: PropTypes.string.isRequired
}
export default Header