import React from 'react'
import ReactDOM from 'react-dom'

import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() })

import Example from '@components/Example'

describe('<Example/>', () => {
	it('should render without crashing.', () => {
		const component = shallow(<Example />)
		const div = document.createElement('div')
		div.id = 'mainDiv'
		ReactDOM.render(component, div)
	})
})
