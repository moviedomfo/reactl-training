import React from "react";
import Charts from "../components/chart/chart";
import  './Bancks.css';
import FeatureInfo from "../components/FeatureInfo/FeatureInfo";
import WidgetSmall from "../components/widget/widgetSmall";
import WidgetLarge from "../components/widget/widgetLarge";

const Bancks = () => {
  return (
    <div className="banck">
    s
      
        <h3>Bancos </h3>
        <FeatureInfo/>
        <Charts/>
        <div className="banckWidget">

          <WidgetSmall/>
          <WidgetLarge/>
        </div>
      
    </div>
  );
};
export default Bancks;
