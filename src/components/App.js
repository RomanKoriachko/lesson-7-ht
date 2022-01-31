import React from 'react'

const Header = (props) => {
    return (
        <h1>
            {props.id}. Hello {props.title}
        </h1>
    )
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
            <Header title="React" id={1} />
            <Header title="App.js" id={2} />
            <Text />
        </>
    )
}

export default App
