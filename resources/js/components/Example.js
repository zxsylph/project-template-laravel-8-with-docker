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

export default Example
console.log('example')
if (document.getElementById('mainDiv')) {
	console.log('found div')
	ReactDOM.render(<Example />, document.getElementById('mainDiv'))
}
