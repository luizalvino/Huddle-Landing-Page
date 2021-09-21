import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo width="240" height="39" src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#D92691" color="#fff">
              <span>Get Started For Free</span>
            </Button>
          </div>

          <Image
            width="375"
            height="375"
            src="./images/illustration-mockups.svg"
            alt=""
          />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
