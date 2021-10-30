import React from 'react';
import {RiArrowRightSLine} from 'react-icons/ri'

const FooterLink = ({text})=>{
    return (<a href="https://iazadur.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 text-sm">
    <RiArrowRightSLine/> {text}
</a>)
}

const FooterTitle = ({text}) => {
    return(
        <h3 className="font-base font-bold text-indigo-900 ">{text}</h3>
    )
}

const Footer = () => {
    return (
        <>
            <div className="pb-20 pt-52 bg-gray-100">
                <div className="container mx-auto">

                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-2 space-y-3
                        space-x-4 flex flex-col divide-y">
                            <h3 className="text-xl font-bold text-indigo-900">MOZAFFAR GARDEN AND RESORT</h3>
                            <p className="text-sm font-semibold text-gray-600">Kharibila, Satkhira -9400</p>
                            
                            <a className="text-sm font-semibold text-gray-600"  href="tel:+8801991666031">
                            Mobile:+88 01719769009, 01701003010
                            </a>
                            <a className="text-sm font-semibold text-gray-600" href="mailto:iamazadur@gmail.com">Emai:info@mozaffar-resort.com</a>
                            <a className="text-sm font-semibold text-gray-600"  href="https://iazadur.netlify.app/" target="_blank" rel="noopener noreferrer">
                            www.mozaffarresort.com
                            </a>

                        </div>
                        <div className="space-y-3
                        space-x-4 flex flex-col divide-y">
                            
                             <FooterTitle text="OUR AGENCY" />
                            
                            <FooterLink text="service" />
                            <FooterLink text="Insurancee" />
                            <FooterLink text="Agency" />
                            <FooterLink text="Tourism" />
                            <FooterLink text="Payment" />
                        </div>
                        <div className="space-y-3
                        space-x-4 flex flex-col divide-y">
                            
                            <FooterTitle text="PARTNERS" />

                            <FooterLink text="Booking" />
                            <FooterLink text="RentalCar" />
                            <FooterLink text="HostelWorld" />
                            <FooterLink text="Trivago" />
                            <FooterLink text="TripAdvisor" />
                        </div>
                        <div className="space-y-3
                        space-x-4 flex flex-col divide-y">
                            <FooterTitle text="LAST MINUTE" />
                            <FooterLink text="London" />
                            <FooterLink text="California" />
                            <FooterLink text="Indonesia" />
                            <FooterLink text="Europe" />
                            <FooterLink text="Oceania" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;