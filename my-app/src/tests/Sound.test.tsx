import React from 'react'
import renderer from 'react-test-renderer'
import Sound from '../components/Sound'

test("Test Sound", () => {
    const tree = renderer.create(<Sound />).toJSON()
    expect(tree).toMatchSnapshot()
})