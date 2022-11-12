import { render, cleanup, screen } from '@testing-library/react'
import UserItem from 'src/components/UserItem'
import { userData } from 'src/tests/unit/constants'

beforeEach(() => {
  cleanup()
  render(<UserItem user={userData} />)
})

describe('UserItem', () => {
  it('Should component render correctly', () => {
    const userListItem = screen.getByTestId('userListItem')
    const listItemAvatar = screen.getByTestId('listItemAvatar')
    const avatar = screen.getByTestId('avatar')
    const imageIcon = screen.getByTestId('imageIcon')
    const listItemText = screen.getByTestId('listItemText')
    const street = screen.getByTestId('street')
    const suite = screen.getByTestId('suite')
    const city = screen.getByTestId('city')
    const zipcode = screen.getByTestId('zipcode')
    const geo = screen.getByTestId('geo')
    const userIconButton = screen.getByTestId('userIconButton')
    const collectionIcon = screen.getByTestId('collectionIcon')
    expect(userListItem).toContainElement(listItemAvatar)
    expect(userListItem).toContainElement(avatar)
    expect(userListItem).toContainElement(imageIcon)
    expect(userListItem).toContainElement(listItemText)
    expect(userListItem).toContainElement(street)
    expect(userListItem).toContainElement(suite)
    expect(userListItem).toContainElement(city)
    expect(userListItem).toContainElement(zipcode)
    expect(userListItem).toContainElement(geo)
    expect(userListItem).toContainElement(userIconButton)
    expect(userListItem).toContainElement(collectionIcon)
  })

  it('should imageIcon have correct props', () => {
    const imageIcon = screen.getByTestId('imageIcon')
    expect(imageIcon).toHaveAttribute('aria-hidden', 'true')
    expect(imageIcon).toHaveAttribute('class', 'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root')
    expect(imageIcon).toHaveAttribute('focusable', 'false')
    expect(imageIcon).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('should userIconButton have correct props', () => {
    const userIconButton = screen.getByTestId('userIconButton')
    expect(userIconButton).toHaveAttribute('aria-label', 'Gallery')
    expect(userIconButton).toHaveAttribute('tabindex', '0')
    expect(userIconButton).toHaveAttribute('type', 'button')
  })

  it('should collectionIcon have correct props', () => {
    const collectionIcon = screen.getByTestId('collectionIcon')
    expect(collectionIcon).toHaveAttribute('aria-hidden', 'true')
    expect(collectionIcon).toHaveAttribute(
      'class',
      'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root'
    )
    expect(collectionIcon).toHaveAttribute('focusable', 'false')
    expect(collectionIcon).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it(`listItemText should be updated as '${userData.name}'`, () => {
    const listItemText = screen.getByTestId('listItemText')
    expect(listItemText).toHaveTextContent(userData.name)
  })

  it(`street should be updated as '${userData.address.street}'`, () => {
    const street = screen.getByTestId('street')
    expect(street).toHaveTextContent(userData.address.street)
  })

  it(`suite should be updated as '${userData.address.suite}'`, () => {
    const suite = screen.getByTestId('suite')
    expect(suite).toHaveTextContent(userData.address.suite)
  })

  it(`city should be updated as '${userData.address.city}'`, () => {
    const city = screen.getByTestId('city')
    expect(city).toHaveTextContent(userData.address.city)
  })

  it(`zipcode should be updated as '${userData.address.zipcode}'`, () => {
    const zipcode = screen.getByTestId('zipcode')
    expect(zipcode).toHaveTextContent(userData.address.zipcode)
  })

  it(`geo should be updated as '${userData.address.geo.lat} - ${userData.address.geo.lng}'`, () => {
    const geo = screen.getByTestId('geo')
    expect(geo).toHaveTextContent(`${userData.address.geo.lat} - ${userData.address.geo.lng}`)
  })
})
