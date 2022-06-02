import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

function Dropdown({ children, heading, isAChildOfAboutComponent }) {
  const [isOpen, setIsOpen] = useState(false)
  const aboutPageModifierSuffix = '--about-page'
  const whiteSpace = ' '
  const blankString = ''

  return (
    <div
      className={`Dropdown${
        isAChildOfAboutComponent
          ? `${whiteSpace}Dropdown${aboutPageModifierSuffix}`
          : blankString
      } ${isOpen ? `${whiteSpace}Dropdown--open` : blankString}`}
    >
      <div
        className={`Dropdown-trigger-wrapper${
          isAChildOfAboutComponent
            ? `${whiteSpace}Dropdown-trigger-wrapper${aboutPageModifierSuffix}`
            : blankString
        }`}
      >
        <h3
          className={`Dropdown__label${
            isAChildOfAboutComponent
              ? `${whiteSpace}Dropdown__label${aboutPageModifierSuffix}`
              : blankString
          }`}
        >
          {heading}
        </h3>
        <button
          className={`Dropdown__trigger${
            isAChildOfAboutComponent
              ? `${whiteSpace}Dropdown__trigger${aboutPageModifierSuffix}`
              : blankString
          }`}
          onClick={() => {
            !isOpen ? setIsOpen(true) : setIsOpen(false)
          }}
        >
          <svg
            className={`Dropdown__trigger__icon${
              isAChildOfAboutComponent
                ? `${whiteSpace}Dropdown__trigger__icon${aboutPageModifierSuffix}`
                : blankString
            }`}
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
  isAChildOfAboutComponent: PropTypes.bool.isRequired,
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
  isAChildOfAboutComponent: false,
}

export default Dropdown
