import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in state', () => {
    const component = create(<ProfileStatus status={'it-kamasutra.com'} />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('it-kamasutra.com')
  })

  test('after creation span with status should be displayed', () => {
    const component = create(<ProfileStatus status={'it-kamasutra.com'} />)
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('after creation span with status should be `it-kamasutra`', () => {
    const component = create(<ProfileStatus status={'it-kamasutra.com'} />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children.toString()).toBe('it-kamasutra.com')
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status={'it-kamasutra.com'} />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('it-kamasutra.com')
  })

})