import React from 'react'
import { Box } from '../components/Box/Box'
import { Container } from '../components/Container/Container'
import Nav from '../components/Navbar/Nav'
import AddSample from '../components/Sections/Sample/UpdateSample/AddSample'

const AddSamplePage = () => {
  return (
    <>
    <Nav />
    <Container
      title="افزودن نمونه کار"
      child={
        <>
          <Box children={<AddSample />} />
        </>
      }
    />
  </>
  )
}

export default AddSamplePage