import type { NextPage } from "next";
import Head from "next/head";
import { NFTCard } from "../components/Badges/NFTCard";
import { NavBar } from "../components/Navbar.tsx/NavBar";
import { Grid, Col, Text, Container, Row } from "@nextui-org/react";

const Badges: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lang DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar active="badges" />
        <Container>
          <Row justify="center" align="center">
            <Text
              h3
              size={30}
              css={{
                textGradient: "45deg, $blue600 -20%, $green600 50%",
              }}
              weight="bold"
            >
              Be The Community member
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Col span={10}>
              <Grid.Container gap={2} justify="center">
                <Grid md={5} lg={5} xs={12}>
                  <NFTCard />
                </Grid>
              </Grid.Container>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Text
              h3
              size={30}
              css={{
                textGradient: "45deg, $green600 -20%, $blue600 100%",
              }}
              weight="bold"
            >
              Mint Lang Skill Badge
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Col span={12}>
              <Grid.Container gap={2} justify="center">
                <Grid md={4} lg={4} xs={12}>
                  <NFTCard />
                </Grid>
                <Grid md={4} lg={4} xs={12}>
                  <NFTCard />
                </Grid>
                <Grid md={4} lg={4} xs={12}>
                  <NFTCard />
                </Grid>
              </Grid.Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Badges;
