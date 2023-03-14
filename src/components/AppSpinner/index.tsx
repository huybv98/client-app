import React, { FC, memo } from 'react'
import './index.scss'
import { LoadingOutlined } from '@ant-design/icons'
import GLOBAL_LIST from 'constants/globalList'

interface Props {
  loading?: boolean
  type?: 'default' | 'fallback'
}

const AppSpinner: FC<Props> = memo(({ ...props }) => {
  const { loading, type } = props

  const Spinner = () => (
    <div className="ui-spinner">
      <div className="ui-spinner__loader">
        {/*<img src="/src/assets/images/loading.gif" alt="spinner" />*/}
        <LoadingOutlined style={{ fontSize: 50, color: '#E731B9' }} />
        <span>{GLOBAL_LIST.PROJECT_NAME}</span>
      </div>
    </div>
  )

  return type === 'fallback' ? <Spinner /> : loading ? <Spinner /> : null
})

export default AppSpinner

AppSpinner.defaultProps = { loading: false, type: 'default' }
