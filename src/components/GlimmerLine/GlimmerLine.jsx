import React from 'react'

function GlimmerLine({style}) {

  return (
    <>
      <div className="glimmer-line" style={style} data-testid="glimmer-line" />
    </>
  )
}

export default GlimmerLine