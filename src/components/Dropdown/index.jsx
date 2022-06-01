import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

function Dropdown({ children, heading }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? 'Dropdown Dropdown--open' : 'Dropdown'}>
      <div className="Dropdown-trigger-wrapper">
        <h3 className="Dropdown__label">{heading}</h3>
        <button
          className="Dropdown__trigger"
          onClick={() => {
            !isOpen ? setIsOpen(true) : setIsOpen(false)
          }}
        >
          <svg
            className="Dropdown__trigger__icon"
            width="15"
            height="13"
            viewBox="0 0 25 15"
            fill="none"
          >
            <path
              d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      {children}
    </div>
  )
}

Dropdown.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Dropdown.defaultProps = {
  heading: 'Nom du menu déroulant',
  children: (
    <p
      style={{
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
      }}
    >
      Contenu du menu déroulant
    </p>
  ),
}

export default Dropdown
