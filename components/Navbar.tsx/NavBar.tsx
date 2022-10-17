import { Navbar, Text, Image } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const NavBar = ({ children, active }: any) => {
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Image src="./Logo.png" />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="success"
          hideIn="xs"
          variant="highlight"
        >
          <Link href="/">
            <Navbar.Link
              isActive={active == "home" ? true : false}
              css={{ cursor: "pointer" }}
            >
              DAO
            </Navbar.Link>
          </Link>
          <Link href="/badges">
            <Navbar.Link
              isActive={active == "badges" ? true : false}
              css={{ cursor: "pointer" }}
            >
              Badges
            </Navbar.Link>
          </Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "15%",
              jc: "flex-end",
            },
          }}
        >
          <ConnectButton />
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          <Navbar.CollapseItem activeColor="warning">
            <Link color="inherit" href="/">
              DAO
            </Link>
            <Link color="inherit" href="/badges">
              Badges
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
