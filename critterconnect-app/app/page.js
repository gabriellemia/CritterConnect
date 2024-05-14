import Image from "next/image";
import logo from "/images/CritterConnect-logo.svg";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <h1>Hello page!</h1>
        <Image src={logo} alt="logo"></Image>
      </div>
    </>
  );
}
