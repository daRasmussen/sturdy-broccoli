import React from 'react'

class Author extends React.Component {
    static id = "author"
    static className = "footer"
    static alias = "darasmussen"
    static test = "Created by"
    static href = `https://www.freecodecamp.org/${Author.alias}`
    static target = "_blank"

    render() {
        const { id, className, test, href, target, alias } = Author;
        return (
            <div id={id} className={className}>
                <h1>{test}</h1>
                <a href={href} target={target}>
                    <code>{alias}</code>
                </a>
            </div>
        )
    }
}

export default Author;