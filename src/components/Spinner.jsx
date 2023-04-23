import React from 'react'
import Lottie from 'lottie-react'
import loading from '@assets/lottie/loading'

const Spinner = props => {
  const style = {
    height: props.height ?? 500,
    width: props.height ?? 500,
    display: 'flex',
    alignItems: 'center',
    justifiyContent: 'center',
  }

  return (
    <div className="flex items-center justify-center pt-[10%]">
      <Lottie animationData={loading} loop={true} style={style} />
    </div>
  )
}

export default Spinner
