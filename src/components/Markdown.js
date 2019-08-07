import React from "react";
import PropTypes from "prop-types";

import { ContentEditStyle, ContentStyle } from "../styles/ContentStyle";

export const MarkdownInput = props => {
  return (
    <ContentEditStyle
      onChange={props.onChange}
      value={props.value}
      name="content"
      id="content"
    />
  );
};

MarkdownInput.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export const MarkdownPreview = props => {
  return (
    <ContentStyle>
      <div dangerouslySetInnerHTML={props.value} />
    </ContentStyle>
  );
};

MarkdownPreview.propTypes = {
  id: PropTypes.string,
  value: PropTypes.object
};
