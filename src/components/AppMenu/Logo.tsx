import React, { FC } from 'react'
import PropTypes from 'prop-types'
import GLOBAL_LIST from 'constants/globalList'
import { useNavigate } from 'react-router-dom'
import url from 'assets/images/logo.svg'

interface Props {
  title?: string
  showTitle?: boolean
}

const Logo: FC<Props> = ({ ...props }) => {
  const { title, showTitle } = props
  const navigate = useNavigate()

  const handleClick = (url = '') => {
    navigate(url)
  }

  return (
    <>
      <div className="logo flex items-center">
        <img
          onClick={() => handleClick()}
          style={{ cursor: 'pointer' }}
          src={url}
          alt="logo"
          className="h-5 w-5"
        />
        {showTitle && (
          <>
            <h1 className="capitalize">{title}</h1>
          </>
        )}
      </div>
    </>
  )
}
Logo.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
}
Logo.defaultProps = {
  title: GLOBAL_LIST.PROJECT_NAME,
  showTitle: true,
}

export default Logo
