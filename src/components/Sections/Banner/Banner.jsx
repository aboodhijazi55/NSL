import React from 'react'
import "./Banner.css"
import Video from './Video'
import { useLanguage } from '@/contexts/LanguageContext';
function Banner() {
    const { t } = useLanguage();
    return <>
        <Video />
        <div className="main-banner" id='home'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="top-text header-text">
                            <h1>NSL</h1>
                            <h6>{t('bannerText')}</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Banner