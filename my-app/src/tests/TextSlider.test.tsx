import React from 'react'
import renderer from 'react-test-renderer'
import TextSlider from "../components/TextSlider"

test("Test Header", () => {
    const tree = renderer.create(<TextSlider />).toJSON()
    expect(tree).toMatchSnapshot()
})