import styled from 'styled-components';

import {
  maxScreenWidth,
  tertiaryColor,
  baseColor,
  primaryColor,
  secondaryFontColor,
} from 'variables';

const styledFooter = styled.footer.attrs(() => ({
  className: 'footer',
}))`
  position: relative;
  bottom: 0px;
  width: 100%;
  max-width: ${maxScreenWidth};
  padding: 56px;
  background: ${baseColor};
  display: flex;
  justify-content: center;
  border-top: 2px solid ${tertiaryColor};
  color: ${primaryColor};

  .left-side > * {
    margin-bottom: 16px;
  }

  .right-side > * {
    margin-bottom: 16px;
  }

  .left-side, .right-side {
    display: flex;
    flex-direction: column;
  }

  .left-side {
    align-items: flex-start;

    h2 {
      font-size: 20px;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.83px;
    }

    li {
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .phones {
      display: flex;
      font-size: 16px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 1.33px;

      & > * {
        margin-right: 8px;
      }
    }
  }

  .right-side {
    align-items: flex-end;

    h3 {
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.58px;
      text-transform: uppercase;
    }

    .social-networks {
      width: 200px;
      display: flex;
      justify-content: space-between;
      aliign-items: center;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 1px;
      text-align: right;
      text-transform: uppercase;
    }
  }

  .credits {
    width: 100%;
    padding: 8px;
    text-align: center;

    a {
      color: ${secondaryFontColor};
    }
  }

  @media (max-width: 768px) {
    padding: 32px;

    .left-side {
      margin-bottom: 56px;
    }
  }
`;

export default styledFooter;
