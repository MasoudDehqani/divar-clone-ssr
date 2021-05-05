import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDivarContext } from "../context/DivarContextProvider";
import { Row, Col } from "antd";
import Widget from "./Widget";
import { useRouter } from "next/router";

interface DataType {
  widget_list: string[];
  seo_details: string[];
}

const Widgets = ({ data }: { data: any }) => {

  const [widgetsData, setWidgetsData] = useState(data);
  const [nextPageNumber, setNextPageNumber] = useState(2);

  useEffect(() => {
    setWidgetsData(data);
  }, [data]);

  const { baseUrl } = useDivarContext();
  const { asPath } = useRouter();

  let observer = useRef(null);

  const lastWidgetRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && widgetsData.seo_details?.next) {
          const getData = async () => {
            const nextPageUrl = `${baseUrl}/${asPath.slice(3)}${asPath.includes("?") ? "&" : "?"}${`page=${nextPageNumber}`}`
            const res = await fetch(nextPageUrl);
            const response = await res.json();
            
            setWidgetsData((prev) => ({
              ...prev,
              widget_list: prev.widget_list.concat(response.widget_list),
            }));
            setNextPageNumber(nextPageNumber + 1);
          };
          getData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [widgetsData.seo_details.next, baseUrl, asPath, nextPageNumber]
  );

  return (
    <Row
      gutter={[16, 16]}
      style={{
        marginTop: "20px",
        marginRight: "260px",
      }}
    >
      {widgetsData.widget_list?.map((widget: any, index: number) => {
        if (widgetsData.widget_list.length === index + 1) {
          return (
            <Col key={index}>
              <Widget ref={lastWidgetRef} widgetData={widget.data} />
            </Col>
          );
        }
        return (
          <Col key={index}>
            <Widget widgetData={widget.data} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Widgets;
