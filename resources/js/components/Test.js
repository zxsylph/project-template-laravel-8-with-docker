import React, { useState, useEffect } from 'react'

function Test () {
	const [count, setCount] = useState(0)

	const handleAddClick = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		console.log(count)
	}, [count])

	return (
		<>
			{count}
			<button onClick={handleAddClick}>add</button>
		</>
	)
}

export default Test
