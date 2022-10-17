import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const NFTCard = () => {
  return (
    <>
      <Card css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="./NFTs/member.png"
            width="100"
            height="100"
            objectFit="contain"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                Get Your Badge For 10 MATIC
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button auto color={"primary"}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Mint
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
