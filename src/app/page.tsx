import Image from "next/image";
import { Fragment } from "react";
import Menu from "./menu/page";
import Pen from "./canvas/pen/page";


export default function Home() {
  return (
   <Fragment>
      <Menu/>
      <Pen/>
   </Fragment>
  );
}
