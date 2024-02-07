import React, {
  ComponentProps,
  Fragment
} from "react";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "../constants";
import { frameworkOptions } from "../types";
import { Icons, TooltipLinkList } from "@storybook/components";
import { styled } from "@storybook/theming";
import { Radio } from "./Radio";

type TooltipProps = {
  selected: frameworkOptions;
  setFramework: (name: string, srcPath: string, forcedUpdate?: boolean) => void;
  resetFramework: () => void;
  options: frameworkOptions[];
  clearable?: boolean;
};
type Link = ComponentProps<typeof TooltipLinkList>['links'][number];

export const Tooltip = (props: TooltipProps) => {
  const {
    selected, setFramework, resetFramework, options, clearable = true,
  } = props;

  const links: Link[] = options.map(({id, title, srcPath, description}) => ({
    id,
    key: id,
    title: title ?? id,
    srcPath: srcPath,
    active: false,
    onClick: () => { setFramework(id, srcPath); },
    center: description ? (
      <Container>
        <div title={description}>
          <Icons icon={'info'} height={12} />
        </div>
      </Container>
    ) : null,
    right: (
      <Radio
        value={id}
        checked={id === selected.id}
        setValue={(value) => {
          setFramework(id, srcPath);
        }}
      />
    ),
  }));

  if (clearable) {
    const id = '__clearable__link__';
    links.unshift({
      id,
      key: id,
      loading: false,
      title: 'Reset CSS Framework',
      active: false,
      onClick: resetFramework,
      right: <Icons icon="cross" />
    });
  }

  return <TooltipLinkList links={links} />;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
