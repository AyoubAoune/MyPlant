/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoPlant1 from "assets/images/small-logos/plant_1.svg";
import LogoPlant2 from "assets/images/small-logos/plant_2.svg";
import LogoPlant3 from "assets/images/small-logos/plant_3.svg";
import LogoPlant4 from "assets/images/small-logos/plant_4.svg";
import LogoPlant5 from "assets/images/small-logos/plant_5.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Plant Name", accessor: "plant_name", width: "30%", align: "left" },
      { Header: "Plant ID", accessor: "plant_id", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Water Level", accessor: "water_level", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        plant_name: <Project image={LogoPlant1} name="Ageratum houstonianum" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Good level
          </MDTypography>
        ),
        water_level: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        plant_name: <Project image={LogoPlant2} name="Tagetes erecta" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
            Too much water
          </MDTypography>
        ),
        water_level: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        plant_name: <Project image={LogoPlant3} name="Catharanthus roseus" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
            Not enough water
          </MDTypography>
        ),
        water_level: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        plant_name: <Project image={LogoPlant4} name="Sutera cordata" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Good level
          </MDTypography>
        ),
        water_level: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        plant_name: <Project image={LogoPlant5} name="Platycodon grandiflorus" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
            No water
          </MDTypography>
        ),
        water_level: <Progress color="error" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        plant_name: <Project image={LogoPlant3} name="Kolkwitzia amabilis" />,
        plant_id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
            Too much water
          </MDTypography>
        ),
        water_level: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
