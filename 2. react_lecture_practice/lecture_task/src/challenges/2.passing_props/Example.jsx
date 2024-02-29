import React from 'react'

const Example = () => {

    const person = {
        image:'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg',
        discription : 'Amazon Web Image',
        name : 'React',
    }
  return (
    <div>
        <img src={person.image} alt={person.discription} />
        <p>{person.name} is JavaScript frameworks and {person.name} is most popular in the world</p>
    </div>
  )
}

export default Example