import React, { Fragment, memo, useState } from "react";
import { useGlobals, useParameter } from "@storybook/manager-api";
import { Icons, IconButton, WithTooltip } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";
import { frameworkOptions } from "./types";
import { Tooltip } from "./components/Tooltip";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const [expanded, setExpanded] = useState(false);

  const selectedFramework: frameworkOptions = globals[PARAM_KEY];
  const parameters = useParameter(PARAM_KEY, {
    frameworks: [],
  });
  const cssFrameworks: frameworkOptions[] = Array.isArray(parameters.frameworks)
    ? parameters.frameworks : [];

  return (
    <Fragment>
      <WithTooltip
        tooltip={
          <Tooltip
            selected={selectedFramework}
            options={cssFrameworks}
            setFramework={(name: string, srcPath: string, forceReRender: boolean = true) => {
              updateGlobals({
                [PARAM_KEY]: {
                  id: name,
                  srcPath: srcPath,
                  woReRender: !forceReRender,
                },
              });
            }}
            resetFramework={(forceReRender: boolean = true) => {
              updateGlobals({
                [PARAM_KEY]: false,
              });
            }}
          />
        }
      >
        <IconButton
          key={TOOL_ID}
          active={selectedFramework && selectedFramework.id !== ''}
          title="Switch CSS Framework"
          onClick={() => setExpanded(true)}
        >
          <Icons icon="document" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
});
