import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Exception404 = () => {
  const navigate = useNavigate()

  const handleNavigate = (url = '') => {
    navigate(url)
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
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

export default Exception404
