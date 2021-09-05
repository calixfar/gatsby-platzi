import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'

export default function cancelacion() {
  return (
    <div>
      <SEO/>
      <Purchase>
        <h2>Cancelación solicitada</h2>
        <p>Esperamos vuelvas pronto</p>
        <Link to="/">
          <Button>
            Volver al catálogo
          </Button>
        </Link>
      </Purchase>
    </div>
  )
}
