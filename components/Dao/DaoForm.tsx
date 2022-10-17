import { Button, Grid, Input, Text, Textarea } from "@nextui-org/react";

export const DaoForm = () => {
  return (
    <>
      <form>
        <Grid.Container gap={2} justify="center" >
          <Grid xs={12} justify="center">
            <Input placeholder="NextUI" />
          </Grid>
          <Grid xs={12} justify="center">
            <Textarea
              placeholder="Enter your amazing ideas."
            />
          </Grid>
          <Grid xs={12} justify="center">
            <Button>Submit</Button>
          </Grid>
        </Grid.Container>
      </form>
    </>
  );
};
