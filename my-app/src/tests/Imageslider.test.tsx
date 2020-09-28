import React from 'react'
import renderer from 'react-test-renderer'
import ImageSlider from "../components/ImageSlider"

test("Test Header", () => {
    const tree = renderer.create(<ImageSlider />).toJSON()
    expect(tree).toMatchSnapshot()
})