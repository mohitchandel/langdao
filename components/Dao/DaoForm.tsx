import {
  Button,
  Grid,
  Input,
  Text,
  Textarea,
  Radio,
} from "@nextui-org/react";
export const DaoForm = () => {
  return (
    <>
      <form>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} justify="center">
            <Text
              css={{
                textGradient: "45deg, $blue600 -20%, $green600 50%",
              }}
              h2
            >
              Make Proposal
            </Text>
          </Grid>
          <Grid xs={12} justify="center">
            <Input css={{ w: "60%" }} size="lg" placeholder="Proposal Title" />
          </Grid>
          <Grid xs={12} justify="center">
            <Textarea
              css={{ w: "60%" }}
              rows={10}
              size="lg"
              placeholder="Enter your amazing suggestion."
            />
          </Grid>
          <Grid xs={12} justify="center">
            <Radio.Group
              orientation="horizontal"
              defaultValue="solidity"
            >
              <Radio value="solidity" color="primary">
                Solidity
              </Radio>
              <Radio value="go" color="primary">
                Go
              </Radio>
              <Radio value="rust" color="primary">
                Rust
              </Radio>
            </Radio.Group>
          </Grid>
          <Grid xs={12} justify="center">
            <Button css={{w: "60%"}} color={"primary"}>Submit</Button>
          </Grid>
        </Grid.Container>
      </form>
    </>
  );
};
