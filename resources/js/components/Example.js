import React from 'react'
import ReactDOM from 'react-dom'

import Test from '@components/Test'

function Example () {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-md-8'>
					<div className='card'>
						<div className='card-header'>Example Component</div>
						<div className='card-body'>I'm an example component!</div>
					</div>
				</div>
			</div>
			<div className='row justify-content-center'>
				<Test></Test>
			</div>
		</div>
	)
}

function renderToDOM () {
	if (document.getElementById('mainDiv')) {
		ReactDOM.render(<Example />, document.getElementById('mainDiv'))
	}
}
renderToDOM()

export { renderToDOM }

export default Example
