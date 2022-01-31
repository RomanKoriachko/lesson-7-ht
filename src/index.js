import react from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>Hello {props.title}</h1>
}
const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur ullam nemo, temporibus earum exercitationem vitae
                esse, dolore, asperiores sapiente excepturi maiores quae. Vel
                quas perspiciatis hic nesciunt distinctio neque dolore!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur ullam nemo, temporibus earum exercitationem vitae
                esse, dolore, asperiores sapiente excepturi maiores quae. Vel
                quas perspiciatis hic nesciunt distinctio neque dolore!
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" />
            <Header title="App.js" />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
