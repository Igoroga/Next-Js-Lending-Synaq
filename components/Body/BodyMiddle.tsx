"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';
import Footer from "../Footer/Footer";


// http://localhost:3000/ru/authorization/

const LandingHeader = () => {
    const t = useTranslations("Index");
    const pathname = usePathname();
    const isKazakh = pathname === "/";
    const isEnglish = pathname === "/en";
    const isRussian = pathname === "/ru";

    return (
        <>
             <div className={`middle-background ${isRussian ? 'middle-background-ru' : ''} ${isKazakh ? 'middle-background-kz' : ''} ${isEnglish ? 'middle-background-en' : ''}`}>
                <div className="middle-container">

                    <h1 className="middle-title"><span className="middle-h1">{t("h1-1")}</span><span className="middle-h1">{t("h1-2")}</span><span className="middle-h1">{t("h1-3")}</span></h1>                    

                    <p className="middle-p">{t("complex")}</p>
                    <a href="https://forms.gle/TjqvhLgActJytshFA" target="_blank">
                        <button className="middle-button">{t("button")}</button>
                    </a>
                </div>
                
            </div>
        </>
    );
};

export default LandingHeader;