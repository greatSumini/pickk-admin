import { Button } from "antd";

import PropTypes from "prop-types";

export type AntdButtonProps = PropTypes.InferProps<Button["props"]>;

export default interface ButtonProps
  extends PropTypes.InferProps<Button["props"]> {
  type?:
    | "default"
    | "link"
    | "ghost"
    | "primary"
    | "dashed"
    | "danger"
    | "only-content";
  size?: "default" | "small" | "large" | "xlarge";
}
