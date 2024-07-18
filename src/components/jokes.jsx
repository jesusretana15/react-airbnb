import jokesData from "../jokes.js"
import Joke from "./joke.jsx"

export default 

function Jokes() {
    const jokeElements = jokesData.map(joke => {

        return <Joke setup = {joke.setup} punchline = {joke.punchline}/>
    })
 

    return (
        jokeElements 
    )
}