
import React, { createContext, useEffect, useState } from 'react';

import api from '../api/api';
// import { Charges } from '../utility/Charges'






let tempUserInfo = []
let msgBetweenFn = false

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {



    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isReguler, setisReguler] = useState(false);
    const [isSplashLoading, setSplashLoading] = useState(false);
    const [name, setName] = useState()
    const [pmisId, setPmisId] = useState();
    const [isLogged, setisLogged] = useState(false)
    const [isPreloaing, setisPreloaing] = useState(false);
    const [photo, setphoto] = useState()
    const [presentDesig, setpresentDesig] = useState()
    const [presentOffice, setpresentOffice] = useState()
    const [presentPost, setpresentPost] = useState()
    const [presentCharge, setpresentCharge] = useState()
    const [officeAddres, setofficeAddres] = useState()
    const [presentOfficeCode, setpresentOfficeCode] = useState()
    const [postGrade, setpostGrade] = useState();
    const [designationContext, setDesignationContext] = useState([]);
    const [officelevel1code, setofficelevel1code] = useState();
    const [adminLevel, setadminLevel] = useState();
    const [canCallBulk, setcanCallBulk] = useState();
    const [canAccessSeniority, setcanAccessSeniority] = useState();

    const [isMenuOpen, setisMenuOpen] = useState(true);


    ////////////////////////// General ////////////////////////
    const [generalPresentOffice, setgeneralPresentOffice] = useState()
    const [generalPresentPost, setgeneralPresentPost] = useState()

    const [isAdmin, setisAdmin] = useState()




    const register = (name, email, password) => {
        setIsLoading(true);


        setIsLoading(false);
    };












    const userLogin = async (id, password) => {

        // setIsLoading(true);


        // try {
        //     const { data: response } = await api.get("userinfo", {
        //         params: {
        //             id: id,
        //         }
        //     });


        //     const tempData = response.rows

        //     console.log(tempData);

        //     if (response.rows.length != 0) {

        //         //console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::   ' + tempData[0].id, tempData[0].password);
        //         console.log('fff');
        //         setPmisId(tempData[0].id)
        //         setName(tempData[0].name)
        //         setphoto("data:image/tiff;base64," + tempData[0].photo)
        //         setpresentDesig(tempData[0].desig)
        //         setpresentOffice(tempData[0].officeName)
        //         setpresentPost(tempData[0].post)
        //         setpresentCharge(Charges(tempData[0].charge))
        //         setofficeAddres(tempData[0].officeAddress)

        //         console.log(pmisId, name, presentDesig, presentPost, presentOffice, officeAddres, photo);

        //     }





        // } catch (error) {

        // }

        // console.log(id, password);
        // setisLogged(true);

        // localStorage.setItem('isLogged', true)

        // var isLoggedin = localStorage.getItem('isLogged')
        // console.log(JSON.parse(isLoggedin));

        // setIsLoading(false);






    };

    const logout = () => {

        // localStorage.clear();

        // localStorage.removeItem('name');
        // localStorage.removeItem('presentPost');
        // localStorage.removeItem('presentOffice');
        // localStorage.removeItem('photo');
        // localStorage.removeItem('isLogged');
        // localStorage.removeItem('sideBarLength');
        // localStorage.removeItem('presentCharge');
        //sideBarLength
        // setisLogged(false)

    };

    const isLoggedIn = async () => {
        // const isLogged = localStorage.getItem('isLogged')
        // console.log(JSON.parse(isLogged));
        // setisLogged(JSON.parse(isLogged))
    };

    useEffect(() => {
        // isLoggedIn();
    }, []);

    return (
        <>
            <AuthContext.Provider
                value={{
                    isLoading,
                    userInfo, setUserInfo,
                    isSplashLoading, setSplashLoading,
                    register,
                    userLogin,
                    logout,
                    name,
                    isLogged, setisLogged,
                    isReguler, setisReguler,
                    name, setName,
                    pmisId, setPmisId,
                    photo, setphoto,
                    presentDesig, setpresentDesig,
                    presentOffice, setpresentOffice,
                    presentPost, setpresentPost,
                    presentCharge, setpresentCharge,
                    officeAddres, setofficeAddres,
                    presentOfficeCode, setpresentOfficeCode,
                    generalPresentOffice, setgeneralPresentOffice,
                    generalPresentPost, setgeneralPresentPost,
                    isAdmin, setisAdmin,
                    designationContext, setDesignationContext,
                    postGrade, setpostGrade,
                    officelevel1code, setofficelevel1code,
                    adminLevel, setadminLevel,
                    canCallBulk, setcanCallBulk,
                    canAccessSeniority, setcanAccessSeniority,
                    isPreloaing, setisPreloaing,
                    isMenuOpen, setisMenuOpen
                }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
