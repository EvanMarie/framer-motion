import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Framer Motion Experiments" },
    { name: "Evan Marie and Framer Motion!", content: "This will be fun!" },
  ];
};

export default function Index() {
  return <div>Howdy!</div>;
}
