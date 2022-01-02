import React from "react";
import "./FeatureInfo.css";
import { BiTrendingUp ,BiTrendingDown} from "react-icons/bi";

export default function FeatureInfo() {
  return (
    <div className="featureInfo">
      <div className="featureInfoItem">
        <div className="featureInfoTittle">Moom </div>
        <div className="featureInfoBody">
          <div className="featureMoney">$43.786</div>
          <div className="featureMoneyRate">
            {" "}
            -23.6 <BiTrendingUp className="featureIcon"></BiTrendingUp>
          </div>
          <i class="bi bi-graph-up-arrow"></i>
        </div>
        <div className="featureSub">Compare to last month</div>
      </div>

      <div className="featureInfoItem">
        <div className="featureInfoTittle">Ethereum</div>
        <div className="featureInfoBody">
          <div className="featureMoney">$2323.786</div>
          <div className="featureMoneyRate">
            {" "}
            -3.6 <BiTrendingDown className="featureIcon negative"></BiTrendingDown>
          </div>
          <i class="bi bi-graph-up-arrow"></i>
        </div>
        <div className="featureSub">Compare to last month</div>
      </div>
    </div>
  );
}
