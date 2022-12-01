import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({setSearch}) => {
  return (
    <div>
        <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search a coin"
                            className="me-2 bg-dark text-light border-1 text-center mt-4"
                            onChange={el => setSearch(el.target.value)}
                            aria-label="Search"
                        />
        </Form>
    </div>
  )
}

export default SearchBar