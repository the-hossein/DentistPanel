import React from 'react'
import { ReserveTableEl } from './StyleReserveTable'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PersianNumber , PersionDate, SetDate } from '../../../Tools/Tools';
const ReserveTable = () => {
    return (
        <ReserveTableEl>
            <table>
                <thead>
                    <tr>
                        
                        <th>نام</th>
                        <th>شماره نوبت</th>
                        <th>تاریخ</th>
                        <th>نوع سرویس</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                 <AccountCircleIcon/>
                                <p>حسین خسروی</p>
                            </div>
                        </td>
                        <td>{PersianNumber("12")}</td>
                        <td>{SetDate(1657977393)}</td>
                        <td>اندو</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                 <AccountCircleIcon/>
                                <p>حسین خسروی</p>
                            </div>
                        </td>
                        <td>{PersianNumber("12")}</td>
                        <td>{SetDate(1657977393)}</td>
                        <td>اندو</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                 <AccountCircleIcon/>
                                <p>حسین خسروی</p>
                            </div>
                        </td>
                        <td>{PersianNumber("12")}</td>
                        <td>{SetDate(1657977393)}</td>
                        <td>اندو</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                 <AccountCircleIcon/>
                                <p>حسین خسروی</p>
                            </div>
                        </td>
                        <td>{PersianNumber("12")}</td>
                        <td>{SetDate(1657977393)}</td>
                        <td>اندو</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                 <AccountCircleIcon/>
                                <p>حسین خسروی</p>
                            </div>
                        </td>
                        <td>{PersianNumber("12")}</td>
                        <td>{SetDate(1657977393)}</td>
                        <td>ایمپلنت</td>
                    </tr>
                </tbody>
            </table>
        </ReserveTableEl>
    )
}

export default ReserveTable