import React from 'react'
import ReactDOM from 'react-dom'
import Terms from './components/Terms/terms'

const App = (): React.ReactElement => {
  return <Terms />
}

ReactDOM.render(<App />, document.getElementById('app'))
