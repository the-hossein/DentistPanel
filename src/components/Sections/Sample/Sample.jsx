import Style from "./Sample.module.css";
import React, { useEffect, useState } from "react";
import { PersionDate } from "../../../tools/Tools";
import { CallApi } from "../../../tools/CallApi/CallApi";
import { BaseUrl, GetAllSample } from "../../../tools/Url";
import Loader from "../../../tools/loader/Loader";
import { Link } from "react-router-dom";
const Sample = () => {
  const [preload, setpreload] = useState(true);
  const [samplesData, setsamplesData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const Data = await GetSampleData();

      setsamplesData(Data);
    };
    getData();
  }, []);
  useEffect(() => {
    console.log(samplesData);
    setpreload(false);
  }, [samplesData]);

  const GetSampleData = async () => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});
    const result = await CallApi(BaseUrl + GetAllSample, raw, myHeaders, "GET");

    if (result[1] === 200) {
      return result[0].data;
    }
  };
  return (
    <>
      {preload === true ? (
        <Loader />
      ) : (
        <div className="mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed rtl">
                    <thead className="bg-gray-100 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase"
                        >
                          تیتر نمونه کار
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase "
                        >
                        تاریخ آخرین بروزرسانی
                        </th>

                        <th scope="col" className="p-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {samplesData.map((item) => (
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-200">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                            {item.title}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                            {PersionDate(item.createdDatetime)}
                          </td>

                          <td className="py-4 px-6 text-sm font-medium text-left whitespace-nowrap">
                            <Link
                              to={`/panel/sample/edit?id=${item.id}`}
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              ویرایش
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Link to="/panel/sample/add" className="primary-btn">افزودن نمونه کار</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sample;
