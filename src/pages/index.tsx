import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'components/Counter'

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
      </nav>
    </div>
  )
}
