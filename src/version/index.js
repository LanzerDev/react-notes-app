import React from "react";
import json from "../../package.json"
import "./version.css"
function AppVersion(){
    const version = json.version;
    return (
        <p className="version">Version {version}</p>
    )
}

export { AppVersion }