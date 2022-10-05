import styled from "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
  type themeType = typeof theme;
  interface Theme extends themeType {}
}
