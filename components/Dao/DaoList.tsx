import { useEffect, useState } from "react";
import {
  Collapse,
  Text,
  Grid,
  Radio,
  Spacer,
  Button,
  Pagination,
  Checkbox
} from "@nextui-org/react";

export const DaoList = () => {
  const [checked, setChecked] = useState<string>("");
  const [currentLang, setCurrentLang] = useState<string>('all');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [data, setData] = useState<Array<number>>([]);

  const pageNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const onPageChange = (pg: number): void => {
    const currentData = pageNum.slice(5 * pg - 5, 5 * pg);
    setData(currentData);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(pageNum.length / 5));
    const currentData = pageNum.slice(0, 5);
    setData(currentData);
  }, []);

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid md={12} justify={"center"}>
          <Button.Group color="error">
            <Button onPress={() => setCurrentLang("all")}>All</Button>
            <Button onPress={() => setCurrentLang("solidity")}>Solidity</Button>
            <Button onPress={() => setCurrentLang("go")}>Go</Button>
            <Button onPress={() => setCurrentLang("rust")}>Rust</Button>
          </Button.Group>
        </Grid>
        <Grid md={12} justify={"center"}>
          <Checkbox defaultSelected={false}>Show Completed</Checkbox>
        </Grid>
        <Grid md={12} justify={"center"}>
          <Collapse.Group splitted>
            {data.map((item, i) => {
              return (
                <Collapse
                  key={i}
                  bordered
                  title={`${item}`}
                  subtitle={"Solidity"}
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Radio.Group
                    css={{ ml: "10px" }}
                    label="Options"
                    onChange={setChecked}
                    defaultValue="agree"
                  >
                    <Radio value="agree" color="success">
                      Agree
                    </Radio>
                    <Radio value="disagree" color="error">
                      Disagree
                    </Radio>
                    <Radio value="abstain" color="warning">
                      Abstain
                    </Radio>
                  </Radio.Group>
                  <Spacer y={1} />
                  <Button shadow color={"success"}>
                    Vote
                  </Button>
                  <Text>You are {checked} with the proposal</Text>
                </Collapse>
              );
            })}
          </Collapse.Group>
        </Grid>
        <Grid>
          <Pagination
            color="success"
            total={totalPages}
            initialPage={1}
            onChange={(e) => onPageChange(e)}
          />
        </Grid>
      </Grid.Container>
    </>
  );
};
