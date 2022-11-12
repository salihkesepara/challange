import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'src/store/actions/userActions'
import { List } from '@mui/material'
import UserItem from 'src/components/UserItem'

/* ----------------------------------- dts ---------------------------------- */
import UserTypes from 'src/dts/userTypes'
import HomePropsTypes from 'src/dts/homePropsTypes'
import UserActionTypes from 'src/dts/userActionTypes'
import Container from 'src/components/Container'

const Home = (props: HomePropsTypes) => {
  const { users, userActions } = props
  useEffect(() => {
    userActions?.getUsersRequest()
  }, [])

  return (
    <Container status={users?.status}>
      <List>
        {users?.data?.map((user: UserTypes, key: string) => {
          return (
            <UserItem
              user={user}
              key={key}
            />
          )
        })}
      </List>
    </Container>
  )
}

const mapStateToProps = ({ user }: any) => {
  return {
    users: user?.users
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userActions: bindActionCreators<UserActionTypes, any>(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
