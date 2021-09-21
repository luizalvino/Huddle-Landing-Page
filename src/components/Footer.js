import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" width="240" height="39" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              dolores debitis maiores nulla quod velit, amet omnis dolor
              reiciendis, mollitia accusamus impedit numquam architecto sapiente
              beatae odio. Exercitationem, accusamus neque.
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}
