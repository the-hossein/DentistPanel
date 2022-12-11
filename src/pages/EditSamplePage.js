import React from 'react'
import { Box } from '../components/Box/Box'
import { Container } from '../components/Container/Container'
import Nav from '../components/Navbar/Nav'
import UpdateSample from '../components/Sections/Sample/UpdateSample/UpdateSample'
import Loader from '../tools/loader/Loader'

const EditSamplePage = () => {
  return (
    <>
    <Nav />
    <Container
      title=" ویرایش"
      child={
        <>
         <Box children={<UpdateSample />} />
        </>
      }
    />
  </>
  )
}

export default EditSamplePage