import { Content } from "../content/Content";
import { SideBar } from "../side-bar/SideBar";
import "./style.scss";
export function LayoutAdmin({ content }) {
  return <div className="container-layout-admin">
    <SideBar />
    <Content content={content} />
  </div>
}