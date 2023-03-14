import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Exception403 = () => {
  const navigate = useNavigate()

  const handleNavigate = (url = '') => {
    navigate(url)
  }
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button
          type="primary"
          onClick={() => {
            handleNavigate('/')
          }}
        >
          Back Home
        </Button>
      }
    />
  )
}

export default Exception403
