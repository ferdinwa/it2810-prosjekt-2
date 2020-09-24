import React from 'react'
import renderer from 'react-test-renderer'
import Header from "../components/Header"

test("Test Header", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
})