// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cWxJnkpDqV5Dir3LuN8T7J
// Component: XlITRR0mG4ll
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Divider from "../../Divider"; // plasmic-import: FBamjaEXP92d/component
import ValueProp from "../../ValueProp"; // plasmic-import: ea8aTU-UwGZP/component
import Button from "../../Button"; // plasmic-import: qSeAbp0kIsSm/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_designs_that_adapt.module.css"; // plasmic-import: cWxJnkpDqV5Dir3LuN8T7J/projectcss
import * as sty from "./PlasmicPriceCard.module.css"; // plasmic-import: XlITRR0mG4ll/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 1dHhpVVNIjoe/icon

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders");

export const PlasmicPriceCard__ArgProps = new Array(
  "label",
  "dollars",
  "description",
  "action"
);

function PlasmicPriceCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__borders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),

          [sty.root__borders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),

          [sty.root__primary]: hasVariant(variants, "primary", "primary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__r59N
        )}
      >
        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__fllbU
          )}
        >
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__uaoPg
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__biGo
          )}
        >
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__ciq5P
            )}
          >
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text__cWFc
              )}
            >
              {"$"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__bJbsy
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text__hjUsq
            )}
          >
            {"/month"}
          </div>
        </p.Stack>
      </p.Stack>

      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__wTjN
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__d3YJz
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__gRoQh)}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__ayyk9
                      )}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__hg2Uw)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__tCdMj
                      )}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),

            value: args.description
          })}
        </p.Stack>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={hasVariant(variants, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={"extraSmallShadow"}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__rdNap
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPriceCard__ArgProps,
      internalVariantPropNames: PlasmicPriceCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
