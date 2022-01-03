import React from "react";
import  './Bancks.css';
import Charts from '../../components/chart/chart';
import FeatureInfo from "../../components/FeatureInfo/FeatureInfo";
import WidgetSmall from "../../components/widget/widgetSmall";
import WidgetLarge from "../../components/widget/widgetLarge";

const Bancks = () => {
  return (
    <div className="pageContent">
        <h3 className="pageTitle">Bancos </h3>
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
