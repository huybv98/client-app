import React, { FC, memo } from 'react'
import './index.scss'

interface Props {
  loading?: boolean
  type?: 'default' | 'fallback'
}

const AppSpinner: FC<Props> = memo(({ ...props }) => {
  const { loading, type } = props

  const Spinner = () => (
    <div className="ui-spinner">
      <div className="ui-spinner__loader">
        <img src="/src/assets/images/loading.gif" alt="spinner" />
        <span>abc</span>
      </div>
    </div>
  )

  return type === 'fallback' ? <Spinner /> : loading ? <Spinner /> : null
})

export default AppSpinner

AppSpinner.defaultProps = { loading: false, type: 'default' }
