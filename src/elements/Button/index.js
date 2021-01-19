import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Button(props) {
    return (
        <div>
            
        </div>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isLight: propTypes.bool,
    isExternal: propTypes.bool,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}