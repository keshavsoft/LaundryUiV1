import urlJson from '../../../../url.json' with {type: 'json'};
import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalCommonConfig = CommonConfig.route;
    let jVarLocaltableName = urlJson.tableName;
    let jVarLocalGetEndPoint = urlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalCommonConfig}/${jVarLocaltableName}/${jVarLocalGetEndPoint}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

