import React from 'react'
import Button from 'components/Button'

const StartReadingButton = () => {
  const onClick = () => {
    console.log('start reading click')
  }

  return (
    <Button onClick={onClick} value="Click Here to Start Reading" />
  )
}

export default StartReadingButton
