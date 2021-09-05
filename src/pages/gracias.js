import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'
export default () => {
  return (
    <div>
      <SEO title="Compra Exitosa"/>
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag</p>
        <p>Sigue aprendiendo</p>
        <span role="img" aria-label="emoji">✌</span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
