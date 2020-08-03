import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    const total = part1.exercises + part2.exercises + part3.exercises;

    const Header = (props) => {
        console.log(props)
        return (
            <div>
                <h1>{props.course}</h1>
            </div>
        )
    }

    const Part = (props) => {
        return (
            <div>
                <p>{props.part} {props.exercise}</p>
            </div>
        )
    }
    const Content = (props) => {
        return (
            <div>
                <Part part = 'Fundamentals of React' exercise = '10' />
                <Part part = 'Using props to pass data' exercise = '7' />
                <Part part = 'State of a component' exercise = '14' />
            </div>
        )
    }
    const Total = (props) => {
        return (
            <div>
                {props.total}
            </div>
        )
    }
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Header course = {course} />
            <Content />
            <Total  Number of exercises total ={total}  />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
