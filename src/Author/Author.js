import React from 'react'
import './scss/Author.scss'

class Author extends React.Component {
    static id = "author"
    static className = "footer"
    static alias = "darasmussen"
    static tag = "drGeo"
    static test = "Created by"
    static href = `https://www.freecodecamp.org/${Author.alias}`
    static target = "_blank"

    render() {
        const { id, className, test, href, target, tag } = Author;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <a href={href} target={target}>
                    <code>{tag}</code>
                </a>
            </div>
        )
    }
}

export default Author;