import React, { useContext } from "react";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { List } from "antd"

const ReturnToAll = () => {

  const { query } = useRouter()
  const { category, ...queryWithoutCategory } = query

  return (
    <Link href={{ pathname: "/s/[city]" , query: {...queryWithoutCategory }}}>
      <a>
        <List.Item>
          <div style={{display: "flex", width: "100%"}}>
            <ArrowRightOutlined />
            <span style={{marginRight: '10px'}}>همه آگهی‌ها</span>
          </div>
        </List.Item>
      </a>
    </Link>
  );
};

export default ReturnToAll;
