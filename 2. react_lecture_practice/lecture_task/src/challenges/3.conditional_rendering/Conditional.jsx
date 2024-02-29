import React from 'react'

function Item({name, ispacked}) {
    return(
        <li>
            {name} {ispacked && "Is packed"}
        </li>
    )
}


const Conditional = () => {
   
  return (
    <div>
        <section>
            <h1>Amazon packing list</h1>
            <ul>
                <Item ispacked={true} name="Mobile"/>
                <Item ispacked={true} name="computer"/>
                <Item ispacked={false} name="laptop"/>
                <Item ispacked={false} name="tablet"/>
                <Item ispacked={true} name="kitcenware"/>

            </ul>
        </section>
    </div>
  )
}

export default Conditional