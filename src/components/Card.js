import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Card() {
  return (
    <div className="h-36 bg-white-500 shadow-lg w-80 rounded mx-auto my-4 p-3 text-xs font-thin border-slate-400">
      <div className="pb-1.5">
        <AccountBoxIcon style={{ fontSize: 39 }} />
        <span className="font-bold"> Max Susmann </span>
      </div>
      <div className="pb-1">Münchberg - 07:00 &gt; Bayreuth - 07:37</div>

      <div className="pb-1">
        <AccessTimeIcon style={{ fontSize: 15 }} /> 26min.{" "}
        <CalendarTodayIcon style={{ fontSize: 15 }} /> 24.01.2023
      </div>

      <div>
        <AirlineSeatReclineNormalIcon style={{ fontSize: 16 }} /> 3/4{" "}
        <button className="ml-48 p-1 font-semibold bg-teal-600 text-white rounded text-l">
          Anfragen
        </button>
      </div>
    </div>
  );
}

export default Card;
