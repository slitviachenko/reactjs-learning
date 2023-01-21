import React from 'react'
import { ProgressCircle } from '@react-spectrum/progress'
import styled from 'styled-components'

const BackDrop = styled.div`
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.67);
`

const Spinner = styled.div`
  width: 120px;
  height: 120px;
  margin: 40vh auto;
`

const Loading = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    props.show && (
      <BackDrop>
        <Spinner>
          <ProgressCircle aria-label="Loading…" size="L" isIndeterminate value={60} />
        </Spinner>
      </BackDrop>
    )
  )
}

export default Loading
