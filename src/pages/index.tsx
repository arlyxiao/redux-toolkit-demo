import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'components/Counter'
import { Pokemon } from 'components/Pokemon'

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
        <Counter />
        <h4>Pokemon example</h4>
        <Pokemon />
      </nav>
    </div>
  )
}
