import React, { useEffect } from "react";
import { Box } from "../Components/Box/Box";
import { Container } from "../Components/Container/Container";
import Nav from "../Components/Navbar/Nav";
import ReserveTable from "../Components/Sections/ReservTable/ReserveTable";
import { CheckLoginAction } from "../services/checkLogin";

const DashbardPage = () => {
 
  return (
    <>
      <Nav />
      <Container
        title="دشبورد"
        child={
          <>
            <Box children={<ReserveTable />} />
          </>
        }
      />
    </>
  );
};

export default DashbardPage;
