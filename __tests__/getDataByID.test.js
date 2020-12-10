import { getDataByIDFromApi } from "../GetDataFromApi/GetDataFromApi"
import 'isomorphic-fetch';

it("Returns data infos", async () => {
    const data = await getDataByIDFromApi(1);
    expect(data).toEqual([{"dataLuminosity":69,"dataHumidity":42,"dataTemperature":7,"timeStamp":"2020-11-27T11:08:43.000Z"}]);
});