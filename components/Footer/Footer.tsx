"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';


// http://localhost:3000/ru/authorization/

const Footer = () => {
    const t = useTranslations("Index");

    return (
        <>
            <div className="footer-background">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-left">
                            <div className="footer-icon">
                                <a href="https://www.instagram.com/beyim.ai/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="footer-img"
                                        src="/static/icons/facebook.svg"
                                        alt="Facebook"
                                        width={23}
                                        height={23}
                                    />
                                </a>
                                <a href="https://www.instagram.com/beyim.ai/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="footer-img"
                                        src="/static/icons/instagram.svg"
                                        alt="Instagram"
                                        width={23}
                                        height={23}
                                    />
                                </a>
                                <a href="https://www.linkedin.com/company/beyim1/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="footer-img"
                                        src="/static/icons/linked-in.svg"
                                        alt="LinkedIn"
                                        width={23}
                                        height={23}
                                    />
                                </a>
                            </div>
                            <p className="footer-p">Beyim Tech © 2023 </p>
                        </div>
                        <div className="footer-right">
                            <p className="footer-p">{t("footer2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;