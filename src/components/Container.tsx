import { LinearProgress, Container as MUIContainer } from '@mui/material'
import ContainerPropTypes from 'src/dts/containerPropTypes'
import { STATUS } from 'src/constants'

const Container = (props: ContainerPropTypes) => {
  const {
    children,
    status
  } = props
  return (
    <>
      {status === STATUS.PENDING
        ? <LinearProgress className="linear-progress" />
        : null
      }
      <MUIContainer>
        {children}
      </MUIContainer>
    </>
  )
}

export default Container
